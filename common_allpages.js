var tooltipEl = document.getElementsByClassName("tooltip_body")[0]
var infoEl = document.getElementsByClassName("info_body")[0]
var bodyEl = document.body

// is this the root folder?
if ((window.location.href.includes("/3/")) || (window.location.href.includes("/2/")) || (window.location.href.includes("/1/"))) {
    var url_start = "../"
    var is_root = false
} else {
    var url_start = ""
    var is_root = true
}
// is this the wayback machine?
if (window.location.href.includes("web.archive.org")) {
    var wayback = true
    var wb_timestamp = Number(window.location.href.split("/web/")[1].split("/")[0])
} else {
    var wayback = false
    var wb_timestamp = 0
}

// cookies
// from https://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
        c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
        }
    }
    if (!wayback) { // suppress warnings on the wayback machine
        console.warn("Invalid or unset cookie: " + cname);
    }
    return "";
}
function cookieExists(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
        c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
        return true;
        }
    }
    return false;
}

if (!wayback) { // don't bother with setting cookies on the wayback machine
    for (i in settingslist) {
        for (j in settingslist[i][1]) {
            if (getCookie("set_" + settingslist[i][1][j][0]) == "") {
            setCookie("set_" + settingslist[i][1][j][0], settingslist[i][1][j][4], 365)
            }
        }
    }
}

// functions for the translation system
var langStrings;
var enStrings;
var langLoaded = false;
var enLoaded = false
fetch(url_start + "lang/en_us.json").then(response => response.json()).then(json => enStrings = json).then(function(){enLoaded = true});
fetch(url_start + "lang/"+ getCookie("set_lang") +".json").then(response => response.json()).then(json => langStrings = json).then(function(){langLoaded = true});

var loop_until_char = function(string, char) {
    var i = 0
    while (i < string.length) {
        if (string[i] == char) {break}
        i++
    }
    return i
}

var getTranslatedString = function(id, nbt) {
    //console.log("=> " + id)
    var preparse;
    var done = false;
    var outCont = ""
    var semiCont = ""
    var j = 0
    var k = 0
    if (id[0] == ":") {
        preparse = id.slice(1);
    } else {
        if (id in langStrings) {
            preparse = langStrings[id];
        } else if (id in enStrings) {
            preparse = enStrings[id];
        } else {
            return id;
        }
    }
    while (!done) {
        j = loop_until_char(preparse, "{")
        outCont += preparse.slice(0, j)
        if (j == preparse.length) {
            done = true
            continue
        }
        preparse = preparse.slice(j+1)
        preparse = getTranslatedString(":"+preparse, nbt)
        k = loop_until_char(preparse, "}")
        semiCont = preparse.slice(0, k)
        if (semiCont[0] == "-") {
            outCont += getTranslatedString(semiCont.slice(1), nbt);
        } else {
            if (typeof nbt !== 'undefined' && semiCont in nbt) {
                outCont += nbt[semiCont]
            } else {
                outCont += "{" + semiCont + "}"
            }
        }
        preparse = preparse.slice(k+1);
    }
    //console.log("<= " + outCont)
    return outCont;
}

var waitForLang = function(func) {
    if (langLoaded && enLoaded) {
        func()
    } else {
        setTimeout(waitForLang, 50, func)
    }
}

