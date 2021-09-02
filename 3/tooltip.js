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
var tooltips = [
    ["lang.en.itemname.default", "lang.en.itemdesc.default", "lang.en.itemsrc.default", ""],
    ["Potted Canned Bean Bush", "A bush that grows cans of beans. In a pot.", "Unknown", ""],
    ["Logo 3", 'The "3" from the logo.', "Unknown", ""],
    ["Logo F", 'The "F" from the logo.', "Unknown", ""],
    ["Logo S", 'The "S" from the logo.', "Unknown", ""],
    ["Rock", "It's a small rock.", "Picking up a rock", ""],
    ["Coal", "It's a piece of coal.", "Mining", ""],
    ["Diamond", "It's a diamond. These things are rare!", "Mining", ""],
    ["Decent Hammer", "Bonk.", "Crafting", "+1 Direct Attack"],
    ["Slingshot", "You shoot things with it.", "Unknown", "+1 Indirect Attack"],
    ["Golden Ripe Spinach Bundle", "Golden <em>and</em> ripe!?", "Harvesting Spinach", "+1 HP per turn"],
    ["Golden Potato", "Butter included.", "Harvesting Potatoes", "+1 Direct Attack"],
    ["Flint & Steel", "Sets things on fire.", "Unknown", ""],
    ["TNT", "Explodes after being ignited.", "Unknown", ""],
    ["Icicle", "It's cold, and kinda pointy.", "Finding it", "+10% chance to Freeze on hit"],
    ["Tray of Cookies", "A tray filled with cookies.", "Cooking", ""],
    ["Log", "A log.", "Chopping", ""],
    ["Stick", "It's a stick. You can use it in a bunch of different things.", "Chopping", ""],
    ["Planks", "Some planks.", "Chopping", ""]
]
var tt = function(id=0) {
    tooltip(tooltips[id][0], tooltips[id][1], tooltips[id][2], tooltips[id][3])
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