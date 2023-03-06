var headerEl = document.getElementById("header_container")
var timeboxEl = document.getElementById("time_box")
var tooltipEl = document.getElementsByClassName("tooltip_body")[0]
var infoEl = document.getElementsByClassName("info_body")[0]
var bodyEl = document.body

var timeboxInfo = [78, "night", "cloudy"]

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
    return "";
  }

for (i in settingslist) {
    for (j in settingslist[i][1]) {
        if (getCookie("set_" + settingslist[i][1][j][0]) == "") {
        setCookie("set_" + settingslist[i][1][j][0], settingslist[i][1][j][4], 365)
        }
    }
}

// functions for the translation system
var langStrings;
var enStrings;
var langLoaded = false;
var enLoaded = false
fetch("../lang/en_us.json").then(response => response.json()).then(json => enStrings = json).then(function(){enLoaded = true});
fetch("../lang/"+ getCookie("set_lang") +".json").then(response => response.json()).then(json => langStrings = json).then(function(){langLoaded = true});

var loop_until_char = function(string, char) {
    var i = 0
    while (i < string.length) {
        if (string[i] == char) {break}
        i++
    }
    return i
}

var getTranslatedString = function(id, nbt) {
    console.log("=> " + id)
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
    console.log("<= " + outCont)
    return outCont;
}

var waitForLang = function(func) {
    if (langLoaded && enLoaded) {
        func()
    } else {
        setTimeout(waitForLang, 50, func)
    }
}

// page elements
var headerFunc = function() {
    var headerCont = '<div class="header"><span class="small_icon fs3" style="position:absolute;left:4px;top:4px;" title="FS3"></span>';
    for (var i in headerLinks["3"]) {headerCont += '\n<a href="' + headerLinks["3"][i][1] + '">' + getTranslatedString("headerlink."+headerLinks["3"][i][0]+".name") + '</a>'};
    headerCont += '</div><br /><div class="header"><span class="small_icon info_small" style="position:absolute;left:4px;top:4px;" title="' + getTranslatedString("headerlink.info_pages.name") + '"></span>';
    for (var j in headerLinks["i"]) {headerCont += '\n<a href="' + headerLinks["i"][j][1] + '">' + getTranslatedString("headerlink."+headerLinks["i"][j][0]+".name") + '</a>'};
    headerCont += "</div>";
    headerEl.innerHTML = headerCont;
};

var timeboxFunc = function() {
    var timeboxCont = '<span class="icon time" id="time_box_icon"></span>';
    timeboxCont += '\n<span id="time_box_turns" title="' + getTranslatedString("headerlink.current_turn.name") + '">' + timeboxInfo[0] + '</span>';
    timeboxCont += '\n<span id="time_box_weather_container">' + '<span class="small_icon ' + timeboxInfo[1] + '" id="time_box_time" title="' + getTranslatedString("headerlink.time_of_day.name") + ' (' + getTranslatedString("time."+timeboxInfo[1]+".name") + ')"></span>' + '<span class="small_icon ' + timeboxInfo[2] + '" id="time_box_weather" title="' + getTranslatedString("headerlink.weather.name") + ' (' + getTranslatedString("weather."+timeboxInfo[2]+".name") + ')"></span></span>';
    timeboxEl.innerHTML = timeboxCont;
};

waitForLang(headerFunc);
waitForLang(timeboxFunc);

var tooltipCont = '<h3 class="tooltip_name">Item Name</h3><br /><p class="tooltip_cat1">Categories: </p><p class="tooltip_cat2">Placeholder</p><br /><br /><p class="tooltip_desc">Item description. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p><br /><p class="tooltip_bonus">+1 Place Holding</p><p class="tooltip_src1">Source: </p><p class="tooltip_src2">Item source</p><span class="tooltip_price_cont"><br /><p class="tooltip_price1">Sell Price: </p><p class="tooltip_price2">$0 C0 0¢</p></span>'
tooltipEl.innerHTML = tooltipCont

var infoCont = '<h3 class="info_name">Info Topic</h3><br /><p class="info_desc">This is the description of an info topic. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>'
infoEl.innerHTML = infoCont

// function to make item elements
var makeItem = function(id, dv, stack, nbt, donoequip) {
    if (equiplist[id] == undefined) {throw Error("Invalid item ID: "+id)};
    if ((dv != 0) && (equiplist[id].length == 1)) {throw Error("Item with ID " +id +" has no DVs, but " +dv+ " was passed")}
    else if (equiplist[id][dv] == undefined) {throw Error("Invalid item ID/DV pair: "+id+"/"+dv)};
    var didFirstArg = false;
    var didSecondArg = false;
    var didThirdArg = false;
    var startedMini = false;
    var invenRow2 = "<span class='icon ";
    if ("enchant" in nbt) {invenRow2 += "enchanted "}
    invenRow2 += equiplist[id][dv][1];
    if (("bools" in nbt) && (nbt["bools"][0] == true)) {invenRow2 += " dbg"}
    if (donoequip) {invenRow2 += "' onmouseover='tt(";}
    else {invenRow2 += "' onmouseover='ttEquip(";}
    invenRow2 += id + "," + dv;
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
    for (m of equiplist[id][dv][1].split(" ")) { // check for mini icons (classes)
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
var egg_els = document.getElementsByClassName("easter_egg")
for (var i of egg_els) {
    egg_id = i.dataset.egg
    i.innerHTML = '<span class="icon ' + egglist[egg_id][1] + '" onClick="egg(' + egg_id + ')"></span>'
}

var egg = function(id) {
    alert(
        "You found an egg!\n[" + egglist[id][0] + "]\n" + egglist[id][3] + "\nCode: " + egglist[id][2] + "\nReward: " + egglist[id][4]
    )
}

// settings
if (getCookie("set_min_ico") == "true") {document.head.innerHTML += '<link rel="stylesheet" type="text/css" href="../CSS/mini/mini_icons.css"></link>'}
if (getCookie("set_sans") == "true") {document.head.innerHTML += '<link rel="stylesheet" type="text/css" href="../CSS/mini/comic_sans.css"></link>'}
document.head.innerHTML += '<link rel="stylesheet" type="text/css" href="../CSS/themes/' + getCookie("set_theme") + '.css"></link>'
document.head.innerHTML += '<link rel="stylesheet" type="text/css" href="../CSS/iconsets/' + getCookie("set_iconset") + '.css"></link>'