// splashes
var splashFunc = function() {
    var splashEl = document.getElementById("splash_span")
    var splashes = splashesList["always"]; // constant splashes
    var cdate = new Date();
    if (Math.floor(Math.random() * 5) != 4) { // weekday splashes
        splashes = splashes.concat(splashesList[["sunday","monday","tuesday","wednesday","thursday","friday","saturday"][cdate.getDay()]]);
        console.log("[Splashes] Added weekday splashes");
    }
    if (Math.floor(Math.random() * 10) == 9) { // rare splashes
        splashes = splashes.concat(splashesList["rare"]);
        console.log("[Splashes] Added rare splashes");
    }
    if (((cdate.getMonth() == 11) && (cdate.getDate() == 31)) || ((cdate.getMonth() == 0) && (cdate.getDate() == 1)) || ((cdate.getMonth() == 0) && (cdate.getDate() == 2))) { // new years splashes
        splashes = splashes.concat(splashesList["new years"])
        console.log("[Splashes] Added New Year's splashes");
    }
    if (((cdate.getMonth() == 1) && (cdate.getDate() == 13)) || ((cdate.getMonth() == 1) && (cdate.getDate() == 14)) || ((cdate.getMonth() == 1) && (cdate.getDate() == 15))) { // valentines splashes
        splashes = splashes.concat(splashesList["valentines"])
        console.log("[Splashes] Added Valentine's Day splashes");
    }
    // easter splashes?
    if (((cdate.getMonth() == 5) && (cdate.getDate() == 23))) { // birthday splashes
        splashes = splashes.concat(splashesList["birthday"])
        console.log("[Splashes] Added birthday splashes");
    }
    if (((cdate.getMonth() == 9) && (cdate.getDate() == 30)) || ((cdate.getMonth() == 9) && (cdate.getDate() == 31)) || ((cdate.getMonth() == 10) && (cdate.getDate() == 1))) { // halloween splashes
        splashes = splashes.concat(splashesList["halloween"])
        console.log("[Splashes] Added Halloween splashes");
    }
    if (((cdate.getMonth() == 11) && (21 <= cdate.getDate() <= 27) && (cdate.getDay() == 3)) || ((cdate.getMonth() == 11) && (22 <= cdate.getDate() <= 28) && (cdate.getDay() == 4)) || ((cdate.getMonth() == 11) && (23 <= cdate.getDate() <= 29) && (cdate.getDay() == 5))) {
        // thanksgiving splashes
        splashes = splashes.concat(splashesList["thanksgiving"])
        console.log("[Splashes] Added Thanksgiving splashes");
    }
    if (((cdate.getMonth() == 11) && (cdate.getDate() == 24)) || ((cdate.getMonth() == 11) && (cdate.getDate() == 25)) || ((cdate.getMonth() == 11) && (cdate.getDate() == 26))) { // christmas splashes
        splashes = splashes.concat(splashesList["christmas"])
        console.log("[Splashes] Added Christmas splashes");
    }
    if (Math.floor(Math.random() * 3) != 2) { // "also try" splashes
        splashes = splashes.concat(splashesList["also try"])
        console.log("[Splashes] Added \"Also try...\" splashes");
    }
    if (Math.floor(Math.random() * 3) != 2) { // "ideas" splashes
        splashes = splashes.concat(splashesList["ideas"])
        console.log("[Splashes] Added \"If you need ideas...\" splashes");
    }
    if (((cdate.getMonth() == 3) && (cdate.getDate() == 1) && (cdate.getHours() >= 18))) { // april fools splashes, replace all other splashes
        splashes = splashesList["april fools"]
        console.log("[Splashes] Replaced all splashes with April Fool's Day splashes");
    }
    var chosen_splash = splashes[Math.floor(Math.random() * splashes.length)];
    console.log("[Splashes] Chose '" + chosen_splash + "'");
    splashEl.innerHTML = chosen_splash;
}

var tooltipCont = '<h3 class="tooltip_name">Item Name</h3><br /><p class="tooltip_cat1">Categories: </p><p class="tooltip_cat2">Placeholder</p><br /><br /><p class="tooltip_desc">Item description. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p><br /><p class="tooltip_bonus">+1 Place Holding</p><p class="tooltip_src1">Source: </p><p class="tooltip_src2">Item source</p><span class="tooltip_price_cont"><br /><p class="tooltip_price1">Sell Price: </p><p class="tooltip_price2">$0 C0 0¢</p></span>'
tooltipEl.innerHTML = tooltipCont

var infoCont = '<h3 class="info_name">Info Topic</h3><br /><p class="info_desc">This is the description of an info topic. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>'
infoEl.innerHTML = infoCont

// functions for making item elements
var func_or_str = function(data, inputs) { // takes a variable containing unknown data; if it is a function, it calls the function with the given inputs, otherwise, it passes the value through
    if (typeof data == "function") {
        return data(...inputs);
    } else {return data};
};

var makeItem = function(id, dv, stack, nbt, donoequip) {
    var edv = dv;
    if (equiplist[id] == undefined) {throw Error("Invalid item ID: "+id)};
    if ((dv != 0) && (equiplist[id].length == 1)) {edv = 0}
    else if (equiplist[id][dv] == undefined) {edv = dv % equiplist[id].length};
    var didFirstArg = false;
    var didSecondArg = false;
    var didThirdArg = false;
    var startedMini = false;
    var invenRow2 = "<span class='icon ";
    if ("enchant" in nbt) {invenRow2 += "enchanted "}
    invenRow2 += func_or_str(equiplist[id][edv][1], [id, dv, stack, nbt]);
    if (("bools" in nbt) && (nbt["bools"][0] == true)) {invenRow2 += " dbg"}
    if (donoequip) {invenRow2 += "' onmouseover='tt(";}
    else {invenRow2 += "' onmouseover='ttEquip(";}
    invenRow2 += id + "," + dv + "," + stack + "," + JSON.stringify(nbt);
    for (k in nbt) { // check for first argument data (enchants)
        if (k == "enchant") {
            if (!didFirstArg) {invenRow2 += ",\""}
            else {invenRow2 += "<br />"}
            didFirstArg = true
            invenRow2 += enchantlist[nbt["enchant"][0]][0] + " " + nbt["enchant"][1]
        }
        else if (k == "potion_eff") {
            if (!didFirstArg) {invenRow2 += ",\""}
            else {invenRow2 += "<br />"}
            didFirstArg = true
            invenRow2 += getTranslatedString(effectlist[nbt["potion_eff"][0]][0]) + " (" + nbt["potion_eff"][1] + " turn"
            if (nbt["potion_eff"][1] == 1) {} else {invenRow2 += "s"}
            invenRow2 += ")"
        }
    }
    if (didFirstArg) {invenRow2 += "\""}
    else {invenRow2 += ",\"\""}
    for (k in nbt) { // check for second argument data (description appends)
        if (k == "desc_append") {
            if (!didSecondArg) {invenRow2 += ",\""}
            didSecondArg = true
            invenRow2 += nbt["desc_append"][0]
        }
    }
    if (didSecondArg) {invenRow2 += "\""}
    else {invenRow2 += ",\"\""}
    for (k in nbt) { // check for third argument data (custom name)
        if (k == "cname") {
            if (!didThirdArg) {invenRow2 += ",\""}
            didThirdArg = true
            invenRow2 += nbt["cname"]
        }
    }
    if (didThirdArg) {invenRow2 += "\""}
    else {invenRow2 += ",\"\""}
    invenRow2 += ");' onmouseout='nt();'>"
    invenRow2 += "</span>";
    for (k in nbt) { // check for mini icons (tags)
        if (k == "tag") {
            if (!startedMini) {invenRow2 += "<span class='mini_cont'>"}
            startedMini = true
            invenRow2 += "<span class='mini_icon mini_tag_" + nbt["tag"] + "'></span>"
        }
    }
    for (m of func_or_str(equiplist[id][edv][1], [id, dv, stack, nbt]).split(" ")) { // check for mini icons (classes)
        if (m == "enchanted") {
            if (!startedMini) {invenRow2 += "<span class='mini_cont'>"}
            startedMini = true
            invenRow2 += "<span class='mini_icon mini_ench'></span>"
        } else if (m == "golden") {
            if (!startedMini) {invenRow2 += "<span class='mini_cont'>"}
            startedMini = true
            invenRow2 += "<span class='mini_icon mini_golden'></span>"
        } else if (m == "ripe") {
            if (!startedMini) {invenRow2 += "<span class='mini_cont'>"}
            startedMini = true
            invenRow2 += "<span class='mini_icon mini_ripe'></span>"
        }
    }
    if (startedMini) {invenRow2 += "</span>"}
    return invenRow2
}

