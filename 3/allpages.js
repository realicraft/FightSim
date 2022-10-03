var headerEl = document.getElementById("header_container")
var timeboxEl = document.getElementById("time_box")
var tooltipEl = document.getElementsByClassName("tooltip_body")[0]
var infoEl = document.getElementsByClassName("info_body")[0]
var bodyEl = document.body

var timeboxInfo = [76, "dusk", "cloudy"]

// functions for the translation system
var langStrings
fetch("../lang/en_us.json").then(response => response.json()).then(json => langStrings = json);

var getTranslatedString = function(id, nbt) {
    if (id in langStrings) {
        var preparse = langStrings[id]
        return preparse
    }
    else {return id}
}

// page elements
var headerFunc = function() {
    var headerCont = '<div class="header"><span class="small_icon fs3" style="position:absolute;left:4px;top:4px;" title="FS3"></span>';
    for (var i in headerLinks["3"]) {headerCont += '\n<a href="' + headerLinks["3"][i][1] + '">' + headerLinks["3"][i][0] + '</a>'};
    headerCont += '</div><br /><div class="header"><span class="small_icon info_small" style="position:absolute;left:4px;top:4px;" title="Informational Pages"></span>';
    for (var j in headerLinks["i"]) {headerCont += '\n<a href="' + headerLinks["i"][j][1] + '">' + headerLinks["i"][j][0] + '</a>'};
    headerCont += "</div>";
    headerEl.innerHTML = headerCont;
};

var timeboxFunc = function() {
    var timeboxCont = '<span class="icon time" id="time_box_icon"></span>';
    timeboxCont += '\n<span id="time_box_turns" title="Current Turn">' + timeboxInfo[0] + '</span>';
    timeboxCont += '\n<span id="time_box_weather_container">' + '<span class="small_icon ' + timeboxInfo[1] + '" id="time_box_time" title="Time of Day (' + getTranslatedString("time."+timeboxInfo[1]+".name") + ')"></span>' + '<span class="small_icon ' + timeboxInfo[2] + '" id="time_box_weather" title="Weather (' + getTranslatedString("weather."+timeboxInfo[2]+".name") + ')"></span></span>';
    timeboxEl.innerHTML = timeboxCont;
};

setTimeout(headerFunc, 100);
setTimeout(timeboxFunc, 100);

var tooltipCont = '<h3 class="tooltip_name">Item Name</h3><br /><p class="tooltip_cat1">Categories: </p><p class="tooltip_cat2">Placeholder</p><br /><br /><p class="tooltip_desc">Item description. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p><br /><p class="tooltip_bonus">+1 Place Holding</p><p class="tooltip_src1">Source: </p><p class="tooltip_src2">Item source</p><span class="tooltip_price_cont"><br /><p class="tooltip_price1">Sell Price: </p><p class="tooltip_price2">$0 C0 0¢</p></span>'
tooltipEl.innerHTML = tooltipCont

var infoCont = '<h3 class="info_name">Info Topic</h3><br /><p class="info_desc">This is the description of an info topic. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>'
infoEl.innerHTML = infoCont

// function to make item elements
var makeItem = function(id, dv, stack, nbt) {
    var didFirstArg = false;
    var didSecondArg = false;
    var didThirdArg = false;
    var startedMini = false;
    var invenRow2 = "<span class='icon ";
    if ("enchant" in nbt) {invenRow2 += "enchanted "}
    invenRow2 += equiplist[id][dv][1];
    if (("bools" in nbt) && (nbt["bools"][0] == true)) {invenRow2 += " dbg"}
    invenRow2 += "' onmouseover='ttEquip(";
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
            invenRow2 += effectlist[nbt["potion_eff"][0]][0] + " (" + nbt["potion_eff"][1] + " turn"
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
    for(let i = 0; i <ca.length; i++) {
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

if (document.cookie == "") {
    for (i in settingslist) {
        for (j in settingslist[i][1]) {
            setCookie("set_" + settingslist[i][1][j][0], settingslist[i][1][j][4], 365)
        }
    }
}

// settings
if (getCookie("set_min_ico") == "true") {document.head.innerHTML += '<link rel="stylesheet" type="text/css" href="../CSS/mini/mini_icons.css"></link>'}
if (getCookie("set_sans") == "true") {document.head.innerHTML += '<link rel="stylesheet" type="text/css" href="../CSS/mini/comic_sans.css"></link>'}