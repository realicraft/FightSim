var equiplist = [ //[name, css class for icon, description, source, bonuses, [categories], name class id]
    ["null", "iconless", "Whoops, forgot to put something here.", "An error", "", [0],0, 0], //0
    ["armor.empty_helm", "empty_helm", "desc.empty_equip", "src.empty_equip", "", [28,1], 0, 0], //1
    ["armor.empty_chest", "empty_chest", "desc.empty_equip", "src.empty_equip", "", [28,2], 0, 0], //2
    ["armor.empty_legs", "empty_legs", "desc.empty_equip", "src.empty_equip", "", [28,3], 0, 0], //3
    ["armor.empty_boots", "empty_boots", "desc.empty_equip", "src.empty_equip", "", [28,4], 0, 0], //4
    ["armor.empty_sword", "empty_sword", "desc.empty_equip", "src.empty_equip", "", [28,5], 0, 0], //5
    ["armor.empty_shield", "empty_shield", "desc.empty_equip", "src.empty_equip", "", [28,7], 0, 0], //6
    ["armor.empty_acc", "empty_acc", "desc.empty_equip", "src.empty_equip", "", [28,8], 0, 0], //7
    ["armor.empty_food", "empty_food", "desc.empty_equip", "src.empty_equip", "", [28,9], 0, 0], //8
    ["Wooden Sword", "wood_sword", "A sword made out of wood.", "Crafting", "+1 Direct Attack", [5,23], 1, 6], //9
    ["Wooden Shovel", "wood_shovel", "A shovel made out of wood.", "Crafting", "+1 Indirect Attack<br />+1 to Digging", [6], 1, 5], //10
    ["Stick and Rock", "stick_rock", "A rock taped to a stick. This isn't very good.", "Crafting", "50% Chance of breaking on hit", [5,23], 1, 2], //11
    ["Golden Carrot", "gold_carrot", "A carrot made out of gold. Aren't carrots supposed to give you better eyesight?", "Farming", "Equip for +0.3 Indirect Defense", [9], 2, 15], //12
    ["Diamond Shield", "diamond_shield", "A shield with a diamond in the center.", "Crafting", "+1 Indirect Defense<br />+1 Direct Defense", [7], 2, 17], //13
    ["Golden Sword", "gold_sword", "A sword made out of gold. Seems fragile.", "Crafting", "+2 Indirect Attack<br />10% chance of breaking on hit", [5,23], 1, 10], //14
    ["Golden Shovel", "gold_shovel", "A shovel made out of gold. Seems fragile.", "Crafting", "+1 Indirect Attack<br />+2 to Digging<br />10% chance of breaking on hit or dig", [6], 1, 9], //15
    ["Golden Pickaxe", "gold_pickaxe", "A pickaxe made out of gold. Seems fragile.", "Crafting", "+1 Indirect Attack<br />+2 to Mining<br />10% chance of breaking on hit or mine", [6], 1, 9], //16
    ["Golden Axe", "gold_axe", "A axe made out of gold. Seems fragile.", "Crafting", "+1 Indirect Attack<br />+2 to Chopping<br />10% chance of breaking on hit or chop", [6], 1, 9], //17
    ["Iron Sword", "iron_sword", "A sword made out of iron.", "Crafting", "+1 Direct Attack<br />+2 Indirect Attack", [5,23], 1, 13], //18
    ["Iron Shovel", "iron_shovel", "A shovel made out of iron.", "Crafting", "+1 Indirect Attack<br />+2 to Digging<br />5% chance to steal an item", [6], 1, 12], //19
    ["Iron Pickaxe", "iron_pickaxe", "A pickaxe made out of iron.", "Crafting", "+1 Direct Attack<br />+2 to Mining", [6], 1, 12], //20
    ["Iron Axe", "iron_axe", "A axe made out of iron.", "Crafting", "+1 Direct Attack<br />+1 Indirect Attack<br />+2 to Chopping", [6], 1, 12], //21
    ["Stone Sword", "stone_sword", "A sword made out of stone.", "Crafting", "+1 Direct Attack<br />+1 Indirect Attack", [5,23], 1, 8], //22
    ["Stone Shovel", "stone_shovel", "A shovel made out of stone.", "Crafting", "+1 Indirect Attack<br />+1 to Digging", [6], 1, 7], //23
    ["Stone Pickaxe", "stone_pickaxe", "A pickaxe made out of stone.", "Crafting", "+1 Indirect Attack<br />+1 to Mining", [6], 1, 7], //24
    ["Stone Axe", "stone_axe", "A axe made out of stone.", "Crafting", "+1 Direct Attack<br />+1 to Chopping", [6], 1, 7], //25
    ["Diamond Sword", "diamond_sword", "A sword made out of diamonds.", "Crafting", "+2 Direct Attack<br />+1 Indirect Attack", [5,23], 2, 18], //26
    ["Diamond Shovel", "diamond_shovel", "A shovel made out of diamonds.", "Crafting", "+2 Indirect Attack<br />+3 to Digging<br />10% chance to steal an item", [6], 2, 17], //27
    ["Diamond Pickaxe", "diamond_pickaxe", "A pickaxe made out of diamonds.", "Crafting", "+1 Direct Attack<br />+2 Indirect Attack<br />+3 to Mining", [6], 2, 17], //28
    ["Diamond Axe", "diamond_axe", "A axe made out of diamonds.", "Crafting", "+2 Direct Attack<br />+3 to Chopping", [6], 2, 17], //29
    ["Wooden Pickaxe", "wood_pickaxe", "A pickaxe made out of wood.", "Crafting", "+1 Indirect Attack<br />+1 to Mining", [6], 1, 5], //30
    ["Wooden Axe", "wood_axe", "A axe made out of wood.", "Crafting", "+1 Indirect Attack<br />+1 to Chopping", [6], 1, 5], //31
    ["Logo 3", "logo_3", 'The "3" from the logo.', "Unknown", "", [28,29], 4, 0], //32
    ["Logo F", "logo_f", 'The "F" from the logo. Why\'s it so small now?', "Unknown", "", [28,29], 4, 0], //33
    ["Logo S", "logo_s", 'The "S" from the logo.', "Unknown", "", [28,29], 4, 0], //34
    ["Rock", "rock", "It's a small rock.", "Gathering", "Throw to deal 4 damage", [20,21], 1, 3], //35
    ["Coal", "coal", "It's a piece of coal.", "Mining", "Counts as 4 fuel units", [24,27], 1, 7], //36
    ["Diamond", "diamond", "It's a diamond. These things are rare!", "Mining", "", [24,11], 2, 13], //37
    ["Decent Hammer", "decent_hammer", "Bonk.", "Crafting", "+1 Direct Attack", [5,23], 1, 4], //38
    ["Slingshot", "slingshot", "You shoot things with it.", "Crafting", "+1 Indirect Attack<br />Can be used with ammo to deal more damage", [5], 2, 9], //39
    ["Flint & Steel", "flint_and_steel", "Sets things on fire.", "Crafting", "+30% chance to inflict On Fire on hit for 1 turn<br />+1 <span class=\"fire\">Fire</span> damage", [5,20], 1, 7], //40
    ["TNT", "tnt", "Explodes after being ignited.", "Unknown", "", [17], 2, 0], //41
    ["Icicle", "icicle", "It's cold, and kinda pointy.", "Gathering", "+10% chance to inflict Frozen on hit for 1 turn<br />+1 <span class=\"ice\">Ice</span> damage", [5,23], 1, 5], //42
    ["Tray of Cookies", "cookie_tray", "A tray filled with cookies.", "Cooking", "", [20], 1, 0], //43
    ["Log", "log", "A log.", "Chopping", "", [17], 1, 8], //44
    ["Stick", "stick_item", "It's a stick. You can use it in a bunch of different things.", "Chopping", "Counts as 1 fuel unit", [11,27], 1, 1], //45
    ["Planks", "planks", "Some planks.", "Chopping", "Counts as 2 fuel units", [17,11,27], 1, 2], //46
    ["Rotting Mush", "crop_mush", "Eww, why did you keep this?", "Farming", "Make it into fertilizer, or just get rid of it<br />Potion effect: Nausea (1 turn)", [30,14,11], 1, 0], //47
    ["Banana", "banana", "Potassium", "Unknown", "Eat it for potassium", [14,10,30], 3, 12], //48
    ["Sand", "sand", "A cube of sand. Carful, or it'll get everywhere.", "Digging", "Throw it at someone to Blind them for a turn", [17,21], 1, 3], //49
    ["Gravel", "gravel", "A cube of gravel. Maybe there's some flint in there?", "Digging", "", [17], 1, 4], //50
    ["Stone", "stone", "A cube of stone. Finally, some decent tools!", "Mining", "", [17,24,11], 1, 5], //51
    ["Sandstone", "sandstone", "A cube of sandstone.", "Crafting", "", [17], 1, 5], //52
    ["Bricks", "bricks", "A cube of bricks. You could make a wall out of this.", "Crafting", "", [17], 1, 6], //53
    ["Stone Bricks", "stone_bricks", "A cube of stone bricks. You could make a wall out of this.", "Crafting", "", [17], 1, 8], //54
    ["Sandstone Bricks", "sandstone_bricks", "A cube of sandstone bricks. You could make a wall out of this.", "Crafting", "", [17], 1, 8], //55
    ["Carved Sandstone", "carved_sandstone", "A cube of carved sandstone. Nice carvings.", "Carving", "", [17], 1, 9], //56
    ["Glass", "glass_block", "A cube of glass. See-through, which makes up for its fragility.", "Crafting", "", [17,11], 1, 4], //57
    ["Diamond Helmet", "diamond_helm", "A helmet made of diamond.", "Crafting", "+1 Direct Defense", [1], 2, 20], //58
    ["Diamond Chestplate", "diamond_chest", "A chestplate made of diamond.", "Crafting", "+2 Direct Defense", [2], 2, 22], //59
    ["Diamond Leggings", "diamond_legs", "A pair of leggings made of diamond.", "Crafting", "+1 Direct Defense<br />+1 Indirect Defense", [3], 2, 20], //60
    ["Diamond Boots", "diamond_boots", "A pair of boots made of diamond.", "Crafting", "+1 Indirect Defense", [4], 2, 20], //61
    ["Apple", "apple", "An apple.", "Farming", "+5 HP on consume", [10,30], 1, 5], //62
    ["Golden Apple", "golden_apple", "A golden apple. One of the more common golden foods, and the only edible one.", "Farming", "Equip for +0.5 Max HP<br />Eat for Regen and Defense Up (1 turn)", [9,30], 2, 15], //63
    ["Orange", "orange", "An orange. Not very similar to an apple, which is why they're compared so often.", "Farming", "+5 HP on consume", [10,30], 1, 5], //64
    ["Golden Orange", "golden_orange", "A golden orange. No one knows whether it's golden on the inside, because the peel is solid gold and can't be removed.", "Farming", "Equip for +0.7 Max HP", [9], 2, 15], //65
    ["Carrot", "carrot", "A carrot. It's orange.<br /><br />A dragon would probably like this.", "Farming", "+5 HP on consume<br />Consume like 10 at once to turn very slightly orange", [10,30], 1, 5], //66
    ["Clay Shield", "clay_shield", "A shield made of clay. Try to avoid letting it shatter.", "Pottery", "+1 Indirect Defense<br />+1 Direct Defense<br />15% chance of breaking on hit", [7], 1, 6], //67
    ["Iron Ore", "iron_ore", "Some iron ore. Can be crafted into bars, requiring 2 ore per bar.", "Mining", "Potion effect: 50% chance of Defense Up (1 turn)", [24], 1, 7], //68
    ["Copper Ore", "copper_ore", "Some copper ore. Can be crafted into bars, requiring 1 ore per bar.", "Mining", "", [24], 1, 6], //69
    ["Gold Ore", "gold_ore", "Some gold ore. Can be crafted into bars, requiring 1 ore per bar.", "Mining", "", [24], 1, 5], //70
    ["Gold Bar", "gold_bar", "A bar of solid gold. Actually kind of soft for a metal.", "Crafting", "", [11,25], 1, 7], //71
    ["Iron Bar", "iron_bar", "A bar of solid iron. It's pretty sturdy.", "Crafting", "", [11,25], 1, 9], //72
    ["Copper Bar", "copper_bar", "A bar of solid copper. Try to avoid getting it oxidized.", "Crafting", "", [11,25], 1, 8], //73
    ["Water", "water_drop", "One (1) level of water. Good for 0.5 turns of plant growth.", "Gathering", "", [11], 1, 0], //74
    ["Emerald", "emerald", "It's an emerald. These things are rare!", "Mining", "", [24,11], 2, 13], //75
    ["Hardite Ore", "hardite_ore", "Some hardite ore. Can be crafted into bars, requiring 3 ore per bar.", "Mining", "", [24], 3, 14], //76
    ["Hardite Bar", "hardite_bar", "A bar of solid hardite, named after both how hard it is to get, and how hard it is as a material. This stuff can cut diamond!", "Crafting", "", [11,25], 3, 16], //77
    ["Rock-on-a-Stick", "rock_on_stick", "A rock fastened to a stick with more rock. Better than just using tape.", "Crafting", "20% Chance of breaking on hit<br />+1 Indirect Attack", [5,23], 1, 3], //78
    ["Sandstone Brick Wall", "sandstone_brick_wall", "A wall made of Sandstone Bricks.", "Crafting", "40 HP<br />3+1 Defense", [19,20], 1, 8], //79
    ["Brick Wall", "brick_wall", "A wall made of Bricks.", "Crafting", "50 HP<br />3+1 Defense", [19,20], 1, 8], //80
    ["Stone Brick Wall", "stone_brick_wall", "A wall made of Stone Bricks.", "Crafting", "50 HP<br />4+1 Defense", [19,20], 1, 8], //81
    ["Stone Wall", "stone_wall", "A wall made of Stone.", "Crafting", "50 HP<br />4+1 Defense", [19,20], 1, 8], //82
    ["Iron Wall", "iron_wall", "A wall made of Iron.", "Crafting", "75 HP<br />4+2 Defense", [19,20], 2, 13], //83
    ["Hardite Wall", "hardite_wall", "A wall made of Hardite.", "Crafting", "125 HP<br />5+2 Defense", [19,20], 3, 26], //84
    ["Plank Wall", "plank_wall", "A wall made of Planks.", "Crafting", "25 HP<br />2 Defense", [19,20], 1, 6], //85
    ["Flint", "flint", "A piece of flint.", "Crafting", "Potion effect: 50% chance of Attack Up (1 turn)", [11], 1, 3], //86
    ["String", "string", "A piece of string.", "Gathering", "", [11], 1, 3], //87
    ["Bow", "bow", "A bow. You can shoot arrows with it.", "Crafting", "+1 Indirect Attack<br />Consume 1 Arrow for +1 Direct Attack", [5,22], 2, 9], //88
    ["Arrow", "arrow", "An arrow.", "Crafting", "Use it with a bow", [22], 1, 4], //89
    ["Empty Can", "can", "A can with nothing in it.", "Crafting", "Fill it with stuff", [11], 1, 1], //90
    ["Canned Water", "can", "A can with water in it. You can drink it.", "Crafting", "Drink for 3 HP", [30], 1, 2], //91
    ["Can of Beans", "can", "A can with beans in it.", "Farming", "+5 HP on consume", [10,30], 1, 5], //92
    ["Golden Can of Beans", "gold_can", "A golden can with golden beans in it.", "Farming", "Equip for +0.15 Direct Defense", [9], 2, 15], //93
    ["Clay Bowl", "clay_bowl", "A bowl made of clay.", "Pottery", "", [], 1, 6], //94
    ["Clay Vase", "clay_vase", "A vase made of clay.", "Pottery", "", [], 1, 6], //95
    ["Glass Bowl", "glass_bowl", "A bowl made of glass.", "Crafting", "", [], 1, 6], //96
    ["Red Tulip", "red_tulip", "A red tulip. Can be turned into red dye.", "Gardening", "", [14,15], 1, 5], //97
    ["Orange Tulip", "orange_tulip", "An orange tulip. Can be turned into orange dye.", "Gardening", "", [14,15], 1, 5], //98
    ["Yellow Tulip", "yellow_tulip", "A yellow tulip. Can be turned into yellow dye.", "Gardening", "", [14,15], 1, 5], //99
    ["Cyan Tulip", "cyan_tulip", "A cyan tulip. Can be turned into cyan dye.", "Gardening", "", [14,15], 1, 5], //100
    ["Azure Tulip", "azure_tulip", "An azure tulip. Can be turned into cyan dye.", "Gardening", "", [14,15], 1, 5], //101
    ["Blue Tulip", "blue_tulip", "A blue tulip. Can be turned into blue dye.", "Gardening", "", [14,15], 1, 5], //102
    ["Purple Tulip", "purple_tulip", "A purple tulip. Can be turned into purple dye.", "Gardening", "", [14,15], 1, 5], //103
    ["Pink Tulip", "pink_tulip", "A pink tulip. Can be turned into pink dye.", "Gardening", "", [14,15], 1, 5], //104
    ["White Dandelion", "white_dandelion", "A white dandelion. Can be turned into white dye.", "Gardening", "Potion effect: 25% chance of Regen (1 turn)", [14,15], 1, 5], //105
    ["Gray Dandelion", "gray_dandelion", "A gray dandelion. Can be turned into gray dye.", "Gardening", "Potion effect: 25% chance of Regen (1 turn)", [14,15], 1, 5], //106
    ["Yellow Dandelion", "yellow_dandelion", "A yellow dandelion. Can be turned into yellow dye.", "Gardening", "Potion effect: 25% chance of Regen (1 turn)", [14,15], 1, 5], //107
    ["Leaf", "leaf", "A single leaf.", "Gathering", "", [11], 1, 2], //108
    ["Blade of Grass", "grass_blade", "A single blade of grass.", "Gathering", "", [11], 1, 1], //109
    ["Block of Leaves", "leaf_block", "A block of leaves.", "Gathering", "", [17], 1, 6], //110
    ["Red Dye", "red_dye", "A blob of red dye.", "Crafting", "", [11], 1, 7], //111
    ["Orange Dye", "orange_dye", "A blob of orange dye.", "Crafting", "", [11], 1, 7], //112
    ["Yellow Dye", "yellow_dye", "A blob of yellow dye.", "Crafting", "", [11], 1, 7], //113
    ["Green Dye", "green_dye", "A blob of green dye.", "Crafting", "", [11], 1, 7], //114
    ["Cyan Dye", "cyan_dye", "A blob of cyan dye.", "Crafting", "", [11], 1, 7], //115
    ["Blue Dye", "blue_dye", "A blob of blue dye.", "Crafting", "", [11], 1, 7], //116
    ["Purple Dye", "purple_dye", "A blob of purple dye.", "Crafting", "", [1], 1, 7], //117
    ["Pink Dye", "pink_dye", "A blob of pink dye.", "Crafting", "", [11], 1, 7], //118
    ["White Dye", "white_dye", "A blob of white dye.", "Crafting", "", [11], 1, 7], //119
    ["Gray Dye", "gray_dye", "A blob of gray dye.", "Crafting", "", [11], 1, 7], //120
    ["Black Dye", "black_dye", "A blob of black dye.", "Crafting", "", [11], 1, 7], //121
    ["Glass Bottle", "glass_bottle", "A bottle made of glass.", "Crafting", "Fill it with stuff", [11], 1, 3], //122
    ["Water Bottle", "potion_blue", "A bottle filled with water.", "Crafting", "Drink for 3 HP<br />Or fill it with more stuff and cook it", [30,11], 1, 5], //123
    ["Fertilizer", "fertilizer", "Some fertilizer.", "Crafting", "Use on a plant for +1 growth turn", [20], 2, 9], //124
    ["Dirt", "dirt", "A block of dirt. Not the best material to make a house out of, but you do you.", "Digging", "", [17], 1, 0], //125
    ["Grass", "grass", "A block of dirt with some grass on it.", "Unknown", "", [17], 2, 0], //126
    ["Wooden Shield", "wood_shield", "A shield made out of wood.", "Crafting", "+1 Indirect Defense", [7], 1, 5], //127
    ["Iron Shield", "iron_shield", "A shield made out of wood, with an iron core.", "Crafting", "+1 Direct Defense", [7], 1, 12], //128
    ["Gold Shield", "gold_shield", "A shield made out of wood, with a golden core.", "Crafting", "+1 Indirect Defense", [7], 1, 9], //129
    ["Radish", "radish", "A radish.", "Farming", "+5 HP on consume", [10,30], 1, 5], //130
    ["Golden Radish", "gold_radish", "A golden radish.", "Farming", "Equip for +0.15 Mining", [9], 2, 15], //131
    ["Potato", "potato", "A potato.", "Farming", "+5 HP on consume<br />Potion effect: 25% chance of Defense Up (1 turn)", [10,30], 1, 5], //132
    ["Golden Potato", "gold_potato", "A golden potato. No, it's not butter.", "Farming", "Equip for +0.15 Chopping", [9], 2, 15], //133
    ["Cabbage", "cabbage", "A head of cabbage.", "Farming", "+5 HP on consume", [10,30], 1, 5], //134
    ["Golden Cabbage", "gold_cabbage", "A golden head of cabbage. Some people use the leaves as decoration.", "Farming", "Equip for +0.2 Max HP", [9], 2, 15], //135
    ["Corn Cob", "corn", "A cob of corn.", "Farming", "+5 HP on consume", [10,30], 1, 5], //136
    ["Golden Corn Cob", "gold_corn", "A golden cob of corn. No, it's not butter.", "Farming", "Equip for +0.3 Indirect Attack", [9], 2, 15], //137
    ["Beetroot", "beetroot", "A beetroot.", "Farming", "+5 HP on consume", [10,30], 1, 5], //138
    ["Golden Beetroot", "gold_beetroot", "A golden beetroot.", "Farming", "Equip for +0.15 Digging", [9], 2, 15], //139
    ["Buttered Corn Cob", "corn", "A cob of corn, covered in butter.", "Crafting", "+7 HP on consume", [10,30], 1, 8], //140
    ["Baked Potato", "baked_potato", "A baked potato.", "Cooking", "+7 HP on consume", [10,30], 1, 8], //141
    ["Butter", "butter", "A bar of butter. No, it's not golden.", "Unknown", "-1 HP on consume<br />Potion effect: 30% chance to upgrade one effect", [10,11], 1, 2], //142
    ["Wooden Bowl", "wood_bowl", "A bowl made of wood.", "Carving", "", [11], 1, 3], //143
    ["Wooden Table", "wood_table", "A table made of wood. You can put things on it.", "Crafting", "Place it down as a Structure", [18], 1, 3], //144
    ["Wooden Chair", "wood_chair", "A chair made of wood. You can sit on it.", "Crafting", "", [18], 1, 2], //145
    ["Folding Chair", "fold_chair", "A chair made of iron. It can fold into a smaller form.", "Crafting", "", [18], 2, 8], //146
    ["Wheat Bundle", "wheat_bundle", "A bundle of wheat. You can't eat it raw, but you can make it into dough.", "Farming", "", [11,13], 1, 5], //147
    ["Golden Wheat Bundle", "gold_wheat", "A bundle of golden wheat. You can make it into dough, or equip it.", "Farming", "Equip for +0.15 Max HP", [11,13], 2, 15], //148
    ["Dough", "dough", "A ball of dough.", "Cooking", "", [11], 1, 6], //149
    ["Golden Dough", "gold_dough", "A ball of golden dough.", "Cooking", "Equip for +0.1 Cooking", [11], 2, 15], //150
    ["Apple Pie", "pie", "A pie with apples in it.", "Cooking", "+10 HP on consume", [10,30], 1, 11], //151
    ["Golden Apple Pie", "gold_pie", "A golden pie with golden apples in it.", "Cooking", "+17 HP on consume<br />Gain Regen+ and Defense Up+ (1 turn) on consume<br />Can't be equipped", [9,30], 3, 30], //152
    ["Bread", "bread", "A loaf of bread.", "Cooking", "+6 HP on consume<br />Potion effect: +3 HP<br />Potion effect: 50% chance to add 1 turn to one effect", [10,30], 1, 5], //153
    ["Wooden Hoe", "wood_hoe", "A hoe made out of wood. There isn't much of a point for this.", "Crafting", "+1 Indirect Attack<br />+1 Farming", [6], 1, 5], //154
    ["Stone Hoe", "stone_hoe", "A hoe made out of stone. There isn't much of a point for this.", "Crafting", "+1 Indirect Attack<br />+1 Farming", [6], 1, 7], //155
    ["Gold Hoe", "gold_hoe", "A hoe made out of gold. There isn't much of a point for this.", "Crafting", "+1 Indirect Attack<br />+2 Farming<br />10% chance of breaking per hit or harvest", [6], 1, 9], //156
    ["Iron Hoe", "iron_hoe", "A hoe made out of iron. There isn't much of a point for this.", "Crafting", "+1 Indirect Attack<br />+2 Farming", [6], 1, 12], //157
    ["Diamond Hoe", "diamond_hoe", "A hoe made out of diamond. Why did you <i>make</i> this?", "Crafting", "+1 Indirect Attack<br />+3 Farming", [6], 2, 17], //158
    ["Gold Helmet", "gold_helm", "A helmet made of gold.", "Crafting", "+1 Indirect Defense", [1], 1, 11], //159
    ["Gold Chestplate", "gold_chest", "A chestplate made of gold.", "Crafting", "+1 Direct Defense", [2], 1, 12], //160
    ["Gold Leggings", "gold_legs", "A pair of leggings made of gold.", "Crafting", "+1 Direct Defense", [3], 1, 11], //161
    ["Gold Boots", "gold_boots", "A pair of boots made of gold.", "Crafting", "+1 Indirect Defense", [4], 1, 11], //162
    ["Iron Helmet", "iron_helm", "A helmet made of iron.", "Crafting", "+1 Direct Defense", [1], 1, 14], //163
    ["Iron Chestplate", "iron_chest", "A chestplate made of iron.", "Crafting", "+1 Direct Defense<br />+1 Indirect Defense", [2], 1, 15], //164
    ["Iron Leggings", "iron_legs", "A pair of leggings made of iron.", "Crafting", "+1 Direct Defense<br />+1 Indirect Defense", [3], 1, 14], //165
    ["Iron Boots", "iron_boots", "A pair of boots made of iron.", "Crafting", "+1 Indirect Defense", [4], 1, 14], //166
    ["Red Mushroom", "red_mushroom", "A mushroom with a spotted red cap.", "Gathering", "Eat for Poison (1 turn)<br />Potion effect: Poison (1 turn)", [10,30], 1, 4], //167
    ["Brown Mushroom", "brown_mushroom", "A mushroom with a brown cap.", "Gathering", "Eat for +2 HP<br />Potion effect: 50% chance to add 1 turn to one effect", [10,30], 1, 3], //168
    ["Wooden Hammer", "wood_hammer", "A hammer made of wood.", "Crafting", "(has not been assigned attack values yet)<br />+1 Construction", [6], 1, 5], //169
    ["Wooden Trowel", "wood_trowel", "A trowel made of wood.", "Crafting", "(has not been assigned attack values yet)<br />+1 Gardening", [6], 1, 5], //170
    ["Wooden Fishing Rod", "wood_fish_rod", "A fishing rod made of wood.", "Crafting", "(has not been assigned attack values yet)<br />+1 Fishing", [6], 1, 5], //171
    ["Stone Hammer", "stone_hammer", "A hammer made of stone.", "Crafting", "(has not been assigned attack values yet)<br />+1 Construction", [6], 1, 7], //172
    ["Stone Trowel", "stone_trowel", "A trowel made of stone.", "Crafting", "(has not been assigned attack values yet)<br />+1 Gardening", [6], 1, 7], //173
    ["Stone Fishing Rod", "stone_fish_rod", "A fishing rod made of stone.", "Crafting", "(has not been assigned attack values yet)<br />+1 Fishing", [6], 1, 7], //174
    ["Gold Hammer", "gold_hammer", "A hammer made of gold.", "Crafting", "(has not been assigned attack values yet)<br />+2 Construction", [6], 1, 9], //175
    ["Gold Trowel", "gold_trowel", "A trowel made of gold.", "Crafting", "(has not been assigned attack values yet)<br />+2 Gardening", [6], 1, 9], //176
    ["Gold Fishing Rod", "gold_fish_rod", "A fishing rod made of gold.", "Crafting", "(has not been assigned attack values yet)<br />+2 Fishing", [6], 1, 9], //177
    ["Iron Hammer", "iron_hammer", "A hammer made of iron.", "Crafting", "(has not been assigned attack values yet)<br />+2 Construction", [6], 1, 12], //178
    ["Iron Trowel", "iron_trowel", "A trowel made of iron.", "Crafting", "(has not been assigned attack values yet)<br />+2 Gardening", [6], 1, 12], //179
    ["Iron Fishing Rod", "iron_fish_rod", "A fishing rod made of iron.", "Crafting", "(has not been assigned attack values yet)<br />+2 Fishing", [6], 1, 12], //180
    ["Diamond Hammer", "diamond_hammer", "A hammer made of diamond.", "Crafting", "(has not been assigned attack values yet)<br />+3 Construction", [6], 2, 17], //181
    ["Diamond Trowel", "diamond_trowel", "A trowel made of diamond.", "Crafting", "(has not been assigned attack values yet)<br />+3 Gardening", [6], 2, 17], //182
    ["Diamond Fishing Rod", "diamond_fish_rod", "A fishing rod made of diamond.", "Crafting", "(has not been assigned attack values yet)<br />+3 Fishing", [6], 2, 17], //183
    ["Old Boot", "old_boot", "An old boot you fished up.", "Fishing", "", [11], 1, 3], //184
    ["Pair of Old Boots", "old_boot_pair", "A pair of old boots you fished up. Surprisingly effective at defending you.", "Crafting", "+1 Direct Defense<br />+1 Fishing", [4], 1, 7], //185
    ["Wad of String", "string_wad", "A wad of String you fished up.", "Fishing", "", [20], 1, 0], //186
    ["Goldfish", "goldfish", "A small goldfish.", "Fishing", "Potion effect: 30% chance of Water Resistance (1 turn)<br />Cook it to make it edible", [26], 1, 3], //187
    ["Jellyfish", "jellyfish", "A small jellyfish. Packs a mean sting.", "Fishing", "Throw it at someone to deal 5 damage<br />Throw Effect: 20% chance of Paralysis (1 turn)", [26], 1, 6], //188
    ["Bloach", "fish_3", "{placeholder}", "Fishing", "", [0,26], 1, 9], //189
    ["Salmon", "fish_4", "{placeholder}", "Fishing", "", [0,26], 2, 12], //190
    ["Solid Goldfish", "gold_goldfish", "Like a goldfish, but actually gold.", "Fishing", "Cook it to make it equippable", [26], 2, 15], //191
    ["Spinach", "spinach", "A bunch of spinach. Supposedly makes you stronger.", "Farming", "+5 HP on consume<br />Potion effect: 25% chance of Attack Up (1 turn)", [10,30], 1, 5], //192
    ["Golden Spinach", "gold_spinach", "A bunch of gold spinach. <i>Actually</i> makes you stronger.", "Farming", "Equip for 0.4 Direct Attack", [9], 2, 19], //193
    ["Ripe Apple", "ripe apple", "An apple that's riper than usual.", "Farming", "+10 HP on Consume", [10,30], 1, 7], //194
    ["Ripe Orange", "ripe orange", "An orange that's riper than usual.", "Farming", "+10 HP on Consume", [10,30], 1, 7], //195
    ["Ripe Carrot", "ripe carrot", "A carrot that's riper than usual. It's oranger.", "Farming", "+10 HP on Consume", [10,30], 1, 7], //196
    ["Can of Ripe Beans", "ripe can", "A can of beans that's riper than usual.", "Farming", "+10 HP on Consume", [10,30], 1, 7], //197
    ["Ripe Radish", "ripe radish", "A radish that's riper than usual.", "Farming", "+10 HP on Consume", [10,30], 1, 7], //198
    ["Ripe Potato", "ripe potato", "A potato that's riper than usual.", "Farming", "+10 HP on Consume<br />Potion effect: 40% chance of Defense Up (1 turn)", [10,30], 1, 7], //199
    ["Ripe Cabbage", "ripe cabbage", "A head of cabbage that's riper than usual.", "Farming", "+10 HP on Consume", [10,30], 1, 7], //200
    ["Ripe Corn Cob", "ripe corn", "A cob of corn that's riper than usual.", "Farming", "+10 HP on Consume", [10,30], 1, 7], //201
    ["Ripe Beetroot", "ripe beetroot", "A beetroot that's riper than usual. Can be turned into red dye.", "Farming", "+10 HP on Consume", [10,30], 1, 7], //202
    ["Ripe Wheat Bundle", "ripe wheat_bundle", "A bundle of wheat that's riper than usual. Still can't be eaten directly, though.", "Farming", "", [10], 1, 7], //203
    ["Ripe Spinach", "ripe spinach", "A bunch of spinach that's riper than usual.", "Farming", "+10 HP on consume<br />Potion effect: 40% chance of Attack Up (1 turn)", [10,30], 1, 7], //204
    ["Enchanted Golden Carrot", "enchanted gold_carrot", "An enchanted carrot made out of gold. Surprisingly rare.", "Farming", "+0.6 Indirect Defense", [9], 3, 29], //205
    ["Enchanted Golden Apple", "enchanted golden_apple", "An enchanted golden apple. This is really rare!", "Farming", "Equip for +1 Max HP<br />Eat for Regen+ and Defense Up+ (1 turn)", [9,30], 3, 31], //206
    ["Red Potion", "potion_red", "A bottle filled with a red liquid. Who knows what it does?", "Alchemy", "", [16], 1, 0], //207
    ["Orange Potion", "potion_orange", "A bottle filled with an orange liquid. Who knows what it does?", "Alchemy", "", [16], 1, 0], //208
    ["Yellow Potion", "potion_yellow", "A bottle filled with a yellow liquid. Who knows what it does?", "Alchemy", "", [16], 1, 0], //209
    ["Green Potion", "potion_green", "A bottle filled with a green liquid. Who knows what it does?", "Alchemy", "", [16], 1, 0], //210
    ["Cyan Potion", "potion_cyan", "A bottle filled with a cyan liquid. Who knows what it does?", "Alchemy", "", [16], 1, 0], //211
    ["Blue Potion", "potion_blue", "A bottle filled with a blue liquid. Who knows what it does?", "Alchemy", "", [16], 1, 0], //212
    ["Purple Potion", "potion_purple", "A bottle filled with a purple liquid. Who knows what it does?", "Alchemy", "", [16], 1, 0], //213
    ["Cooked Solid Goldfish", "gold_goldfish", "It's melted a little from the heat.", "Cooking", "+0.15 Fishing", [9], 2, 17], //214
    ["Cooked Goldfish", "goldfish", "A small goldfish, cooked to perfection.", "Cooking", "Consume for +7 HP", [10,30], 1, 5], //215
    ["Leather", "leather", "A piece of leather, probably from a cow.", "Mobs", "", [11], 1, 3], //216
    ["Bone", "bone", "A single bone. Why <i>do</i> bones always look like that, anyway?", "Mobs", "", [11], 1, 2], //217
    ["Wool", "wool", "A block of wool from a sheep.", "Mobs", "", [11,17], 1, 4], //218
    ["Feather", "feather", "A single feather.", "Mobs", "", [11], 1, 2], //219
    ["Rotten Flesh", "rotten_flesh", "Some rotting flesh from a zombie. I guess you could eat it?", "Mobs", "+3 HP on consume<br />Eat for Hunger (1 turn, 80% chance)", [10,30,11], 1, 0], //220
    ["Cooked Flesh", "cooked_flesh", "Some rotting flesh that's been cooked. Probably safer to eat now.", "Cooking", "+4 HP on Consume", [10,30], 1, 0], //221
    ["Golden Flesh", "gold_flesh", "Some golden flesh. Yes, this is a thing that exists.", "Mobs", "Equip for +0.3 HP per turn", [9], 2, 0], //222
    ["Slime Ball", "slime_ball", "A ball of slime.", "Mobs", "", [11], 1, 3], //223
    ["Sap", "sap", "Some sap from a tree.", "Gathering", "Counts as 2 fuel units<br />Consume for -1 HP", [11], 1, 1], //224
    ["1 Fuel Unit", "fuel_outline", "This recipe requires <b>1</b> unit of fuel.", "", "", [28], 1, 0], //225
    ["2 Fuel Units", "fuel_outline", "This recipe requires <b>2</b> units of fuel.", "", "", [28], 1, 0], //226
    ["3 Fuel Units", "fuel_outline", "This recipe requires <b>3</b> units of fuel.", "", "", [28], 1, 0], //227
    ["4 Fuel Units", "fuel_outline", "This recipe requires <b>4</b> units of fuel.", "", "", [28], 1, 0], //228
    ["5 Fuel Units", "fuel_outline", "This recipe requires <b>5</b> units of fuel.", "", "", [28], 2, 0], //229
    ["6 Fuel Units", "fuel_outline", "This recipe requires <b>6</b> units of fuel.", "", "", [28], 2, 0], //230
    ["7 Fuel Units", "fuel_outline", "This recipe requires <b>7</b> units of fuel.", "", "", [28], 2, 0], //231
    ["8 Fuel Units", "fuel_outline", "This recipe requires <b>8</b> units of fuel.", "", "", [28], 3, 0], //232
    ["Christmas Stocking", "stocking", "A stocking for Christmas. Hang it up during your turn to get extra rewards!", "Christmas", "Hang it up<br />Can be used while KOd", [12,20], 3, 0], //233
    ["Effect Candy", "blue_candy", "A small piece of candy, wrapped in a blue wrapper. Eat it to gain a random positive effect!", "Events", "Consume for one of the following: Regen, Attack Up, Defense Up", [12,30,31], 2, 0], //234
    ["Skill Candy", "green_candy", "A small piece of candy, wrapped in a green wrapper. Eat it to gain 300% in a random skill!", "Events", "Consume for 300% in a random skill you have that is below level 5", [12,30,31], 2, 0], //235
    ["Item Candy", "red_candy", "A small piece of candy, wrapped in a red wrapper. Eat it to gain a random item!", "Events", "Consume for a random item (see Info)", [12,30,31], 2, 0], //236
    ["Mystery Gift", "gift_box", "A gift in a box. It could be anything!", "Item Candy", "Open it to gain a random item out of all the items currently in the game", [12,20], 3, 0], //237
    ["Time Candy", "black_candy", "A small piece of candy, wrapped in a black and yellow wrapper. If you have this in your inventory, you'll be allowed three posts in a turn, instead of two!", "Unknown", "Holding this item allows one extra post in a turn (consumed during extra post)", [12,30,31], 3, 0], //238
    ["Old Candy", "gray_candy", "A small piece of old candy. The color on the wrapper has faded away, so you can't tell what kind of candy this was.", "Old Stocking", "Consume for a reduced version of a different candy's effect", [12,30,31], 1, 0], //239
    ["Old Christmas Stocking", "old_stocking", "An old stocking for Christmas. It's too late to hang it up, but there might still be something inside...", "Post-Christmas", "Look inside", [12,20], 1, 0], //240
    ["LTT Hoodie", "ltt_hoodie", "Uh... thanks, Incendiary?", "Unknown", "+0.7 Indirect Defense<br />+2 Intelligence", [12,2], 2, 0], //241
    ["Furnace", "furnace", "A furnace. Having this in your inventory will passively reduce fuel requirements in recipies by 1.", "Crafting", "Reduces recipe fuel requirements by one", [17], 1, 7], //242
    ["Box", "box", "A box. It has the following items in it:", "Unknown", "You can take items out of it", [20], 1, 0], //243
    ["Hammer", "hammer", "A hammer capable of messing with Structures.", "Unknown", "Use it to mess with a Structure somehow (not consumed)<br />Equip for +0.7 Direct Attack and +4 damage vs. Structures", [29,6], 4, 0], //244
    ["bobm", "bobm", "it goes boom", "Unknown", "Use it near someone to Die and deal 1d40+40 to everyone in the nearby area (including you)", [29,20,23], 4, 0], //245
    ["Deployable Cannon", "cannon", "A cannon, ready for deploying.", "Unknown", "Deploy it to create a Cannon", [29,20], 4, 0], //246
    ["Sponge", "sponge", "A sponge. It can absorb water, and the abrasive side is kinda scratchy.", "Unknown", "Use it to remove water from something (not consumed)<br />Equip for +0.7 Direct Attack and 15% chance to inflict Soaked (1 turn)<br />+1 <span class=\"water\">Water</span> damage", [29,6], 4, 0], //247
    ["Esolang", "esolang", "An \"esoteric language\". You're not sure what it does, or how to use it, but that's the fun part!<br />Skill level: ", "Unknown", "Does something random on use<br />Usually fails, chance of failure decreases with higher Skill level<br />Using it increases Skill level", [29,20], 4, 0], //248
    ["Santa Hat", "santa_hat", "A traditional(-ish) Christmas hat.", "Christmas", "+1 Indirect Defense<br />+1 Indirect Attack<br />+5% XP from Monsters", [12,1], 1, 6], //249
    ["Chain Helmet", "chain_helm", "A helmet made of chainmail.", "Crafting", "+1 Indirect Defense", [1], 1, 11], //250
    ["Chain Chestplate", "chain_chest", "A chestplate made of chainmail.", "Crafting", "+1 Direct Defense<br />+1 Indirect Defense", [2], 1, 12], //251
    ["Chain Leggings", "chain_legs", "A pair of leggings made of chainmail.", "Crafting", "+1 Direct Defense", [3], 1, 11], //252
    ["Chain Boots", "chain_boots", "A pair of boots made of chainmail.", "Crafting", "+1 Indirect Defense", [4], 1, 11], //253
    ["4 Leaf Clover", "clover4", "A clover with 4 leaves. Supposedly brings you luck.", "Gathering", "+1 Luck<br />+0.1 Indirect Defense", [8,11,14], 1, 6], //254
    ["8 Leaf Clover", "clover8", "A clover with 8 leaves. This is really lucky!", "Meatpasting", "Holding this makes you luckier", [14], 2, 0], //255
    ["Raw Beef", "raw_beef", "Some raw beef from a cow. You should probably cook it.", "Mobs", "Consume for +3 HP<br />50% chance to give Nausea (1 turn)", [10,11,30], 1, 3], //256
    ["Steak", "cooked_beef", "Some steak from a cow.", "Mobs", "Consume for +6 HP", [10,30], 1, 6], //257
    ["Raw Pork", "raw_pork", "Some raw pork from a pig. You should probably cook it.", "Mobs", "Consume for +3 HP<br />50% chance to give Nausea (1 turn)", [10,11,30], 1, 3], //258
    ["Cooked Pork", "cooked_pork", "Some pork from a pig.", "Mobs", "Consume for +6 HP", [10,30], 1, 6], //259
    ["Raw Chicken", "raw_chicken", "Some raw chicken from a chicken. You should probably cook it.", "Mobs", "Consume for +3 HP<br />75% chance to give Nausea (1 turn)", [10,11,30], 1, 3], //260
    ["Cooked Chicken", "cooked_chicken", "Some chicken from a chicken.", "Mobs", "Consume for +6 HP", [10,30], 1, 6], //261
    ["Raw Mutton", "raw_mutton", "Some raw mutton from a sheep. You should probably cook it.", "Mobs", "Consume for +4 HP<br />50% chance to give Nausea (1 turn)", [10,11,30], 1, 3], //262
    ["Cooked Mutton", "cooked_mutton", "Some mutton from a sheep.", "Mobs", "Consume for +8 HP", [10,30], 1, 6], //263
    ["Meat Paste", "meat_paste", "A paste made from some meat. What, exactly, would you do with this?", "Crafting", "Consume for +5 HP", [11], 2, 10], //264
    ["Cookie", "cookie", "A plain cookie.", "Cooking", "Consume for +5 HP", [10,30], 1, 3], //265
    ["Chocolate Chip Cookie", "chocolate_chip_cookie", "A cookie with chocolate chips inside. A classic.", "Cooking", "Consume for +7 HP", [10,30], 1, 4], //266
    ["Apple Cookie", "apple_cookie", "A cookie with small chunks of apples inside.", "Cooking", "Consume for +8 HP", [10,30], 1, 4], //267
    ["Carrot Cookie", "carrot_cookie", "A cookie with small ribbons of carrot inside. It's like a carrot cake, but a cookie.<br />For some reason, you get the feeling that these will be important...<br />It probably has something to do with dragons.", "Cooking", "Consume for +6 HP", [10,30], 1, 6], //268
    ["Cocoa Beans", "cocoa_bean", "Some cocoa beans.", "Farming", "", [13,11], 1, 5], //269
    ["Chocolate Chips", "chocolate_chips", "Some chocolate chips.", "Cooking", "Consume for +2 HP", [10,11], 1, 2], //270
    ["Chocolate Bar", "chocolate_bar", "A bar made of solid chocolate. Yummy.", "Cooking", "Consume for +5 HP", [10], 1, 6], //271
    ["Wooden Staff", "wood_staff", "A staff made of wood.", "Crafting", "(has not been assigned attack values yet)<br />+1 Damage for \"magical\" attacks", [5], 1, 5], //272
    ["Stone Staff", "stone_staff", "A staff made of stone.", "Crafting", "(has not been assigned attack values yet)<br />+1 Damage for \"magical\" attacks", [5], 1, 7], //273
    ["Iron Staff", "iron_staff", "A staff made of iron.<br />For some reason, you get the feeling that this will be useful...", "Crafting", "(has not been assigned attack values yet)<br />+2 Damage for \"magical\" attacks", [5,11], 1, 12], //274
    ["Gold Staff", "gold_staff", "A staff made of gold.", "Crafting", "(has not been assigned attack values yet)<br />+2 Damage for \"magical\" attacks", [5], 1, 9], //275
    ["Diamond Staff", "diamond_staff", "A staff made of diamond.", "Crafting", "(has not been assigned attack values yet)<br />+3 Damage for \"magical\" attacks", [5], 2, 17], //276
    ["Orange Pie", "pie", "A pie with oranges in it.", "Cooking", "+9 HP on consume", [10,30], 1, 7], //277
    ["Shepherd's Pie", "pie", "A pie with meat in it, topped with mashed potatoes.", "Cooking", "+14 HP on consume", [10,30], 2, 17], //278
    ["Blueberries", "blueberries", "A handful of blueberries.", "Farming", "+4 HP on consume", [10,30], 1, 5], //279
    ["Golden Blueberries", "gold_blueberries", "A handful of golden blueberries.", "Farming", "Equip for +0.2 Gathering", [9], 2, 15], //280
    ["Cherries", "cherries", "A handful of cherries.", "Farming", "+4 HP on consume", [10,30], 1, 5], //281
    ["Golden Cherries", "gold_cherries", "A handful of golden cherries.", "Farming", "Equip for +0.2 Digging", [9], 2, 15], //282
    ["Blackberries", "blackberries", "A handful of blackberries.", "Farming", "+4 HP on consume", [10,30], 1, 5], //283
    ["Golden Blackberries", "gold_blackberries", "A handful of golden blackberries.", "Farming", "Equip for +0.2 Crafting", [9], 2, 15], //284
    ["Peach", "peach", "A peach.", "Farming", "+4 HP on consume", [10,30], 1, 5], //285
    ["Golden Peach", "gold_peach", "A golden peach.", "Farming", "Equip for +0.2 Carving", [9], 2, 15], //286
    ["Pear", "pear", "A pear.", "Farming", "+4 HP on consume", [10,30], 1, 5], //287
    ["Golden Pear", "gold_pear", "A golden pear.", "Farming", "Equip for +0.2 Construction", [9], 2, 15], //288
    ["Blackberry Pie", "pie", "A pie with blackberries in it.", "Cooking", "+9 HP on consume", [10,30], 1, 6], //289
    ["Cherry Pie", "pie", "A pie with cherries in it.", "Cooking", "+9 HP on consume", [10,30], 1, 6], //290
    ["Pumpkin Pie", "pie", "A pie with pumpkin in it. A staple of fall.", "Cooking", "+11 HP on consume", [10,30], 1, 8], //291
    ["Peach Pie", "pie", "A pie with peaches in it.", "Cooking", "+10 HP on consume", [10,30], 1, 6], //292
    ["Canned Apple Slices", "can", "A can with apple slices in it.", "Crafting", "Open it", [20], 1, 6], //293
    ["Canned Orange Slices", "can", "A can with orange slices in it.", "Crafting", "Open it", [20], 1, 6], //294
    ["Canned Peach Slices", "can", "A can with peach slices in it.", "Crafting", "Open it", [20], 1, 6], //295
    ["Canned Pear Slices", "can", "A can with pear slices in it.", "Crafting", "Open it", [20], 1, 6], //296
    ["Canned Carrots", "can", "A can with carrots in it.", "Crafting", "Open it", [20], 1, 6], //297
    ["Canned Potatoes", "can", "A can with potatoes in it.", "Crafting", "Open it", [20], 1, 6], //298
    ["Canned Corn", "can", "A can with corn in it.", "Crafting", "Open it", [20], 1, 6], //299
    ["Canned Blueberries", "can", "A can with bluebrries in it.", "Crafting", "Open it", [20], 1, 6], //300
    ["Canned Cherries", "can", "A can with cherries in it.", "Crafting", "Open it", [20], 1, 6], //301
    ["Canned Radish Slices", "can", "A can with radish slices in it.", "Crafting", "Open it", [20], 1, 6], //302
    ["Baby Carrots", "baby_carrots", "Some baby carrots.<br /><br />A small dragon would probably like these.", "Cooking", "Consume for +6 HP", [10,30], 1, 4], //303
    ["Bucket", "bucket", "A bucket. It can hold liquids, or be used as a helmet.", "Crafting", "+0.7 Direct Defense", [1,11,20], 1, 2], //304
    ["Water Bucket", "water_bucket", "A bucket filled with water.", "Bucket", "", [20], 1, 4], //305
    ["Milk Bucket", "milk_bucket", "A bucket filled with milk.", "Bucket", "Drink it for +7 HP<br />Drink it to reduce all active effects by 1 turn", [20,30], 1, 6], //306
    ["Lava Bucket", "lava_bucket", "A bucket filled with lava. Somehow, it's not melting.", "Bucket", "", [20], 2, 20], //307
    ["Egg", "egg", "An egg.", "Mobs", "", [11,21], 1, 2], //308
    ["Sticker Book", "sticker_book", "A book for you to put stickers in.", "Free", "Put stickers in it", [33], 4, 0], //309
    ["Sticker Page", "sticker_page", "An extra page for your sticker book. Fits 4 stickers.", "Crafting", "Put it in your Sticker Book", [33, 20], 3, 0], //310
    ["Sword Sticker", "sticker_sword", "A sticker of a diamond sword.<br />[St1, 1, C]", "Unknown", "Put it in your Sticker Book for +0.5 Direct Attack", [37, 20], 1, 0], //311
    ["Raised Sword Sticker", "sticker_sword_rare", "A raised sticker of a diamond sword. It's too bad you can't take the sword off and attack people with it.<br />[St1, 2, R]", "Unknown", "Put it in your Sticker Book for +1.1 Direct Attack", [37, 20], 3, 30], //312
    ["Shield Sticker", "sticker_shield", "A sticker of a diamond shield.<br />[St1, 3, C]", "Unknown", "Put it in your Sticker Book for +0.5 Direct Defense", [37, 20], 1, 0], //313
    ["Raised Sheild Sticker", "sticker_shield_rare", "A raised sticker of a diamond shield. Too bad the diamond's fake.<br />[St1, 4, R]", "Unknown", "Put it in your Sticker Book for +1.1 Direct Defense", [37, 20], 3, 0], //314
    ["Knife Sticker", "sticker_knife", "A sticker of a knife. How'd this get in the game before an actual knife?<br />[St1, 5, C]", "Unknown", "Put it in your Sticker Book for +2 Damage to Melee attacks", [37, 20], 1, 0], //315
    ["Raised Knife Sticker", "sticker_knife_rare", "A raised sticker of a knife.<br />[St1, 6, R]", "Unknown", "Put it in your Sticker Book for +5 Damage to Melee attacks", [37, 20], 3, 0], //316
    ["Bow Sticker", "sticker_bow", "A sticker of a bow.<br />[St1, 7, C]", "Unknown", "Put it in your Sticker Book for +2 Damage to Ranged attacks", [37, 20], 1, 0], //317
    ["Raised Bow Sticker", "sticker_bow_rare", "A raised sticker of a bow. The string is made of actual string.<br />[St1, 8, R]", "Unknown", "Put it in your Sticker Book for +5 Damage to Ranged attacks", [37, 20], 3, 0], //318
    ["Iron Ore Sticker", "sticker_iron", "A sticker of a lump of iron ore.<br />[St1, 9, C]", "Unknown", "Put it in your Sticker Book for +0.7 Mining", [37, 20], 1, 0], //319
    ["Raised Iron Ore Sticker", "sticker_iron_rare", "A raised sticker of a lump of iron ore.<br />[St1, 10, R]", "Unknown", "Put it in your Sticker Book for +2 Mining", [37, 20], 3, 0], //320
    ["Apple Sticker", "sticker_apple", "A sticker of an apple. The fruit, not the cat.<br />[St1, 11, C]", "Unknown", "Put it in your Sticker Book for +0.9 HP/turn", [37, 20], 1, 0], //321
    ["Raised Apple Sticker", "sticker_apple_rare", "A raised sticker of an apple.<br />[St1, 12, R]", "Unknown", "Put it in your Sticker Book for +2.5 HP/turn", [37, 20], 3, 0], //322
    ["Carrot Sticker", "sticker_carrot", "A sticker of a carrot.<br />[St1, 13, C]", "Unknown", "Put it in your Sticker Book for +0.7 Farming", [37, 20], 1, 0], //323
    ["Raised Carrot Sticker", "sticker_carrot_rare", "A raised sticker of a carrot.<br />[St1, 14, R]", "Unknown", "Put it in your Sticker Book for +2 Farming", [37, 20], 3, 0], //324
    ["Sap Sticker", "sticker_sap", "A sticker of some sap.<br />[St1, 15, C]", "Unknown", "Put it in your Sticker Book for +0.7 Chopping", [37, 20], 1, 0], //325
    ["Raised Sap Sticker", "sticker_sap_rare", "A raised sticker of some sap. The sap isn't sticky, but the sticker is.<br />[St1, 16, R]", "Unknown", "Put it in your Sticker Book for +2 Chopping", [37, 20], 3, 0], //326
    ["Stone Shield", "stone_shield", "A shield made out of wood, with a stone core.", "Crafting", "+0.5 Indirect Defense<br />+0.5 Direct Defense", [7], 1, 7], //327
    ["Sticker Pack (St1)", "sticker_pack_cyan", "A pack of two stickers. Open it and see what you get!", "Crafting", "Grants two random stickers", [20], 2, 16], //328
    ["Mystery Potion D", "mystery_potion", "A bottle filled with a strange liquid. Who knows what it does?<br /><br />No, really, what does this do. And what's with the fancy gradient?", "Unknown", "???", [16, 32, 29, 33, 40], 5, 0], //329
    ["stickers.empty_sticker", "empty_sticker", "desc.empty_equip", "src.empty_equip", "", [28, 37], 0, 0], //330
    ["Orb Sticker", "sticker_orb", "A sticker of an orb. Looks more like a circle to me.<br />[St1, 17, UC]", "Unknown", "Put it in your Sticker Book for +0.2 Direct Attack, +0.2 Direct Defense, +0.4 Max HP, and +0.1 to all Skills", [37, 20], 2, 0], //331
    ["Raised Orb Sticker", "sticker_orb_rare", "A raised sticker of an orb. Kind of an \"all-rounder\", if you catch my drift.<br />[St1, 18, VR]", "Unknown", "Put it in your Sticker Book for +0.7 Direct Attack, +0.7 Direct Defense, +1.5 Max HP, +0.3 Luck, and +0.5 to all Skills", [37, 20], 3, 0], //332
    ["Ripe Blueberries", "ripe blueberries", "A handful of blueberries that are riper than usual.", "Farming", "+10 HP on Consume", [10,30], 1, 7], //333
    ["Ripe Cherries", "ripe cherries", "A handful of cherries that are riper than usual. Can be turned into red dye.", "Farming", "+10 HP on Consume", [10,30], 1, 7], //334
    ["Ripe Blackberries", "ripe blackberries", "A handful of blackberries that are riper than usual.", "Farming", "+10 HP on Consume", [10,30], 1, 7], //335
    ["Ripe Peach", "ripe peach", "A peach that's riper than usual. Very juicy.", "Farming", "+10 HP on Consume", [10,30], 1, 7], //336
    ["Ripe Pear", "ripe pear", "A pear that's riper than usual.", "Farming", "+10 HP on Consume", [10,30], 1, 7], //337
    ["Lemon", "lemon", "A lemon. Very sour.", "Farming", "+4 HP on consume<br />Grants one turn of Sour! on consume", [10,30], 1, 5], //338
    ["Golden Lemon", "gold_lemon", "A golden lemon. It's so sour that it can channel sourness into strength. Somehow.", "Farming", "+1 Direct Attack for every turn of Sour! you currently have<br/>Sour! does not reduce Accuracy", [9], 2, 15], //339
    ["Ripe Lemon", "ripe lemon", "A lemon that's riper than usual. Even more sour than a lemon.", "Farming", "+9 HP on consume<br />Grants one turn of Sour! on consume<br />50% chance to grant an extra turn of Sour!", [10,30], 1, 7], //340
    ["Lime", "lime", "A lime. Quite sour.", "Farming", "+5 HP on consume<br />75% chance to grant one turn of Sour! on consume", [10,30], 1, 5], //341
    ["Golden Lime", "gold_lime", "A golden lime. Are you sure this isn't a lemon?", "Farming", "+1.1 Direct Attack for every turn of Sour! you currently have<br/>Sour! only reduces Accuracy by 0.5", [9], 2, 15], //342
    ["Ripe Lime", "ripe lime", "A lime that's riper than usual. Even more sour than a lime.", "Farming", "+10 HP on consume<br />75% chance to grant one turn of Sour! on consume<br />30% chance to grant an extra turn of Sour!", [10,30], 1, 7], //343
    ["Lemon Juice", "lemon_juice", "The juice of a lemon. Very sour.", "Crafting", "+3 HP on consume<br />Grants one turn of Sour! on consume", [10,30,11], 1, 5], //344
    ["Lime Juice", "lime_juice", "The juice of a lime. Quite sour.", "Crafting", "+4 HP on consume<br />75% chance to grant one turn of Sour! on consume", [10,30,11], 1, 7], //345
    ["Lemonade", "lemonade", "Some lemonade. The sweetness of the sugar balances out the sourness of the lemon.", "Crafting", "+8 HP on consume<br />Grants one turn of Sour! on consume<br />Grants one turn of Sugar Rush on consume", [10,30], 1, 10], //346
    ["Limeade", "limeade", "Some limeade. If you can make it with lemons, why not limes?", "Crafting", "+10 HP on consume<br />75% chance to grant one turn of Sour! on consume<br />75% chance to grant one turn of Sugar Rush on consume", [10,30], 1, 10], //347
    ["Sugar", "sugar", "A pile of sugar. It's sweet.", "Crafting", "+2 HP on consume<br />70% chance to grant one turn of Sugar Rush on consume", [10,30,11], 1, 2], //348
    ["High Fructose Corn Syrup", "hfcs", "Blegh.", "Crafting", "-3 HP on consume<br />Grants one turn of Sugar Rush on consume", [10,30], 1, 4], //349
    ["Popcorn", "popcorn", "Some popcorn. A movie theater staple.", "Crafting", "+7 HP on consume", [10,30], 1, 9], //350
    ["Heart-Shaped Chocolate", "heart_chocolate", "A small chocolate in the shape of a heart. What could be inside it?", "Valentine's Day", "+1 HP on consume<br />Filled with something random", [10,30], 3, 0], //351
    ["\"you tried\" Badge", "you_tried", "A golden badge in the shape of a star.", "Crafting", "+0.2 Direct Defense", [8], 1, 0], //352
    ["Wooden Band", "wood_band", "A band made of wood, to go around your wrist.", "Crafting", "+0.3 Indirect Defense<br />+0.3 Indirect Attack", [8], 1, 5], //353
    ["Stone Band", "stone_band", "A band made of stone, to go around your wrist.", "Crafting", "+0.4 Indirect Defense<br />+0.4 Indirect Attack", [8], 1, 7], //354
    ["Iron Band", "iron_band", "A band made of iron, to go around your wrist.", "Crafting", "+0.7 Indirect Defense<br />+0.7 Indirect Attack", [8], 1, 9], //355
    ["Gold Band", "gold_band", "A band made of gold, to go around your wrist.", "Crafting", "+0.3 Indirect Defense<br />+0.3 Indirect Attack", [8], 1, 12], //356
    ["Diamond Band", "diamond_band", "A band made of diamond, to go around your wrist.", "Crafting", "+1.2 Indirect Defense<br />+1.2 Indirect Attack", [8], 2, 17], //357
    ["Chalk", "chalk", "A block of chalk. It's dusty.", "Mining", "", [11,17], 1, 3], //358
    ["Lamp Oil", "lamp_oil", "A container of lamp oil. It's very flammable.", "Gathering", "Counts as 3 fuel units<br />Throw it at someone to inflict Oiled for 2 turns", [11,20,21,27], 1, 6], //359
    ["Pearl", "pearl", "A small, spherical pearl. Pearls that are naturally spherical are pretty rare.", "Fishing", "", [11], 2, 13], //360
    ["Amethyst Shard", "amethyst", "A shard of amethyst.", "Mining", "", [24,11], 2, 10], //361
    ["Quartz Shard", "quartz", "A shard of white quartz. Sometimes, it comes in different colors, but then it has a different name.", "Mining", "", [24,11], 2, 9], //362
    ["Sapphire", "sapphire", "A sapphire. Why do these end up teardrop-shaped so often?", "Mining", "", [24,11], 2, 17], //363
    ["Ruby", "ruby", "A small ruby. Aren't these normally square, rather than... I think that's an octagon?", "Mining", "", [24,11], 2, 18], //364
    ["Thunder Stone", "thunder_stone", "It's brimming with electricity. One of these could probably power up a weapon signifcantly.<br />...if you have the right weapon.", "Unknown (FS2); Gathering with an 8-Leaf Clover (FS3)", "Can only be obtained once per game, ever<br />Combine with a specific weapon to strengthen it", [11, 29, 32, 33], 4, 0], //365
    ["Rope", "rope", "A coil of rope. You can climb it, if it's hung off of something.", "Crafting", "", [20,21], 1, 4], //366
    ["Topaz", "topaz", "A single topaz. At least, it's shaped like a topaz. The color's weird.", "Mining", "", [24,11], 2, 13], //367
    ["Ruby-Sapphire Bar", "ruby_sapphire_bar", "Look, I know that rubies and sapphires are just different colors of the same mineral, but that doesn't mean this makes sense.", "Crafting", "", [11,25], 2, 19], //368
    ["Electrum Ore", "electrum_ore", "Some electrum ore. Can be crafted into bars, requiring 1 ore per bar.", "Mining", "", [24], 1, 8], //369
    ["Electrum Bar", "electrum_bar", "A bar of electrum. Touching it gives a light static shock.", "Crafting", "", [11,25], 1, 10], //370
    ["Electrum Nugget", "electrum_nugget", "A nugget of electrum. It's like a weak battery.", "Crafting", "", [11,41], 1, 2], //371
    ["Gunpowder", "gunpowder", "Some black powder. Careful, it's flammable. And explosive.", "Mobs", "", [11], 1, 3], //372
    ["Snow", "snow_block", "A block of snow.", "Digging", "", [11], 1, 4], //373
    ["Snowball", "snowball", "A ball of snow.", "Crafting", "Throw it at someone to deal 1 <span class=\"ice\">Ice</span> damage", [11,21], 1, 1], //374
    ["Snowball with a rock in it", "snowball_with_rock", "A ball of snow with a rock in it.", "Crafting", "Throw it at someone to deal 2 <span class=\"ice\">Ice</span> damage and 4 Typeless damage", [21], 1, 0], //375
    ["Lever", "lever", "A lever. You can push it to make electricity flow.", "Crafting", "", [17], 1, 4], //376
    ["Wooden Button", "wood_button", "A button made of wood. You can push it to make electricity flow.", "Crafting", "", [17], 1, 3], //377
    ["Stone Button", "stone_button", "A button made of stone. You can push it to make electricity flow.", "Crafting", "", [17], 1, 4], //378
    ["Iron Button", "iron_button", "A button made of iron. You can push it to make electricity flow.", "Crafting", "", [17], 1, 6], //379
    ["Wooden Pressure Plate", "wood_plate", "A pressure plate made of wood. You can push it to make electricity flow.", "Crafting", "", [17], 1, 4], //380
    ["Stone Pressure Plate", "stone_plate", "A pressure plate made of stone. You can push it to make electricity flow.", "Crafting", "", [17], 1, 5], //381
    ["Wire String", "wire", "A string of wire. Electricity can flow through it.", "Crafting", "", [11], 1, 3], //382
    ["Disposable Phone", "disp_phone", "A cheap phone. You can make calls on it, but it's so poorly made that it breaks when hung up.", "Crafting", "Call people on it<br />Can also call other players", [11,20], 2, 8], //383
    ["Reuseable Phone", "reuse_phone", "A once-cheap phone, augmented with hardite to strengthen it. The downside is that it chugs through electrum nuggets like water, which is why it has three battery slots.<br />Battery status: ", "Crafting", "Uses Electrum Nuggets as batteries<br />Call people on it<br />Can also call other players<br />Does not break on usage", [20], 3, 55], //384
    ["Used Disposable Phone", "used_disp_phone", "A cheap phone, which was broken, tossed into the sea, and then fished back up again.", "Fishing", "", [26], 1, 0], //385
    ["Morshu's Express Pack", "crate", "A crate from Morshu, containing lamp oil, rope, and bombs.", "Phone", "Open it", [20], 1, 0], //386
    ["Takeout Express Variety Pack", "crate", "A cardboard box with a crate-like pattern, filled with various food.", "Phone", "Open it and eat the food", [20], 1, 0], //387
    ["Mama June's Pepperoni Pizza", "pizza", "A pizza from the \"local\" Mama June's Pizza.", "Phone", "+12 HP on consume", [10], 1, 0], //388
    ["Coin", "coin", "A coin that you minted yourself. It's obviously counterfeit, since you just swirled the gold and copper together, but for some reason all the stores you call will take it anyway?", "Crafting", "", [20], 1, 0], //389
    ["Cod", "cod", "A small cod.", "Fishing", "Cook it to make it edible", [26], 1, 4], //390
    ["Cooked Cod", "cooked_cod", "A small cod, cooked to perfection.", "Cooking", "Consume for +7 HP.", [10,30], 1, 6], //391
    ["Seaweed", "seaweed", "A square of raw seaweed. Probably not that useful.", "Fishing", "Cook it to make it edible", [11], 1, 3], //392
    ["Red Herring", "red_herring", "This is clearly the most important item in the entire game.", "Fishing", "+0.7 Direct Attack", [26,5], 2, 13], //393
    ["Spin Fish", "spin_fish", "A really large fish. It's too large to eat, but you could spin it to knock people off of things.", "Fishing", "+1.3 Direct Attack<br />Causes knockback", [26,5], 2, 18], //394
    ["Bag of Fish", "fish_bag", "A bag containing a number of fish.", "Fishing", "Open to gain 1d3+1 fish from any non-Junk/non-Treasure item pool", [20,42], 2, 14], //395
    ["Bottle o' Enchanting", "potion_enchant", "A bottle filled with a bunch of skill experience.", "Fishing", "Throw it on someone (can be yourself) to give them 50% Exp to 4 random skills", [16,21], 3, 0], //396
    ["Chest", "chest", "A chest. You can put it in a structure.", "Crafting", "Stores 18 items", [17], 1, 7], //397
    ["Official Coin", "coin_good", "An official coin from the Isles of Fighting.<br /><br />You know, the country that Trisland is technically in.", "Unknown", "", [20], 1, 0], //398
    ["Dollar Bill", "dollar_bill", "An official dollar bill from the Isles of Fighting. Valued at 4 coins.", "Unknown", "", [20], 1, 0], //399
    ["Geode", "geode", "It may look like an ordinary rock, but it actually contains several gems.", "Mining", "Open to gain 1d3+1 gems", [20,42], 2, 13], //400
    ["Contact Card (Wet)", "contact_card_wet", "A small card with a phone number and a name on it. It's soaked from being underwater, but is still legible.", "Fishing", "Use it to add the number to your contact list", [20], 1, 0], //401
    ["Contact Card (Dry)", "contact_card_dry", "A small card with a phone number and a name on it.", "Unknown", "Use it to add the number to your contact list", [20], 1, 0], //402
    ["Decicoin", "penny", "A decicoin that you minted yourself. It's clearly counterfeit, given all the dents, but for some reason all the stores you call will take it anyway? Valued at 1/10th of a coin.", "Crafting", "", [20], 1, 0], //403
    ["Official Decicoin", "penny_good", "An official decicoin from the Isles of Fighting. Valued at 1/10th of a coin.", "Unknown", "", [20], 1, 0], //404
    ["Tomato", "tomato", "A tomato.", "Farming", "+5 HP on consume", [10,30], 1, 5], //405
    ["Golden Tomato", "gold_tomato", "A golden tomato. Shame there's no tomato sauce item.", "Farming", "+0.15 Cooking", [9], 2, 15], //406
    ["Ripe Tomato", "ripe tomato", "A tomato that's riper than usual.", "Farming", "+10 HP on consume", [10,30], 1, 7], //407
    ["Bomb", "bomb", "A bomb. You can light it and throw it at something to blow it up.", "Crafting", "Throw it at someone after lighting it to deal 9+<span class=fire>6</span> damage", [21,22], 1, 4], //408
    ["Mystery Potion Y", "mystery_potion", "A bottle filled with a strange liquid. Who knows what it does?<br /><br />Oh no, there are more of them!", "Unknown", "???", [16, 32, 29, 33, 40], 5, 0], //409
    ["Mystery Potion AL", "mystery_potion", "A bottle filled with a strange liquid. Who knows what it does?<br /><br />Will we ever know what these do?", "Unknown", "???", [16, 32, 29, 33, 40], 5, 0], //410
    ["Shrapnel Bomb", "shrapnel_bomb", "A bomb with cracks in it, designed to break into shrapnel after exploding.", "Crafting", "Throw it at someone after lighting it to deal 12+<span class=fire>6</span> damage<br />Will also inflict Bleeding for 2 turns", [21,22], 1, 0], //411
]