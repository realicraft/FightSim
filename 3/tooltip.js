var name_class_list = [
    "", //0
    "common", //1
    "uncommon", //2
    "rare", //3
    "unique", //4
    "plot_b", //5
    "plot_g", //6
    "fs2_ex", //7
]
var tooltip = function(name, desc, source, cats, bonus, name_class) {
    var tooltipBodyEl = document.getElementsByClassName("tooltip_body")[0];
    var tooltipNameEl = document.getElementsByClassName("tooltip_name")[0];
    var tooltipDescEl = document.getElementsByClassName("tooltip_desc")[0];
    var tooltipSrc2El = document.getElementsByClassName("tooltip_src2")[0];
    var tooltipCat2El = document.getElementsByClassName("tooltip_cat2")[0];
    var tooltipBonusEl = document.getElementsByClassName("tooltip_bonus")[0];
    tooltipNameEl.innerHTML = name;
    tooltipDescEl.innerHTML = desc;
    tooltipSrc2El.innerHTML = source;
    tooltipCat2El.innerHTML = cats;
    tooltipBonusEl.innerHTML = bonus;
    tooltipNameEl.className = "tooltip_name " + name_class
    tooltipBodyEl.setAttribute("style", "display: block;")
}
var ttEquip = function(id=0, nbt="", dnbt="") {
    if ((id >= 1) & (id <= 8)) {}
    else {tt(id,nbt,dnbt)}
}
var ttEffect = function(id=0) {
    var as_cats = ""
    var initial_cat = true
    if (effectlist[id][5].length == 0) {}
    else {
        for (var i in effectlist[id][5]) {
            if (initial_cat) {initial_cat = false}
            else {as_cats += ", "}
            as_cats += categorylist[effectlist[id][5][i]]
        }
    }
    tooltip(effectlist[id][0], effectlist[id][2], effectlist[id][3], as_cats, effectlist[id][4], name_class_list[effectlist[id][6]])
}
var tt = function(id=0, nbt="", dnbt="") {
    var as_cats = ""
    var initial_cat = true
    if (equiplist[id][5].length == 0) {}
    else {
        for (var i in equiplist[id][5]) {
            if (initial_cat) {initial_cat = false}
            else {as_cats += ", "}
            as_cats += categorylist[equiplist[id][5][i]]
        }
    }
    if (nbt == "" && dnbt == "") {tooltip(equiplist[id][0], equiplist[id][2], equiplist[id][3], as_cats, equiplist[id][4], name_class_list[equiplist[id][6]])}
    else if (nbt == "") {tooltip(equiplist[id][0], equiplist[id][2]+dnbt, equiplist[id][3], as_cats, equiplist[id][4], name_class_list[equiplist[id][6]])}
    else if (dnbt == "") {
        if (equiplist[id][4] == "") {tooltip(equiplist[id][0], equiplist[id][2], equiplist[id][3], as_cats, (nbt), name_class_list[equiplist[id][6]])}
        else {tooltip(equiplist[id][0], equiplist[id][2], equiplist[id][3], as_cats, (equiplist[id][4]+"<br />"+nbt), name_class_list[equiplist[id][6]])}
    } else {
        if (equiplist[id][4] == "") {tooltip(equiplist[id][0], equiplist[id][2]+dnbt, equiplist[id][3], as_cats, (nbt), name_class_list[equiplist[id][6]])}
        else {tooltip(equiplist[id][0], equiplist[id][2]+dnbt, equiplist[id][3], as_cats, (equiplist[id][4]+"<br />"+nbt), name_class_list[equiplist[id][6]])}
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
    tooltipNameEl.className = "tooltip_name"
    tooltipBodyEl.setAttribute("style", "display: none;")
}