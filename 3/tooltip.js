var tooltip = function(name, desc, source, bonus) {
    var tooltipBodyEl = document.getElementsByClassName("tooltip_body")[0];
    var tooltipNameEl = document.getElementsByClassName("tooltip_name")[0];
    var tooltipDescEl = document.getElementsByClassName("tooltip_desc")[0];
    var tooltipSrc2El = document.getElementsByClassName("tooltip_src2")[0];
    var tooltipBonusEl = document.getElementsByClassName("tooltip_bonus")[0];
    tooltipNameEl.innerHTML = name;
    tooltipDescEl.innerHTML = desc;
    tooltipSrc2El.innerHTML = source;
    tooltipBonusEl.innerHTML = bonus;
    tooltipBodyEl.setAttribute("style", "display: block;")
}
var tt = function(id=0) {
    tooltip(itemlist[id][0], itemlist[id][1], itemlist[id][2], itemlist[id][3])
}
var nt = function() {
    var tooltipBodyEl = document.getElementsByClassName("tooltip_body")[0];
    var tooltipNameEl = document.getElementsByClassName("tooltip_name")[0];
    var tooltipDescEl = document.getElementsByClassName("tooltip_desc")[0];
    var tooltipSrc2El = document.getElementsByClassName("tooltip_src2")[0];
    var tooltipBonusEl = document.getElementsByClassName("tooltip_bonus")[0];
    tooltipNameEl.innerHTML = "";
    tooltipDescEl.innerHTML = "";
    tooltipSrc2El.innerHTML = "";
    tooltipBonusEl.innerHTML = "";
    tooltipBodyEl.setAttribute("style", "display: none;")
}