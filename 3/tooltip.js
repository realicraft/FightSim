var tooltip = function(name="lang.en.itemname.default", desc="lang.en.itemdesc.default", source="lang.en.itemsrc.default") {
    var tooltipBodyEl = document.getElementsByClassName("tooltip_body")[0];
    var tooltipNameEl = document.getElementsByClassName("tooltip_name")[0];
    var tooltipDescEl = document.getElementsByClassName("tooltip_desc")[0];
    var tooltipSrc2El = document.getElementsByClassName("tooltip_src2")[0];
    tooltipNameEl.innerHTML = name;
    tooltipDescEl.innerHTML = desc;
    tooltipSrc2El.innerHTML = source;
    tooltipBodyEl.setAttribute("style", "display: block;")
}
var tooltips = [
    ["lang.en.itemname.default", "lang.en.itemdesc.default", "lang.en.itemsrc.default"],
    ["Potted Canned Bean Bush", "A bush that grows cans of beans. In a pot.", "Unknown"],
    ["Logo 3", 'The "3" from the logo.', "Unknown"],
    ["Logo F", 'The "F" from the logo.', "Unknown"],
    ["Logo S", 'The "S" from the logo.', "Unknown"],
    ["Rock", "It's a small rock.", "Picking up a rock"],
    ["Coal", "It's a piece of coal.", "Mining"],
    ["Diamond", "It's a diamond. These things are rare!", "Mining"],
    ["Decent Hammer", "Bonk.", "Crafting"],
    ["Slingshot", "You shoot things with it.", "Unknown"],
    ["Golden Ripe Spinach Bundle", "Golden <em>and</em> ripe!?<br />Restores 15 HP, gives Regen 2.", "Harvesting Spinach"],
    ["Golden Potato", "Butter included.<br />Restores 10 HP, gives Attack Up 1.", "Harvesting Potatoes"],
    ["Flint & Steel", "Sets things on fire.", "Unknown"],
    ["TNT", "Explodes after being ignited.", "Unknown"]
]
var tt = function(id=0) {
    tooltip(tooltips[id][0], tooltips[id][1], tooltips[id][2])
}
var nt = function() {
    var tooltipBodyEl = document.getElementsByClassName("tooltip_body")[0];
    var tooltipNameEl = document.getElementsByClassName("tooltip_name")[0];
    var tooltipDescEl = document.getElementsByClassName("tooltip_desc")[0];
    var tooltipSrc2El = document.getElementsByClassName("tooltip_src2")[0];
    tooltipNameEl.innerHTML = "";
    tooltipDescEl.innerHTML = "";
    tooltipSrc2El.innerHTML = "";
    tooltipBodyEl.setAttribute("style", "display: none;")
}