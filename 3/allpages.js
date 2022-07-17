var headerEl = document.getElementById("header_container")
var timeboxEl = document.getElementById("time_box")
var tooltipEl = document.getElementsByClassName("tooltip_body")[0]
var infoEl = document.getElementsByClassName("info_body")[0]
var bodyEl = document.body

var timeboxInfo = [72, "day", "lightning_weather", "Day", "Harsh Lightning"]

var headerCont = '<div class="header"><span class="small_icon fs3" style="position:absolute;left:4px;top:4px;" title="FS3"></span>'
for (var i in headerLinks["3"]) {headerCont += '\n<a href="' + headerLinks["3"][i][1] + '">' + headerLinks["3"][i][0] + '</a>'}
headerCont += '</div><br /><div class="header"><span class="small_icon info_small" style="position:absolute;left:4px;top:4px;" title="Informational Pages"></span>'
for (var j in headerLinks["i"]) {headerCont += '\n<a href="' + headerLinks["i"][j][1] + '">' + headerLinks["i"][j][0] + '</a>'}
headerCont += "</div>"
headerEl.innerHTML = headerCont

var timeboxCont = '<span class="icon time" id="time_box_icon"></span>'
timeboxCont += '\n<span id="time_box_turns" title="Current Turn">' + timeboxInfo[0] + '</span>'
timeboxCont += '\n<span id="time_box_weather_container">' + '<span class="small_icon ' + timeboxInfo[1] + '" id="time_box_time" title="Time of Day (' + timeboxInfo[3] + ')"></span>' + '<span class="small_icon ' + timeboxInfo[2] + '" id="time_box_weather" title="Weather (' + timeboxInfo[4] + ')"></span></span>'
timeboxEl.innerHTML = timeboxCont

var tooltipCont = '<h3 class="tooltip_name">Item Name</h3><br /><p class="tooltip_cat1">Categories: </p><p class="tooltip_cat2">Placeholder</p><br /><br /><p class="tooltip_desc">Item description. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p><br /><p class="tooltip_bonus">+1 Place Holding</p><p class="tooltip_src1">Source: </p><p class="tooltip_src2">Item source</p><span class="tooltip_price_cont"><br /><p class="tooltip_price1">Sell Price: </p><p class="tooltip_price2">$0 C0 0¢</p></span>'
tooltipEl.innerHTML = tooltipCont

var infoCont = '<h3 class="info_name">Info Topic</h3><br /><p class="info_desc">This is the description of an info topic. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>'
infoEl.innerHTML = infoCont


var makeItem = function(id, dv, stack, nbt) {
    var didFirstArg = false
    var didSecondArg = false
    var invenRow2 = "<span class='icon ";
    if ("enchant" in nbt) {invenRow2 += "enchanted "}
    invenRow2 += equiplist[id][dv][1];
    if (("bools" in nbt) && (nbt["bools"][0] == true)) {invenRow2 += " dbg"}
    invenRow2 += "' onmouseover='tt(";
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
    invenRow2 += ");' onmouseout='nt();'></span>";
    return invenRow2
}

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