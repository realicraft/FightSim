var headerEl = document.getElementById("header_container")
var timeboxEl = document.getElementById("time_box")

var headerLinks = {
    "3": [["Info", "info"],["Inventories", "inventories"],["Stats", "stats"],["Structures", "structures"],["Voting", "voting"],["Gardens", "gardens"],["Quests","quests"]],
    "i": [["All Items", "creative"],["Crafting", "crafting"],["Encyclopedia", "help"]]
}
var timeboxInfo = [44, "cloudy", "Night, Cloudy"]

var headerCont = '<div class="header"><span class="small_icon fs3" style="position:absolute;left:4px;top:4px;" title="FS3"></span>'
for (var i in headerLinks["3"]) {headerCont += '\n<a href="' + headerLinks["3"][i][1] + '.html">' + headerLinks["3"][i][0] + '</a>'}
headerCont += '</div><br /><div class="header"><span class="small_icon info_small" style="position:absolute;left:4px;top:4px;" title="Informational Pages"></span>'
for (var j in headerLinks["i"]) {headerCont += '\n<a href="' + headerLinks["i"][j][1] + '.html">' + headerLinks["i"][j][0] + '</a>'}
headerCont += "</div>"
headerEl.innerHTML = headerCont

var timeboxCont = '<span class="icon time" id="time_box_icon"></span>'
timeboxCont += '\n<span id="time_box_turns" title="Current Turn">' + timeboxInfo[0] + '</span>'
timeboxCont += '\n<span id="time_box_weather_container"><span class="small_icon ' + timeboxInfo[1] + '" id="time_box_weather" title="Weather (' + timeboxInfo[2] + ')"></span></span>'
timeboxEl.innerHTML = timeboxCont