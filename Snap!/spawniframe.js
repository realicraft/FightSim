var build_no = 0;

var iframe_holder_el = document.getElementById("iframe_holder");
var build_xml = new URL("/Snap!/builds/build " + build_no + ".xml", document.baseURI).href;
iframe_holder_el.innerHTML = '<iframe width="482" height="362" frameBorder=0 allowfullscreen allow="geolocation; microphone;camera" src="https://snap.berkeley.edu/run#run:' + build_xml +'&embedMode&noRun"></iframe>';

var header_func = function() {
    var header_el = document.getElementById("snap_header");
    header_el.innerHTML = getTranslatedString("header.fightsnap.title", {"build": build_no});
}
waitForLang(header_func);