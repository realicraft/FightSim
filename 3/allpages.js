var headerEl = document.getElementById("header_container")
var timeboxEl = document.getElementById("time_box")

var timeboxInfo = [83, "night", "snowy"]


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