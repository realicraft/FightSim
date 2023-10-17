var headerEl = document.getElementById("header_container")

// page elements
var headerFunc = function() {
    var headerCont = '<div class="header"><span class="small_icon web" style="position:absolute;left:4px;top:4px;" title="Indexes"></span>';
    for (var i in headerLinks["I"]) {headerCont += '\n<a href="' + headerLinks["I"][i][1] + '">' + getTranslatedString("headerlink."+headerLinks["I"][i][0]+".name") + '</a>'};
    headerCont += "</div>";
    headerEl.innerHTML = headerCont;
}; 
waitForLang(headerFunc);
