/* helper functions */
var addDefaults = function(nbt, defaults) { //adds default values to passed in nbt data
    for (var item in defaults) {
        if (item in nbt) {}
        else {nbt[item] = defaults[item]};
    }
    return nbt;
}

/* functions */
// function inputs: id, dv, stack count, nbt

 // [name, desc, type, element, colouric?, hp, atk, def, ability id, offensive id, defensive id]
var critter_desc_gen = function(id, dv=0, stack=1, nbt={}) {
    var itemToCritter = {558: 0};
    if (id in itemToCritter) {
        var ctypes = ["bug", "bird", "prey", "pred", "fish", "sea"];
        var caligns = ["none", "normal", "fire", "water", "electric", "plant", "ice", "light", "dark"];
        var cid = itemToCritter[id];
        nbt = addDefaults(nbt, {"hp": critter_data[cid][5]})
        var desc = getTranslatedString(critter_data[cid][1]) + "<br />"; // description
        if (getCookie("set_critter_plain") == "true") { // plain descriptions
            desc += "<span class='small_text'>"
            desc += "<span class='icon cr_type_" + ctypes[critter_data[cid][2]] + "'></span><span class='icon cr_align_" + caligns[critter_data[cid][3]] + "'></span>" // type and alignment
            desc += "<span class='icon cr_hp_" + nbt["hp"] + "'></span>" // current hp
            if (critter_data[cid][4]) {desc += "<span class='icon cr_colouric'></span>"} // colouric?
            desc += "<br /><span class='icon cr_atk_" + critter_data[cid][6] + "'></span><span class='icon cr_def_" + critter_data[cid][7] + "'></span>" // attack/defense
            desc += "<span class='icon cr_mhp_" + critter_data[cid][5] + "'></span><br />" // max hp
            desc += "<span class='icon cr_ab_" + critter_opt_data["ability"][critter_data[cid][8]][2] + "'></span><br />" // ability
            desc += "<span class='icon cr_of_" + critter_opt_data["offense"][critter_data[cid][9]][2] + "'></span><br />" // offensive
            desc += "<span class='icon cr_df_" + critter_opt_data["defense"][critter_data[cid][10]][2] + "'></span>" // defensive
        } else { // non-plain descriptions
            desc += "<span class='icon cr_type_" + ctypes[critter_data[cid][2]] + "'></span><span class='icon cr_align_" + caligns[critter_data[cid][3]] + "'></span>" // type and alignment
            desc += "<span class='icon cr_hp_" + nbt["hp"] + "'></span>" // current hp
            if (critter_data[cid][4]) {desc += "<span class='icon cr_colouric'></span>"} // colouric?
            desc += "<br /><span class='icon cr_atk_" + critter_data[cid][6] + "'></span><span class='icon cr_def_" + critter_data[cid][7] + "'></span>" // attack/defense
            desc += "<span class='icon cr_mhp_" + critter_data[cid][5] + "'></span><br />" // max hp
            desc += "<span class='icon cr_ab_" + critter_opt_data["ability"][critter_data[cid][8]][2] + "'></span><br />" // ability
            desc += "<span class='icon cr_of_" + critter_opt_data["offense"][critter_data[cid][9]][2] + "'></span><br />" // offensive
            desc += "<span class='icon cr_df_" + critter_opt_data["defense"][critter_data[cid][10]][2] + "'></span>" // defensive
            desc += "</span>"
        }
        return desc;
    } else {
        return getTranslatedString("critter.invalid_id.desc", {"id": id});
    }
}

var fuel_unit_name_gen = function(id, dv=0, stack=1, nbt={}) {
    if (dv == 1) {
        return getTranslatedString("item.fuel_unit.name");
    } else {
        return getTranslatedString("item.fuel_units.name", {"units": dv});
    }
}

var fuel_unit_desc_gen = function(id, dv=0, stack=1, nbt={}) {
    if (dv == 0) {
        return getTranslatedString("item.fuel_units_none.desc");
    } else if (dv == 1) {
        return getTranslatedString("item.fuel_unit.desc");
    } else {
        return getTranslatedString("item.fuel_units.desc", {"units": dv});
    }
}

