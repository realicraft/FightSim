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
var get_pretty_price = function(price) { // function to convert a sell price in centicents form to a form displaying all units
    price2 = price
    dollars = 0
    cents = 0
    decicents = 0
    while (price2 >= 40) {
        dollars++
        price2 -= 40
    }
    while (price2 >= 10) {
        cents++
        price2 -= 10
    }
    decicents = price2
    if (dollars >= 1) {return "$" + dollars.toString() + " C" + cents.toString() + " " + decicents.toString() + "¢"}
    else if (cents >= 1) {return "C" + cents.toString() + " " + decicents.toString() + "¢"}
    else {return decicents.toString() + "¢"}
}
var tooltip = function(name, desc, source, cats, bonus, name_class, price) { // base tooltip function
    var tooltipBodyEl = document.getElementsByClassName("tooltip_body")[0];
    var tooltipNameEl = document.getElementsByClassName("tooltip_name")[0];
    var tooltipDescEl = document.getElementsByClassName("tooltip_desc")[0];
    var tooltipSrc2El = document.getElementsByClassName("tooltip_src2")[0];
    var tooltipCat2El = document.getElementsByClassName("tooltip_cat2")[0];
    var tooltipPrice2El = document.getElementsByClassName("tooltip_price2")[0];
    var tooltipPriceContEl = document.getElementsByClassName("tooltip_price_cont")[0];
    var tooltipBonusEl = document.getElementsByClassName("tooltip_bonus")[0];
    tooltipNameEl.innerHTML = name;
    tooltipDescEl.innerHTML = desc;
    tooltipSrc2El.innerHTML = source;
    tooltipCat2El.innerHTML = cats;
    tooltipBonusEl.innerHTML = bonus;
    tooltipNameEl.className = "tooltip_name " + name_class
    tooltipPrice2El.innerHTML = get_pretty_price(price);
    if (price == 0) {tooltipPriceContEl.setAttribute("style", "display: none;")}
    else {tooltipPriceContEl.setAttribute("style", "")}
    tooltipBodyEl.setAttribute("style", "display: block;")
}
var ttEquip = function(id=0, dv=0, nbt="", dnbt="") { // on the stats page, don't display tooltips for placeholders
    if (((id >= 1) & (id <= 8)) | (id == 330) | (id == 448) | (id == 548)) {}
    else {tt(id,dv,nbt,dnbt)}
}
var ttEffect = function(id=0) { // tooltip wrapper for effects
    var as_cats = ""
    var initial_cat = true
    if (effectlist[id][5].length == 0) {} // create category list
    else {
        for (var i in effectlist[id][5]) {
            if (initial_cat) {initial_cat = false}
            else {as_cats += ", "}
            as_cats += categorylist[effectlist[id][5][i]]
        }
    }
    tooltip(effectlist[id][0], effectlist[id][2], effectlist[id][3], as_cats, effectlist[id][4], name_class_list[effectlist[id][6]], 0)
}
var tt = function(id=0, dv=0, nbt="", dnbt="") { // tooltip wrapper for items
    var as_cats = ""
    var initial_cat = true
    if (equiplist[id][dv][5].length == 0) {} // create category list
    else {
        for (var i in equiplist[id][dv][5]) {
            if (initial_cat) {initial_cat = false}
            else {as_cats += ", "}
            as_cats += categorylist[equiplist[id][dv][5][i]]
        }
    }
    if (nbt == "" && dnbt == "") {tooltip(equiplist[id][dv][0], equiplist[id][dv][2], equiplist[id][dv][3], as_cats, equiplist[id][dv][4], name_class_list[equiplist[id][dv][6]], equiplist[id][dv][7])} // no nbt data
    else if (nbt == "") {tooltip(equiplist[id][dv][0], equiplist[id][dv][2]+dnbt, equiplist[id][dv][3], as_cats, equiplist[id][dv][4], name_class_list[equiplist[id][dv][6]], equiplist[id][dv][7])} // only discription nbt data
    else if (dnbt == "") {
        if (equiplist[id][dv][4] == "") {tooltip(equiplist[id][dv][0], equiplist[id][dv][2], equiplist[id][dv][3], as_cats, (nbt), name_class_list[equiplist[id][dv][6]], equiplist[id][dv][7])} // only effect nbt data, no effects
        else {tooltip(equiplist[id][dv][0], equiplist[id][dv][2], equiplist[id][dv][3], as_cats, (equiplist[id][dv][4]+"<br />"+nbt), name_class_list[equiplist[id][dv][6]], equiplist[id][dv][7])} // only effect nbt data, original has effects
    } else {
        if (equiplist[id][dv][4] == "") {tooltip(equiplist[id][dv][0], equiplist[id][dv][2]+dnbt, equiplist[id][dv][3], as_cats, (nbt), name_class_list[equiplist[id][dv][6]], equiplist[id][dv][7])} // both nbt datas, no effects
        else {tooltip(equiplist[id][dv][0], equiplist[id][dv][2]+dnbt, equiplist[id][dv][3], as_cats, (equiplist[id][dv][4]+"<br />"+nbt), name_class_list[equiplist[id][dv][6]], equiplist[id][dv][7])} // both nbt datas, original has effects
    }
}
var nt = function() { // function to clear tooltips
    var tooltipBodyEl = document.getElementsByClassName("tooltip_body")[0];
    var tooltipNameEl = document.getElementsByClassName("tooltip_name")[0];
    var tooltipDescEl = document.getElementsByClassName("tooltip_desc")[0];
    var tooltipSrc2El = document.getElementsByClassName("tooltip_src2")[0];
    var tooltipPrice2El = document.getElementsByClassName("tooltip_price2")[0];
    var tooltipBonusEl = document.getElementsByClassName("tooltip_bonus")[0];
    tooltipNameEl.innerHTML = "";
    tooltipDescEl.innerHTML = "";
    tooltipSrc2El.innerHTML = "";
    tooltipBonusEl.innerHTML = "";
    tooltipNameEl.className = "tooltip_name"
    tooltipPrice2El.innerHTML = "";
    tooltipBodyEl.setAttribute("style", "display: none;")
}