var headerEl = document.getElementById("header")
var timeboxEl = document.getElementById("time_box")

var headerLinks = [["Info", "info"],["Inventories", "inventories"],["Stats", "stats"],["Structures", "structures"],["Voting", "voting"],["Gardens", "gardens"]]
var timeboxInfo = [39, "cloudy", "Cloudy"]

var headerCont = '<span class="small_icon fs3" style="position:absolute;left:4px;top:4px;" title="FS3"></span>'
for (var i in headerLinks) {
    headerCont += '\n<a href="' + headerLinks[i][1] + '.html">' + headerLinks[i][0] + '</a>'
}
headerEl.innerHTML = headerCont

var timeboxCont = '<span class="icon time" id="time_box_icon"></span>'
timeboxCont += '\n<span id="time_box_turns" title="Current Turn">' + timeboxInfo[0] + '</span>'
timeboxCont += '\n<span id="time_box_weather_container"><span class="small_icon ' + timeboxInfo[1] + '" id="time_box_weather" title="Weather (' + timeboxInfo[2] + ')"></span></span>'
timeboxEl.innerHTML = timeboxCont