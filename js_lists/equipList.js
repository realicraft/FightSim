var equiplist = [ //[name, css class for icon, description, source, bonuses]
    ["null", "iconless", "Whoops, forgot to put something here.", "An error", ""], //0
    ["armor.empty_helm", "empty_helm", "desc.empty_equip", "src.empty_equip", ""], //1
    ["armor.empty_chest", "empty_chest", "desc.empty_equip", "src.empty_equip", ""], //2
    ["armor.empty_legs", "empty_legs", "desc.empty_equip", "src.empty_equip", ""], //3
    ["armor.empty_boots", "empty_boots", "desc.empty_equip", "src.empty_equip", ""], //4
    ["armor.empty_sword", "empty_sword", "desc.empty_equip", "src.empty_equip", ""], //5
    ["armor.empty_shield", "empty_shield", "desc.empty_equip", "src.empty_equip", ""], //6
    ["armor.empty_acc", "empty_acc", "desc.empty_equip", "src.empty_equip", ""], //7
    ["armor.empty_food", "empty_food", "desc.empty_equip", "src.empty_equip", ""], //8
    ["Wooden Sword", "wood_sword", "A sword made out of wood.", "Crafting", "+1 Direct Attack"], //9
    ["Wooden Shovel", "wood_shovel", "A shovel made out of wood. You should probably use this for digging instead.", "Crafting", "+1 Indirect Attack<br />+1 to Digging"], //10
    ["Stick and Rock", "stick_rock", "A rock taped to a stick. This isn't very good.", "Crafting", "50% Chance of breaking on hit"], //11
    ["Golden Carrot", "gold_carrot", "A carrot made out of gold. Aren't carrots supposed to give you better eyesight?", "Gardening", "+0.3 Indirect Defense"], //12
    ["Diamond Shield", "diamond_shield", "A shield with a diamond in the center.", "Crafting", "+1 Indirect Defense<br />+1 Direct Defense"], //13
    ["Golden Sword", "gold_sword", "A sword made out of gold. Seems fragile.", "Crafting", "+1 Indirect Attack<br />10% chance of breaking on hit"], //14
    ["Golden Shovel", "gold_shovel", "A shovel made out of gold. Seems fragile, and is probably btter used for digging.", "Crafting", "+1 Indirect Attack<br />+2 to Digging<br />10% chance of breaking on hit"], //15
    ["Golden Pickaxe", "gold_pickaxe", "A pickaxe made out of gold. Seems fragile, and is probably better used for mining.", "Crafting", "+1 Indirect Attack<br />+2 to Mining<br />10% chance of breaking on hit or mine"], //16
    ["Golden Axe", "gold_axe", "A axe made out of gold. Seems fragile, and is probably better used for chopping.", "Crafting", "+2 Indirect Attack<br />+2 to Chopping<br />10% chance of breaking on hit or chop"], //17
    ["Iron Sword", "iron_sword", "A sword made out of iron.", "Crafting", "+1 Direct Attack<br />+1 Indirect Attack"], //18
    ["Iron Shovel", "iron_shovel", "A shovel made out of iron. You should probably use this for digging instead.", "Crafting", "+1 Indirect Attack<br />+2 to Digging<br />5% chance to steal an item"], //19
    ["Iron Pickaxe", "iron_pickaxe", "A pickaxe made out of iron. You should probably use this for mining instead.", "Crafting", "+1 Direct Attack<br />+2 to Mining"], //20
    ["Iron Axe", "iron_axe", "A axe made out of iron. You should probably use this for chopping instead.", "Crafting", "+1 Direct Attack<br />+2 Indirect Attack<br />+2 to Chopping"], //21
    ["Stone Sword", "stone_sword", "A sword made out of stone.", "Crafting", "+1 Direct Attack"], //22
    ["Stone Shovel", "stone_shovel", "A shovel made out of stone. You should probably use this for digging instead.", "Crafting", "+1 Indirect Attack<br />+2 to Chopping"], //23
    ["Stone Pickaxe", "stone_pickaxe", "A pickaxe made out of stone. You should probably use this for mining instead.", "Crafting", "+1 Indirect Attack<br />+1 to Mining"], //24
    ["Stone Axe", "stone_axe", "A axe made out of stone. You should probably use this for chopping instead.", "Crafting", "+1 Direct Attack<br />+1 Indirect Attack<br />+1 to Chopping"], //25
    ["Diamond Sword", "diamond_sword", "A sword made out of diamonds.", "Crafting", "+2 Direct Attack"], //26
    ["Diamond Shovel", "diamond_shovel", "A shovel made out of diamonds. You should probably use this for digging instead.", "Crafting", "+2 Indirect Attack<br />+3 to Digging<br />10% chance to steal an item"], //27
    ["Diamond Pickaxe", "diamond_pickaxe", "A pickaxe made out of diamonds. You should probably use this for mining instead.", "Crafting", "+1 Direct Attack<br />+2 Indirect Attack<br />+3 to Mining"], //28
    ["Diamond Axe", "diamond_axe", "A axe made out of diamonds. You should probably use this for chopping instead.", "Crafting", "+2 Direct Attack<br />+1 Indirect Attack<br />+3 to Chopping"], //29
    ["Wooden Pickaxe", "wood_pickaxe", "A pickaxe made out of wood. You should probably use this for mining instead.", "Crafting", "+1 Indirect Attack<br />+1 to Mining"], //30
    ["Wooden Axe", "wood_axe", "A axe made out of wood. You should probably use this for chopping instead.", "Crafting", "+1 Indirect Attack<br />+1 to Chopping"], //31
    ["Logo 3", "logo_3", 'The "3" from the logo.', "Unknown", ""], //32
    ["Logo F", "logo_f", 'The "F" from the logo. Why\'s it so small now?', "Unknown", ""], //33
    ["Logo S", "logo_s", 'The "S" from the logo.', "Unknown", ""], //34
    ["Rock", "rock", "It's a small rock.", "Picking up a rock", "Throw to deal 4 damage"], //35
    ["Coal", "coal", "It's a piece of coal.", "Mining", ""], //36
    ["Diamond", "diamond", "It's a diamond. These things are rare!", "Mining", ""], //37
    ["Decent Hammer", "decent_hammer", "Bonk.", "Crafting", "+1 Direct Attack"], //38
    ["Slingshot", "slingshot", "You shoot things with it.", "Unknown", "+1 Indirect Attack<br />Can be used with ammo to deal more damage"], //39
    ["Flint & Steel", "flint_and_steel", "Sets things on fire.", "Unknown", "+30% chance to inflict On Fire on hit for 1 turn"], //40
    ["TNT", "tnt", "Explodes after being ignited.", "Unknown", ""], //41
    ["Icicle", "icicle", "It's cold, and kinda pointy.", "Finding it", "+10% chance to inflict Frozen on hit for 2 turns"], //42
    ["Tray of Cookies", "cookie_tray", "A tray filled with cookies.", "Cooking", ""], //43
    ["Log", "log", "A log.", "Chopping", ""], //44
    ["Stick", "stick_item", "It's a stick. You can use it in a bunch of different things.", "Chopping", ""], //45
    ["Planks", "planks", "Some planks.", "Chopping", ""], //46
    ["Rotting Mush", "crop_mush", "Eww, why did you keep this?", "Farming", "Get rid of it"], //47
    ["Banana", "banana", "Potassium", "Unknown", "Eat it for potassium"], //48
    ["Sand", "sand", "A cube of sand. Carful, or it'll get everywhere.", "Digging", "Throw it at someone to Blind them for a turn"], //49
    ["Gravel", "gravel", "A cube of gravel. Maybe there's some flint in there?", "Digging", ""], //50
    ["Stone", "stone", "A cube of stone. Finally, some decent tools!", "Mining", ""], //51
    ["Sandstone", "sandstone", "A cube of sandstone.", "Crafting", ""], //52
    ["Bricks", "bricks", "A cube of bricks. You could make a wall out of this.", "Crafting", ""], //53
    ["Stone Bricks", "stone_bricks", "A cube of stone bricks. You could make a wall out of this.", "Crafting", ""], //54
    ["Sandstone Bricks", "sandstone_bricks", "A cube of sandstone bricks. You could make a wall out of this.", "Crafting", ""], //55
    ["Carved Sandstone", "carved_sandstone", "A cube of carved sandstone. Nice carvings.", "Carving", ""], //56
    ["Glass", "glass_block", "A cube of glass. See-through, which makes up for its fragility.", "Crafting", ""], //57
    ["Diamond Helmet", "diamond_helm", "A helmet made of diamond.", "Crafting", "+1 Direct Defense"], //58
    ["Diamond Chestplate", "diamond_chest", "A chestplate made of diamond.", "Crafting", "+2 Direct Defense"], //59
    ["Diamond Leggings", "diamond_legs", "A pair of leggings made of diamond.", "Crafting", "+1 Direct Defense<br />+1 Indirect Defense"], //60
    ["Diamond Boots", "diamond_boots", "A pair of boots made of diamond.", "Crafting", "+1 Indirect Defense"], //61
    ["Apple", "apple", "An apple.", "Farming", "+5 HP on consume"], //62
    ["Golden Apple", "golden_apple", "A golden apple. One of the more common golden foods, and the only edible one.", "Farming", "Equip for +0.5 Max HP<br />Eat for Regen and Defense Up (1 turn)"], //63
    ["Orange", "orange", "An orange. Not very similar to an apple, which is why they're compared so often.", "Farming", "+5 HP on consume"], //64
    ["Golden Orange", "golden_orange", "A golden orange. No one knows whether it's golden on the inside, because the peel is solid gold and can't be removed.", "Farming", "+0.7 Max HP"], //65
    ["Carrot", "carrot", "A carrot. It's orange.", "Farming", "+5 HP on consume<br />Consume like 10 at once to turn very slightly orange"], //66
    ["Clay Shield", "clay_shield", "A shield made of clay. Try to avoid letting it shatter.", "Pottery", "+1 Indirect Defense<br />+1 Direct Defense<br />15% chance of breaking on hit"], //67
    ["Iron Ore", "iron_ore", "Some iron ore. Can be crafted into bars, requiring 2 ore per bar.", "Mining", ""], //68
    ["Copper Ore", "copper_ore", "Some copper ore. Can be crafted into bars, requiring 1 ore per bar.", "Mining", ""], //69
    ["Gold Ore", "gold_ore", "Some gold ore. Can be crafted into bars, requiring 1 ore per bar.", "Mining", ""], //70
    ["Gold Bar", "gold_bar", "A bar of solid gold. Actually kind of soft for a metal.", "Crafting", ""], //71
    ["Iron Bar", "iron_bar", "A bar of solid iron. It's pretty sturdy.", "Crafting", ""], //72
    ["Copper Bar", "copper_bar", "A bar of solid copper. Try to avoid getting it oxidized.", "Crafting", ""], //73
    ["Water", "water", "One (1) level of water. Good for 0.5 turns of plant growth.", "Gathering", ""], //74
    ["Emerald", "emerald", "It's an emerald. These things are rare!", "Mining", ""], //75
    ["Hardite Ore", "hardite_ore", "Some hardite ore. Can be crafted into bars, requiring 3 ore per bar.", "Mining", ""], //76
    ["Hardite Bar", "hardite_bar", "A bar of solid hardite, named after both how hard it is to get, and how hard it is as a material. This stuff can cut diamond!", "Crafting", ""], //77
    ["Rock-on-a-Stick", "rock_on_stick", "A rock fastened to a stick with more rock. Better than just using tape.", "Crafting", "20% Chance of breaking on hit<br />+1 Indirect Attack"], //78
]