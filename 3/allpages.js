var headerEl = document.getElementById("header_container")
var timeboxEl = document.getElementById("time_box")
var tooltipEl = document.getElementsByClassName("tooltip_body")[0]
var infoEl = document.getElementsByClassName("info_body")[0]

var timeboxInfo = [61, "day", "rain", "Day", "Raining"]

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