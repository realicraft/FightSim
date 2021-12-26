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
var tt = function(id=0, nbt="", dnbt="") {
    if (nbt == "" && dnbt == "") {tooltip(equiplist[id][0], equiplist[id][2], equiplist[id][3], equiplist[id][4])}
    else if (nbt == "") {tooltip(equiplist[id][0], equiplist[id][2]+dnbt, equiplist[id][3], equiplist[id][4])}
    else if (dnbt == "") {
        if (equiplist[id][4] == "") {tooltip(equiplist[id][0], equiplist[id][2], equiplist[id][3], (nbt))}
        else {tooltip(equiplist[id][0], equiplist[id][2], equiplist[id][3], (equiplist[id][4]+"<br />"+nbt))}
    } else {
        if (equiplist[id][4] == "") {tooltip(equiplist[id][0], equiplist[id][2]+dnbt, equiplist[id][3], (nbt))}
        else {tooltip(equiplist[id][0], equiplist[id][2]+dnbt, equiplist[id][3], (equiplist[id][4]+"<br />"+nbt))}
    }
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