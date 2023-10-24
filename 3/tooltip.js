var name_class_list = [
    "", //0
    "common", //1
    "uncommon", //2
    "rare", //3
    "unique", //4
    "plot_b", //5
    "plot_g", //6
    "fs2_ex", //7
    "moss", //8
]
var get_pretty_price = function(price) { // function to convert a sell price in decicents form to a form displaying all units
    var price2 = price
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
var func_or_str = function(data, inputs) { // takes a variable containing unknown data; if it is a function, it calls the function with the given inputs, otherwise, it passes the value through
    if (typeof data == "function") {
        return data(...inputs);
    } else {return data};
};

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
var ttEquip = function(id=0, dv=0, stack=1, nbt={}, anbt="", dnbt="", cname="") { // on the stats page, don't display tooltips for placeholders
    if (((id >= 1) & (id <= 8)) | (id == 112) | (id == 330) | (id == 448)) {}
    else {tt(id,dv,stack,nbt,anbt,dnbt,cname)}
}
var ttEffect = function(id=0) { // tooltip wrapper for effects
    var as_cats = ""
    var initial_cat = true
    if (effectlist[id][5].length == 0) {} // create category list
    else {
        for (var i in effectlist[id][5]) {
            if (initial_cat) {initial_cat = false}
            else {as_cats += ", "}
            as_cats += getTranslatedString(categorylist[effectlist[id][5][i]])
        }
    }
    tooltip(getTranslatedString(effectlist[id][0]), getTranslatedString(effectlist[id][2]), effectlist[id][3], as_cats, effectlist[id][4], name_class_list[effectlist[id][6]], 0)
}
var tt = function(id=0, dv=0, stack=1, nbt={}, anbt="", dnbt="", cname="") { // tooltip wrapper for items
    var assembled_cats = "";
    var initial_cat = true;
    var dvs_of_id = equiplist[id].length;
    mdv = dv%dvs_of_id;
    if (equiplist[id][mdv][5].length == 0) {} // create category list
    else {
        for (var i in equiplist[id][mdv][5]) {
            if (initial_cat) {initial_cat = false}
            else {assembled_cats += ", "}
            assembled_cats += getTranslatedString(categorylist[equiplist[id][mdv][5][i]])
        }
    }

    if (cname == "") {var uname = func_or_str(equiplist[id][mdv][0], [id, dv, stack, nbt])}
    else {var uname = "<i>" + cname + "</i>"}

    if (dnbt == "") {var desc = func_or_str(equiplist[id][mdv][2], [id, dv, stack, nbt])} //dnbt is depreciated, but currently still used
    else {var desc = func_or_str(equiplist[id][mdv][2], [id, dv, stack, nbt])+dnbt}

    if (anbt == "") {
        tooltip(uname, desc, equiplist[id][mdv][3], assembled_cats, equiplist[id][mdv][4], name_class_list[equiplist[id][mdv][6]], equiplist[id][mdv][7])
    } // no nbt data
    else {
        if (equiplist[id][mdv][4] == "") {
            tooltip(uname, desc, equiplist[id][mdv][3], assembled_cats, (anbt), name_class_list[equiplist[id][mdv][6]], equiplist[id][mdv][7])
        } // has nbt datas, no effects
        else {
            tooltip(uname, desc, equiplist[id][mdv][3], assembled_cats, (equiplist[id][mdv][4]+"<br />"+anbt), name_class_list[equiplist[id][mdv][6]], equiplist[id][mdv][7])
        } // has nbt datas, original has effects
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