/* lists */
var equiplist = [ //[name, css class for icon, description, source, bonuses, [categories], name class id, sell price]
    [["null", "iconless", "Whoops, forgot to put something here.", "An error", "", [0],0, 0]], //0
    [["armor.empty_helm", "empty_helm", "desc.empty_equip", "src.empty_equip", "", [1,28], 0, 0]], //1
    [["armor.empty_chest", "empty_chest", "desc.empty_equip", "src.empty_equip", "", [2,28], 0, 0]], //2
    [["armor.empty_legs", "empty_legs", "desc.empty_equip", "src.empty_equip", "", [3,28], 0, 0]], //3
    [["armor.empty_boots", "empty_boots", "desc.empty_equip", "src.empty_equip", "", [4,28], 0, 0]], //4
    [["armor.empty_sword", "empty_sword", "desc.empty_equip", "src.empty_equip", "", [5,28], 0, 0]], //5
    [["armor.empty_shield", "empty_shield", "desc.empty_equip", "src.empty_equip", "", [7,28], 0, 0]], //6
    [["armor.empty_acc", "empty_acc", "desc.empty_equip", "src.empty_equip", "", [8,28], 0, 0]], //7
    [["armor.empty_food", "empty_food", "desc.empty_equip", "src.empty_equip", "", [9,28], 0, 0]], //8
    [["Wooden Sword", "wood_sword", "A sword made out of wood.", "Crafting", "+1 Direct Attack", [5,23], 1, 6]], //9
    [["Wooden Shovel", "wood_shovel", "A shovel made out of wood.", "Crafting", "+1 Indirect Attack<br />+1 to Digging", [6], 1, 5]], //10
    [["Stick and Rock", "stick_rock", "A rock taped to a stick. This isn't very good.", "Crafting", "50% Chance of breaking on hit", [5,23], 1, 2]], //11
    [["Golden Carrot", "golden carrot", "A carrot made out of gold. Aren't carrots supposed to give you better eyesight?<br /><br /><span style='color:var(--idesc_dragon);'>A dragon would probably like this.</span>", "Farming", "Equip for +0.3 Indirect Defense", [9], 2, 15]], //12
    [["Diamond Shield", "diamond_shield", "A shield with a diamond in the center.", "Crafting", "+1 Indirect Defense<br />+1 Direct Defense", [7], 2, 17]], //13
    [["Golden Sword", "gold_sword", "A sword made out of gold. Seems fragile.", "Crafting", "+2 Indirect Attack<br />10% chance of breaking on hit", [5,23], 1, 10]], //14
    [["Golden Shovel", "gold_shovel", "A shovel made out of gold. Seems fragile.", "Crafting", "+1 Indirect Attack<br />+2 to Digging<br />10% chance of breaking on hit or dig", [6], 1, 9]], //15
    [["Golden Pickaxe", "gold_pickaxe", "A pickaxe made out of gold. Seems fragile.", "Crafting", "+1 Indirect Attack<br />+2 to Mining<br />10% chance of breaking on hit or mine", [6], 1, 9]], //16
    [["Golden Axe", "gold_axe", "A axe made out of gold. Seems fragile.", "Crafting", "+1 Indirect Attack<br />+2 to Chopping<br />10% chance of breaking on hit or chop", [6], 1, 9]], //17
    [["Iron Sword", "iron_sword", "A sword made out of iron.", "Crafting", "+1 Direct Attack<br />+2 Indirect Attack", [5,23], 1, 13]], //18
    [["Iron Shovel", "iron_shovel", "A shovel made out of iron.", "Crafting", "+1 Indirect Attack<br />+2 to Digging<br />5% chance to steal an item", [6], 1, 12]], //19
    [["Iron Pickaxe", "iron_pickaxe", "A pickaxe made out of iron.", "Crafting", "+1 Direct Attack<br />+2 to Mining", [6], 1, 12]], //20
    [["Iron Axe", "iron_axe", "A axe made out of iron.", "Crafting", "+1 Direct Attack<br />+1 Indirect Attack<br />+2 to Chopping", [6], 1, 12]], //21
    [["Stone Sword", "stone_sword", "A sword made out of stone.", "Crafting", "+1 Direct Attack<br />+1 Indirect Attack", [5,23], 1, 8]], //22
    [["Stone Shovel", "stone_shovel", "A shovel made out of stone.", "Crafting", "+1 Indirect Attack<br />+1 to Digging", [6], 1, 7]], //23
    [["Stone Pickaxe", "stone_pickaxe", "A pickaxe made out of stone.", "Crafting", "+1 Indirect Attack<br />+1 to Mining", [6], 1, 7]], //24
    [["Stone Axe", "stone_axe", "A axe made out of stone.", "Crafting", "+1 Direct Attack<br />+1 to Chopping", [6], 1, 7]], //25
    [["Diamond Sword", "diamond_sword", "A sword made out of diamonds.", "Crafting", "+2 Direct Attack<br />+1 Indirect Attack", [5,23], 2, 18]], //26
    [["Diamond Shovel", "diamond_shovel", "A shovel made out of diamonds.", "Crafting", "+2 Indirect Attack<br />+3 to Digging<br />10% chance to steal an item", [6], 2, 17]], //27
    [["Diamond Pickaxe", "diamond_pickaxe", "A pickaxe made out of diamonds.", "Crafting", "+1 Direct Attack<br />+2 Indirect Attack<br />+3 to Mining", [6], 2, 17]], //28
    [["Diamond Axe", "diamond_axe", "A axe made out of diamonds.", "Crafting", "+2 Direct Attack<br />+3 to Chopping", [6], 2, 17]], //29
    [["Wooden Pickaxe", "wood_pickaxe", "A pickaxe made out of wood.", "Crafting", "+1 Indirect Attack<br />+1 to Mining", [6], 1, 5]], //30
    [["Wooden Axe", "wood_axe", "A axe made out of wood.", "Crafting", "+1 Indirect Attack<br />+1 to Chopping", [6], 1, 5]], //31
    [["Logo 3", "logo_3", 'The "3" from the logo.', "Unknown", "", [28,29], 4, 0]], //32
    [["Logo F", "logo_f", 'The "F" from the logo. Why\'s it so small now?', "Unknown", "", [28,29], 4, 0]], //33
    [["Logo S", "logo_s", 'The "S" from the logo.', "Unknown", "", [28,29], 4, 0]], //34
    [["Rock", "rock", "It's a small rock.", "Gathering", "Throw to deal 4 damage", [20,21], 1, 3]], //35
    [["Coal", "coal", "It's a piece of coal.", "Mining", "Counts as 4 fuel units", [24,27], 1, 7]], //36
    [["Diamond", "diamond", "It's a diamond. These things are rare!", "Mining", "", [11,24,57], 2, 13]], //37
    [["Decent Hammer", "decent_hammer", "Bonk.", "Crafting", "+1 Direct Attack", [5,23], 1, 4]], //38
    [["Slingshot", "slingshot", "You shoot things with it.", "Crafting", "+1 Indirect Attack<br />Can be used with ammo to deal more damage", [5,21], 2, 9]], //39
    [["Flint & Steel", "flint_and_steel", "Sets things on fire.", "Crafting", "+30% chance to inflict On Fire on hit for 1 turn<br />+1 <span class=\"fire\">Fire</span> damage", [5,20,49], 1, 7]], //40
    [["TNT", "tnt", "Explodes after being ignited.", "Unknown", "", [17,47], 2, 0]], //41
    [["Icicle", "icicle", "It's cold, and kinda pointy.", "Gathering", "+10% chance to inflict Frozen on hit for 1 turn<br />+1 <span class=\"ice\">Ice</span> damage", [5,23,53], 1, 5]], //42
    [["Tray of Cookies", "cookie_tray", "A tray filled with cookies.", "Cooking", "Gain 1d2+2 random cookies", [20,42], 1, 0]], //43
    [
        ["Oak Log", "oak_log", "An oak log.", "Chopping", "", [17], 1, 8], //0
        ["Birch Log", "birch_log", "A birch log.", "Chopping", "", [17], 1, 8], //1
    ], //44
    [["Stick", "stick_item", "It's a stick. You can use it in a bunch of different things.", "Chopping", "Counts as 1 fuel unit", [11,27], 1, 1]], //45
    [
        ["Oak Planks", "oak_planks", "Some oak planks.", "Chopping", "Counts as 2 fuel units", [11,17,27], 1, 2], //0
        ["Birch Planks", "birch_planks", "Some birch planks.", "Chopping", "Counts as 2 fuel units", [11,17,27], 1, 2], //1
    ], //46
    [["Rotting Mush", "crop_mush", "Eww, why did you keep this?", "Farming", "Make it into fertilizer, or just get rid of it<br />Potion effect: Nausea (1 turn)", [11,14,30], 1, 0]], //47
    [["Banana", "banana", "Potassium", "Unknown", "Eat it for potassium", [10,14,30], 3, 12]], //48
    [
        ["Sand", "sand", "A cube of sand. Carful, or it'll get everywhere.", "Digging", "Throw it at someone to Blind them for a turn", [17,21], 1, 3],
        ["Red Sand", "red_sand", "A cube of red sand. It's red because of iron. I think.", "Digging", "Throw it at someone to Blind them for a turn", [17,21], 1, 4],
    ], //49
    [["Gravel", "gravel", "A cube of gravel. Maybe there's some flint in there?", "Digging", "", [17], 1, 4]], //50
    [["Stone", "stone", "A cube of stone. Finally, some decent tools!", "Mining", "", [11,17,24], 1, 5]], //51
    [
        ["Sandstone", "sandstone", "A cube of sandstone.", "Crafting", "", [17], 1, 5],
        ["Red Sandstone", "red_sandstone", "A cube of red sandstone.", "Crafting", "", [17], 1, 6],
    ], //52
    [["Bricks", "bricks", "A cube of bricks. You could make a wall out of this.", "Crafting", "", [17], 1, 6]], //53
    [["Stone Bricks", "stone_bricks", "A cube of stone bricks. You could make a wall out of this.", "Crafting", "", [17], 1, 8]], //54
    [
        ["Sandstone Bricks", "sandstone_bricks", "A cube of sandstone bricks. You could make a wall out of this.", "Crafting", "", [17], 1, 8],
        ["Red Sandstone Bricks", "red_sandstone_bricks", "A cube of red sandstone bricks. You could make a wall out of this.", "Crafting", "", [17], 1, 9],
    ], //55
    [
        ["Carved Sandstone", "carved_sandstone", "A cube of carved sandstone. Nice carvings.", "Carving", "", [17], 1, 9],
        ["Red Carved Sandstone", "red_carved_sandstone", "A cube of carved red sandstone. What, exactly, are those carvings supposed to represent?", "Carving", "", [17], 1, 10],
    ], //56
    [["Glass", "glass_block", "A cube of glass. See-through, which makes up for its fragility.", "Crafting", "", [11,17], 1, 4]], //57
    [["Diamond Helmet", "diamond_helm", "A helmet made of diamond.", "Crafting", "+1 Direct Defense", [1], 2, 20]], //58
    [["Diamond Chestplate", "diamond_chest", "A chestplate made of diamond.", "Crafting", "+2 Direct Defense", [2], 2, 22]], //59
    [["Diamond Leggings", "diamond_legs", "A pair of leggings made of diamond.", "Crafting", "+1 Direct Defense<br />+1 Indirect Defense", [3], 2, 20]], //60
    [["Diamond Boots", "diamond_boots", "A pair of boots made of diamond.", "Crafting", "+1 Indirect Defense", [4], 2, 20]], //61
    [["Apple", "apple", "An apple.", "Farming", "+5 HP on consume", [10,30], 1, 5]], //62
    [["Golden Apple", "golden apple", "A golden apple. One of the more common golden foods, and the only edible one.", "Farming", "Equip for +0.5 Max HP<br />Eat for Regen and Defense Up (1 turn)", [9,30], 2, 15]], //63
    [["Orange", "orange", "An orange. Not very similar to an apple, which is why they're compared so often.", "Farming", "+5 HP on consume", [10,30], 1, 5]], //64
    [["Golden Orange", "golden orange", "A golden orange. No one knows whether it's golden on the inside, because the peel is solid gold and can't be removed.", "Farming", "Equip for +0.5 AGI", [9], 2, 15]], //65
    [["Carrot", "carrot", "A carrot. It's orange.<br /><br /><span style='color:var(--idesc_dragon);'>A dragon would probably like this.</span>", "Farming", "+5 HP on consume<br />Consume like 10 at once to turn very slightly orange", [10,30], 1, 5]], //66
    [["Clay Shield", "clay_shield", "A shield made of clay. Try to avoid letting it shatter.", "Pottery", "+1 Indirect Defense<br />+1 Direct Defense<br />15% chance of breaking on hit", [7], 1, 6]], //67
    [["Iron Ore", "iron_ore", "Some iron ore. Can be crafted into bars, requiring 2 ore per bar.", "Mining", "Potion effect: 50% chance of Defense Up (1 turn)", [24], 1, 7]], //68
    [["Copper Ore", "copper_ore", "Some copper ore. Can be crafted into bars, requiring 1 ore per bar.", "Mining", "", [24], 1, 6]], //69
    [["Gold Ore", "gold_ore", "Some gold ore. Can be crafted into bars, requiring 1 ore per bar.", "Mining", "", [24], 1, 5]], //70
    [["Gold Bar", "gold_bar", "A bar of solid gold. Actually kind of soft for a metal.", "Crafting", "", [11,25], 1, 7]], //71
    [["Iron Bar", "iron_bar", "A bar of solid iron. It's pretty sturdy.", "Crafting", "", [11,25], 1, 9]], //72
    [["Copper Bar", "copper_bar", "A bar of solid copper. Try to avoid getting it oxidized.", "Crafting", "", [11,25], 1, 8]], //73
    [["Water", "water_drop", "One (1) level of water. Good for 0.5 turns of plant growth.", "Gathering", "", [11,50], 1, 0]], //74
    [["Emerald", "emerald", "It's an emerald. These things are rare!", "Mining", "", [11,24,57], 2, 13]], //75
    [["Hardite Ore", "hardite_ore", "Some hardite ore. Can be crafted into bars, requiring 3 ore per bar.", "Mining", "", [24], 3, 18]], //76
    [["Hardite Bar", "hardite_bar", "A bar of solid hardite, named after both how hard it is to get, and how hard it is as a material. This stuff can cut diamond!", "Crafting", "", [11,25], 3, 21]], //77
    [["Rock-on-a-Stick", "rock_on_stick", "A rock fastened to a stick with more rock. Better than just using tape.", "Crafting", "20% Chance of breaking on hit<br />+1 Indirect Attack", [5,23], 1, 3]], //78
    [
        ["Sandstone Brick Wall", "sandstone_brick_wall", "A wall made of Sandstone Bricks.", "Crafting", "40 HP<br />3+1 Defense", [19,20], 1, 8],
        ["Red Sandstone Brick Wall", "red_sandstone_brick_wall", "A wall made of Red Sandstone Bricks.", "Crafting", "45 HP<br />4+1 Defense", [19,20], 1, 9],
    ], //79
    [["Brick Wall", "brick_wall", "A wall made of Bricks.", "Crafting", "50 HP<br />3+1 Defense", [19,20], 1, 8]], //80
    [["Stone Brick Wall", "stone_brick_wall", "A wall made of Stone Bricks.", "Crafting", "50 HP<br />4+1 Defense", [19,20], 1, 8]], //81
    [["Stone Wall", "stone_wall", "A wall made of Stone.", "Crafting", "50 HP<br />4+1 Defense", [19,20], 1, 8]], //82
    [["Iron Wall", "iron_wall", "A wall made of Iron.", "Crafting", "75 HP<br />4+2 Defense", [19,20], 2, 13]], //83
    [["Hardite Wall", "hardite_wall", "A wall made of Hardite.", "Crafting", "125 HP<br />5+2 Defense", [19,20], 3, 26]], //84
    [
        ["Oak Plank Wall", "oak_wall", "A wall made of Oak Planks.", "Crafting", "25 HP<br />2 Defense", [19,20], 1, 6], //0
        ["Birch Plank Wall", "birch_wall", "A wall made of Birch Planks.", "Crafting", "25 HP<br />2 Defense", [19,20], 1, 6], //1
    ], //85
    [["Flint", "flint", "A piece of flint.", "Crafting", "Potion effect: 50% chance of Attack Up (1 turn)", [11], 1, 3]], //86
    [["String", "string", "A piece of string.", "Gathering", "", [11], 1, 3]], //87
    [["Bow", "bow", "A bow. You can shoot arrows with it.", "Crafting", "+1 Indirect Attack<br />Consume 1 Arrow for +1 Direct Attack", [22,5], 2, 9]], //88
    [
        ["Arrow", "arrow", "An arrow.", "Crafting", "Use it with a bow", [22,56], 1, 4], //0
        ["Poisoned Arrow", "poison_arrow", "An arrow that's been poisoned.", "Crafting", "Use it with a bow<br />Inflicts Poisoned for one turn", [22,56], 1, 6], //1
        ["Flame Arrow", "fire_arrow", "An arrow that's been set on fire.", "Crafting", "Use it with a bow<br />Inflicts On Fire for one turn", [22,56], 1, 0], //2
    ], //89
    [["Empty Can", "can", "A can with nothing in it.", "Crafting", "Fill it with stuff", [11], 1, 1]], //90
    [["Canned Water", "can", "A can with water in it. You can drink it.", "Crafting", "Drink for 3 HP", [30], 1, 2]], //91
    [["Can of Beans", "can", "A can with beans in it.", "Farming", "+5 HP on consume", [10,30], 1, 5]], //92
    [["Golden Can of Beans", "golden can", "A golden can with golden beans in it.", "Farming", "Equip for +0.3 Direct Defense", [9], 2, 15]], //93
    [["Clay Bowl", "clay_bowl", "A bowl made of clay.", "Pottery", "", [], 1, 6]], //94
    [["Clay Vase", "clay_vase", "A vase made of clay.", "Pottery", "", [], 1, 6]], //95
    [["Glass Bowl", "glass_bowl", "A bowl made of glass.", "Crafting", "", [], 1, 6]], //96
    [["Red Tulip", "red_tulip", "A red tulip. Can be turned into red dye.", "Gardening", "", [14,15], 1, 5]], //97
    [["Orange Tulip", "orange_tulip", "An orange tulip. Can be turned into orange dye.", "Gardening", "", [14,15], 1, 5]], //98
    [["Yellow Tulip", "yellow_tulip", "A yellow tulip. Can be turned into yellow dye.", "Gardening", "", [14,15], 1, 5]], //99
    [["Cyan Tulip", "cyan_tulip", "A cyan tulip. Can be turned into cyan dye.", "Gardening", "", [14,15], 1, 5]], //100
    [["Azure Tulip", "azure_tulip", "An azure tulip. Can be turned into cyan dye.", "Gardening", "", [14,15], 1, 5]], //101
    [["Blue Tulip", "blue_tulip", "A blue tulip. Can be turned into blue dye.", "Gardening", "", [14,15], 1, 5]], //102
    [["Purple Tulip", "purple_tulip", "A purple tulip. Can be turned into purple dye.", "Gardening", "", [14,15], 1, 5]], //103
    [["Magenta Tulip", "magenta_tulip", "A magenta tulip. Can be turned into magenta dye.", "Gardening", "", [14,15], 1, 5]], //104
    [["White Dandelion", "white_dandelion", "A white dandelion. Can be turned into white dye.", "Gardening", "Potion effect: 25% chance of Regen (1 turn)", [14,15], 1, 5]], //105
    [["Gray Dandelion", "gray_dandelion", "A gray dandelion. Can be turned into gray dye.", "Gardening", "Potion effect: 25% chance of Regen (1 turn)", [14,15], 1, 5]], //106
    [["Yellow Dandelion", "yellow_dandelion", "A yellow dandelion. Can be turned into yellow dye.", "Gardening", "Potion effect: 25% chance of Regen (1 turn)", [14,15], 1, 5]], //107
    [["Leaf", "leaf", "A single leaf.", "Gathering", "", [11], 1, 2]], //108
    [["Blade of Grass", "grass_blade", "A single blade of grass.", "Gathering", "", [11], 1, 1]], //109
    [["Block of Leaves", "leaf_block", "A block of leaves.", "Gathering", "", [17], 1, 6]], //110
    [
        ["White Dye", "white_dye", "A blob of white dye.", "Crafting", "", [11], 1, 7], //0
        ["Light Gray Dye", "light_gray_dye", "A blob of light gray dye.", "Crafting", "", [11], 1, 7], //1
        ["Gray Dye", "gray_dye", "A blob of gray dye.", "Crafting", "", [11], 1, 7], //2
        ["Black Dye", "black_dye", "A blob of black dye.", "Crafting", "", [11], 1, 7], //3
        ["Pink Dye", "pink_dye", "A blob of pink dye.", "Crafting", "", [11], 1, 7], //4
        ["Red Dye", "red_dye", "A blob of red dye.", "Crafting", "", [11], 1, 7], //5
        ["Orange Dye", "orange_dye", "A blob of orange dye.", "Crafting", "", [11], 1, 7], //6
        ["Brown Dye", "brown_dye", "A blob of brown dye.", "Crafting", "", [11], 1, 7], //7
        ["Yellow Dye", "yellow_dye", "A blob of yellow dye.", "Crafting", "", [11], 1, 7], //8
        ["Green Dye", "green_dye", "A blob of green dye.", "Crafting", "", [11], 1, 7], //9
        ["Dark Green Dye", "dark_green_dye", "A blob of dark green dye.<br /><br />Lime? What's that?", "Crafting", "", [11], 1, 7], //10
        ["Cyan Dye", "cyan_dye", "A blob of cyan dye.", "Crafting", "", [11], 1, 7], //11
        ["Light Blue Dye", "light_blue_dye", "A blob of light blue dye.", "Crafting", "", [11], 1, 7], //12
        ["Blue Dye", "blue_dye", "A blob of blue dye.", "Crafting", "", [11], 1, 7], //13
        ["Purple Dye", "purple_dye", "A blob of purple dye.", "Crafting", "", [11], 1, 7], //14
        ["Magenta Dye", "magenta_dye", "A blob of magenta dye.", "Crafting", "", [11], 1, 7], //15
    ], //111
    [["Empty Slot", "no_bg", "This slot is inaccessible.", "", "", [], 0, 0]], //112
    [["Empty Slot", "unused", "This slot used to have an item, but now it doesn't. (Yellow Dye; 113 -> 111:8)", "", "", [], 0, 0]], //113
    [["Empty Slot", "unused", "This slot used to have an item, but now it doesn't. (Green Dye; 114 -> 111:9)", "", "", [], 0, 0]], //114
    [["Empty Slot", "unused", "This slot used to have an item, but now it doesn't. (Cyan Dye; 115 -> 111:11)", "", "", [], 0, 0]], //115
    [["Empty Slot", "unused", "This slot used to have an item, but now it doesn't. (Blue Dye; 116 -> 111:13)", "", "", [], 0, 0]], //116
    [["Empty Slot", "unused", "This slot used to have an item, but now it doesn't. (Purple Dye; 117 -> 111:14)", "", "", [], 0, 0]], //117
    [["Empty Slot", "unused", "This slot used to have an item, but now it doesn't. (Magenta Dye; 118 -> 111:15)", "", "", [], 0, 0]], //118
    [["Empty Slot", "unused", "This slot used to have an item, but now it doesn't. (White Dye; 119 -> 111:0)", "", "", [], 0, 0]], //119
    [["Empty Slot", "unused", "This slot used to have an item, but now it doesn't. (Gray Dye; 120 -> 111:2)", "", "", [], 0, 0]], //120
    [["Empty Slot", "unused", "This slot used to have an item, but now it doesn't. (Black Dye; 121 -> 111:3)", "", "", [], 0, 0]], //121
    [["Glass Bottle", "glass_bottle", "A bottle made of glass.", "Crafting", "Fill it with stuff", [11], 1, 3]], //122
    [["Water Bottle", "water_bottle", "A bottle filled with water.", "Crafting", "Drink for 3 HP<br />Or fill it with more stuff and cook it", [30,11], 1, 5]], //123
    [["Fertilizer", "fertilizer", "Some fertilizer.", "Crafting", "Use on a plant for +1 growth turn", [20], 2, 9]], //124
    [["Dirt", "dirt", "A block of dirt. Not the best material to make a house out of, but you do you.", "Digging", "", [17], 1, 0]], //125
    [["Grass", "grass", "A block of dirt with some grass on it.", "Unknown", "", [17], 2, 0]], //126
    [["Wooden Shield", "wood_shield", "A shield made out of wood.", "Crafting", "+1 Indirect Defense", [7], 1, 5]], //127
    [["Iron Shield", "iron_shield", "A shield made out of wood, with an iron core.", "Crafting", "+1 Direct Defense", [7], 1, 12]], //128
    [["Gold Shield", "gold_shield", "A shield made out of wood, with a golden core.", "Crafting", "+1 Indirect Defense", [7], 1, 9]], //129
    [["Radish", "radish", "A radish.", "Farming", "+5 HP on consume", [10,30], 1, 5]], //130
    [["Golden Radish", "golden radish", "A golden radish.", "Farming", "Equip for +0.3 Mining", [9], 2, 15]], //131
    [
        ["Potato", "potato", "A potato.", "Farming", "+5 HP on consume<br />Potion effect: 25% chance of Defense Up (1 turn)", [10,30], 1, 5], //0
        ["Poisonous Potato", "poison_potato", "A potato that probably shouldn't be eaten.", "Farming", "+5 HP on consume<br />60% chance to Poison for 1 turn<br />Potion effect: 60% chance of Poisoned (1 turn)", [10,30], 1, 0], //0
    ], //132
    [["Golden Potato", "golden potato", "A golden potato. No, it's not butter.", "Farming", "Equip for +0.3 Chopping", [9], 2, 15]], //133
    [["Cabbage", "cabbage", "A head of cabbage.", "Farming", "+5 HP on consume", [10,30], 1, 5]], //134
    [["Golden Cabbage", "golden cabbage", "A golden head of cabbage. Some people use the leaves as decoration.", "Farming", "Equip for +0.3 Direct Attack", [9], 2, 15]], //135
    [["Corn Cob", "corn", "A cob of corn.", "Farming", "+5 HP on consume", [10,30], 1, 5]], //136
    [["Golden Corn Cob", "golden corn", "A golden cob of corn. No, it's not butter.", "Farming", "Equip for +0.4 Indirect Attack", [9], 2, 15]], //137
    [["Beetroot", "beetroot", "A beetroot.", "Farming", "+5 HP on consume", [10,30], 1, 5]], //138
    [["Golden Beetroot", "golden beetroot", "A golden beetroot.", "Farming", "Equip for +0.3 Digging", [9], 2, 15]], //139
    [["Buttered Corn Cob", "butter_corn", "A cob of corn, covered in butter.", "Crafting", "+7 HP on consume", [10,30], 1, 8]], //140
    [["Baked Potato", "baked_potato", "A baked potato.", "Cooking", "+7 HP on consume", [10,30], 1, 8]], //141
    [["Butter", "butter", "A bar of butter. No, it's not golden.", "Unknown", "-1 HP on consume<br />Potion effect: 30% chance to upgrade one effect", [10,11], 1, 2]], //142
    [["Wooden Bowl", "wood_bowl", "A bowl made of wood.", "Carving", "", [11], 1, 3]], //143
    [
        ["Oak Table", "oak_table", "A table made of oak planks. You can put things on it.", "Crafting", "Place it down as a Structure", [18], 1, 3], //0
        ["Birch Table", "birch_table", "A table made of birch planks. You can put things on it.", "Crafting", "Place it down as a Structure", [18], 1, 3], //1
    ], //144
    [
        ["Oak Chair", "oak_chair", "A chair made of oak planks. You can sit on it.", "Crafting", "", [18], 1, 2], //0
        ["Birch Chair", "birch_chair", "A chair made of birch planks. You can sit on it.", "Crafting", "", [18], 1, 2], //0
    ], //145
    [["Folding Chair", "fold_chair", "A chair made of iron. It can fold into a smaller form.", "Crafting", "", [18], 2, 8]], //146
    [["Wheat Bundle", "wheat_bundle", "A bundle of wheat. You can't eat it raw, but you can make it into dough.", "Farming", "", [11,13], 1, 5]], //147
    [["Golden Wheat Bundle", "golden wheat", "A bundle of golden wheat. You can make it into dough, or equip it.", "Farming", "Equip for +0.3 Farming", [11,13], 2, 15]], //148
    [["Dough", "dough", "A ball of dough.", "Cooking", "", [11], 1, 6]], //149
    [["Golden Dough", "golden dough", "A ball of golden dough.", "Cooking", "Equip for +0.3 Cooking", [11], 2, 15]], //150
    [["Apple Pie", "pie", "A pie with apples in it.", "Cooking", "+10 HP on consume", [10,30], 1, 11]], //151
    [["Golden Apple Pie", "golden pie", "A golden pie with golden apples in it.", "Cooking", "+17 HP on consume<br />Gain Regen+ and Defense Up+ (1 turn) on consume<br />Can't be equipped", [9,30], 3, 30]], //152
    [["Bread", "bread", "An entire loaf of bread. You could probably slice it.", "Cooking", "+10 HP on consume<br />Counts as two food items<br />Potion effect: +3 HP<br />Potion effect: 50% chance to add 1 turn to one effect", [10,30], 1, 8]], //153
    [["Wooden Hoe", "wood_hoe", "A hoe made out of wood. There isn't much of a point for this.", "Crafting", "+1 Indirect Attack<br />+1 Farming", [6], 1, 5]], //154
    [["Stone Hoe", "stone_hoe", "A hoe made out of stone. There isn't much of a point for this.", "Crafting", "+1 Indirect Attack<br />+1 Farming", [6], 1, 7]], //155
    [["Gold Hoe", "gold_hoe", "A hoe made out of gold. There isn't much of a point for this.", "Crafting", "+1 Indirect Attack<br />+2 Farming<br />10% chance of breaking per hit or harvest", [6], 1, 9]], //156
    [["Iron Hoe", "iron_hoe", "A hoe made out of iron. There isn't much of a point for this.", "Crafting", "+1 Indirect Attack<br />+2 Farming", [6], 1, 12]], //157
    [["Diamond Hoe", "diamond_hoe", "A hoe made out of diamond. Why did you <i>make</i> this?", "Crafting", "+1 Indirect Attack<br />+3 Farming", [6], 2, 17]], //158
    [["Gold Helmet", "gold_helm", "A helmet made of gold.", "Crafting", "+1 Indirect Defense", [1], 1, 11]], //159
    [["Gold Chestplate", "gold_chest", "A chestplate made of gold.", "Crafting", "+1 Direct Defense", [2], 1, 12]], //160
    [["Gold Leggings", "gold_legs", "A pair of leggings made of gold.", "Crafting", "+1 Direct Defense", [3], 1, 11]], //161
    [["Gold Boots", "gold_boots", "A pair of boots made of gold.", "Crafting", "+1 Indirect Defense", [4], 1, 11]], //162
    [["Iron Helmet", "iron_helm", "A helmet made of iron.", "Crafting", "+1 Direct Defense", [1], 1, 14]], //163
    [["Iron Chestplate", "iron_chest", "A chestplate made of iron.", "Crafting", "+1 Direct Defense<br />+1 Indirect Defense", [2], 1, 15]], //164
    [["Iron Leggings", "iron_legs", "A pair of leggings made of iron.", "Crafting", "+1 Direct Defense<br />+1 Indirect Defense", [3], 1, 14]], //165
    [["Iron Boots", "iron_boots", "A pair of boots made of iron.", "Crafting", "+1 Indirect Defense", [4], 1, 14]], //166
    [["Red Mushroom", "red_mushroom", "A mushroom with a spotted red cap.", "Gathering", "Inflicts Poisoned for 1 turn on consume<br />Potion effect: Poison (1 turn)", [10,30], 1, 4]], //167
    [["Brown Mushroom", "brown_mushroom", "A mushroom with a brown cap.", "Gathering", "+2 HP on consume<br />Potion effect: 50% chance to add 1 turn to one effect", [10,30], 1, 3]], //168
    [["Wooden Hammer", "wood_hammer", "A hammer made of wood.", "Crafting", "(has not been assigned attack values yet)<br />+1 Construction", [6], 1, 5]], //169
    [["Wooden Trowel", "wood_trowel", "A trowel made of wood.", "Crafting", "(has not been assigned attack values yet)<br />+1 Gardening", [6], 1, 5]], //170
    [["Wooden Fishing Rod", "wood_fish_rod", "A fishing rod made of wood.", "Crafting", "(has not been assigned attack values yet)<br />+1 Fishing", [6], 1, 5]], //171
    [["Stone Hammer", "stone_hammer", "A hammer made of stone.", "Crafting", "(has not been assigned attack values yet)<br />+1 Construction", [6], 1, 7]], //172
    [["Stone Trowel", "stone_trowel", "A trowel made of stone.", "Crafting", "(has not been assigned attack values yet)<br />+1 Gardening", [6], 1, 7]], //173
    [["Stone Fishing Rod", "stone_fish_rod", "A fishing rod made of stone.", "Crafting", "(has not been assigned attack values yet)<br />+1 Fishing", [6], 1, 7]], //174
    [["Gold Hammer", "gold_hammer", "A hammer made of gold.", "Crafting", "(has not been assigned attack values yet)<br />+2 Construction", [6], 1, 9]], //175
    [["Gold Trowel", "gold_trowel", "A trowel made of gold.", "Crafting", "(has not been assigned attack values yet)<br />+2 Gardening", [6], 1, 9]], //176
    [["Gold Fishing Rod", "gold_fish_rod", "A fishing rod made of gold.", "Crafting", "(has not been assigned attack values yet)<br />+2 Fishing", [6], 1, 9]], //177
    [["Iron Hammer", "iron_hammer", "A hammer made of iron.", "Crafting", "(has not been assigned attack values yet)<br />+2 Construction", [6], 1, 12]], //178
    [["Iron Trowel", "iron_trowel", "A trowel made of iron.", "Crafting", "(has not been assigned attack values yet)<br />+2 Gardening", [6], 1, 12]], //179
    [["Iron Fishing Rod", "iron_fish_rod", "A fishing rod made of iron.", "Crafting", "(has not been assigned attack values yet)<br />+2 Fishing", [6], 1, 12]], //180
    [["Diamond Hammer", "diamond_hammer", "A hammer made of diamond.", "Crafting", "(has not been assigned attack values yet)<br />+3 Construction", [6], 2, 17]], //181
    [["Diamond Trowel", "diamond_trowel", "A trowel made of diamond.", "Crafting", "(has not been assigned attack values yet)<br />+3 Gardening", [6], 2, 17]], //182
    [["Diamond Fishing Rod", "diamond_fish_rod", "A fishing rod made of diamond.", "Crafting", "(has not been assigned attack values yet)<br />+3 Fishing", [6], 2, 17]], //183
    [["Old Boot", "old_boot", "An old boot you fished up.", "Fishing", "", [11], 1, 3]], //184
    [["Pair of Old Boots", "old_boot_pair", "A pair of old boots you fished up. Surprisingly effective at defending you.", "Crafting", "+1 Direct Defense<br />+1 Fishing", [4], 1, 7]], //185
    [["Wad of String", "string_wad", "A wad of String you fished up.", "Fishing", "", [20], 1, 0]], //186
    [["Goldfish", "goldfish", "A small goldfish.", "Fishing", "Potion effect: 30% chance of Water Resistance (1 turn)<br />Cook it to make it edible", [26], 1, 3]], //187
    [["Jellyfish", "jellyfish", "A small jellyfish. Packs a mean sting.", "Fishing", "Throw it at someone to deal 5 damage<br />Throw Effect: 20% chance of Paralysis (1 turn)", [26], 1, 5]], //188
    [["Bloach", "fish_3", "{placeholder}", "Fishing", "", [0,26], 1, 8]], //189
    [["Salmon", "fish_4", "{placeholder}", "Fishing", "", [0,26], 2, 10]], //190
    [["Solid Goldfish", "golden goldfish", "Like a goldfish, but actually gold.", "Fishing", "Cook it to make it equippable", [26], 2, 15]], //191
    [["Spinach", "spinach", "A bunch of spinach. Supposedly makes you stronger.", "Farming", "+5 HP on consume<br />Potion effect: 25% chance of Attack Up (1 turn)", [10,30], 1, 5]], //192
    [["Golden Spinach", "golden spinach", "A bunch of gold spinach. <i>Actually</i> makes you stronger.", "Farming", "Equip for 0.5 STR", [9], 2, 19]], //193
    [["Ripe Apple", "ripe apple", "An apple that's riper than usual.", "Farming", "+10 HP on consume", [10,30], 1, 7]], //194
    [["Ripe Orange", "ripe orange", "An orange that's riper than usual.", "Farming", "+10 HP on consume", [10,30], 1, 7]], //195
    [["Ripe Carrot", "ripe carrot", "A carrot that's riper than usual. It's oranger.<br /><br /><span style='color:var(--idesc_dragon);'>A dragon would probably like this.</span>", "Farming", "+10 HP on consume", [10,30], 1, 7]], //196
    [["Can of Ripe Beans", "ripe can", "A can of beans that's riper than usual.", "Farming", "+10 HP on consume", [10,30], 1, 7]], //197
    [["Ripe Radish", "ripe radish", "A radish that's riper than usual.", "Farming", "+10 HP on consume", [10,30], 1, 7]], //198
    [["Ripe Potato", "ripe potato", "A potato that's riper than usual.", "Farming", "+10 HP on consume<br />Potion effect: 40% chance of Defense Up (1 turn)", [10,30], 1, 7]], //199
    [["Ripe Cabbage", "ripe cabbage", "A head of cabbage that's riper than usual.", "Farming", "+10 HP on consume", [10,30], 1, 7]], //200
    [["Ripe Corn Cob", "ripe corn", "A cob of corn that's riper than usual.", "Farming", "+10 HP on consume", [10,30], 1, 7]], //201
    [["Ripe Beetroot", "ripe beetroot", "A beetroot that's riper than usual. Can be turned into red dye.", "Farming", "+10 HP on consume", [10,30], 1, 7]], //202
    [["Ripe Wheat Bundle", "ripe wheat_bundle", "A bundle of wheat that's riper than usual. Still can't be eaten directly, though.", "Farming", "", [10], 1, 7]], //203
    [["Ripe Spinach", "ripe spinach", "A bunch of spinach that's riper than usual.", "Farming", "+10 HP on consume<br />Potion effect: 40% chance of Attack Up (1 turn)", [10,30], 1, 7]], //204
    [["Enchanted Golden Carrot", "enchanted golden carrot", "An enchanted carrot made out of gold. Surprisingly rare.", "Farming", "+0.7 Indirect Defense", [9], 3, 29]], //205
    [["Enchanted Golden Apple", "enchanted golden apple", "An enchanted golden apple. This is really rare!", "Farming", "Equip for +1.2 Max HP<br />Eat for Regen+ and Defense Up+ (1 turn)", [9,30], 3, 31]], //206
    [
        ["Red Potion", "potion_red", "A bottle filled with a red liquid. Who knows what it does?", "Alchemy", "", [16], 1, 0], //0
        ["Orange Potion", "potion_orange", "A bottle filled with an orange liquid. Who knows what it does?", "Alchemy", "", [16], 1, 0], //1
        ["Yellow Potion", "potion_yellow", "A bottle filled with a yellow liquid. Who knows what it does?", "Alchemy", "", [16], 1, 0], //2
        ["Green Potion", "potion_green", "A bottle filled with a green liquid. Who knows what it does?", "Alchemy", "", [16], 1, 0], //3
        ["Cyan Potion", "potion_cyan", "A bottle filled with a cyan liquid. Who knows what it does?", "Alchemy", "", [16], 1, 0], //4
        ["Blue Potion", "potion_blue", "A bottle filled with a blue liquid. Who knows what it does?", "Alchemy", "", [16], 1, 0], //5
        ["Purple Potion", "potion_purple", "A bottle filled with a purple liquid. Who knows what it does?", "Alchemy", "", [16], 1, 0], //6
    ], //207
    [
        ["Red Splash Potion", "splash_potion_red", "A bottle filled with a red liquid, meant to be thrown. Who knows what it does?", "Alchemy", "", [16,21], 1, 0], //0
        ["Orange Splash Potion", "splash_potion_orange", "A bottle filled with an orange liquid, meant to be thrown. Who knows what it does?", "Alchemy", "", [16,21], 1, 0], //1
        ["Yellow Splash Potion", "splash_potion_yellow", "A bottle filled with a yellow liquid, meant to be thrown. Who knows what it does?", "Alchemy", "", [16,21], 1, 0], //2
        ["Green Splash Potion", "splash_potion_green", "A bottle filled with a green liquid, meant to be thrown. Who knows what it does?", "Alchemy", "", [16,21], 1, 0], //3
        ["Cyan Splash Potion", "splash_potion_cyan", "A bottle filled with a cyan liquid, meant to be thrown. Who knows what it does?", "Alchemy", "", [16,21], 1, 0], //4
        ["Blue Splash Potion", "splash_potion_blue", "A bottle filled with a blue liquid, meant to be thrown. Who knows what it does?", "Alchemy", "", [16,21], 1, 0], //5
        ["Purple Splash Potion", "splash_potion_purple", "A bottle filled with a purple liquid, meant to be thrown. Who knows what it does?", "Alchemy", "", [16,21], 1, 0], //6
    ], //208
    [["Empty Slot", "unused", "This slot used to have an item, but now it doesn't. (Yellow Potion; 209 -> 207:2)", "", "", [], 0, 0]], //209
    [["Empty Slot", "unused", "This slot used to have an item, but now it doesn't. (Green Potion; 210 -> 207:3)", "", "", [], 0, 0]], //210
    [["Empty Slot", "unused", "This slot used to have an item, but now it doesn't. (Cyan Potion; 211 -> 207:4)", "", "", [], 0, 0]], //211
    [["Empty Slot", "unused", "This slot used to have an item, but now it doesn't. (Blue Potion; 212 -> 207:5)", "", "", [], 0, 0]], //212
    [["Empty Slot", "unused", "This slot used to have an item, but now it doesn't. (Purple Potion; 213 -> 207:6)", "", "", [], 0, 0]], //213
    [["Cooked Solid Goldfish", "golden goldfish", "It's melted a little from the heat.", "Cooking", "+0.3 Fishing", [9], 2, 17]], //214
    [["Cooked Goldfish", "goldfish", "A small goldfish, cooked to perfection.", "Cooking", "Consume for +7 HP", [10,30], 1, 5]], //215
    [["Leather", "leather", "A piece of leather, probably from a cow.", "Mobs", "", [11], 1, 3]], //216
    [["Bone", "bone", "A single bone. Why <i>do</i> bones always look like that, anyway?", "Mobs", "", [11], 1, 2]], //217
    [["Wool", "wool", "A block of wool from a sheep.", "Mobs", "", [11,17], 1, 4]], //218
    [["Feather", "feather", "A single feather.", "Mobs", "", [11], 1, 2]], //219
    [["Rotten Flesh", "rotten_flesh", "Some rotting flesh from a zombie. I guess you could eat it?", "Mobs", "+3 HP on consume<br />Eat for Hunger (1 turn, 80% chance)", [10,30,11], 1, 0]], //220
    [["Cooked Flesh", "cooked_flesh", "Some rotting flesh that's been cooked. Probably safer to eat now.", "Cooking", "+4 HP on consume", [10,30], 1, 0]], //221
    [["Golden Flesh", "golden flesh", "Some golden flesh. Yes, this is a thing that exists.", "Mobs", "Equip for +0.3 HP per turn", [9], 2, 0]], //222
    [
        ["Green Slime Ball", "slime_ball", "A ball of green slime. It's somewhat sweet.", "Mobs", "", [11], 1, 3], //0
        ["Red Slime Ball", "red_slime_ball", "A ball of red slime. It's somewhat spicy.", "Mobs", "", [11], 1, 4], //1
        ["Blue Slime Ball", "blue_slime_ball", "A ball of blue slime. It's somewhat salty.", "Mobs", "", [11], 1, 4], //2
        ["Yellow Slime Ball", "yellow_slime_ball", "A ball of yellow slime. It's somewhat bitter.", "Mobs", "", [11], 1, 5], //3
        ["Purple Slime Ball", "purple_slime_ball", "A ball of purple slime. It's poisonous.", "Mobs", "", [11], 2, 11] //4
    ], //223
    [["Sap", "sap", "Some sap from a tree.", "Gathering", "Counts as 2 fuel units<br />Consume for -1 HP", [11], 1, 1]], //224
    [[fuel_unit_name_gen, "fuel_outline", fuel_unit_desc_gen, "", "", [], 0, 0]], //225
    [["Any Raw Meat", "any_raw_meat", "You can use any raw meat for this.", "", "", [], 0, 0]], //226
    [["Empty Slot", "unused", "This slot used to have an item, but now it doesn't. (3 Fuel Units; 227 -> 225:3)", "", "", [], 0, 0]], //227
    [["Empty Slot", "unused", "This slot used to have an item, but now it doesn't. (4 Fuel Units; 228 -> 225:4)", "", "", [], 0, 0]], //228
    [["Empty Slot", "unused", "This slot used to have an item, but now it doesn't. (5 Fuel Units; 229 -> 225:5)", "", "", [], 0, 0]], //229
    [["Empty Slot", "unused", "This slot used to have an item, but now it doesn't. (6 Fuel Units; 230 -> 225:6)", "", "", [], 0, 0]], //230
    [["Empty Slot", "unused", "This slot used to have an item, but now it doesn't. (7 Fuel Units; 231 -> 225:7)", "", "", [], 0, 0]], //231
    [["Empty Slot", "unused", "This slot used to have an item, but now it doesn't. (8 Fuel Units; 232 -> 225:8)", "", "", [], 0, 0]], //232
    [
        ["Christmas Stocking", "stocking", "A stocking for Christmas. Hang it up during your turn to get extra rewards!", "Christmas", "Hang it up<br />Can be used while KOd", [12,20], 4, 0], //0
        ["Filled Christmas Stocking", "stocking", "A stocking for Christmas with some goodies in it.", "Christmas", "You can take items out of it<br />Disappears when empty", [12,48], 4, 0], //1
    ], //233
    [["Effect Candy", "blue_candy", "A small piece of candy, wrapped in a blue wrapper. Eat it to gain a random positive effect!", "Events", "Consume for one of the following: Regen, Attack Up, Defense Up", [12,30,31], 2, 0]], //234
    [["Skill Candy", "green_candy", "A small piece of candy, wrapped in a green wrapper. Eat it to gain 300% in a random skill!", "Events", "Consume for 300% in a random skill you have that is below level 5", [12,30,31], 2, 0]], //235
    [["Item Candy", "red_candy", "A small piece of candy, wrapped in a red wrapper. Eat it to gain a random item!", "Events", "Consume for a random item (see Info)", [12,30,31], 2, 0]], //236
    [["Mystery Gift", "gift_box", "A gift in a box. It could be anything!", "Item Candy", "Open it to gain a random item out of all the items currently in the game", [12,20], 3, 0]], //237
    [["Time Candy", "black_candy", "A small piece of candy, wrapped in a black and yellow wrapper. If you have this in your inventory, you'll be allowed three posts in a turn, instead of two!", "Unknown", "Holding this item allows one extra post in a turn (consumed during extra post)", [12,30,31], 3, 0]], //238
    [["Old Candy", "gray_candy", "A small piece of old candy. The color on the wrapper has faded away, so you can't tell what kind of candy this was.", "Old Stocking", "Consume for a reduced version of a different candy's effect", [12,30,31], 1, 0]], //239
    [["Old Christmas Stocking", "old_stocking", "An old stocking for Christmas. It's too late to hang it up, but there might still be something inside...", "Post-Christmas", "Look inside", [12,20], 3, 0]], //240
    [["LTT Hoodie", "ltt_hoodie", "Uh... thanks, Incendiary?", "Unknown", "+0.7 Indirect Defense<br />+2 Intelligence", [2,12], 2, 0]], //241
    [["Furnace", "furnace", "A furnace. Having this in your inventory will passively reduce fuel requirements in recipies by 1.", "Crafting", "Reduces recipe fuel requirements by one", [17], 1, 7]], //242
    [["Box", "box", "A box. It has the following items in it:", "Unknown", "You can take items out of it<br />Disappears when empty", [20], 1, 0]], //243
    [["Hammer", "hammer", "A hammer capable of messing with Structures.", "Unknown", "Use it to mess with a Structure somehow (not consumed)<br />Equip for +0.7 Direct Attack and +4 damage vs. Structures", [6,29], 4, 0]], //244
    [["bobm", "bobm", "it goes boom", "Unknown", "Use it near someone to Die and deal 1d40+40 to everyone in the nearby area (including you)", [20,23,29,47], 4, 0]], //245
    [["Deployable Cannon", "cannon", "A cannon, ready for deploying.", "Unknown", "Deploy it to create a Cannon", [20,29], 4, 0]], //246
    [["Sponge", "sponge", "A sponge. It can absorb water, and the abrasive side is kinda scratchy.", "Unknown", "Use it to remove water from something (not consumed)<br />Equip for +0.7 Direct Attack and 15% chance to inflict Soaked (1 turn)<br />+1 <span class=\"water\">Water</span> damage", [6,29], 4, 0]], //247
    [["Esolang", "esolang", "An \"esoteric language\". You're not sure what it does, or how to use it, but that's the fun part!<br />Skill level: ", "Unknown", "Does something random on use<br />Usually fails, chance of failure decreases with higher Skill level<br />Using it increases Skill level", [20,29], 4, 0]], //248
    [["Santa Hat", "santa_hat", "A traditional(-ish) Christmas hat.", "Christmas", "+1 Indirect Defense<br />+1 Indirect Attack<br />+5% XP from Monsters", [1,12], 1, 6]], //249
    [["Chain Helmet", "chain_helm", "A helmet made of chainmail.", "Crafting", "+1 Indirect Defense", [1], 1, 11]], //250
    [["Chain Chestplate", "chain_chest", "A chestplate made of chainmail.", "Crafting", "+1 Direct Defense<br />+1 Indirect Defense", [2], 1, 12]], //251
    [["Chain Leggings", "chain_legs", "A pair of leggings made of chainmail.", "Crafting", "+1 Direct Defense", [3], 1, 11]], //252
    [["Chain Boots", "chain_boots", "A pair of boots made of chainmail.", "Crafting", "+1 Indirect Defense", [4], 1, 11]], //253
    [["4 Leaf Clover", "clover4", "A clover with 4 leaves. Supposedly brings you luck.", "Gathering", "+1 Luck<br />+0.1 Indirect Defense", [8,11,14], 1, 6]], //254
    [["8 Leaf Clover", "clover8", "A clover with 8 leaves. This is really lucky!", "Meatpasting", "Holding this makes you luckier", [14], 2, 0]], //255
    [["Raw Beef", "raw_beef", "Some raw beef from a cow. You should probably cook it.", "Mobs", "Consume for +3 HP<br />50% chance to give Nausea (1 turn)", [10,11,30], 1, 3]], //256
    [["Steak", "cooked_beef", "Some steak from a cow.", "Cooking", "Consume for +6 HP", [10,30], 1, 6]], //257
    [["Raw Pork", "raw_pork", "Some raw pork from a pig. You should probably cook it.", "Mobs", "Consume for +3 HP<br />50% chance to give Nausea (1 turn)", [10,11,30], 1, 3]], //258
    [["Cooked Pork", "cooked_pork", "Some pork from a pig.", "Cooking", "Consume for +6 HP", [10,30], 1, 6]], //259
    [["Raw Chicken", "raw_chicken", "Some raw chicken from a chicken. You should probably cook it.", "Mobs", "Consume for +3 HP<br />75% chance to give Nausea (1 turn)", [10,11,30], 1, 3]], //260
    [["Cooked Chicken", "cooked_chicken", "Some chicken from a chicken.", "Cooking", "Consume for +6 HP", [10,30], 1, 6]], //261
    [["Raw Mutton", "raw_mutton", "Some raw mutton from a sheep. You should probably cook it.", "Mobs", "Consume for +4 HP<br />50% chance to give Nausea (1 turn)", [10,11,30], 1, 3]], //262
    [["Cooked Mutton", "cooked_mutton", "Some mutton from a sheep.", "Cooking", "Consume for +8 HP", [10,30], 1, 6]], //263
    [["Meat Paste", "meat_paste", "A paste made from some meat. What, exactly, would you do with this?", "Crafting", "Consume for +5 HP", [11], 2, 10]], //264
    [["Cookie", "cookie", "A plain cookie.", "Cooking", "Consume for +3 HP", [10,30], 1, 3]], //265
    [["Chocolate Chip Cookie", "chocolate_chip_cookie", "A cookie with chocolate chips inside. A classic.", "Cooking", "Consume for +4 HP", [10,30], 1, 4]], //266
    [["Apple Cookie", "apple_cookie", "A cookie with small chunks of apples inside.", "Cooking", "Consume for +5 HP", [10,30], 1, 4]], //267
    [["Carrot Cookie", "carrot_cookie", "A cookie with small ribbons of carrot inside. It's like a carrot cake, but a cookie.<br /><br /><span style='color:var(--idesc_dragon);'>A dragon would probably like this.</span>", "Cooking", "Consume for +5 HP", [10,30], 1, 6]], //268
    [["Cocoa Beans", "cocoa_bean", "Some cocoa beans.", "Farming", "", [13,11], 1, 5]], //269
    [["Chocolate Chips", "chocolate_chips", "Some chocolate chips.", "Cooking", "Consume for +2 HP", [10,11], 1, 2]], //270
    [["Chocolate Bar", "chocolate_bar", "A bar made of solid chocolate. Yummy.", "Cooking", "Consume for +5 HP", [10], 1, 6]], //271
    [["Wooden Staff", "wood_staff", "A staff made of wood.", "Crafting", "(has not been assigned attack values yet)<br />+1 Damage for \"magical\" attacks", [5], 1, 5]], //272
    [["Stone Staff", "stone_staff", "A staff made of stone.", "Crafting", "(has not been assigned attack values yet)<br />+1 Damage for \"magical\" attacks", [5], 1, 7]], //273
    [["Iron Staff", "iron_staff", "A staff made of iron.<br />For some reason, you get the feeling that this will be useful...", "Crafting", "(has not been assigned attack values yet)<br />+2 Damage for \"magical\" attacks", [5,11], 1, 12]], //274
    [["Gold Staff", "gold_staff", "A staff made of gold.", "Crafting", "(has not been assigned attack values yet)<br />+2 Damage for \"magical\" attacks", [5], 1, 9]], //275
    [["Diamond Staff", "diamond_staff", "A staff made of diamond.", "Crafting", "(has not been assigned attack values yet)<br />+3 Damage for \"magical\" attacks", [5], 2, 17]], //276
    [["Orange Pie", "pie", "A pie with oranges in it.", "Cooking", "+9 HP on consume", [10,30], 1, 7]], //277
    [["Shepherd's Pie", "pie", "A pie with meat in it, topped with mashed potatoes.", "Cooking", "+14 HP on consume", [10,30], 2, 17]], //278
    [["Blueberries", "blueberries", "A handful of blueberries.", "Farming", "+4 HP on consume", [10,30], 1, 5]], //279
    [["Golden Blueberries", "golden blueberries", "A handful of golden blueberries.", "Farming", "Equip for +0.3 Gathering", [9], 2, 15]], //280
    [["Cherries", "cherries", "A handful of cherries.", "Farming", "+4 HP on consume", [10,30], 1, 5]], //281
    [["Golden Cherries", "golden cherries", "A handful of golden cherries. Not sure what they have to do with ballet, but ok.", "Farming", "Equip for +0.3 Ballet", [9], 2, 15]], //282
    [["Blackberries", "blackberries", "A handful of blackberries.", "Farming", "+4 HP on consume", [10,30], 1, 5]], //283
    [["Golden Blackberries", "golden blackberries", "A handful of golden blackberries. What, exactly, could you craft with these?", "Farming", "Equip for +0.3 Crafting", [9], 2, 15]], //284
    [["Peach", "peach", "A peach.", "Farming", "+4 HP on consume", [10,30], 1, 5]], //285
    [["Golden Peach", "golden peach", "A golden peach. I <em>guess</em> you could carve it?", "Farming", "Equip for +0.3 Carving", [9], 2, 15]], //286
    [["Pear", "pear", "A pear.", "Farming", "+4 HP on consume", [10,30], 1, 5]], //287
    [["Golden Pear", "golden pear", "A golden pear. No clue how you'd use this to build.", "Farming", "Equip for +0.3 Construction", [9], 2, 15]], //288
    [["Blackberry Pie", "pie", "A pie with blackberries in it.", "Cooking", "+9 HP on consume", [10,30], 1, 6]], //289
    [["Cherry Pie", "pie", "A pie with cherries in it.", "Cooking", "+9 HP on consume", [10,30], 1, 6]], //290
    [["Pumpkin Pie", "pie", "A pie with pumpkin in it. A staple of fall.", "Cooking", "+11 HP on consume", [10,30], 1, 8]], //291
    [["Peach Pie", "pie", "A pie with peaches in it.", "Cooking", "+10 HP on consume", [10,30], 1, 6]], //292
    [["Canned Apple Slices", "can", "A can with apple slices in it.", "Crafting", "Open it", [20], 1, 6]], //293
    [["Canned Orange Slices", "can", "A can with orange slices in it.", "Crafting", "Open it", [20], 1, 6]], //294
    [["Canned Peach Slices", "can", "A can with peach slices in it.", "Crafting", "Open it", [20], 1, 6]], //295
    [["Canned Pear Slices", "can", "A can with pear slices in it.", "Crafting", "Open it", [20], 1, 6]], //296
    [["Canned Carrots", "can", "A can with carrots in it.<br /><br /><span style='color:var(--idesc_dragon);'>A dragon would probably like this, if it can open it.</span>", "Crafting", "Open it", [20], 1, 6]], //297
    [["Canned Potatoes", "can", "A can with potatoes in it.", "Crafting", "Open it", [20], 1, 6]], //298
    [["Canned Corn", "can", "A can with corn in it.", "Crafting", "Open it", [20], 1, 6]], //299
    [["Canned Blueberries", "can", "A can with blueberries in it.", "Crafting", "Open it", [20], 1, 6]], //300
    [["Canned Cherries", "can", "A can with cherries in it.", "Crafting", "Open it", [20], 1, 6]], //301
    [["Canned Radish Slices", "can", "A can with radish slices in it.", "Crafting", "Open it", [20], 1, 6]], //302
    [["Baby Carrots", "baby_carrots", "Some baby carrots.<br /><br /><span style='color:var(--idesc_dragon);'>A small dragon would probably like these.</span>", "Cooking", "Consume for +6 HP", [10,30], 1, 4]], //303
    [["Bucket", "bucket", "A bucket. It can hold liquids, or be used as a helmet.", "Crafting", "+0.7 Direct Defense", [1,11,20], 1, 2]], //304
    [["Water Bucket", "water_bucket", "A bucket filled with water.", "Bucket", "", [20], 1, 4]], //305
    [["Milk Bucket", "milk_bucket", "A bucket filled with milk.", "Bucket", "Drink it for +7 HP<br />Drink it to reduce all active effects by 1 turn", [20,30], 1, 6]], //306
    [["Lava Bucket", "lava_bucket", "A bucket filled with lava. Somehow, it's not melting.", "Bucket", "", [20], 2, 20]], //307
    [["Egg", "egg", "An egg.", "Mobs", "", [11,21], 1, 2]], //308
    [["Sticker Book", "sticker_book", "A book for you to put stickers in.", "Free", "Put stickers in it", [33], 4, 0]], //309
    [["Sticker Page", "sticker_page", "An extra page for your sticker book. Fits 4 stickers.", "Crafting", "Put it in your Sticker Book", [20,33], 3, 0]], //310
    [["Sword Sticker", "sticker_sword", "A sticker of a diamond sword.<br />[St1, 1, C]", "Unknown", "Put it in your Sticker Book for +0.5 Direct Attack", [20,37], 1, 0]], //311
    [["Raised Sword Sticker", "sticker_sword_rare", "A raised sticker of a diamond sword. It's too bad you can't take the sword off and attack people with it.<br />[St1, 2, R]", "Unknown", "Put it in your Sticker Book for +1.1 Direct Attack", [20,37], 3, 0]], //312
    [["Shield Sticker", "sticker_shield", "A sticker of a diamond shield.<br />[St1, 3, C]", "Unknown", "Put it in your Sticker Book for +0.5 Direct Defense", [20,37], 1, 0]], //313
    [["Raised Shield Sticker", "sticker_shield_rare", "A raised sticker of a diamond shield. Too bad the diamond's fake.<br />[St1, 4, R]", "Unknown", "Put it in your Sticker Book for +1.1 Direct Defense", [20,37], 3, 0]], //314
    [["Knife Sticker", "sticker_knife", "A sticker of a knife. How'd this get in the game before an actual knife?<br />[St1, 5, C]", "Unknown", "Put it in your Sticker Book for +2 Damage to Melee attacks", [20,37], 1, 0]], //315
    [["Raised Knife Sticker", "sticker_knife_rare", "A raised sticker of a knife.<br />[St1, 6, R]", "Unknown", "Put it in your Sticker Book for +5 Damage to Melee attacks", [20,37], 3, 0]], //316
    [["Bow Sticker", "sticker_bow", "A sticker of a bow.<br />[St1, 7, C]", "Unknown", "Put it in your Sticker Book for +2 Damage to Ranged attacks", [20,37], 1, 0]], //317
    [["Raised Bow Sticker", "sticker_bow_rare", "A raised sticker of a bow. The string is made of actual string.<br />[St1, 8, R]", "Unknown", "Put it in your Sticker Book for +5 Damage to Ranged attacks", [20,37], 3, 0]], //318
    [["Iron Ore Sticker", "sticker_iron", "A sticker of a lump of iron ore.<br />[St1, 9, C]", "Unknown", "Put it in your Sticker Book for +0.7 Mining", [20,37], 1, 0]], //319
    [["Raised Iron Ore Sticker", "sticker_iron_rare", "A raised sticker of a lump of iron ore.<br />[St1, 10, R]", "Unknown", "Put it in your Sticker Book for +2 Mining", [20,37], 3, 0]], //320
    [["Apple Sticker", "sticker_apple", "A sticker of an apple. The fruit, not the cat.<br />[St1, 11, C]", "Unknown", "Put it in your Sticker Book for +0.9 HP/turn", [20,37], 1, 0]], //321
    [["Raised Apple Sticker", "sticker_apple_rare", "A raised sticker of an apple.<br />[St1, 12, R]", "Unknown", "Put it in your Sticker Book for +2.5 HP/turn", [20,37], 3, 0]], //322
    [["Carrot Sticker", "sticker_carrot", "A sticker of a carrot.<br />[St1, 13, C]", "Unknown", "Put it in your Sticker Book for +0.7 Farming", [20,37], 1, 0]], //323
    [["Raised Carrot Sticker", "sticker_carrot_rare", "A raised sticker of a carrot. It smells like a carrot.<br />[St1, 14, R]", "Unknown", "Put it in your Sticker Book for +2 Farming", [20,37], 3, 0]], //324
    [["Sap Sticker", "sticker_sap", "A sticker of some sap.<br />[St1, 15, C]", "Unknown", "Put it in your Sticker Book for +0.7 Chopping", [20,37], 1, 0]], //325
    [["Raised Sap Sticker", "sticker_sap_rare", "A raised sticker of some sap. The sap isn't sticky, but the sticker is.<br />[St1, 16, R]", "Unknown", "Put it in your Sticker Book for +2 Chopping", [20,37], 3, 0]], //326
    [["Stone Shield", "stone_shield", "A shield made out of wood, with a stone core.", "Crafting", "+0.5 Indirect Defense<br />+0.5 Direct Defense", [7], 1, 7]], //327
    [["Sticker Pack (St1)", "sticker_pack_cyan", "A pack of two stickers. Open it and see what you get!", "Unknown", "Grants two random stickers", [20], 2, 16]], //328
    [["Dragon Transformation Potion", "mystery_potion", "A bottle filled with a strange liquid. It... turns you into a dragon, apparently.<br /><br />What on <i>earth</i> is going on over there?!", "Unknown", "?!?!?!", [16,29,32,33,40], 5, 0]], //329
    [["stickers.empty_sticker", "empty_sticker", "desc.empty_equip", "src.empty_equip", "", [28, 37], 0, 0]], //330
    [["Orb Sticker", "sticker_orb", "A sticker of an orb. Looks more like a circle to me.<br />[St1, 17, UC]", "Unknown", "Put it in your Sticker Book for +0.2 Direct Attack, +0.2 Direct Defense, +0.4 Max HP, and +0.1 to all Skills", [20,37], 2, 0]], //331
    [["Raised Orb Sticker", "sticker_orb_rare", "A raised sticker of an orb. Kind of an \"all-rounder\", if you catch my drift.<br />[St1, 18, VR]", "Unknown", "Put it in your Sticker Book for +0.7 Direct Attack, +0.7 Direct Defense, +1.5 Max HP, +0.3 Luck, and +0.5 to all Skills", [20,37], 3, 0]], //332
    [["Ripe Blueberries", "ripe blueberries", "A handful of blueberries that are riper than usual.", "Farming", "+10 HP on consume", [10,30], 1, 7]], //333
    [["Ripe Cherries", "ripe cherries", "A handful of cherries that are riper than usual. Can be turned into red dye.", "Farming", "+10 HP on consume", [10,30], 1, 7]], //334
    [["Ripe Blackberries", "ripe blackberries", "A handful of blackberries that are riper than usual.", "Farming", "+10 HP on consume", [10,30], 1, 7]], //335
    [["Ripe Peach", "ripe peach", "A peach that's riper than usual. Very juicy.", "Farming", "+10 HP on consume", [10,30], 1, 7]], //336
    [["Ripe Pear", "ripe pear", "A pear that's riper than usual.", "Farming", "+10 HP on consume", [10,30], 1, 7]], //337
    [["Lemon", "lemon", "A lemon. Very sour.", "Farming", "+4 HP on consume<br />Grants one turn of Sour! on consume", [10,30], 1, 5]], //338
    [["Golden Lemon", "golden lemon", "A golden lemon. It's so sour that it can channel sourness into strength. Somehow.", "Farming", "+1 Direct Attack for every turn of Sour! you currently have<br/>Sour! does not reduce Accuracy", [9], 2, 15]], //339
    [["Ripe Lemon", "ripe lemon", "A lemon that's riper than usual. Even more sour than a lemon.", "Farming", "+9 HP on consume<br />Grants one turn of Sour! on consume<br />50% chance to grant an extra turn of Sour!", [10,30], 1, 7]], //340
    [["Lime", "lime", "A lime. Quite sour.", "Farming", "+5 HP on consume<br />75% chance to grant one turn of Sour! on consume", [10,30], 1, 5]], //341
    [["Golden Lime", "golden lime", "A golden lime. Are you sure this isn't a lemon?", "Farming", "+1.1 Direct Attack for every turn of Sour! you currently have<br/>Sour! only reduces Accuracy by 0.5", [9], 2, 15]], //342
    [["Ripe Lime", "ripe lime", "A lime that's riper than usual. Even more sour than a lime.", "Farming", "+10 HP on consume<br />75% chance to grant one turn of Sour! on consume<br />30% chance to grant an extra turn of Sour!", [10,30], 1, 7]], //343
    [["Lemon Juice", "lemon_juice", "The juice of a lemon. Very sour.", "Crafting", "+2 HP on consume<br />Grants one turn of Sour! on consume", [10,30,11], 1, 5]], //344
    [["Lime Juice", "lime_juice", "The juice of a lime. Quite sour.", "Crafting", "+3 HP on consume<br />75% chance to grant one turn of Sour! on consume", [10,30,11], 1, 7]], //345
    [["Lemonade", "lemonade", "Some lemonade. The sweetness of the sugar balances out the sourness of the lemon.", "Crafting", "+8 HP on consume<br />Grants one turn of Sour! on consume<br />Grants one turn of Sugar Rush on consume", [10,30], 1, 10]], //346
    [["Limeade", "limeade", "Some limeade. If you can make it with lemons, why not limes?", "Crafting", "+10 HP on consume<br />75% chance to grant one turn of Sour! on consume<br />75% chance to grant one turn of Sugar Rush on consume", [10,30], 1, 10]], //347
    [["Sugar", "sugar", "A pile of sugar. It's sweet.", "Crafting", "+2 HP on consume<br />70% chance to grant one turn of Sugar Rush on consume", [10,30,11,46], 1, 2]], //348
    [["High Fructose Corn Syrup", "hfcs", "Blegh.", "Crafting", "-3 HP on consume<br />Grants one turn of Sugar Rush on consume", [10,30], 1, 4]], //349
    [["Popcorn", "popcorn", "Some popcorn. A movie theater staple.", "Crafting", "+7 HP on consume", [10,30], 1, 9]], //350
    [["Heart-Shaped Chocolate", "heart_chocolate", "A small chocolate in the shape of a heart. What could be inside it?", "Valentine's Day", "+1 HP on consume<br />Filled with something random", [10,30], 3, 0]], //351
    [["\"you tried\" Badge", "you_tried", "A golden badge in the shape of a star.", "Crafting", "+0.2 Direct Defense", [8], 1, 0]], //352
    [["Wooden Band", "wood_band", "A band made of wood, to go around your wrist.", "Crafting", "+0.3 Indirect Defense<br />+0.3 Indirect Attack", [8], 1, 5]], //353
    [["Stone Band", "stone_band", "A band made of stone, to go around your wrist.", "Crafting", "+0.4 Indirect Defense<br />+0.4 Indirect Attack", [8], 1, 7]], //354
    [["Iron Band", "iron_band", "A band made of iron, to go around your wrist.", "Crafting", "+0.7 Indirect Defense<br />+0.7 Indirect Attack", [8], 1, 9]], //355
    [["Gold Band", "gold_band", "A band made of gold, to go around your wrist.", "Crafting", "+0.3 Indirect Defense<br />+0.3 Indirect Attack", [8], 1, 12]], //356
    [["Diamond Band", "diamond_band", "A band made of diamond, to go around your wrist.", "Crafting", "+1.2 Indirect Defense<br />+1.2 Indirect Attack", [8], 2, 17]], //357
    [["Chalk", "chalk", "A block of chalk. It's dusty.", "Mining", "", [11,17], 1, 3]], //358
    [
        ["Lamp Oil", "lamp_oil_full", "A container of lamp oil. It's very flammable.", "Gathering", "Counts as 3 fuel units<br />Throw it at someone to inflict Oiled for 2 turns", [11,20,21,27], 1, 7], //0
        ["Lamp Oil (used)", "lamp_oil_two_thirds", "A container with some lamp oil in it. It's very flammable.", "Gathering", "Counts as 2 fuel units<br />Throw it at someone to inflict Oiled for 1 turn", [11,20,21,27], 1, 5], //1
        ["Lamp Oil (near-empty)", "lamp_oil_one_third", "A container with a little bit of lamp oil in it. It's very flammable.", "Gathering", "Counts as 1 fuel unit", [11,20,21,27], 1, 3] //2
    ], //359
    [["Pearl", "pearl", "A small, spherical pearl. Pearls that are naturally spherical are pretty rare.", "Fishing", "", [11,57], 2, 13]], //360
    [["Amethyst Shard", "amethyst", "A shard of amethyst.", "Mining", "", [11,24,57], 2, 10]], //361
    [["Quartz Shard", "quartz", "A shard of white quartz. Sometimes, it comes in different colors, but then it has a different name.", "Mining", "", [11,24,57], 2, 9]], //362
    [["Sapphire", "sapphire", "A sapphire. Why do these end up teardrop-shaped so often?", "Mining", "", [11,24,57], 2, 17]], //363
    [["Ruby", "ruby", "A small ruby. Aren't these normally square, rather than... I think that's an octagon?", "Mining", "", [11,24,57], 2, 18]], //364
    [["Thunder Stone", "thunder_stone", "It's brimming with electricity. One of these could probably power up a weapon signifcantly.<br />...if you have the right weapon.", "Unknown (FS2); Gathering with an 8-Leaf Clover (FS3)", "Can only be obtained once per game, ever<br />Combine with a specific weapon to strengthen it", [11,29,32,33], 4, 0]], //365
    [["Rope", "rope", "A coil of rope. You can climb it, if it's hung off of something.", "Crafting", "", [20,21], 1, 4]], //366
    [["Topaz", "topaz", "A single topaz. At least, it's shaped like a topaz. The color's weird.", "Mining", "", [11,24,57], 2, 13]], //367
    [["Ruby-Sapphire Bar", "ruby_sapphire_bar", "Look, I know that rubies and sapphires are just different colors of the same mineral, but that doesn't mean this makes sense.", "Crafting", "", [11,25], 2, 19]], //368
    [["Electrum Ore", "electrum_ore", "Some electrum ore. Can be crafted into bars, requiring 1 ore per bar.", "Mining", "", [24], 1, 8]], //369
    [["Electrum Bar", "electrum_bar", "A bar of electrum. Touching it gives a light static shock.", "Crafting", "", [11,25], 1, 10]], //370
    [["Electrum Nugget", "electrum_nugget", "A nugget of electrum. It's like a weak battery.", "Crafting", "", [11,41], 1, 2]], //371
    [["Gunpowder", "gunpowder", "Some black powder. Careful, it's flammable. And explosive.", "Mobs", "", [11,46], 1, 3]], //372
    [["Snow", "snow_block", "A block of snow.", "Digging", "", [11], 1, 4]], //373
    [["Snowball", "snowball", "A ball of snow.", "Crafting", "Throw it at someone to deal 1 <span class=\"ice\">Ice</span> damage", [11,21,53], 1, 1]], //374
    [["Snowball with a rock in it", "snowball_with_rock", "A ball of snow with a rock in it.", "Crafting", "Throw it at someone to deal 2 <span class=\"ice\">Ice</span> damage and 4 Typeless damage", [21,53], 1, 0]], //375
    [["Lever", "lever", "A lever. You can push it to make electricity flow.", "Crafting", "", [17], 1, 4]], //376
    [
        ["Oak Button", "oak_button", "A button made of oak planks. You can push it to make electricity flow.", "Crafting", "", [17], 1, 3], //0
        ["Birch Button", "birch_button", "A button made of birch planks. You can push it to make electricity flow.", "Crafting", "", [17], 1, 3], //1
    ], //377
    [["Stone Button", "stone_button", "A button made of stone. You can push it to make electricity flow.", "Crafting", "", [17], 1, 4]], //378
    [["Iron Button", "iron_button", "A button made of iron. You can push it to make electricity flow.", "Crafting", "", [17], 1, 6]], //379
    [
        ["Oak Pressure Plate", "oak_plate", "A pressure plate made of oak planks. You can push it to make electricity flow.", "Crafting", "", [17], 1, 4], //0
        ["Birch Pressure Plate", "birch_plate", "A pressure plate made of birch planks. You can push it to make electricity flow.", "Crafting", "", [17], 1, 4], //0
    ], //380
    [["Stone Pressure Plate", "stone_plate", "A pressure plate made of stone. You can push it to make electricity flow.", "Crafting", "", [17], 1, 5]], //381
    [["Wire String", "wire", "A string of wire. Electricity can flow through it.", "Crafting", "", [11], 1, 3]], //382
    [["Disposable Phone", "disp_phone", "A cheap phone. You can make calls on it, but it's so poorly made that it breaks when hung up.", "Crafting", "Call people on it<br />Can also call other players", [11,20], 2, 8]], //383
    [["Reuseable Phone", "reuse_phone", "A once-cheap phone, augmented with hardite to strengthen it. The downside is that it chugs through electrum nuggets like water, which is why it has three battery slots.<br />Battery status: ", "Crafting", "Uses Electrum Nuggets as batteries<br />Call people on it<br />Can also call other players<br />Does not break on usage", [20], 3, 55]], //384
    [["Used Disposable Phone", "used_disp_phone", "A cheap phone, which was broken, tossed into the sea, and then fished back up again.", "Fishing", "", [26], 1, 0]], //385
    [["Morshu's Express Pack", "crate", "A crate from Morshu, containing lamp oil, rope, and bombs.", "Phone", "Open it", [20], 1, 0]], //386
    [["Takeout Express Variety Pack", "crate", "A cardboard box with a crate-like pattern, filled with various food.", "Phone", "Open it and eat the food", [20], 1, 0]], //387
    [
        ["Mama June's Pepperoni Pizza", "pizza", "A pepperoni pizza from the \"local\" Mama June's Pizza.", "Phone", "+12 HP on consume", [10], 1, 0], //0
        ["Mama June's Cheese Pizza", "cheese_pizza", "A cheese pizza from the \"local\" Mama June's Pizza.", "Phone", "+8 HP on consume", [10], 1, 0], //1
        ["Mama June's Meatlovers Pizza", "meat_pizza", "A pizza from the \"local\" Mama June's Pizza with three different kinds of meat on it.", "Phone", "+15 HP on consume", [10], 2, 0], //2
        ["Mama June's Hawaiian Pizza", "pineapple_pizza", "A hawaiian pizza from the \"local\" Mama June's Pizza. Did you know that hawaiian pizza <em>isn't</em> named after the state?", "Phone", "+10 HP on consume", [10], 1, 0], //3
    ], //388
    [["Coin", "coin", "A coin that you minted yourself. It's obviously counterfeit, since you just swirled the gold and copper together, but for some reason all the stores you call will take it anyway?", "Crafting", "", [20], 1, 0]], //389
    [["Cod", "cod", "A small cod.", "Fishing", "Cook it to make it edible", [26], 1, 6]], //390
    [["Cooked Cod", "cooked_cod", "A small cod, cooked to perfection.", "Cooking", "Consume for +7 HP.", [10,30], 1, 8]], //391
    [["Seaweed", "seaweed", "A square of raw seaweed. Probably not that useful.", "Fishing", "Cook it to make it edible", [11], 1, 3]], //392
    [["Red Herring", "red_herring", "This is clearly the most important item in the entire game.", "Fishing", "+0.7 Direct Attack", [26,5], 2, 13]], //393
    [["Spin Fish", "spin_fish", "A really large fish. It's too large to eat, but you could spin it to knock people off of things.", "Fishing", "+1.3 Direct Attack<br />Causes knockback", [26,5], 2, 18]], //394
    [["Bag of Fish", "fish_bag", "A bag containing a number of fish.", "Fishing", "Open to gain 1d3+1 fish from any non-Junk/non-Treasure item pool", [20,42], 2, 14]], //395
    [["Bottle o' Enchanting", "potion_enchant", "A bottle filled with a bunch of skill experience.", "Fishing", "Throw it on someone (can be yourself) to give them 50% Exp to 4 random skills", [16,21], 3, 0]], //396
    [
        ["Chest", "chest", "A chest. You can put it in a structure.", "Crafting", "Stores 9 items", [17], 1, 7], //0
        ["Stone Chest", "stone_chest", "A chest made of stone. You can put it in a structure.", "Crafting", "Stores 9 items", [17], 1, 6], //1
    ], //397
    [["Official Coin", "coin_good", "An official coin from the Isles of Fighting.<br /><br />You know, the country that Trisland is technically in.", "Unknown", "", [20], 1, 0]], //398
    [
        ["Dollar Bill", "dollar_bill", "An official dollar bill from the Isles of Fighting. Valued at 4 coins.", "Unknown", "", [20], 1, 0], //0
        ["Five Dollar Bill", "five_dollar_bill", "An official five dollar bill from the Isles of Fighting. Valued at 20 coins.", "Unknown", "", [20], 2, 0], //1
    ], //399
    [["Geode", "geode", "It may look like an ordinary rock, but it actually contains several gems.", "Mining", "Open to gain 1d3+1 gems<br />Opening it will deal 1 damage", [20,42], 2, 13]], //400
    [["Contact Card (Wet)", "contact_card_wet", "A small card with a phone number and a name on it. It's soaked from being underwater, but is still legible.", "Fishing", "Use it to add the number to your contact list", [20], 1, 0]], //401
    [["Contact Card (Dry)", "contact_card_dry", "A small card with a phone number and a name on it.", "Unknown", "Use it to add the number to your contact list", [20], 1, 0]], //402
    [["Decicoin", "penny", "A decicoin that you minted yourself. It's clearly counterfeit, given all the dents, but for some reason all the stores you call will take it anyway? Valued at 1/10th of a coin.", "Crafting", "", [20], 1, 0]], //403
    [["Official Decicoin", "penny_good", "An official decicoin from the Isles of Fighting. Valued at 1/10th of a coin.", "Unknown", "", [20], 1, 0]], //404
    [["Tomato", "tomato", "A tomato.", "Farming", "+5 HP on consume", [10,30], 1, 5]], //405
    [["Golden Tomato", "golden tomato", "A golden tomato. See, it boosts Charisma because of people throwing tomatoes at comedians. Makes total sense, doesn't it?", "Farming", "+0.5 CHR", [9], 2, 15]], //406
    [["Ripe Tomato", "ripe tomato", "A tomato that's riper than usual.", "Farming", "+10 HP on consume", [10,30], 1, 7]], //407
    [["Bomb", "bomb", "A bomb. You can light it and throw it at something to blow it up.", "Crafting", "Throw it at someone after lighting it to deal 9+<span class=fire>6</span> damage", [21,22,47], 1, 4]], //408
    [["Dragon Youth Potion", "mystery_potion", "A bottle filled with a strange liquid. When used on a dragon, it'll set their age to 1.<br /><br />What a weird potion.<br /><br /><br />It smells oddly sweet.", "Unknown", "???", [16,29,32,33,40], 5, 0]], //409
    [["Dragon Age Lock Potion", "mystery_potion", "A bottle filled with a strange liquid. When used on a dragon, it'll lock their age, preventing them from growing older.<br /><br />Wait, if you combined these two...!<br /><br /><br />It smells oddly sour.", "Unknown", "???", [16,29,32,33,40], 5, 0]], //410
    [["Shrapnel Bomb", "shrapnel_bomb", "A bomb with cracks in it, designed to break into shrapnel after exploding.", "Crafting", "Throw it at someone after lighting it to deal 12+<span class=fire>6</span> damage<br />Will also inflict Bleeding for 2 turns", [21,22,47], 1, 0]], //411
    [["Scroll of Gain (4)", "scroll_01_04", "A scroll with the first and fourth runes printed on it.", "Shops", "Gain... something", [20,43], 2, 0]], //412
    [["Scroll of Gain Ore", "scroll_01_21", "A scroll that allows you to gain several ores.", "Shops", "Gain 1d3 Ore", [20,43], 2, 0]], //413
    [["Scroll of Gain (5)", "scroll_01_05", "A scroll with the first and fifth runes printed on it.", "Shops", "Gain... something", [20,43], 2, 0]], //414
    [["Scroll of Gain (3)", "scroll_01_03", "A scroll with the first and third runes printed on it.", "Shops", "Gain... something", [20,43], 2, 0]], //415
    [["Scroll of Gain (7)", "scroll_01_07", "A scroll with the first and seventh runes printed on it.", "Shops", "Gain... something", [20,43], 2, 0]], //416
    [["Scroll (Runes 6,7)", "scroll_06_07", "A scroll with the sixth and seventh runes printed on it.", "Shops", "???", [20,43], 2, 0]], //417
    [["Scroll of Large (9)", "scroll_14_09", "A scroll with the fourteenth and ninth runes printed on it.", "Shops", "???", [20,43], 2, 0]], //418
    [["Scroll of Large (10)", "scroll_14_10", "A scroll with the fourteenth and tenth runes printed on it.", "Shops", "???", [20,43], 2, 0]], //419
    [["Scroll of Large (4)", "scroll_14_04", "A scroll with the fourteenth and fourth runes printed on it.", "Shops", "???", [20,43], 2, 0]], //420
    [["Scroll of Large (30)", "scroll_14_30", "A scroll with the fourteenth and thirtieth runes printed on it.", "Shops", "???", [20,43], 2, 0]], //421
    [["Scroll of Thunderstorm", "scroll_14_11", "A scroll that summons a lightning bolt.", "Shops", "Deals 1d15+10 <span class='electric'>Electric</span> damage and inflicts Paralyzed for one turn", [20,43], 2, 0]], //422
    [["Scroll of Large (12)", "scroll_14_12", "A scroll with the fourteenth and twelfth runes printed on it.", "Shops", "???", [20,43], 2, 0]], //423
    [["Scroll of Large (13)", "scroll_14_13", "A scroll with the fourteenth and thirteenth runes printed on it.", "Shops", "???", [20,43], 2, 0]], //424
    [["Scroll of Gain (2)", "scroll_01_02", "A scroll with the first and second runes printed on it.", "Shops", "Gain... something", [20,43], 2, 0]], //425
    [["Scroll of Gain (8)", "scroll_01_08", "A scroll with the first and eigth runes printed on it.", "Shops", "Gain... something", [20,43], 2, 0]], //426
    [["Scroll of Gain Experience", "scroll_01_15", "A scroll that grants skill Exp.", "Shops", "Gain 50~75% in a random skill", [20,43], 2, 0]], //427
    [["Scroll of Gain (16)", "scroll_01_16", "A scroll with the first and sixteenth runes printed on it.", "Shops", "Gain... something", [20,43], 2, 0]], //428
    [["Scroll of Gain (17)", "scroll_01_17", "A scroll with the first and seventeenth runes printed on it.", "Shops", "Gain... something", [20,43], 2, 0]], //429
    [["Scroll of Gain (18)", "scroll_01_18", "A scroll with the first and eighteenth runes printed on it.", "Shops", "Gain... something", [20,43], 2, 0]], //430
    [["Scroll of EXP", "scroll_14_15", "A scroll that grants Misc EXP.", "Shops", "Grants 1d3+1 Misc EXP", [20,43], 2, 0]], //431
    [["Scroll of Large (20)", "scroll_14_20", "A scroll with the fourteenth and twentieth runes printed on it.", "Shops", "???", [20,43], 2, 0]], //432
    [["Scroll of Learn Pi", "scroll_15_29", "A scroll that grants you the knowledge of the first 100 digits of pi.<br />Not very useful.", "Shops", "Teaches you 100 digits of Pi", [20,43], 2, 0]], //433
    [["Scroll (Runes 25,31)", "scroll_25_31", "A scroll with the twenty-fifth and thirty-first runes printed on it.", "Shops", "???", [20,43], 2, 0]], //434
    [["Scroll of (3) Pie", "scroll_03_29", "A scroll with the third and twenty-ninth runes printed on it.", "Shops", "???", [20,43], 2, 0]], //435
    [["Scroll (Runes 23,23)", "scroll_23_23", "A scroll with the twenty-third rune printed on it twice.", "Shops", "???", [20,43], 2, 0]], //436
    [["Scroll (Runes 4,4)", "scroll_04_04", "A scroll with the fourth rune printed on it twice.", "Shops", "???", [20,43], 2, 0]], //437
    [["Scroll of (13) Ally", "scroll_13_24", "A scroll with the thirteenth and twenty-fourth runes printed on it.", "Shops", "Does something to an ally", [20,43], 2, 0]], //438
    [["Scroll of Gain (23)", "scroll_01_23", "A scroll with the first and twenty-third runes printed on it.", "Shops", "Gain... something", [20,43], 2, 0]], //439
    [["Scroll of Gain Pie", "scroll_01_29", "A scroll that gives you some nice pie.", "Shops", "Gain a random pie", [20,43], 2, 0]], //440
    [["Scroll of Gain (9)", "scroll_01_09", "A scroll with the first and ninth runes printed on it.", "Shops", "Gain... something", [20,43], 2, 0]], //441
    [["Scroll of Gain (10)", "scroll_01_10", "A scroll with the first and tenth runes printed on it.", "Shops", "Gain... something", [20,43], 2, 0]], //442
    [["Scroll (Runes 22,4)", "scroll_22_04", "A scroll with the twenty-second and fourth runes printed on it.", "Shops", "???", [20,43], 2, 0]], //443
    [["Scroll of Recruit Ally", "scroll_24_24", "A scroll that allows you to recruit any mob as an Ally, without needing to convince it.", "Shops", "Recruits an ally", [20,43], 3, 0]], //444
    [["Scroll of (7) Ally", "scroll_07_24", "A scroll with the seventh and twenty-fourth runes printed on it.", "Shops", "Does something to an ally", [20,43], 2, 0]], //445
    [["Scroll (Runes 20,5)", "scroll_20_05", "A scroll with the twentieth and fifth runes printed on it.", "Shops", "???", [20,43], 2, 0]], //446
    [["Paper", "paper", "A piece of paper.", "Crafting", "", [11], 1, 1]], //447
    [["upgrades.empty_upgrade", "empty_upgrade", "desc.empty_equip", "src.empty_equip", "", [28, 44], 0, 0]], //448
    [["No Upgrade", "upgrade_none", "An upgrade square that upgrades... absolutely nothing.", "Summon/Ally", "", [44], 1, 0]], //449
    [["Null Upgrade", "upgrade_null", "An upgrade square that upgrades... uh...", "Summon/Ally", "", [44], 0, 0]], //450
    [["Indirect Attack Upgrade", "upgrade_ind_atk", "An upgrade square that upgrades Indirect Attack.", "Summon/Ally", "+1 Indirect Attack", [44], 1, 0]], //451
    [["Direct Attack Upgrade", "upgrade_dir_atk", "An upgrade square that upgrades Direct Attack.", "Summon/Ally", "+1 Direct Attack", [44], 1, 0]], //452
    [["Indirect Defense Upgrade", "upgrade_ind_def", "An upgrade square that upgrades Indirect Defense.", "Summon/Ally", "+1 Indirect Defense", [44], 1, 0]], //453
    [["Direct Defense Upgrade", "upgrade_dir_def", "An upgrade square that upgrades Direct Defense.", "Summon/Ally", "+1 Direct Defense", [44], 1, 0]], //454
    [["Max HP Upgrade", "upgrade_max_hp", "An upgrade square that upgrades Max HP.", "Summon/Ally", "Equip on Summon/Ally for +5 Max HP<br />Equip on Player for +2 Max HP", [44], 1, 0]], //455
    [["Regen Upgrade", "upgrade_regen", "An upgrade square that upgrades Regen.", "Summon/Ally", "+3 HP/turn", [44], 1, 0]], //456
    [["Luck Upgrade", "upgrade_luck", "An upgrade square that upgrades Luck.", "Summon/Ally", "+1 Luck", [44], 1, 0]], //457
    [["Farming Upgrade", "upgrade_farming", "An upgrade square that upgrades Farming.", "Summon/Ally", "+1 Farming", [44], 1, 0]], //458
    [["Mining Upgrade", "upgrade_mining", "An upgrade square that upgrades Mining.", "Summon/Ally", "+1 Mining", [44], 1, 0]], //459
    [["Chopping Upgrade", "upgrade_chopping", "An upgrade square that upgrades Chopping.", "Summon/Ally", "+1 Chopping", [44], 1, 0]], //460
    [["Crafting Upgrade", "upgrade_crafting", "An upgrade square that upgrades Crafting.", "Summon/Ally", "+1 Crafting", [44], 1, 0]], //461
    [["Carving Upgrade", "upgrade_carving", "An upgrade square that upgrades Carving.", "Summon/Ally", "+1 Carving", [44], 1, 0]], //462
    [["Cooking Upgrade", "upgrade_cooking", "An upgrade square that upgrades Cooking.", "Summon/Ally", "+1 Cooking", [44], 1, 0]], //463
    [["Construction Upgrade", "upgrade_construction", "An upgrade square that upgrades Construction.", "Summon/Ally", "+1 Constructions", [44], 1, 0]], //464
    [["Gathering Upgrade", "upgrade_gathering", "An upgrade square that upgrades Gathering.", "Summon/Ally", "+1 Gathering", [44], 1, 0]], //465
    [["Digging Upgrade", "upgrade_digging", "An upgrade square that upgrades Digging.", "Summon/Ally", "+1 Digging", [44], 1, 0]], //466
    [["Gardening Upgrade", "upgrade_gardening", "An upgrade square that upgrades Gardening.", "Summon/Ally", "+1 Gardening", [44], 1, 0]], //467
    [["Alchemy Upgrade", "upgrade_alchemy", "An upgrade square that upgrades Alchemy.", "Summon/Ally", "+1 Alchemy", [44], 1, 0]], //468
    [["Pottery Upgrade", "upgrade_pottery", "An upgrade square that upgrades Pottery.", "Summon/Ally", "+1 Pottery", [44], 1, 0]], //469
    [["Fishing Upgrade", "upgrade_fishing", "An upgrade square that upgrades Fishing.", "Summon/Ally", "+1 Fishing", [44], 1, 0]], //470
    [["Ballet Upgrade", "upgrade_ballet", "An upgrade square that upgrades Ballet.", "Summon/Ally", "+1 Ballet", [44], 1, 0]], //471
    [["Wizard Hat", "wizard_hat", "A hat with stars on it, fit for a wizard.", "Crafting", "+1 INT", [1], 2, 12]], //472
    [["Head Apple", "apple", "An apple you place on your head. Somehow this makes you more agile?", "Crafting", "+1 AGI", [1], 2, 7]], //473
    [["\"Kiss the Chef\" Apron", "chef_apron", "An apron with a funny message.", "Crafting", "+1 CHR<br />+0.5 Cooking", [2], 2, 9]], //474
    [["One-Handed Book", "book", "A book designed to be held with one hand. It boosts Charisma because it's a joke book.", "Crafting", "+1 CHR", [7], 2, 10]], //475
    [["Book", "book", "A book.", "Crafting", "Read it", [11,20], 1, 3]], //476
    [["Fabric", "fabric", "Some fabric, to make into clothes.", "Crafting", "", [11], 1, 2]], //477
    [["Thin Gloves", "gloves", "A pair of gloves which make you better at handling things.", "Crafting", "+1 DEX", [8], 2, 8]], //478
    [["U.S. Constitution Shirt", "const_shirt", "A shirt with the Constitution of the United States on it. No points for guessing what it boosts.", "Crafting", "+1 CON", [2], 2, 13]], //479
    [["Fake Abs Shirt", "abs_shirt", "A shirt with some fake abs drawn on it.", "Crafting", "+1 STR", [2], 2, 5]], //480
    [
        ["Plain White Shirt", "plain_shirt tint_white", "A plain white shirt, made with cotton.", "Crafting", "", [2,11], 1, 7], //0
        ["Plain Light Gray Shirt", "plain_shirt tint_light_gray", "A plain light gray shirt, made with cotton.", "Crafting", "", [2,11], 1, 7], //1
        ["Plain Gray Shirt", "plain_shirt tint_gray", "A plain gray shirt, made with cotton.", "Crafting", "", [2,11], 1, 7], //2
        ["Plain Black Shirt", "plain_shirt tint_black", "A plain black shirt, made with cotton.", "Crafting", "", [2,11], 1, 7], //3
        ["Plain Pink Shirt", "plain_shirt tint_pink", "A plain pink shirt, made with cotton.", "Crafting", "", [2,11], 1, 7], //4
        ["Plain Red Shirt", "plain_shirt tint_red", "A plain red shirt, made with cotton.", "Crafting", "", [2,11], 1, 7], //5
        ["Plain Orange Shirt", "plain_shirt tint_orange", "A plain orange shirt, made with cotton.", "Crafting", "", [2,11], 1, 7], //6
        ["Plain Brown Shirt", "plain_shirt tint_brown", "A plain brown shirt, made with cotton.", "Crafting", "", [2,11], 1, 7], //7
        ["Plain Yellow Shirt", "plain_shirt tint_yellow", "A plain yellow shirt, made with cotton.", "Crafting", "", [2,11], 1, 7], //8
        ["Plain Green Shirt", "plain_shirt tint_green", "A plain green shirt, made with cotton.", "Crafting", "", [2,11], 1, 7], //9
        ["Plain Dark Green Shirt", "plain_shirt tint_dark_green", "A plain dark green shirt, made with cotton.", "Crafting", "", [2,11], 1, 7], //10
        ["Plain Cyan Shirt", "plain_shirt tint_cyan", "A plain cyan shirt, made with cotton.", "Crafting", "", [2,11], 1, 7], //11
        ["Plain Light Blue Shirt", "plain_shirt tint_light_blue", "A plain light blue shirt, made with cotton.", "Crafting", "", [2,11], 1, 7], //12
        ["Plain Blue Shirt", "plain_shirt tint_blue", "A plain blue shirt, made with cotton.", "Crafting", "", [2,11], 1, 7], //13
        ["Plain Purple Shirt", "plain_shirt tint_purple", "A plain purple shirt, made with cotton.", "Crafting", "", [2,11], 1, 7], //14
        ["Plain Magenta Shirt", "plain_shirt tint_magenta", "A plain magenta shirt, made with cotton.", "Crafting", "", [2,11], 1, 7], //15
    ], //481
    [["Welding Helmet", "welding_helmet", "A helmet meant to protect your eyes while welding.", "Crafting", "+0.4 Construction", [1,11], 1, 7]], //482
    [["Automatic Welding Helmet", "welding_helmet", "A helmet meant to protect your eyes while welding. It differs from the regular one because it activates the filter automatically, rather than having it on all the time, so it's obviously the better choice.", "Crafting", "+1.1 Construction", [1], 2, 14]], //483
    [["Knife", "knife", "Oh hey, it's the knife from the sticker.", "Crafting", "+1 Indirect Attack<br />+2 Melee Damage", [5,11,23], 1, 4]], //484
    [["Weird Egg", "ice_egg", "A large, cyan egg. It's probably from a dragon or something.", "Unknown (FS1/2); Unobtainable(?) (FS3)", "Can presumably hatch", [21,32,33,38,39], 4, 0]], //485
    [["Sweet and Sour Carrot", "tainted_carrot", "A carrot covered in what is <em>probably</em> those two mystery potions.<br /><br />Uh oh.", "Presumably Crafting (FS2); Unobtainable (FS3)", "???", [10,30,32,33,39,40], 5, 0]], //486
    [["Gemmo", "idleon_gem", "A Gem, perfect for the Gem Shop. You know, the one in a different game.", "Mining", "Hold down on it to add it to your account", [20,24,57], 2, 1]], //487
    [["Prize", "prize", "A yellow box with orange stripes. Open it for a reward!", "Unknown", "Open for 1d2+1 random items (see Info)", [20,33,42], 3, 0]], //488
    [["Smeckledorf Smurf Hat", "smurf_hat", "A hat typically worn by Smeckledorf Smurfs.", "Mobs", "+3 Max HP", [1], 2, 18]], //489
    [["Goldfish Sticker", "sticker_goldfish", "A sticker of a goldfish.<br />[St2, 1, C]", "Unknown", "Put it in your Sticker Book for +0.7 Fishing", [20,37], 1, 0]], //490
    [["Raised Goldfish Sticker", "sticker_goldfish_rare", "A raised sticker of a goldfish. Smells fishy.<br />[St2, 2, R]", "Unknown", "Put it in your Sticker Book for +2 Fishing", [20,37], 3, 30]], //491
    [["Hand Basket Sticker", "sticker_basket", "A sticker of a hand basket.<br />[St2, 3, C]", "Unknown", "Put it in your Sticker Book for +0.7 Gathering", [20,37], 1, 0]], //492
    [["Raised Hand Basket Sticker", "sticker_basket_rare", "A raised sticker of a hand basket.<br />[St2, 4, R]", "Unknown", "Put it in your Sticker Book for +2 Gathering", [20,37], 3, 30]], //493
    [["Bottle Sticker", "sticker_bottle", "A sticker of a glass bottle.<br />[St2, 5, C]", "Unknown", "Put it in your Sticker Book for +0.7 Alchemy", [20,37], 1, 0]], //494
    [["Raised Bottle Sticker", "sticker_bottle_rare", "A raised sticker of a glass bottle. Not actually made of glass.<br />[St2, 6, R]", "Unknown", "Put it in your Sticker Book for +2 Alchemy", [20,37], 3, 30]], //495
    [["Hammer Sticker", "sticker_hammer", "A sticker of a hammer.<br />[St2, 7, C]", "Unknown", "Put it in your Sticker Book for +0.7 Crafting", [20,37], 1, 0]], //496
    [["Raised Hammer Sticker", "sticker_hammer_rare", "A raised sticker of a hammer.<br />[St2, 8, R]", "Unknown", "Put it in your Sticker Book for +2 Crafting", [20,37], 3, 30]], //497
    [["Dirt Sticker", "sticker_dirt", "A sticker of a block of dirt.<br />[St2, 9, C]", "Unknown", "Put it in your Sticker Book for +0.7 Digging", [20,37], 1, 0]], //498
    [["Raised Dirt Sticker", "sticker_dirt_rare", "A raised sticker of a block of dirt. Ooh, scratch n' sniff!<br />[St2, 10, R]", "Unknown", "Put it in your Sticker Book for +2 Digging", [20,37], 3, 30]], //499
    [["Depleted Electrum Nugget", "depleted_electrum_nugget", "A depleted nugget of electrum. It's like a dead battery.", "Reusable Phone", "", [11,41], 2, 1]], //500
    [["Sticker Pack (St2)", "sticker_pack_red", "A pack of two stickers. Open it and see what you get!", "Unknown", "Grants two random stickers", [20], 2, 16]], //501
    [["Sticker Pack (All)", "sticker_pack_gray", "A pack of two stickers. Open it and see what you get!", "Unknown", "Grants two random stickers", [20], 2, 18]], //502
    [["Depleted Electrum Bar", "depleted_electrum_bar", "A depleted bar of electrum. Since there's no electricity in it anymore, you could probably used it to make tools.", "Crafting", "", [11,25], 2, 7]], //503
    [["Real Knife", "real_knife", "Uh oh.<br /><br />Wait, why bonus damage against dragons?", "Unknown", "+3 Attack<br />+5 Melee Damage<br />+5 Damage vs. Dragons", [5,23,29,32,33,40], 5, 0]], //504
    [["Emerald Helmet", "emerald_helm", "A helmet made of emerald.", "Crafting", "+1.1 Direct Defense<br />+0.5 Indirect Defense", [1], 2, 19]], //505
    [["Emerald Chestplate", "emerald_chest", "A chestplate made of emerald.", "Crafting", "+1.7 Direct Defense<br />+0.7 Indirect Defense", [2], 2, 21]], //506
    [["Emerald Leggings", "emerald_legs", "A pair of leggings made of emerald.", "Crafting", "+1.4 Direct Defense<br />+0.6 Indirect Defense", [3], 2, 19]], //507
    [["Emerald Boots", "emerald_boots", "A pair of boots made of emerald.", "Crafting", "+0.8 Direct Defense<br />+0.4 Indirect Defense", [4], 2, 19]], //508
    [["Emerald Shield", "emerald_shield", "A shield with an emerald in the center.", "Crafting", "+0.9 Indirect Defense<br />+0.9 Direct Defense", [7], 2, 16]], //509
    [["Emerald Band", "emerald_band", "A band made of emerald, to go around your wrist.", "Crafting", "+1.1 Indirect Defense<br />+1.1 Indirect Attack", [8], 2, 16]], //510
    [["Emerald Sword", "emerald_sword", "A sword made out of emeralds.", "Crafting", "+2.9 Direct Attack<br />+1.3 Indirect Attack", [5,23], 2, 17]], //511
    [["Emerald Shovel", "emerald_shovel", "A shovel made out of emeralds.", "Crafting", "+1.2 Direct Attack<br />+0.6 Indirect Attack<br />+2.9 to Digging<br />10% chance to steal an item", [6], 2, 16]], //512
    [["Emerald Pickaxe", "emerald_pickaxe", "A pickaxe made out of emeralds.", "Crafting", "+1.6 Direct Attack<br />+0.8 Indirect Attack<br />+2.9 to Mining", [6], 2, 16]], //513
    [["Emerald Axe", "emerald_axe", "A axe made out of emeralds.", "Crafting", "+1.9 Direct Attack<br />+1 Indirect Attack<br />+2.9 to Chopping", [6], 2, 16]], //514
    [["Emerald Hoe", "emerald_hoe", "A hoe made out of emerald. Why did you <i>make</i> this?", "Crafting", "+1 Indirect Attack<br />+2.9 Farming", [6], 2, 16]], //515
    [["Emerald Hammer", "emerald_hammer", "A hammer made of emerald.", "Crafting", "+1.8 Direct Attack<br />+0.7 Indirect Attack<br />+2.9 Construction", [6], 2, 16]], //516
    [["Emerald Trowel", "emerald_trowel", "A trowel made of emerald.", "Crafting", "+0.9 Direct Attack<br />+0.5 Indirect Attack<br />+2.9 Gardening", [6], 2, 16]], //517
    [["Emerald Fishing Rod", "emerald_fish_rod", "A fishing rod made of emerald.", "Crafting", "+2.9 Fishing", [6], 2, 16]], //518
    [["Emerald Staff", "emerald_staff", "A staff made of emerald.", "Crafting", "+1.1 Direct Attack<br />+0.7 Indirect Attack<br />+2.9 Damage for \"magical\" attacks", [5], 2, 16]], //519
    [["Hardite Helmet", "hardite_helm", "A helmet made of hardite.", "Crafting", "+1.3 Direct Defense<br />+0.7 Indirect Defense", [1], 3, 24]], //520
    [["Hardite Chestplate", "hardite_chest", "A chestplate made of hardite.", "Crafting", "+2 Direct Defense<br />+0.9 Indirect Defense", [2], 3, 26]], //521
    [["Hardite Leggings", "hardite_legs", "A pair of leggings made of hardite.", "Crafting", "+1.7 Direct Defense<br />+0.8 Indirect Defense", [3], 3, 24]], //522
    [["Hardite Boots", "hardite_boots", "A pair of boots made of hardite.", "Crafting", "+1.1 Direct Defense<br />+0.6 Indirect Defense", [4], 3, 24]], //523
    [["Hardite Shield", "hardite_shield", "A shield made out of wood, with a hardite core.", "Crafting", "+1.3 Indirect Defense<br />+1.3 Direct Defense", [7], 3, 21]], //524
    [["Hardite Band", "hardite_band", "A band made of hardite, to go around your wrist.", "Crafting", "+1.4 Indirect Defense<br />+1.4 Indirect Attack", [8], 3, 21]], //525
    [["Hardite Sword", "hardite_sword", "A sword made out of hardite.", "Crafting", "+4.1 Direct Attack<br />+1.7 Indirect Attack", [5,23], 3, 22]], //526
    [["Hardite Shovel", "hardite_shovel", "A shovel made out of hardite.", "Crafting", "+1.8 Direct Attack<br />+0.8 Indirect Attack<br />+4 to Digging<br />10% chance to steal an item", [6], 3, 21]], //527
    [["Hardite Pickaxe", "hardite_pickaxe", "A pickaxe made out of hardite.", "Crafting", "+2.3 Direct Attack<br />+1.1 Indirect Attack<br />+4 to Mining", [6], 3, 21]], //528
    [["Hardite Axe", "hardite_axe", "A axe made out of hardite.", "Crafting", "+2.7 Direct Attack<br />+1.1 Indirect Attack<br />+4 to Chopping", [6], 3, 21]], //529
    [["Hardite Hoe", "hardite_hoe", "A hoe made out of hardite. Since <u>Achievements</u> aren't a thing, you have basically no reason to have made this. Except for the Farming bonus, I guess.", "Crafting", "+1 Indirect Attack<br />+4 Farming", [6], 3, 21]], //530
    [["Hardite Hammer", "hardite_hammer", "A hammer made of hardite.", "Crafting", "+2.6 Direct Attack<br />+1 Indirect Attack<br />+4 Construction", [6], 3, 21]], //531
    [["Hardite Trowel", "hardite_trowel", "A trowel made of hardite.", "Crafting", "+1.2 Direct Attack<br />+0.7 Indirect Attack<br />+4 Gardening", [6], 3, 21]], //532
    [["Hardite Fishing Rod", "hardite_fish_rod", "A fishing rod made of hardite.", "Crafting", "+4 Fishing", [6], 3, 21]], //533
    [["Hardite Staff", "hardite_staff", "A staff made of hardite.", "Crafting", "+1.6 Direct Attack<br />+1 Indirect Attack<br />+4 Damage for \"magical\" attacks", [5], 3, 21]], //534
    [["Leather Cap", "leather_helm", "A cap made of leather.", "Crafting", "+0.5 Direct Defense<br />+0.2 Indirect Defense", [1], 1, 10]], //535
    [["Leather Shirt", "leather_chest", "A shirt made of leather.", "Crafting", "+0.8 Direct Defense<br />+0.3 Indirect Defense", [2], 1, 12]], //536
    [["Leather Pants", "leather_legs", "A pair of pants made of leather.", "Crafting", "+0.7 Direct Defense<br />+0.3 Indirect Defense", [3], 1, 10]], //537
    [["Leather Shoes", "leather_boots", "A pair of shoes made of leather.", "Crafting", "+0.4 Direct Defense<br />+0.2 Indirect Defense", [4], 1, 10]], //538
    [["Landmine", "mine", "A landmine. You can place it by a Structure, Crop, or Plant to make it blow up when someone goes near it.", "Crafting", "Place it somewhere", [20], 2, 14]], //539
    [["Red Rose", "red_rose", "A red rose. Can be turned into red dye.", "Gardening", "", [14,15], 1, 5]], //540
    [["Pink Rose", "pink_rose", "A pink rose. Can be turned into pink dye.", "Gardening", "", [14,15], 1, 5]], //541
    [["White Rose", "white_rose", "A white rose. Can be turned into white dye.", "Gardening", "", [14,15], 1, 5]], //542
    [["Blue Rose", "blue_rose", "A blue rose. Can be turned into blue dye.", "Gardening", "", [14,15], 1, 5]], //543
    [["Empty Slot", "unused", "This slot used to have an item, but now it doesn't. (Pink Dye; 544 -> 111:4)", "", "", [], 0, 0]], //544
    [["Empty Slot", "unused", "This slot used to have an item, but now it doesn't. (Brown Dye; 545 -> 111:7)", "", "", [], 0, 0]], //545
    [["Chains", "chains", "A string of chains.", "Crafting", "", [20], 1, 8]], //546
    [["Icy Rock", "ice_rock", "A strange rock that's cold to the touch.", "Unknown", "", [11,20,33], 3, 0]], //547
    [
        ["Can't use this slot", "no_equip", "For whatever reason, this mob can't use this equipment slot.", "", "", [28], 0, 0], //0
        ["No ripe item", "no_equip", "This crop does not have a ripe form.", "", "", [28], 0, 0], //1
    ], //548
    [["Empty Slot", "unused", "This slot used to have an item, but now it doesn't. (Red Slime Ball; 549 -> 223:1)", "", "", [], 0, 0]], //549
    [["Empty Slot", "unused", "This slot used to have an item, but now it doesn't. (Blue Slime Ball; 550 -> 223:2)", "", "", [], 0, 0]], //550
    [["Empty Slot", "unused", "This slot used to have an item, but now it doesn't. (Yellow Slime Ball; 551 -> 223:3)", "", "", [], 0, 0]], //551
    [["Empty Slot", "unused", "This slot used to have an item, but now it doesn't. (Purple Slime Ball; 552 -> 223:4)", "", "", [], 0, 0]], //552
    [["Shuriken", "shuriken", "A shuriken.", "Crafting", "Throw to deal 3 damage<br />20% chance to inflict Bleeding for 1 turn", [5,20,21], 1, 2]], //553
    [["Poisonberry", "poisonberry", "Also called Bittersweet Nightshade, this is a real thing.<br />Can be crafted into a Vial of Poison.", "Farming", "+5 HP on consume<br />Inflicts Poisoned for 1 turn on consume", [10,30], 1, 5]], //554
    [["Ripe Poisonberry", "ripe poisonberry", "A poisonberry that's riper than usual.<br />Can be crafted into a Vial of Poison.", "Farming", "+10 HP on consume<br />Inflicts Poisoned for 1 turn on consume<br />50% chance to inflict a second turn of Poisoned on consume", [10,30], 1, 7]], //555
    [["Golden Poisonberry", "golden poisonberry", "A golden poisonberry. It channels the poison into your muscles, which is more beneficial than you'd think. Still hurts, though.", "Farming", "Poisoned gives +1 Indirect Attack and +1 STR<br />Badly Poisoned gives +1 Direct Attack and +2 STR<br />Poison effects deal 1 more HP/turn", [9], 2, 15]], //556
    [["Vial of Poison", "poison_juice", "A vial of poison. You can put it on stuff.", "Crafting", "Inflicts one turn of Poisoned on consume", [30,11], 1, 5]], //557
    [["Fly", "fly", critter_desc_gen, "Unknown", "Not sure yet", [45], 1, 0]], //558
    [["Salt", "salt", "A pile of salt. It's salty.", "Crafting", "+1 HP on consume<br />Use on a food item to increase its health gain by 1", [10,30,11,46], 1, 2]], //559
    [["Homemade MSG", "msg", "Yes, you <em>did</em> in fact make this using seaweed and an anchovy. It's a real recipe; why else would it have been used in the Krabby Patty episode of <i>Binging with Babish</i>?", "Crafting", "Use on a food item to make it count as only 80% as many food items for the purpose of Nausea", [10,11,46], 1, 3]], //560
    [["Anchovy", "anchovy", "A small anchovy. You probably don't need to cook it.", "Fishing", "Consume for +3 HP", [26,10,30], 1, 3]], //561
    [["Electrum Dust", "electrum_dust", "A pile of electrum dust. It's like redstone, but green, and also made redundant by the Wire String.", "Crafting", "Potion effect: Makes a Splash Potion", [11,46], 1, 3]], //562
    [["Gold Dust", "gold_dust", "A pile of gold dust. May or may not be edible.", "Crafting", "Potion effect: 30% chance to make mobs drop money for two turns", [11,46], 1, 4]], //563
    [["Poison Powder", "poison_powder", "A pile of poisonous powder. Be careful not to breath it in.", "Crafting", "Blow it at someone to Poison them<br />If it's windy, 20% chance to poison yourself instead", [46], 1, 4]], //564
    [["Sleep Powder", "sleep_powder", "A pile of sleep-inducing powder. It smells like chloroform.", "Crafting", "Blow it at someone to inflict Asleep<br />If it's windy, 20% chance to inflict Asleep on yourself instead", [46], 1, 5]], //565
    [["Static Powder", "static_powder", "A pile of paralytic powder. Be careful not to swallow it.", "Crafting", "Blow it at someone to Paralyze them<br />If it's windy, 20% chance to paralyze yourself instead", [46], 1, 4]], //566
    [["Spark Dust", "spark_dust", "A pile of warm dust. It's quite flammable, and can be ignited using only pressure.", "Crafting", "Blow it at someone to set them On Fire<br />If it's windy, 20% chance to ignite yourself instead<br />If you take over 25 damage at once, this will ignite and set you On Fire", [11,46], 2, 7]], //567
    [["Glass Dust", "glass_dust", "A pile of glass, in dust form. This hurts your hands just touching it.", "Crafting", "Blow it at someone to make them Itchy<br />If it's windy, 30% chance to make yourself itchy instead<br />If you are not wearing gloves when throwing this, 50% chance to make yourself itchy", [46], 1, 3]], //568
    [["Nitro Dust", "enchanted nitro_dust", "A pile of explosive dust. Be <em>really</em> careful with it; if you aren't, it might explode on you.", "Crafting", "Blow it at someone to blow them up<br />If it's windy, 30% chance to blow yourself up instead<br />If you are set On Fire, are Paralyzed, or take over 10 damage at once, this will explode in your inventory", [21,46,47], 2, 0]], //569
    [["EXP Candy S", "exp_candy_s", "You just put sugar on a ball of sap. Somehow, this works.", "Crafting", "Grants 50% Exp in a random skill", [11,30,31], 1, 4]], //570
    [["Grapes", "grapes", "Some grapes. If you run a lemonade stand, keep some of these handy.", "Farming", "+5 HP on consume", [10,30], 1, 5]], //571
    [["Ripe Grapes", "ripe grapes", "Some grapes that are riper than usual. Can be turned into purple dye.", "Farming", "+10 HP on consume", [10,30], 1, 7]], //572
    [["Golden Grapes", "golden grapes", "Some golden grapes. Not really sure where the Dexterity comes from, but okay.", "Farming", "+0.5 DEX", [9], 2, 15]], //573
    [["Backpack", "backpack", "A backpack.", "Crafting", "Equip it to access the 8 item slots it has<br />Can store any non-Container item", [8, 48], 2, 19]], //574
    [["Wallet", "wallet", "A wallet. You put money in it.", "Crafting", "Hold it to access the 5 item slots it has<br />Can only store Dollar Bills, Coins, Official Coins, Decicoins, and Official Decicoins", [48], 2, 14]], //575
    [["Dust Pouch", "dust_pouch", "A pouch, to store various dusts and powders.", "Crafting", "Hold it to access the 7 item slots it has<br />Can store any Powder item", [48], 2, 17]], //576
    [["Tennis Ball", "tennis_ball", "It's a tennis ball.", "Unknown", "Throw to deal 4 damage", [20,21], 1, 4]], //577
    [["Six-Sided Die", "d6", "A single die with six sides, also called a d6. Who knows what'll happen when you use this?", "Scrolls", "Roll it and see what happens!", [20], 2, 7]], //578
    [["Scroll (Runes 32,31)", "scroll_32_31", "A scroll with the thirty-second and thirty-first runes printed on it.", "Shops", "???", [20,43], 2, 0]], //579
    [["Scroll (Runes 12,12)", "scroll_12_12", "A scroll with the twelfth rune printed on it twice.", "Shops", "???", [20,43], 2, 0]], //580
    [["Scroll (Runes 13,13)", "scroll_13_13", "A scroll with the thirteenth rune printed on it twice.", "Shops", "???", [20,43], 2, 0]], //581
    [["Scroll of (33) Metal", "scroll_33_21", "A scroll with the thirty-third and twenty-first runes printed on it.", "Shops", "???", [20,43], 2, 0]], //582
    [["Scroll of Gain (37)", "scroll_01_37", "A scroll with the first and thirty-seventh runes printed on it.", "Shops", "Gain... something", [20,43], 2, 0]], //583
    [["Scroll of Gain (36)", "scroll_01_36", "A scroll with the first and thirty-sixth runes printed on it.", "Shops", "Gain... something", [20,43], 2, 0]], //584
    [["Scroll of (34) Ore", "scroll_34_21", "A scroll with the thirty-fourth and twenty-first runes printed on it.", "Shops", "???", [20,43], 2, 0]], //585
    [["Scroll (Runes 34,17)", "scroll_34_17", "A scroll with the thirty-fourth and seventeenth runes printed on it.", "Shops", "???", [20,43], 2, 0]], //586
    [["Scroll of (35) Pie", "scroll_35_29", "A scroll with the thirty-fifth and twenty-ninth runes printed on it.", "Shops", "???", [20,43], 2, 0]], //587
    [["Scroll (Runes 23,37)", "scroll_23_37", "A scroll with the twenty-third and thirty-seventh runes printed on it.", "Shops", "???", [20,43], 2, 0]], //588
    [["Scroll (Runes 17,37)", "scroll_17_37", "A scroll with the seventeenth and thirty-seventh runes printed on it.", "Shops", "???", [20,43], 2, 0]], //589
    [["Scroll (Runes 27,12)", "scroll_27_12", "A scroll with the twenty-seventh and twelfth runes printed on it.", "Shops", "???", [20,43], 2, 0]], //590
    [["Scroll (Runes 13,17)", "scroll_13_17", "A scroll with the thirteenth and seventeenth runes printed on it.", "Shops", "???", [20,43], 2, 0]], //591
    [["Scroll (Runes 9,36)", "scroll_09_36", "A scroll with the ninth and thirty-sixth runes printed on it.", "Shops", "???", [20,43], 2, 0]], //592
    [["Scroll (Runes 33,36)", "scroll_33_36", "A scroll with the thirty-third and thirty-sixth runes printed on it.", "Shops", "???", [20,43], 2, 0]], //593
    [["Scroll (Runes 33,4)", "scroll_33_04", "A scroll with the thirty-third and fourth runes printed on it.", "Shops", "???", [20,43], 2, 0]], //594
    [["Scroll (Runes 3,32)", "scroll_03_32", "A scroll with the third and thirty-second runes printed on it.", "Shops", "???", [20,43], 2, 0]], //595
    [["Scroll (Runes 27,2)", "scroll_27_02", "A scroll with the twenty-seventh and second runes printed on it.", "Shops", "???", [20,43], 2, 0]], //596
    [["Scroll of Pie (4)", "scroll_29_04", "A scroll with the twenty-ninth and fourth runes printed on it.", "Shops", "???", [20,43], 2, 0]], //597
    [["Scroll (Runes 37,36)", "scroll_37_36", "A scroll with the thirty-seventh and thirty-sixth runes printed on it.", "Shops", "???", [20,43], 2, 0]], //598
    [["Scroll (Runes 9,40)", "scroll_09_40", "A scroll with the ninth and fortieth runes printed on it.", "Shops", "???", [20,43], 2, 0]], //599
    [["Scroll (Runes 32,2)", "scroll_32_02", "A scroll with the thirty-second and second runes printed on it.", "Shops", "???", [20,43], 2, 0]], //600
    [["Scroll (Runes 32,8)", "scroll_32_08", "A scroll with the thirty-second and eighth runes printed on it.", "Shops", "???", [20,43], 2, 0]], //601
    [["Scroll of (32) Ally", "scroll_32_24", "A scroll with the thirty-second and twenty-fourth runes printed on it.", "Shops", "???", [20,43], 2, 0]], //602
    [["Scroll of Gain (40)", "scroll_01_40", "A scroll with the first and fortieth runes printed on it.", "Shops", "Gain... something", [20,43], 2, 0]], //603
    [["Scroll of Gain (34)", "scroll_01_34", "A scroll with the first and thirty-fourth runes printed on it.", "Shops", "Gain... something", [20,43], 2, 0]], //604
    [["Scroll of Gain (25)", "scroll_01_25", "A scroll with the first and twenty-fifth runes printed on it.", "Shops", "Gain... something", [20,43], 2, 0]], //605
    [["Scroll (Runes 2,7)", "scroll_02_07", "A scroll with the second and seventh runes printed on it.", "Shops", "???", [20,43], 2, 0]], //606
    [["Scroll of (9) Pie", "scroll_09_29", "A scroll with the ninth and twenty-ninth runes printed on it.", "Shops", "???", [20,43], 2, 0]], //607
    [["Olive", "olive", "A single olive. Goes well on pizza.", "Farming", "+5 HP on consume", [10,30], 1, 5]], //608
    [["Ripe Olive", "ripe olive", "A single olive that's riper than usual.", "Farming", "+10 HP on consume", [10,30], 1, 7]], //609
    [["Golden Olive", "golden olive", "A single golden olive. Not sure how olives make you smart, but it's worth a shot.", "Farming", "+0.5 INT", [9], 2, 15]], //610
    [["Pepper", "pepper", "A pepper. It's spicy.", "Farming", "+3 HP on consume<br />Inflicts one turn of Spicy!", [10,30], 1, 5]], //611
    [["Ripe Pepper", "ripe pepper", "A pepper that's riper than usual. It's even spicier.", "Farming", "+7 HP on consume<br />Inflicts one turn of Spicy!<br />50% chance to inflict a second turn of Spicy!", [10,30], 1, 7]], //612
    [["Golden Pepper", "golden pepper", "A golden pepper. Now <em>you're</em> spicy!", "Farming", "+0.7 <span class='fire'>Fire</span> damage", [9], 2, 15]], //613
    [["Blocking Shield", "blocking_shield", "A wooden shield reinforced with an iron cross. Unlike other shields, this one increases Block Range.", "Crafting", "+1 Block Range", [7], 2, 13]], //614
    [["Coconut", "coconut", "A coconut. It has water in it.", "Farming", "+5 HP on consume", [10,30], 1, 5]], //615
    [["Ripe Coconut", "ripe coconut", "A coconut that's riper than usual. It has more water in it.", "Farming", "+9 HP on consume<br />50% chance to remove one turn of a random <span class='fire'>Fire</span> debuff, if you have one", [10,30], 1, 7]], //616
    [["Golden Coconut", "golden coconut", "A golden coconut. Now <em>you</em> have water!", "Farming", "+0.7 <span class='water'>Water</span> damage", [9], 2, 15]], //617
    [["White Tulip", "white_tulip", "A white tulip. Can be turned into white dye.", "Gardening", "", [14,15], 1, 5]], //618
    [["Sunflower", "sunflower", "A sunflower. Can be turned into yellow dye.", "Gardening", "Potion effect: +1 <span class='light'>Light</span> damage", [14,15], 1, 7]], //619
    [["Chocolate Egg", "egg_chocolate", "A small chocolate in the shape of an egg. What could be inside it?", "Easter", "+1 HP on consume<br />Filled with something random", [10,30], 3, 0]], //620
    [["Iron Nugget", "iron_nugget", "A nugget of iron. It's like a rock, but iron.", "Crafting", "", [11,41], 1, 2]], //621
    [["Copper Nugget", "copper_nugget", "A nugget of copp- oh great, it's already started oxidizing.", "Crafting", "", [11,41], 1, 2]], //622
    [["Gold Nugget", "gold_nugget", "A nugget of gold. It's like a hundred-dollar bill, except curse-made gold isn't worth much.", "Crafting", "", [11,41], 1, 1]], //623
    [["Hardite Nugget", "hardite_nugget", "A nugget of hardite. It's like a nugget of power.<br /><br />Wait, why are you trying to eat it?", "Crafting", "Potion effect: 25% chance for +1 Direct Attack (1 turn)", [11,41], 1, 4]], //624
    [["Hank's Hotdog", "hotdog_wrapped", "A hotdog, wrapped in foil. Looks like it has ketchup and mustard.", "Stores", "+6 HP on consume", [], 1, 0]], //625
    [["Bun", "bun", "A little bun with some butter on it.", "Cooking", "+6 HP on consume<br />Potion effect: +2 HP", [10,30], 1, 4]], //626
    [["[Moss] Block", "moss_block", "A block of <span style='color:var(--idesc_moss);'>[Moss]</span>. It's too big to eat.", "Digging", "", [17], 8, 9]], //627
    [["[Moss] Carpet", "moss_carpet", "A thin layer of <span style='color:var(--idesc_moss);'>[Moss]</span>, that you can put on other blocks. It's basically nature's carpet.", "Digging", "", [17], 8, 3]], //628
    [
        ["Cobblestone", "cobblestone", "<em>Finally</em>, some cobblestone!<br /><br />wait why do the tools still use regular stone", "Mining", "", [11,17], 1, 4], //0
        ["[Mossy] Cobblestone", "moss_cobblestone", "A cube of cobblestone with some <span style='color:var(--idesc_moss);'>[Moss]</span> on it.", "Crafting", "", [17], 8, 5], //1
    ], //629
    [["Iron Block", "iron_block", "A block of solid iron. Hopefully it won't rust.", "Crafting", "", [17], 2, 83]], //630
    [["Gold Block", "gold_block", "A block of solid gold. At least it looks pretty.", "Crafting", "", [17], 2, 65]], //631
    [["Diamond Block", "diamond_block", "A block of solid diamond. Wow, this will sell for a <em>lot</em>!", "Crafting", "", [17], 3, 122]], //632
    [["Emerald Block", "emerald_block", "A block of solid emerald. Wow, this will sell for a <em>lot</em>!", "Crafting", "", [17], 3, 122]], //633
    [
        ["Dispenser", "dispenser", "A dispenser. If you activate it, it'll shoot out what's inside if it can, or drop it if it can't.", "Crafting", "", [17,48], 1, 13], //0
        ["Dropper", "dropper", "A dropper. If you activate it, it'll drop what's inside, right onto the ground.", "Crafting", "", [17,48], 1, 11], //1
        ["Shooter", "shooter", "A shooter. If you activate it, it'll shoot out what's inside, no matter what.", "Crafting", "", [17,48], 2, 15], //2
    ], //634
    [["Lucky Block", "lucky_block", "A block made of what seems to be solid gold. When you break it, something interesting will happen!<br />Luck: ", "Crafting", "Break it to cause stuff to happen", [17,20], 2, 0]], //635
    [["Sleep Shroom", "sleep_shroom", "A azure mushroom with pale yellow spots. It has the unique property of its toxins inducing sleep and doing nothing else.<br />Can be crafted into Sleep Powder.", "Gathering", "+2 HP on consume<br />Inflicts 1 turn of Asleep<br />Potion effect: 50% chance into inflict Asleep (1 turn)", [10,30], 1, 3]], //636
    [["Gold Sleep Shroom", "golden sleep_shroom", "A golden mushroom with golden spots. It makes you feel drowsy just by looking at it.", "Gathering", "All Sleep types restore an additional +2 HP/turn<br />All Sleep types have their chance of waking up manually reduced by 10%", [10,30], 2, 9]], //637
    [["Thunder Knife", "thunder_knife", "<em>Uh oh.</em><br /><br />No, really, where's all this bonus damage coming from?", "Presumably Crafting", "+5 Attack<br />+5 <span class='electric'>Electric</span> Damage<br />+5 Melee Damage<br />+10 Damage vs. Dragons<br />+5 Damage vs. <span class='ice'>Ice</span>-aligned", [5,23,29,32,33,40,51], 5, 0]], //638
    [["Thunder Staff", "thunder_staff", "Oh, good; a good counterpart.", "Crafting", "+5 <span class='electric'>Electric</span> Damage<br />+2 Magic Damage<br />+3 Damage vs. <span class='electric'>Electric</span>-aligned", [5,22,29,32,33,51], 6, 0]], //639
    [["Torch", "torch", "A torch. It emits light.", "Crafting", "Can be used to light something On Fire", [11,20,49], 1, 4]], //640
    [["Quiver", "quiver", "A quiver. It can store arrows.", "Crafting", "Equip it to access the 5 item slots it has<br />Can store any Ammo item", [8, 48], 2, 18]], //641
    [
        ["Slice of Bread", "bread_slice", "A single slice of bread. You could make a sandwich, or toast it.", "Cooking", "+2.5 HP on consume<br />Counts as half a food item", [10,30], 1, 2], //0
        ["Slice of Toast", "toast", "A single slice of toast.", "Cooking", "+4 HP on consume<br />Counts as half a food item", [10,30], 1, 3], //1
    ], //642
    [["Ruler", "ruler", "A ruler. You can use it to measure things.", "Crafting", "+1 Construction<br />+1 Direct Attack", [5,6], 1, 7]], //643
    [["Coconut Water", "coconut_juice", "The water from a coconut.", "Crafting", "+2 HP on consume", [10,30,11], 1, 3]], //644
    [["Apple Juice", "apple_juice", "The juice from an apple.", "Crafting", "+2 HP on consume", [10,30,11], 1, 3]], //645
    [["Orange Juice", "orange_juice", "The juice from an orange.", "Crafting", "+2 HP on consume", [10,30,11], 1, 3]], //646
    [["Carrot Juice", "carrot_juice", "The juice from a carrot.", "Crafting", "+4 HP on consume", [10,30,11], 1, 6]], //647
    [["Tomato Juice", "tomato_juice", "The juice from a tomato.", "Crafting", "+2 HP on consume", [10,30,11], 1, 3]], //648
    [["Cherry Juice", "cherry_juice", "The juice from a cherry.", "Crafting", "+2 HP on consume", [10,30,11], 1, 3]], //649
    [["Peach Juice", "peach_juice", "The juice from a peach.", "Crafting", "+2 HP on consume", [10,30,11], 1, 3]], //650
    [["Pear Juice", "pear_juice", "The juice from a pear.", "Crafting", "+2 HP on consume", [10,30,11], 1, 3]], //651
    [["Grape Juice", "grape_juice", "The juice from a bunch of grapes.", "Crafting", "+2 HP on consume", [10,30,11], 1, 3]], //652
    [["Pineapple Juice", "pineapple_juice", "The juice from a pineapple. It's somewhat acidic.", "Crafting", "+1.5 HP on consume", [10,30,11], 1, 4]], //653
    [["Mango Juice", "mango_juice", "The juice from a mango.", "Crafting", "+2 HP on consume", [10,30,11], 1, 3]], //654
    [["Pineapple", "pineapple", "A pineapple. It's somewhat acidic.", "Farming", "+4 HP on consume", [10,30], 1, 6]], //655
    [["Ripe Pineapple", "ripe pineapple", "A pineapple that's riper than usual. It's more acidic.", "Farming", "+8 HP on consume", [10,30], 1, 8]], //656
    [["Golden Pineapple", "golden pineapple", "A golden pineapple. Now <em>you're</em> acidic!<br />No, I don't know how that translates to Plant-aligned damage.", "Farming", "+0.7 <span class='plant'>Plant</span> damage", [9], 2, 17]], //657
    [["Mango", "mango", "A mango.", "Farming", "+5 HP on consume", [10,30], 1, 5]], //658
    [["Ripe Mango", "ripe mango", "A mango that's riper than usual.", "Farming", "+10 HP on consume", [10,30], 1, 7]], //659
    [["Golden Mango", "golden mango", "A golden mango. I guess you could <em>try</em> to sculpt it.", "Farming", "+0.3 Pottery", [9], 2, 15]], //660
    [
        ["Tag", "tag", "A tag. You can put it on an item to put a little icon in the corner.", "Crafting", "Use it on an item stack to tag it", [11,20], 1, 3], //0
        ["Pink Tag", "pink_tag", "A tag that's been dyed pink.", "Crafting", "Use it on an item stack to tag it", [11,20], 1, 4], //1
        ["Red Tag", "red_tag", "A tag that's been dyed red.", "Crafting", "Use it on an item stack to tag it", [11,20], 1, 4], //2
        ["Orange Tag", "orange_tag", "A tag that's been dyed orange.", "Crafting", "Use it on an item stack to tag it", [11,20], 1, 4], //3
        ["Brown Tag", "brown_tag", "A tag that's been dyed brown.", "Crafting", "Use it on an item stack to tag it", [11,20], 1, 4], //4
        ["Yellow Tag", "yellow_tag", "A tag that's been dyed yellow.", "Crafting", "Use it on an item stack to tag it", [11,20], 1, 4], //5
        ["Green Tag", "green_tag", "A tag that's been dyed green.", "Crafting", "Use it on an item stack to tag it", [11,20], 1, 4], //6
        ["Cyan Tag", "cyan_tag", "A tag that's been dyed cyan.", "Crafting", "Use it on an item stack to tag it", [11,20], 1, 4], //7
        ["Blue Tag", "blue_tag", "A tag that's been dyed blue.", "Crafting", "Use it on an item stack to tag it", [11,20], 1, 4], //8
        ["Purple Tag", "purple_tag", "A tag that's been dyed purple.", "Crafting", "Use it on an item stack to tag it", [11,20], 1, 4], //9
        ["Magenta Tag", "magenta_tag", "A tag that's been dyed magenta.", "Crafting", "Use it on an item stack to tag it", [11,20], 1, 4], //10
        ["White Tag", "white_tag", "A tag that's been dyed white.", "Crafting", "Use it on an item stack to tag it", [11,20], 1, 4], //11
        ["Gray Tag", "gray_tag", "A tag that's been dyed gray.", "Crafting", "Use it on an item stack to tag it", [11,20], 1, 4], //12
        ["Black Tag", "black_tag", "A tag that's been dyed black.", "Crafting", "Use it on an item stack to tag it", [11,20], 1, 4], //13
    ], //661
    [["Magic Scraps", "scraps", "A pile of scraps with some sort of magical power. What'd you do, rip up a scroll?", "Crafting", "Combine 4 of them to cast a random scroll effect", [11,43], 2, 0]], //662
    [
        ["Name Tag", "enchanted name_tag", "A name tag. You can use it on an item to give it a custom name.", "Crafting", "Use it on an item to name it", [20,33], 2, 7], //0
        ["Description Tag", "enchanted desc_tag", "A description tag. You can use it on an items to give it a custom description.", "Crafting", "Use it on an item to give it a description", [20,33], 2, 7], //1
        ["Attribute Tag", "enchanted attr_tag", "An attribute tag. You can use it on an items to give it (non-functional) custom attributes.", "Crafting", "Use it on an item to give it new attributes", [20,33], 2, 7], //2
    ], //663
    [["Fire Charge", "fire_charge", "A fire charge. You can use it to light things on fire.", "Crafting", "Can be used to light something On Fire", [20,49], 1, 6]], //664
    [["Crown", "crown", "A crown made of gold, with gems embedded within it. It's not very good at defense, but it makes you look important.", "Crafting", "+1 Indirect Defense<br />+3 CHR", [1], 2, 17]], //665
    [["Calculator", "calculator", "A small pocket calculator. It can't do much, but at least it's cheap.", "Crafting", "+1 INT", [8,20], 1, 8]], //666
    [
        ["Hamburger", "burger", "A hamburger. It has some lettuce and tomato on it.", "Cooking", "+8 HP on consume", [10,30], 2, 10], //0
        ["Cheeseburger", "cheese_burger", "A cheeseburger. It has some lettuce and tomato on it. Plus cheese.", "Cooking", "+10 HP on consume", [10,30], 2, 12], //1
    ], //667
    [["Golden Hamburger", "golden burger", "A hamburger made of gold. It has some golden lettuce and golden tomato on it.", "Cooking", "+15 HP on consume<br />Gain Regen+ and Attack Up+ on consume (1 turn)<br />Can't be equipped", [9,30], 3, 30]], //668
    [["Tomato Slices", "tomato_slices", "Some tomato slices.", "Cooking", "+4 HP on consume", [10,30], 1, 4]], //669
    [["Iceberg Lettuce", "lettuce", "A head of lettuce. It's name comes from the fact that if you put it in crushed ice, it looks like an iceberg.", "Farming", "+5 HP on consume", [10,30], 1, 5]], //670
    [["Ripe Iceberg Lettuce", "ripe lettuce", "A head of lettuce that's riper than usual.", "Farming", "+10 HP on consume", [10,30], 1, 7]], //671
    [["Golden Iceberg Lettuce", "golden lettuce", "A golden head of lettuce. Go on, guess what it boosts.", "Farming", "+0.7 <span class='ice'>Ice</span> damage", [9], 2, 15]], //672
    [["Bacon", "bacon", "Some strips of raw bacon.", "Cooking", "+3 HP on consume<br />50% chance to give Nausea (1 turn)", [10,30], 1, 7]], //673
    [["Cooked Bacon", "cooked_bacon", "Some strips of cooked bacon.", "Cooking", "+6 HP on consume", [10,30], 1, 9]], //674
    [["Milk Bottle", "milk_bottle", "A bottle filled with milk.", "Crafting", "Drink for 2 HP", [10,11,30], 1, 2]], //675
    [["Icing", "icing_bottle", "A bottle of icing. Isn't icing normally stored in pipets or something?", "Cooking", "Consume for +3 HP", [10,11,30], 1, 4]], //676
    [["Cake Batter", "cake_batter", "A bowl of cake batter.", "Cooking", "", [10,11], 1, 0]], //677
    [
        ["Cake", "cake_full", "A cake with frosting and cherries. But where did the cherries come from?", "Cooking", "Grab a slice<br />Counts as 4 servings<br />+5 HP per serving", [10,17,30], 2, 25], //0
        ["Cake (3/4)", "cake_three_quarter", "Three-quarters of a cake with frosting and cherries.", "Cooking", "Grab a slice<br />Counts as 3 servings<br />+5 HP per serving", [10,17,30], 2, 22], //1
        ["Cake (1/2)", "cake_half", "Half of a cake with frosting and cherries.", "Cooking", "Grab a slice<br />Counts as 2 servings<br />+5 HP per serving", [10,17,30], 2, 14], //2
        ["Cake (1/4)", "cake_quarter", "A quarter of a cake with frosting and cherries.", "Cooking", "Grab a slice<br />Counts as 1 serving<br />+5 HP per serving", [10,17,30], 2, 7], //3
    ], //678
    [["Slice of Cake", "cake_slice", "A slice of cake. Shouldn't this be bigger?", "Cake", "Consume for +5 HP", [10,30], 2, 7]], //679
    [
        ["Carrot Cake", "carrot_cake_full", "A cake with ribbons of carrot in it.<br /><br /><span style='color:var(--idesc_dragon);'>A dragon would probably like this.</span>", "Cooking", "Grab a slice<br />Counts as 4 servings<br />+6.5 HP per serving", [10,17,30], 2, 30], //0
        ["Carrot Cake (3/4)", "carrot_cake_three_quarter", "Three-quarters of a cake with ribbons of carrot in it.<br /><br /><span style='color:var(--idesc_dragon);'>A dragon would probably like this.</span>", "Cooking", "Grab a slice<br />Counts as 3 servings<br />+6.5 HP per serving", [10,17,30], 2, 23], //1
        ["Carrot Cake (1/2)", "carrot_cake_half", "Half of a cake with ribbons of carrot in it.<br /><br /><span style='color:var(--idesc_dragon);'>A dragon would probably like this.</span>", "Cooking", "Grab a slice<br />Counts as 2 servings<br />+6.5 HP per serving", [10,17,30], 2, 15], //2
        ["Carrot Cake (1/4)", "carrot_cake_quarter", "A quarter of a cake with ribbons of carrot in it.<br /><br /><span style='color:var(--idesc_dragon);'>A dragon would probably like this.</span>", "Cooking", "Grab a slice<br />Counts as 1 serving<br />+6.5 HP per serving", [10,17,30], 2, 8], //3
    ], //680
    [["Slice of Carrot Cake", "carrot_cake_slice", "A slice of carrot cake. Wasn't the carrot on top bigger than that, and also centered?<br /><br /><span style='color:var(--idesc_dragon);'>A dragon would probably like this.</span>", "Carrot Cake", "Consume for +6.5 HP", [10,30], 2, 8]], //681
    [["Lava Bottle", "lava_bottle", "A bottle filled with lava. I mean, I <em>guess</em> glass is more heat-resistant than iron.", "Crafting", "", [30], 2, 6]], //682
    [["Chocolate Milk Bottle", "chocolate_milk_bottle", "A bottle filled with milk.", "Crafting", "Drink for 2 HP", [10,30], 1, 4]], //683
    [["Honey Bottle", "honey_bottle", "A bottle filled with honey.", "Crafting", "Drink for 3 HP<br />Cures Poisoned", [10,20], 2, 5]], //684
    [
        ["Raw Patty", "raw_patty", "You know, burger patties are usually not hockey puck-shaped.", "Crafting", "", [10,11], 1, 1], //0
        ["Cooked Patty", "cooked_patty", "A cooked burger patty. You can still tell that it's hockey puck-shaped.", "Cooking", "Consume for +3 HP", [10,11,30], 1, 4], //1
    ], //685
    [
        ["Pumpkin", "pumpkin", "A pumpkin. These are normally not cubic.", "Farming", "+4 HP per serving<br />Counts as 2 servings", [10,17,30], 1, 7], //0
        ["Half Pumpkin", "pumpkin_half", "Half of a pumpkin. ...Did you just... eat it raw?", "Farming", "+4 HP per serving<br />Counts as 1 serving", [10,17,30], 1, 3], //1
    ], //686
    [
        ["Ripe Pumpkin", "ripe pumpkin", "A pumpkin that's riper than usual.", "Farming", "+8 HP per serving<br />Counts as 2 servings", [10,17,30], 1, 9], //0
        ["Ripe Half Pumpkin", "ripe pumpkin_half", "Half of a pumpkin that's riper than usual.", "Farming", "+8 HP per serving<br />Counts as 1 serving", [10,17,30], 1, 4], //1
    ], //687
    [["Golden Pumpkin", "golden pumpkin", "A golden pumpkin. See, it boosts Dark-aligned damage because Halloween.", "Farming", "+0.7 <span class='dark'>Dark</span> damage", [9,17], 2, 15]], //688
    [
        ["Watermelon", "watermelon", "A watermelon. How'd you make it cubic <em>and</em> edible?", "Farming", "+4 HP per serving<br />Counts as 2 servings", [10,17,30], 1, 7], //0
        ["Half Watermelon", "watermelon_half", "Half of a watermelon. I guess you could eat it like that.", "Farming", "+4 HP per serving<br />Counts as 1 serving", [10,17,30], 1, 3], //1
    ], //689
    [
        ["Ripe Watermelon", "ripe watermelon", "A watermelon that's riper than usual.", "Farming", "+8 HP per serving<br />Counts as 2 servings", [10,17,30], 1, 9], //0
        ["Ripe Half Watermelon", "ripe watermelon_half", "Half of a watermelon that's riper than usual.", "Farming", "+8 HP per serving<br />Counts as 1 serving", [10,17,30], 1, 4], //1
    ], //690
    [["Golden Watermelon", "golden watermelon", "A golden watermelon. I mean, you <em>could</em> use the rind as a bottle or something.", "Farming", "+0.3 Alchemy", [9,17], 2, 15]], //691
    [["Carved Pumpkin", "carved_pumpkin", "A pumpkin that's been carved and had it's insides removed.", "Crafting", "", [17], 1, 5]], //692
    [["Jack o'Lantern", "jack_o_lantern", "A pumpkin that's been carved and had a torch placed inside.", "Crafting", "", [17], 2, 11]], //693
    [["Obsidian", "obsidian", "A block of solid obsidian. Did you know that obsidian is actually a type of glass?", "Mining (Req. Diamond Pick)", "", [11,17], 2, 13]], //694
    [
        ["Mop", "mop", "A mop. It can clean things.", "Crafting", "Use it on something to clean it", [6,23], 1, 8], //0
        ["Wet Mop", "mop_wet", "A wet mop. It can clean things, but right now it'll probably just make them wet.", "Using a Mop", "Use it on something to clean it and make it wet", [6,23,50], 1, 0], //1
    ], //695
    [["Shears", "shears", "A pair of shears. You can use them to shear things, like wool, grass, and people.", "Crafting", "+1 Direct Attack<br />+25% chance to inflict Bleeding on hit for 1 turn", [5,6,23], 1, 7]], //696
    [["Halloween Bucket", "halloween_bucket", "A pumpkin-shaped bucket. You put candy in it during Halloween, and then you can take then candy out afterward.", "Halloween", "Hold it to access the 7 item slots it has<br />Can store any candy<br />After Halloween, will disappear when empty", [12,29,48], 4, 0]], //697
    [
        ["Doorbell", "doorbell", "A doorbell. You push the button, and it makes a noise. You can also hook it up to other things.", "Crafting", "", [17], 2, 6], //0
        ["Halloween Doorbell", "halloween_doorbell", "A doorbell, but Halloween themed. You push the button, it makes noise, and you get candy. It'll also dissappear after Halloween.", "Halloween", "", [12,17], 4, 0], //1
    ], //698
    [
        ["Small Candy", "small_candy", "To save inventory space, some candy items are taking up the same slot.<br />Contains:", "Halloween", "", [12,30,31], 1, 0], //0
        ["Medium Candy", "medium_candy", "To save inventory space, some candy items are taking up the same slot.<br />Contains:", "Halloween", "", [12,30,31], 1, 0], //1
        ["Large Candy", "large_candy", "To save inventory space, some candy items are taking up the same slot.<br />Contains:", "Halloween", "", [12,30,31], 2, 0], //2
    ], //699
    [["Pumpkin-Shaped Chocolate", "pumpkin_chocolate", "A small chocolate in the shape of a pumpkin. What could be inside it?", "Halloween", "+1 HP on consume<br />Filled with something random", [10,30], 3, 0]], //700
    [["Strawberries", "strawberries", "Some strawberries.", "Farming", "+5 HP on consume", [10,30], 1, 5]], //701
    [["Ripe Strawberries", "ripe strawberries", "Some strawberries that are riper than usual.", "Farming", "+10 HP on consume", [10,30], 1, 7]], //702
    [["Golden Strawberries", "golden strawberries", "Some golden strawberries. They boost speed because reference.", "Farming", "+0.5 Speed", [9], 2, 15]], //703
    [["Gumdrop", "gumdrop", "Really? A <em>single</em> gumdrop?", "Halloween", "+1.5 HP<br />Counts as 0.3 servings", [10,12,30,31], 1, 0]], //704
    [["Piece of Chocolate", "small_chocolate", "A small piece of chocolate, shaped like a pumpkin. It's not filled with anything. Except chocolate.", "Halloween", "+1.5 HP<br />Counts as 0.3 servings", [10,12,30,31], 1, 0]], //705
    [["Ring-shaped Mint", "ring_mint", "A mint-flavored candy, shaped like a ring.", "Halloween", "Inflicts 1 turn of Minty Breath", [10,12,30,31], 1, 0]], //706
    [["Jelly Bean", "jelly_bean", "A single jelly bean. Who knows what its flavor is?", "Halloween", "Consume for a random effect<br />Counts as 0.2 servings", [10,12,30,31], 1, 0]], //707
    [["Taffy", "taffy", "A small thing of taffy.", "Halloween", "+1.5 HP<br />Counts as 0.3 servings", [10,12,30,31], 1, 0]], //708
    [["Chocolate Coin", "coin_chocolate", "A piece of chocolate shaped like a coin, with foil around it.", "Halloween", "+2 HP<br />Counts as 0.4 servings", [10,12,30,31], 1, 0]], //709
    [["Fish-shaped Chocolate", "fish_chocolate", "A small chocolate, shaped like a fish. It's filled with marshmallow.", "Halloween", "+2 HP<br />Counts as 0.4 servings", [10,12,30,31], 1, 0]], //710
    [["Candy Cane", "candy_cane", "A candy cane.", "Holidays", "+1.5 HP<br />Counts as 0.3 servings", [10,12,30,31], 1, 0]], //711
    [["Small Lollipop", "lollipop_small", "A small lollipop. You're supposed to put it in your mouth and then leave it there, but you could also just crunch it.", "Halloween", "+2 HP<br />Counts as 0.4 servings", [10,12,30,31], 1, 0]], //712
    [["Bag of Chocolates", "chocolate_bag", "A small bag of some candy-coated chocolates. The colors are just to look nice.", "Halloween", "+2.5 HP<br />Counts as 0.5 servings", [10,12,30,31], 1, 3]], //713
    [["Box of Gumdrops", "gumdrop_box", "A box with some gumdrops in it.", "Halloween", "Open for 2~4 Gumdrops", [20,42], 1, 2]], //714
    [["Bag of Sour Gummies", "sour_gummies", "A bag of some gummies with sour coating on them.", "Halloween", "+1 HP<br />Inflicts 1 turn of Sour!", [10,12,30,31], 1, 3]], //715
    [["Chocolate-covered Coconut Bar", "coconut_chocolate_bar", "Some shredded coconut covered in chocolate. There might be some nuts inside, I'm not sure.", "Halloween", "+2~2.5 HP<br />Counts as 0.4 servings", [10,12,30,31], 1, 0]], //716
    [["Bag of Peanut Butter Candies", "peanut_butter_bag", "A small bag of some candy-coated peanut butter circles. The colors are just to look nice.", "Halloween", "+2.5 HP<br />Counts as 0.5 servings", [10,12,30,31], 1, 3]], //717
    [["Bag of Fruit-flavored Candies", "fruit_candy_bag", "A small bag of some candy-coated fruit-flavored circles. The colors tell you which flavor they are.", "Halloween", "+2.5 HP<br />Counts as 0.5 servings", [10,12,30,31], 1, 3]], //718
    [["Peanut Butter Cup", "peanut_butter_cup", "A cup of chocolate, with peanut butter inside. It's more of a plate, really.", "Halloween", "+3 HP<br />Counts as 0.6 servings", [10,12,30,31], 1, 0]], //719
    [["Large Lollipop", "lollipop_large", "A lollipop. You're supposed to lick it, but you could also just crunch it.", "Halloween", "+3.5 HP<br />Counts as 0.7 servings", [10,12,30,31], 2, 0]], //720
    [["Bag of Peanut Chocolates", "peanut_chocolate_bag", "A small bag of some candy-coated chocolates with peanuts inside. The colors are just to look nice.", "Halloween", "+3.5 HP<br />Counts as 0.7 servings", [10,12,30,31], 2, 4]], //721
    [["Box of Chocolate-coated Sticks", "pocky", "A box of stick-shaped biscuits, partially covered in chocolate.", "Halloween", "+5 HP", [10,12,30,31], 2, 8]], //722
    [["Metal Triangle", "metal_triangle", "A triangle made out of metal.", "Crafting", "+1.2 Direct Attack<br />+2.4 Indirect Attack", [5,23], 1, 8]], //723
    [
        ["Bowl of Beetroot Soup", "beetroot_soup", "A bowl of soup, made with beetroot.", "Cooking", "Counts as 2 servings<br />+7 HP per serving", [10,30], 1, 14], //0
        ["Half-Empty Bowl of Beetroot Soup", "beetroot_soup_half", "A half-empty bowl of soup, made with beetroot.", "Cooking", "Counts as 1 serving<br />+7 HP per serving", [10,30], 1, 6], //1
    ], //724
    [["Slice of Ice Cream Cake", "ice_cream_cake_slice", "A slice of cookies-and-cream ice cream cake. Was it someone's birthday or something?", "Birthday", "Consume for +5 HP", [10,12,29,30], 4, 0]], //725
    [["Firework", "firework", "A firework. You can light it up to make it explode in the sky. Or you could put it in a crossbow.", "Crafting", "Can be lit up<br />Use it with a Crossbow", [20,49,54], 1, 8]], //726
    [["Melon Slice", "melon_slice", "A slice of a watermelon. If the melon was a cube, then why is the slice round?", "Crafting", "+2 HP<br />Counts as half a serving", [10,30], 1, 7]], //727
    [["Ripe Melon Slice", "ripe melon_slice", "A slice of a watermelon that was riper than usual.", "Crafting", "+4 HP<br />Counts as half a serving", [10,30], 1, 7]], //728
    [["Golden Apple Juice", "golden apple_juice", "The juice from a golden apple.", "Crafting", "Drink for Regen and Defense Up (1 turn)<br />Can't be equipped", [10,30,11], 2, 8]], //729
    [["Melon Juice", "melon_juice", "Some of the juice from a watermelon.", "Crafting", "+1 HP on consume", [10,30,11], 1, 2]], //730
    [["Pumpkin Juice", "pumpkin_juice", "The juice from a pumpkin. No, I don't know how you juiced it, and to be honest I'm not even sure if pumpkins <em>have</em> juice.", "Crafting", "+2 HP on consume", [10,30,11], 1, 4]], //731
    [["Rubber Chunk", "rubber_chunk", "A chunk of rubber.", "Crafting", "", [11], 1, 3]], //732
    [["Old Tire", "tire", "A tire that you fished up. How'd this get into the <em>ocean</em>?", "Crafting", "", [11], 1, 10]], //733
    [["Tire Chunk", "tire_chunk", "A chunk of a tire that you fished up.", "Fishing", "", [11], 1, 5]], //734
    [["Sunglasses", "sunglasses", "A pair of sunglasses.", "Crafting", "+1 <span class='light'>Light</span> Resist<br />-1 Accuracy<br />+0.3 Direct Defense", [8], 1, 7]], //735
    [["Eyepatch", "eyepatch", "An eyepatch, like the kind worn by pirates.", "Crafting", "+0.3 Direct Defense<br />+0.6 Indirect Defense<br />+1 Fishing<br />-2 Accuracy", [8], 1, 5]], //736
    [["Miner's Helmet", "miners_helmet", "A helmet with a flashlight, used by miners.", "Crafting", "+1.3 Direct Defense<br />+2 Mining<br />+1 <span class='dark'>Dark</span> Resist", [1], 2, 16]], //737
    [["LED", "led", "A small LED.", "Crafting", "", [11], 1, 0]], //738
    [["Small Wooden Sword", "wood_smallsword", "A small sword made out of wood.", "Crafting", "+0.5 Direct Attack", [5,23], 1, 3]], //739
    [["Small Stone Sword", "stone_smallsword", "A small sword made out of stone.", "Crafting", "+0.5 Direct Attack<br />+0.5 Indirect Attack", [5,23], 1, 4]], //740
    [["Small Iron Sword", "iron_smallsword", "A small sword made out of iron.", "Crafting", "+0.5 Direct Attack<br />+1 Indirect Attack", [5,23], 1, 6]], //741
    [["Small Golden Sword", "gold_smallsword", "A small sword made out of gold.", "Crafting", "+1 Indirect Attack<br />10% chance of breaking on hit", [5,23], 1, 5]], //742
    [["Small Diamond Sword", "diamond_smallsword", "A small sword made out of diamond.", "Crafting", "+1 Direct Attack<br />+0.5 Indirect Attack", [5,23], 2, 9]], //743
    [["Small Emerald Sword", "emerald_smallsword", "A small sword made out of emerald.", "Crafting", "+1.4 Direct Attack<br />+0.6 Indirect Attack", [5,23], 2, 8]], //744
    [["Small Hardite Sword", "hardite_smallsword", "A small sword made out of hardite.", "Crafting", "+2 Direct Attack<br />+0.8 Indirect Attack", [5,23], 3, 11]], //745
]

var critter_data = [ // [name, desc, type, element, colouric?, hp, atk, def, ability id, offensive id, defensive id]
    ["critter.fly.name", "critter.fly.desc", 0, 0, false, 5, 1, 1, 1, 1, 1], //0
]

var critter_opt_data = { // [name, desc, css]
    "ability": [
        ["critter.ability.none.name", "critter.ability.none.desc", "none"], //0
        ["critter.ability.agile.name", "critter.ability.agile.desc", "agile"], //1
    ],
    "offense": [
        ["critter.offense.none.name", "critter.offense.none.desc", "none"], //0
        ["critter.offense.bite.name", "critter.offense.bite.desc", "bite"], //1
    ],
    "defense": [
        ["critter.defense.none.name", "critter.defense.none.desc", "none"], //0
        ["critter.defense.flight.name", "critter.defense.flight.desc", "flight"], //1
    ],
}