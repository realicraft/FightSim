var headerEl = document.getElementById("header_container")
var timeboxEl = document.getElementById("time_box")
var tooltipEl = document.getElementsByClassName("tooltip_body")[0]
var infoEl = document.getElementsByClassName("info_body")[0]

var headerLinks = {
    "3": [["Info", "info"],["Inventories", "inventories"],["Stats", "stats"],["Structures", "structures"],["Voting", "voting"],["Gardens", "gardens"],["Quests","quests"]],
    "i": [["All Items", "creative"],["Crafting", "crafting"],["Encyclopedia", "help"]]
}
var timeboxInfo = [46, "rain", "Night, Rainy"]

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

var tooltipCont = '<h3 class="tooltip_name">Item Name</h3><br /><br /><p class="tooltip_desc">Item description. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p><br /><p class="tooltip_bonus">+1 Place Holding</p><p class="tooltip_src1">Source: </p><p class="tooltip_src2">Item source</p>'
tooltipEl.innerHTML = tooltipCont

var infoCont = '<h3 class="info_name">Info Topic</h3><br /><p class="info_desc">This is the description of an info topic. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>'
infoEl.innerHTML = infoCont