// functions for easter eggs
var egg_els = document.getElementsByClassName("easter_egg");
var egg_popups = [];
for (var i of egg_els) {
    if (Math.random() < 0.4) { // only spawn an egg 40% of the time
        egg_id = i.dataset.egg;
        i.innerHTML = '<span class="icon ' + egglist["2024"][egg_id][1] + '" onClick="egg(' + egg_id + ')"></span>';
        egg_popups[egg_id] = new Popup("egg_popup_" + egg_id, 400, 300, "You found an egg!", "<div style=\"width:100%;text-align:left;padding-left:2px;\"><span class=\"icon " + egglist["2024"][egg_id][1] + "\"></span><br/>[" + egglist["2024"][egg_id][0] + "]<br/>" + egglist["2024"][egg_id][3] + "<br/><br/>Code: " + egglist["2024"][egg_id][2] + "<br/><br/>Reward: " + egglist["2024"][egg_id][4] + "</div>");
    }
}

var egg = function(id) {
    egg_popups[id].spawn();
}

// june logo
var cdate = new Date();
if (cdate.getMonth() == 5) {
    document.head.innerHTML += '<style>#logo {\ncontent: var(--top_image_june);\n}</style>'
}

// settings
if (!wayback) {
    if (getCookie("set_min_ico") == "true") {document.head.innerHTML += '<link rel="stylesheet" type="text/css" href="' + url_start + 'CSS/mini/mini_icons.css"></link>'}
    if (getCookie("set_sans") == "true") {document.head.innerHTML += '<link rel="stylesheet" type="text/css" href="' + url_start + 'CSS/mini/comic_sans.css"></link>'}
    if (getCookie("set_skew") == "true") {document.head.innerHTML += '<link rel="stylesheet" type="text/css" href="' + url_start + 'CSS/mini/skew_page.css"></link>'}
}
if (is_root) {splashFunc();}
else if ((!wayback) && (getCookie("set_splashes") == "true")) {
    var brAfterLogoEl = document.querySelector(`img + br`);
    var splashSpanEl = document.createElement("span"); // i wish i could just pass a string like i normally do
    splashSpanEl.id = "splash_span";
    splashSpanEl.innerText = "Funny splash text.";
    brAfterLogoEl.after(splashSpanEl);
    var brAfterSpanEl1 = document.createElement("br");
    var brAfterSpanEl2 = document.createElement("br");
    splashSpanEl.after(brAfterSpanEl1);
    splashSpanEl.after(brAfterSpanEl2);
    splashFunc();
}
if (wayback) {
    document.head.innerHTML += '<link rel="stylesheet" type="text/css" href="https://web.archive.org/web/' + wb_timestamp + '/https://realicraft.github.io/FightSim/CSS/themes/medium.css"></link>'
    document.head.innerHTML += '<link rel="stylesheet" type="text/css" href="https://web.archive.org/web/' + wb_timestamp + '/https://realicraft.github.io/FightSim/CSS/iconsets/default.css"></link>'
}
else {
    document.head.innerHTML += '<link rel="stylesheet" type="text/css" href="' + url_start + 'CSS/themes/' + getCookie("set_theme") + '.css"></link>'
    document.head.innerHTML += '<link rel="stylesheet" type="text/css" href="' + url_start + 'CSS/iconsets/' + getCookie("set_iconset") + '.css"></link>'
}