var equiplist = [ //[name, css class for icon, description, source, bonuses, [categories]]
    ["null", "iconless", "Whoops, forgot to put something here.", "An error", "", [0]], //0
    ["armor.empty_helm", "empty_helm", "desc.empty_equip", "src.empty_equip", "", [28,1]], //1
    ["armor.empty_chest", "empty_chest", "desc.empty_equip", "src.empty_equip", "", [28,2]], //2
    ["armor.empty_legs", "empty_legs", "desc.empty_equip", "src.empty_equip", "", [28,3]], //3
    ["armor.empty_boots", "empty_boots", "desc.empty_equip", "src.empty_equip", "", [28,4]], //4
    ["armor.empty_sword", "empty_sword", "desc.empty_equip", "src.empty_equip", "", [28,5]], //5
    ["armor.empty_shield", "empty_shield", "desc.empty_equip", "src.empty_equip", "", [28,7]], //6
    ["armor.empty_acc", "empty_acc", "desc.empty_equip", "src.empty_equip", "", [28,8]], //7
    ["armor.empty_food", "empty_food", "desc.empty_equip", "src.empty_equip", "", [28,9]], //8
    ["Wooden Sword", "wood_sword", "A sword made out of wood.", "Crafting", "+1 Direct Attack", [5,23]], //9
    ["Wooden Shovel", "wood_shovel", "A shovel made out of wood.", "Crafting", "+1 Indirect Attack<br />+1 to Digging", [6]], //10
    ["Stick and Rock", "stick_rock", "A rock taped to a stick. This isn't very good.", "Crafting", "50% Chance of breaking on hit", [5,23]], //11
    ["Golden Carrot", "gold_carrot", "A carrot made out of gold. Aren't carrots supposed to give you better eyesight?", "Farming", "+0.3 Indirect Defense", [9]], //12
    ["Diamond Shield", "diamond_shield", "A shield with a diamond in the center.", "Crafting", "+1 Indirect Defense<br />+1 Direct Defense", [7]], //13
    ["Golden Sword", "gold_sword", "A sword made out of gold. Seems fragile.", "Crafting", "+2 Indirect Attack<br />10% chance of breaking on hit", [5,23]], //14
    ["Golden Shovel", "gold_shovel", "A shovel made out of gold. Seems fragile.", "Crafting", "+1 Indirect Attack<br />+2 to Digging<br />10% chance of breaking on hit or dig", [6]], //15
    ["Golden Pickaxe", "gold_pickaxe", "A pickaxe made out of gold. Seems fragile.", "Crafting", "+1 Indirect Attack<br />+2 to Mining<br />10% chance of breaking on hit or mine", [6]], //16
    ["Golden Axe", "gold_axe", "A axe made out of gold. Seems fragile.", "Crafting", "+1 Indirect Attack<br />+2 to Chopping<br />10% chance of breaking on hit or chop", [6]], //17
    ["Iron Sword", "iron_sword", "A sword made out of iron.", "Crafting", "+1 Direct Attack<br />+2 Indirect Attack", [5,23]], //18
    ["Iron Shovel", "iron_shovel", "A shovel made out of iron.", "Crafting", "+1 Indirect Attack<br />+2 to Digging<br />5% chance to steal an item", [6]], //19
    ["Iron Pickaxe", "iron_pickaxe", "A pickaxe made out of iron.", "Crafting", "+1 Direct Attack<br />+2 to Mining", [6]], //20
    ["Iron Axe", "iron_axe", "A axe made out of iron.", "Crafting", "+1 Direct Attack<br />+1 Indirect Attack<br />+2 to Chopping", [6]], //21
    ["Stone Sword", "stone_sword", "A sword made out of stone.", "Crafting", "+1 Direct Attack<br />+1 Indirect Attack", [5,23]], //22
    ["Stone Shovel", "stone_shovel", "A shovel made out of stone.", "Crafting", "+1 Indirect Attack<br />+1 to Digging", [6]], //23
    ["Stone Pickaxe", "stone_pickaxe", "A pickaxe made out of stone.", "Crafting", "+1 Indirect Attack<br />+1 to Mining", [6]], //24
    ["Stone Axe", "stone_axe", "A axe made out of stone.", "Crafting", "+1 Direct Attack<br />+1 to Chopping", [6]], //25
    ["Diamond Sword", "diamond_sword", "A sword made out of diamonds.", "Crafting", "+2 Direct Attack<br />+1 Indirect Attack", [5,23]], //26
    ["Diamond Shovel", "diamond_shovel", "A shovel made out of diamonds.", "Crafting", "+2 Indirect Attack<br />+3 to Digging<br />10% chance to steal an item", [6]], //27
    ["Diamond Pickaxe", "diamond_pickaxe", "A pickaxe made out of diamonds.", "Crafting", "+1 Direct Attack<br />+2 Indirect Attack<br />+3 to Mining", [6]], //28
    ["Diamond Axe", "diamond_axe", "A axe made out of diamonds.", "Crafting", "+2 Direct Attack<br />+3 to Chopping", [6]], //29
    ["Wooden Pickaxe", "wood_pickaxe", "A pickaxe made out of wood.", "Crafting", "+1 Indirect Attack<br />+1 to Mining", [6]], //30
    ["Wooden Axe", "wood_axe", "A axe made out of wood.", "Crafting", "+1 Indirect Attack<br />+1 to Chopping", [6]], //31
    ["Logo 3", "logo_3", 'The "3" from the logo.', "Unknown", "", [28]], //32
    ["Logo F", "logo_f", 'The "F" from the logo. Why\'s it so small now?', "Unknown", "", [28]], //33
    ["Logo S", "logo_s", 'The "S" from the logo.', "Unknown", "", [28]], //34
    ["Rock", "rock", "It's a small rock.", "Gathering", "Throw to deal 4 damage", [20,21]], //35
    ["Coal", "coal", "It's a piece of coal.", "Mining", "Counts as 4 fuel units", [24,27]], //36
    ["Diamond", "diamond", "It's a diamond. These things are rare!", "Mining", "", [24,11]], //37
    ["Decent Hammer", "decent_hammer", "Bonk.", "Crafting", "+1 Direct Attack", [5,23]], //38
    ["Slingshot", "slingshot", "You shoot things with it.", "Crafting", "+1 Indirect Attack<br />Can be used with ammo to deal more damage", [5]], //39
    ["Flint & Steel", "flint_and_steel", "Sets things on fire.", "Crafting", "+30% chance to inflict On Fire on hit for 1 turn", [5,20]], //40
    ["TNT", "tnt", "Explodes after being ignited.", "Unknown", "", [17]], //41
    ["Icicle", "icicle", "It's cold, and kinda pointy.", "Gathering", "+10% chance to inflict Frozen on hit for 2 turns", [5,23]], //42
    ["Tray of Cookies", "cookie_tray", "A tray filled with cookies.", "Cooking", "", [20]], //43
    ["Log", "log", "A log.", "Chopping", "", [17]], //44
    ["Stick", "stick_item", "It's a stick. You can use it in a bunch of different things.", "Chopping", "Counts as 1 fuel unit", [11,27]], //45
    ["Planks", "planks", "Some planks.", "Chopping", "Counts as 2 fuel units", [17,11,27]], //46
    ["Rotting Mush", "crop_mush", "Eww, why did you keep this?", "Farming", "Make it into fertilizer, or just get rid of it<br />Potion effect: Nausea (1 turn)", [30,14,11]], //47
    ["Banana", "banana", "Potassium", "Unknown", "Eat it for potassium", [14,10,30]], //48
    ["Sand", "sand", "A cube of sand. Carful, or it'll get everywhere.", "Digging", "Throw it at someone to Blind them for a turn", [17,21]], //49
    ["Gravel", "gravel", "A cube of gravel. Maybe there's some flint in there?", "Digging", "", [17]], //50
    ["Stone", "stone", "A cube of stone. Finally, some decent tools!", "Mining", "", [17,24,11]], //51
    ["Sandstone", "sandstone", "A cube of sandstone.", "Crafting", "", [17]], //52
    ["Bricks", "bricks", "A cube of bricks. You could make a wall out of this.", "Crafting", "", [17]], //53
    ["Stone Bricks", "stone_bricks", "A cube of stone bricks. You could make a wall out of this.", "Crafting", "", [17]], //54
    ["Sandstone Bricks", "sandstone_bricks", "A cube of sandstone bricks. You could make a wall out of this.", "Crafting", "", [17]], //55
    ["Carved Sandstone", "carved_sandstone", "A cube of carved sandstone. Nice carvings.", "Carving", "", [17]], //56
    ["Glass", "glass_block", "A cube of glass. See-through, which makes up for its fragility.", "Crafting", "", [17,11]], //57
    ["Diamond Helmet", "diamond_helm", "A helmet made of diamond.", "Crafting", "+1 Direct Defense", [1]], //58
    ["Diamond Chestplate", "diamond_chest", "A chestplate made of diamond.", "Crafting", "+2 Direct Defense", [2]], //59
    ["Diamond Leggings", "diamond_legs", "A pair of leggings made of diamond.", "Crafting", "+1 Direct Defense<br />+1 Indirect Defense", [3]], //60
    ["Diamond Boots", "diamond_boots", "A pair of boots made of diamond.", "Crafting", "+1 Indirect Defense", [4]], //61
    ["Apple", "apple", "An apple.", "Farming", "+5 HP on consume", [10,30]], //62
    ["Golden Apple", "golden_apple", "A golden apple. One of the more common golden foods, and the only edible one.", "Farming", "Equip for +0.5 Max HP<br />Eat for Regen and Defense Up (1 turn)", [9,30]], //63
    ["Orange", "orange", "An orange. Not very similar to an apple, which is why they're compared so often.", "Farming", "+5 HP on consume", [10,30]], //64
    ["Golden Orange", "golden_orange", "A golden orange. No one knows whether it's golden on the inside, because the peel is solid gold and can't be removed.", "Farming", "+0.7 Max HP", [9]], //65
    ["Carrot", "carrot", "A carrot. It's orange.", "Farming", "+5 HP on consume<br />Consume like 10 at once to turn very slightly orange", [10,30]], //66
    ["Clay Shield", "clay_shield", "A shield made of clay. Try to avoid letting it shatter.", "Pottery", "+1 Indirect Defense<br />+1 Direct Defense<br />15% chance of breaking on hit", [7]], //67
    ["Iron Ore", "iron_ore", "Some iron ore. Can be crafted into bars, requiring 2 ore per bar.", "Mining", "Potion effect: 50% chance of Defense Up (1 turn)", [24]], //68
    ["Copper Ore", "copper_ore", "Some copper ore. Can be crafted into bars, requiring 1 ore per bar.", "Mining", "", [24]], //69
    ["Gold Ore", "gold_ore", "Some gold ore. Can be crafted into bars, requiring 1 ore per bar.", "Mining", "", [24]], //70
    ["Gold Bar", "gold_bar", "A bar of solid gold. Actually kind of soft for a metal.", "Crafting", "", [11,25]], //71
    ["Iron Bar", "iron_bar", "A bar of solid iron. It's pretty sturdy.", "Crafting", "", [11,25]], //72
    ["Copper Bar", "copper_bar", "A bar of solid copper. Try to avoid getting it oxidized.", "Crafting", "", [11,25]], //73
    ["Water", "water", "One (1) level of water. Good for 0.5 turns of plant growth.", "Gathering", "", [11]], //74
    ["Emerald", "emerald", "It's an emerald. These things are rare!", "Mining", "", [24,11]], //75
    ["Hardite Ore", "hardite_ore", "Some hardite ore. Can be crafted into bars, requiring 3 ore per bar.", "Mining", "", [24]], //76
    ["Hardite Bar", "hardite_bar", "A bar of solid hardite, named after both how hard it is to get, and how hard it is as a material. This stuff can cut diamond!", "Crafting", "", [11,25]], //77
    ["Rock-on-a-Stick", "rock_on_stick", "A rock fastened to a stick with more rock. Better than just using tape.", "Crafting", "20% Chance of breaking on hit<br />+1 Indirect Attack", [5,23]], //78
    ["Sandstone Brick Wall", "sandstone_brick_wall", "A wall made of Sandstone Bricks.", "Crafting", "40 HP<br />3+1 Defense", [19,20]], //79
    ["Brick Wall", "brick_wall", "A wall made of Bricks.", "Crafting", "50 HP<br />3+1 Defense", [19,20]], //80
    ["Stone Brick Wall", "stone_brick_wall", "A wall made of Stone Bricks.", "Crafting", "50 HP<br />4+1 Defense", [19,20]], //81
    ["Stone Wall", "stone_wall", "A wall made of Stone.", "Crafting", "50 HP<br />4+1 Defense", [19,20]], //82
    ["Iron Wall", "iron_wall", "A wall made of Iron.", "Crafting", "75 HP<br />4+2 Defense", [19,20]], //83
    ["Hardite Wall", "hardite_wall", "A wall made of Hardite.", "Crafting", "125 HP<br />5+2 Defense", [19,20]], //84
    ["Plank Wall", "plank_wall", "A wall made of Planks.", "Crafting", "25 HP<br />2 Defense", [19,20]], //85
    ["Flint", "flint", "A piece of flint.", "Crafting", "Potion effect: 50% chance of Attack Up (1 turn)", [11]], //86
    ["String", "string", "A piece of string.", "Gathering", "", [11]], //87
    ["Bow", "bow", "A bow. You can shoot arrows with it.", "Crafting", "+1 Indirect Attack<br />Consume 1 Arrow for +1 Direct Attack", [5,22]], //88
    ["Arrow", "arrow", "An arrow.", "Crafting", "Use it with a bow", [22]], //89
    ["Empty Can", "can", "A can with nothing in it.", "Crafting", "Fill it with stuff", [11]], //90
    ["Canned Water", "can", "A can with water in it. You can drink it.", "Crafting", "Drink for 3 HP", [30]], //91
    ["Can of Beans", "can", "A can with beans in it.", "Farming", "+5 HP on consume", [10,30]], //92
    ["Golden Can of Beans", "gold_can", "A golden can with golden beans in it.", "Farming", "+0.15 Direct Defense", [9]], //93
    ["Clay Bowl", "clay_bowl", "A bowl made of clay.", "Pottery", "", []], //94
    ["Clay Vase", "clay_vase", "A vase made of clay.", "Pottery", "", []], //95
    ["Glass Bowl", "glass_bowl", "A bowl made of glass.", "Crafting", "", []], //96
    ["Red Tulip", "red_tulip", "A red tulip. Can be turned into red dye.", "Gardening", "", [14,15]], //97
    ["Orange Tulip", "orange_tulip", "An orange tulip. Can be turned into orange dye.", "Gardening", "", [14,15]], //98
    ["Yellow Tulip", "yellow_tulip", "A yellow tulip. Can be turned into yellow dye.", "Gardening", "", [14,15]], //99
    ["Cyan Tulip", "cyan_tulip", "A cyan tulip. Can be turned into cyan dye.", "Gardening", "", [14,15]], //100
    ["Azure Tulip", "azure_tulip", "An azure tulip. Can be turned into cyan dye.", "Gardening", "", [14,15]], //101
    ["Blue Tulip", "blue_tulip", "A blue tulip. Can be turned into blue dye.", "Gardening", "", [14,15]], //102
    ["Purple Tulip", "purple_tulip", "A purple tulip. Can be turned into purple dye.", "Gardening", "", [14,15]], //103
    ["Pink Tulip", "pink_tulip", "A pink tulip. Can be turned into pink dye.", "Gardening", "", [14,15]], //104
    ["White Dandelion", "white_dandelion", "A white dandelion. Can be turned into white dye.", "Gardening", "Potion effect: 25% chance of Regen (1 turn)", [14,15]], //105
    ["Gray Dandelion", "gray_dandelion", "A gray dandelion. Can be turned into gray dye.", "Gardening", "Potion effect: 25% chance of Regen (1 turn)", [14,15]], //106
    ["Yellow Dandelion", "yellow_dandelion", "A yellow dandelion. Can be turned into yellow dye.", "Gardening", "Potion effect: 25% chance of Regen (1 turn)", [14,15]], //107
    ["Leaf", "leaf", "A single leaf.", "Gathering", "", [11]], //108
    ["Blade of Grass", "grass_blade", "A single blade of grass.", "Gathering", "", [11]], //109
    ["Block of Leaves", "leaf_block", "A block of leaves.", "Gathering", "", [17]], //110
    ["Red Dye", "red_dye", "A blob of red dye.", "Crafting", "", [11]], //111
    ["Orange Dye", "orange_dye", "A blob of orange dye.", "Crafting", "", [11]], //112
    ["Yellow Dye", "yellow_dye", "A blob of yellow dye.", "Crafting", "", [11]], //113
    ["Green Dye", "green_dye", "A blob of green dye.", "Crafting", "", [11]], //114
    ["Cyan Dye", "cyan_dye", "A blob of cyan dye.", "Crafting", "", [11]], //115
    ["Blue Dye", "blue_dye", "A blob of blue dye.", "Crafting", "", [11]], //116
    ["Purple Dye", "purple_dye", "A blob of purple dye.", "Crafting", "", [1]], //117
    ["Pink Dye", "pink_dye", "A blob of pink dye.", "Crafting", "", [11]], //118
    ["White Dye", "white_dye", "A blob of white dye.", "Crafting", "", [11]], //119
    ["Gray Dye", "gray_dye", "A blob of gray dye.", "Crafting", "", [11]], //120
    ["Black Dye", "black_dye", "A blob of black dye.", "Crafting", "", [11]], //121
    ["Glass Bottle", "glass_bottle", "A bottle made of glass.", "Crafting", "Fill it with stuff", [11]], //122
    ["Water Bottle", "potion_blue", "A bottle filled with water.", "Crafting", "Drink for 3 HP<br />Or fill it with more stuff and cook it", [30,11]], //123
    ["Fertilizer", "fertilizer", "Some fertilizer.", "Crafting", "Use on a plant for +1 growth turn", [20]], //124
    ["Dirt", "dirt", "A block of dirt. Not the best material to make a house out of, but you do you.", "Digging", "", [17]], //125
    ["Grass", "grass", "A block of dirt with some grass on it.", "Unknown", "", [17]], //126
    ["Wooden Shield", "wood_shield", "A shield made out of wood.", "Crafting", "+1 Indirect Defense", [7]], //127
    ["Iron Shield", "iron_shield", "A shield made out of wood, with an iron core.", "Crafting", "+1 Direct Defense", [7]], //128
    ["Gold Shield", "gold_shield", "A shield made out of wood, with a golden core.", "Crafting", "+1 Indirect Defense", [7]], //129
    ["Radish", "radish", "A radish.", "Farming", "+5 HP on consume", [10,30]], //130
    ["Golden Radish", "gold_radish", "A golden radish.", "Farming", "+0.15 Mining", [9]], //131
    ["Potato", "potato", "A potato.", "Farming", "+5 HP on consume<br />Potion effect: 25% chance of Defense Up (1 turn)", [10,30]], //132
    ["Golden Potato", "gold_potato", "A golden potato. No, it's not butter.", "Farming", "+0.15 Chopping", [9]], //133
    ["Cabbage", "cabbage", "A head of cabbage.", "Farming", "+5 HP on consume", [10,30]], //134
    ["Golden Cabbage", "gold_cabbage", "A golden head of cabbage. Some people use the leaves as decoration.", "Farming", "+0.2 Max HP", [9]], //135
    ["Corn Cob", "corn", "A cob of corn.", "Farming", "+5 HP on consume", [10,30]], //136
    ["Golden Corn Cob", "gold_corn", "A golden cob of corn. No, it's not butter.", "Farming", "+0.3 Indirect Attack", [9]], //137
    ["Beetroot", "beetroot", "A beetroot.", "Farming", "+5 HP on consume", [10,30]], //138
    ["Golden Beetroot", "gold_beetroot", "A golden beetroot.", "Farming", "+0.15 Digging", [9]], //139
    ["Buttered Corn Cob", "corn", "A cob of corn, covered in butter.", "Crafting", "+7 HP on consume", [10,30]], //140
    ["Baked Potato", "baked_potato", "A baked potato.", "Cooking", "+7 HP on consume", [10,30]], //141
    ["Butter", "butter", "A bar of butter. No, it's not golden.", "Unknown", "-1 HP on consume<br />Potion effect: 30% chance to upgrade one effect", [10,11]], //142
    ["Wooden Bowl", "wood_bowl", "A bowl made of wood.", "Carving", "", [11]], //143
    ["Wooden Table", "wood_table", "A table made of wood. You can put things on it.", "Crafting", "Place it down as a Structure", [18]], //144
    ["Wooden Chair", "wood_chair", "A chair made of wood. You can sit on it.", "Crafting", "", [18]], //145
    ["Folding Chair", "fold_chair", "A chair made of iron. It can fold into a smaller form.", "Crafting", "", [18]], //146
    ["Wheat Bundle", "wheat_bundle", "A bundle of wheat. You can't eat it raw, but you can make it into dough.", "Farming", "", [11,13]], //147
    ["Golden Wheat Bundle", "gold_wheat", "A bundle of golden wheat. You can make it into dough, or equip it.", "Farming", "+0.15 Max HP", [11,13]], //148
    ["Dough", "dough", "A ball of dough.", "Cooking", "", [11]], //149
    ["Golden Dough", "gold_dough", "A ball of golden dough.", "Cooking", "+0.1 Cooking", [11]], //150
    ["Apple Pie", "apple_pie", "A pie with apples in it.", "Cooking", "+10 HP on consume", [10,30]], //151
    ["Golden Apple Pie", "gold_apple_pie", "A golden pie with golden apples in it.", "Cooking", "+17 HP on consume<br />Gain Regen+ and Defense Up+ (1 turn) on consume<br />Can't be equipped", [9,30]], //152
    ["Bread", "bread", "A loaf of bread.", "Cooking", "+6 HP on consume<br />Potion effect: +3 HP<br />Potion effect: 50% chance to add 1 turn to one effect", [10,30]], //153
    ["Wooden Hoe", "wood_hoe", "A hoe made out of wood. There isn't much of a point for this.", "Crafting", "+1 Indirect Attack<br />+1 Farming", [6]], //154
    ["Stone Hoe", "stone_hoe", "A hoe made out of stone. There isn't much of a point for this.", "Crafting", "+1 Indirect Attack<br />+1 Farming", [6]], //155
    ["Gold Hoe", "gold_hoe", "A hoe made out of gold. There isn't much of a point for this.", "Crafting", "+1 Indirect Attack<br />+2 Farming<br />10% chance of breaking per hit or harvest", [6]], //156
    ["Iron Hoe", "iron_hoe", "A hoe made out of iron. There isn't much of a point for this.", "Crafting", "+1 Indirect Attack<br />+2 Farming", [6]], //157
    ["Diamond Hoe", "diamond_hoe", "A hoe made out of diamond. Why did you <i>make</i> this?", "Crafting", "+1 Indirect Attack<br />+3 Farming", [6]], //158
    ["Gold Helmet", "gold_helm", "A helmet made of gold.", "Crafting", "+1 Indirect Defense", [1]], //159
    ["Gold Chestplate", "gold_chest", "A chestplate made of gold.", "Crafting", "+1 Direct Defense", [2]], //160
    ["Gold Leggings", "gold_legs", "A pair of leggings made of gold.", "Crafting", "+1 Direct Defense", [3]], //161
    ["Gold Boots", "gold_boots", "A pair of boots made of gold.", "Crafting", "+1 Indirect Defense", [4]], //162
    ["Iron Helmet", "iron_helm", "A helmet made of iron.", "Crafting", "+1 Direct Defense", [1]], //163
    ["Iron Chestplate", "iron_chest", "A chestplate made of iron.", "Crafting", "+1 Direct Defense<br />+1 Indirect Defense", [2]], //164
    ["Iron Leggings", "iron_legs", "A pair of leggings made of iron.", "Crafting", "+1 Direct Defense<br />+1 Indirect Defense", [3]], //165
    ["Iron Boots", "iron_boots", "A pair of boots made of iron.", "Crafting", "+1 Indirect Defense", [4]], //166
    ["Red Mushroom", "red_mushroom", "A mushroom with a spotted red cap.", "Gathering", "Eat for Poison (1 turn)<br />Potion effect: Poison (1 turn)", [10,30]], //167
    ["Brown Mushroom", "brown_mushroom", "A mushroom with a brown cap.", "Gathering", "Eat for +2 HP<br />Potion effect: 50% chance to add 1 turn to one effect", [10,30]], //168
    ["Wooden Hammer", "wood_hammer", "A hammer made of wood.", "Crafting", "(has not been assigned attack values yet)<br />+1 Construction", [6]], //169
    ["Wooden Trowel", "wood_trowel", "A trowel made of wood.", "Crafting", "(has not been assigned attack values yet)<br />+1 Gardening", [6]], //170
    ["Wooden Fishing Rod", "wood_fish_rod", "A fishing rod made of wood.", "Crafting", "(has not been assigned attack values yet)<br />+1 Fishing", [6]], //171
    ["Stone Hammer", "stone_hammer", "A hammer made of stone.", "Crafting", "(has not been assigned attack values yet)<br />+1 Construction", [6]], //172
    ["Stone Trowel", "stone_trowel", "A trowel made of stone.", "Crafting", "(has not been assigned attack values yet)<br />+1 Gardening", [6]], //173
    ["Stone Fishing Rod", "stone_fish_rod", "A fishing rod made of stone.", "Crafting", "(has not been assigned attack values yet)<br />+1 Fishing", [6]], //174
    ["Gold Hammer", "gold_hammer", "A hammer made of gold.", "Crafting", "(has not been assigned attack values yet)<br />+2 Construction", [6]], //175
    ["Gold Trowel", "gold_trowel", "A trowel made of gold.", "Crafting", "(has not been assigned attack values yet)<br />+2 Gardening", [6]], //176
    ["Gold Fishing Rod", "gold_fish_rod", "A fishing rod made of gold.", "Crafting", "(has not been assigned attack values yet)<br />+2 Fishing", [6]], //177
    ["Iron Hammer", "iron_hammer", "A hammer made of iron.", "Crafting", "(has not been assigned attack values yet)<br />+2 Construction", [6]], //178
    ["Iron Trowel", "iron_trowel", "A trowel made of iron.", "Crafting", "(has not been assigned attack values yet)<br />+2 Gardening", [6]], //179
    ["Iron Fishing Rod", "iron_fish_rod", "A fishing rod made of iron.", "Crafting", "(has not been assigned attack values yet)<br />+2 Fishing", [6]], //180
    ["Diamond Hammer", "diamond_hammer", "A hammer made of diamond.", "Crafting", "(has not been assigned attack values yet)<br />+3 Construction", [6]], //181
    ["Diamond Trowel", "diamond_trowel", "A trowel made of diamond.", "Crafting", "(has not been assigned attack values yet)<br />+3 Gardening", [6]], //182
    ["Diamond Fishing Rod", "diamond_fish_rod", "A fishing rod made of diamond.", "Crafting", "(has not been assigned attack values yet)<br />+3 Fishing", [6]], //183
    ["Old Boot", "old_boot", "An old boot you fished up.", "Fishing", "", [11]], //184
    ["Pair of Old Boots", "old_boot_pair", "A pair of old boots you fished up. Surprisingly effective at defending you.", "Crafting", "+1 Direct Defense<br />+1 Fishing", [4]], //185
    ["Wad of String", "string_wad", "A wad of String you fished up.", "Fishing", "", [20]], //186
    ["Goldfish", "goldfish", "A small goldfish.", "Fishing", "Potion effect: 30% chance of Water Resistance (1 turn)<br />Cook it to make it edible", [26]], //187
    ["Jellyfish", "jellyfish", "A small jellyfish. Packs a mean sting.", "Fishing", "Throw it at someone to deal 5 damage<br />Throw Effect: 20% chance of Paralysis (1 turn)", [26]], //188
    ["Bloach", "fish_3", "{placeholder}", "Fishing", "", [0,26]], //189
    ["Salmon", "fish_4", "{placeholder}", "Fishing", "", [0,26]], //190
    ["Solid Goldfish", "gold_goldfish", "Like a goldfish, but actually gold.", "Fishing", "Cook it to make it equippable", [26]], //191
    ["Spinach", "spinach", "A bunch of spinach. Supposedly makes you stronger.", "Farming", "+5 HP on consume<br />Potion effect: 25% chance of Attack Up (1 turn)", [10,30]], //192
    ["Golden Spinach", "gold_spinach", "A bunch of gold spinach. <i>Actually</i> makes you stronger.", "Farming", "Equip for 0.4 Direct Attack", [9]], //193
    ["Ripe Apple", "ripe apple", "An apple that's riper than usual.", "Farming", "+10 HP on Consume", [10,30]], //194
    ["Ripe Orange", "ripe orange", "An orange that's riper than usual.", "Farming", "+10 HP on Consume", [10,30]], //195
    ["Ripe Carrot", "ripe carrot", "A carrot that's riper than usual. It's oranger.", "Farming", "+10 HP on Consume", [10,30]], //196
    ["Can of Ripe Beans", "ripe can", "A can of beans that's riper than usual.", "Farming", "+10 HP on Consume", [10,30]], //197
    ["Ripe Radish", "ripe radish", "A radish that's riper than usual.", "Farming", "+10 HP on Consume", [10,30]], //198
    ["Ripe Potato", "ripe potato", "A potato that's riper than usual.", "Farming", "+10 HP on Consume<br />Potion effect: 40% chance of Defense Up (1 turn)", [10,30]], //199
    ["Ripe Cabbage", "ripe cabbage", "A head of cabbage that's riper than usual.", "Farming", "+10 HP on Consume", [10,30]], //200
    ["Ripe Corn Cob", "ripe corn", "A cob of corn that's riper than usual.", "Farming", "+10 HP on Consume", [10,30]], //201
    ["Ripe Beetroot", "ripe beetroot", "A beetroot that's riper than usual. Can be turned into red dye.", "Farming", "+10 HP on Consume", [10,30]], //202
    ["Ripe Wheat Bundle", "ripe wheat_bundle", "A bundle of wheat that's riper than usual. Still can't be eaten directly, though.", "Farming", "", [10]], //203
    ["Ripe Spinach", "ripe spinach", "A bunch of spinach that's riper than usual.", "Farming", "+10 HP on consume<br />Potion effect: 40% chance of Attack Up (1 turn)", [10,30]], //204
    ["Enchanted Golden Carrot", "enchanted gold_carrot", "An enchanted carrot made out of gold. Surprisingly rare.", "Farming", "+0.6 Indirect Defense", [9]], //205
    ["Enchanted Golden Apple", "enchanted golden_apple", "An enchanted golden apple. This is really rare!", "Farming", "Equip for +1 Max HP<br />Eat for Regen+ and Defense Up+ (1 turn)", [9,30]], //206
    ["Red Potion", "potion_red", "A bottle filled with a red liquid. Who knows what it does?", "Alchemy", "", [16]], //207
    ["Orange Potion", "potion_orange", "A bottle filled with an orange liquid. Who knows what it does?", "Alchemy", "", [16]], //208
    ["Yellow Potion", "potion_yellow", "A bottle filled with a yellow liquid. Who knows what it does?", "Alchemy", "", [16]], //209
    ["Green Potion", "potion_green", "A bottle filled with a green liquid. Who knows what it does?", "Alchemy", "", [16]], //210
    ["Cyan Potion", "potion_cyan", "A bottle filled with a cyan liquid. Who knows what it does?", "Alchemy", "", [16]], //211
    ["Blue Potion", "potion_blue", "A bottle filled with a blue liquid. Who knows what it does?", "Alchemy", "", [16]], //212
    ["Purple Potion", "potion_purple", "A bottle filled with a purple liquid. Who knows what it does?", "Alchemy", "", [16]], //213
    ["Cooked Solid Goldfish", "gold_goldfish", "It's melted a little from the heat.", "Cooking", "+0.7 Fishing", [9]], //214
    ["Cooked Goldfish", "goldfish", "A small goldfish, cooked to perfection.", "Cooking", "Consume for +7 HP", [10,30]], //215
    ["Leather", "leather", "A piece of leather, probably from a cow.", "Mobs", "", [11]], //216
    ["Bone", "bone", "A single bone. Why <i>do</i> bones always look like that, anyway?", "Mobs", "", [11]], //217
    ["Wool", "wool", "A block of wool from a sheep.", "Mobs", "", [11,17]], //218
    ["Feather", "feather", "A single feather.", "Mobs", "", [11]], //219
    ["Rotten Flesh", "rotten_flesh", "Some rotting flesh from a zombie. I guess you could eat it?", "Mobs", "+3 HP on consume<br />Eat for Hunger (1 turn, 80% chance)", [10,30,11]], //220
    ["Cooked Flesh", "cooked_flesh", "Some rotting flesh that's been cooked. Probably safer to eat now.", "Cooking", "+4 HP on Consume", [10,30]], //221
    ["Golden Flesh", "gold_flesh", "Some golden flesh. Yes, this is a thing that exists.", "Mobs", "Equip for +0.3 HP per turn", [9]], //222
    ["Slime Ball", "slime_ball", "A ball of slime.", "Mobs", "", [11]], //223
    ["Sap", "sap", "Some sap from a tree.", "Gathering", "Counts as 2 fuel units<br />Consume for -1 HP", [11]], //224
    ["1 Fuel Unit", "fuel_outline", "This recipe requires <b>1</b> unit of fuel.", "", "", [28]], //225
    ["2 Fuel Units", "fuel_outline", "This recipe requires <b>2</b> units of fuel.", "", "", [28]], //226
    ["3 Fuel Units", "fuel_outline", "This recipe requires <b>3</b> units of fuel.", "", "", [28]], //227
    ["4 Fuel Units", "fuel_outline", "This recipe requires <b>4</b> units of fuel.", "", "", [28]], //228
    ["5 Fuel Units", "fuel_outline", "This recipe requires <b>5</b> units of fuel.", "", "", [28]], //229
    ["6 Fuel Units", "fuel_outline", "This recipe requires <b>6</b> units of fuel.", "", "", [28]], //230
    ["7 Fuel Units", "fuel_outline", "This recipe requires <b>7</b> units of fuel.", "", "", [28]], //231
    ["8 Fuel Units", "fuel_outline", "This recipe requires <b>8</b> units of fuel.", "", "", [28]], //232
    ["Christmas Stocking", "stocking", "A stocking for Christmas. Hang it up during your turn to get extra rewards!", "Christmas", "Hang it up<br />Can be used while KOd", [12,20]], //233
    ["Effect Candy", "blue_candy", "A small piece of candy, wrapped in a blue wrapper. Eat it to gain a random positive effect!", "Events", "Consume for one of the following: Regen, Attack Up, Defense Up", [12,30,31]], //234
    ["Skill Candy", "green_candy", "A small piece of candy, wrapped in a green wrapper. Eat it to gain 300% in a random skill!", "Events", "Consume for 300% in a random skill you have that is below level 5", [12,30,31]], //235
    ["Item Candy", "red_candy", "A small piece of candy, wrapped in a red wrapper. Eat it to gain a random item!", "Events", "Consume for a random item (see Info)", [12,30,31]], //236
    ["Mystery Gift", "gift_box", "A gift in a box. It could be anything!", "Item Candy", "Open it to gain a random item out of all the items currently in the game", [12,20]], //237
    ["Time Candy", "black_candy", "A small piece of candy, wrapped in a black and yellow wrapper. If you have this in your inventory, you'll be allowed three posts in a turn, instead of two!", "Unknown", "Holding this item allows one extra post in a turn (consumed during extra post)", [12,30,31]], //238
    ["Old Candy", "gray_candy", "A small piece of old candy. The color on the wrapper has faded away, so you can't tell what kind of candy this was.", "Old Stocking", "Consume for a reduced version of a different candy's effect", [12,30,31]], //239
    ["Old Christmas Stocking", "old_stocking", "An old stocking for Christmas. It's too late to hang it up, but there might still be something inside...", "Post-Christmas", "Look inside", [12,20]], //240
    ["LTT Hoodie", "ltt_hoodie", "Uh... thanks, Incendiary?", "Unknown", "+0.7 Indirect Defense<br />+2 Intelligence", [12,2]], //241
    ["Furnace", "furnace", "A furnace. Having this in your inventory will passively reduce fuel requirements in recipies by 1.", "Crafting", "Reduces recipe fuel requirements by one", [17]], //242
    ["Box", "box", "A box. It has the following items in it:", "Unknown", "You can take items out of it", [20]], //243
    ["Hammer", "hammer", "A hammer capable of messing with Structures.", "Unknown", "Use it to mess with a Structure somehow (not consumed)<br />Equip for +0.7 Direct Attack and +4 damage vs. Structures", [29,6]], //244
    ["bobm", "bobm", "it goes boom", "Unknown", "Use it near someone to Die and deal 1d40+40 to everyone in the nearby area (including you)", [29,20,23]], //245
    ["Deployable Cannon", "cannon", "A cannon, ready for deploying.", "Unknown", "Deploy it to create a Cannon", [29,20]], //246
    ["Sponge", "sponge", "A sponge. It can absorb water, and the abrasive side is kinda scratchy.", "Unknown", "Use it to remove water from something (not consumed)<br />Equip for +0.7 Direct Attack and 15% chance to inflict Soaked (1 turn)", [29,6]], //247
    ["Esolang", "esolang", "An \"esoteric language\". You're not sure what it does, are how to use it, but that's the fun part!<br />Skill level: ", "Unknown", "Does something random on use<br />Usually fails, chance of failure decreases with higher Skill level<br />Using it increases Skill level", [29,20]], //248
    ["Santa Hat", "santa_hat", "A traditional(-ish) Christmas hat.", "Christmas", "+1 Indirect Defense<br />+1 Indirect Attack<br />+5% XP from Monsters", [12,1]], //249
    ["Chain Helmet", "chain_helm", "A helmet made of chainmail.", "Crafting", "+1 Indirect Defense", [1]], //250
    ["Chain Chestplate", "chain_chest", "A chestplate made of chainmail.", "Crafting", "+1 Direct Defense<br />+1 Indirect Defense", [2]], //251
    ["Chain Leggings", "chain_legs", "A pair of leggings made of chainmail.", "Crafting", "+1 Direct Defense", [3]], //252
    ["Chain Boots", "chain_boots", "A pair of boots made of chainmail.", "Crafting", "+1 Indirect Defense", [4]], //253
    ["4 Leaf Clover", "clover4", "A clover with 4 leaves. Supposedly brings you luck.", "Gathering", "+1 Luck<br />+0.1 Indirect Defense", [8,11,14]], //254
    ["8 Leaf Clover", "clover8", "A clover with 8 leaves. This is really lucky!", "Meatpasting", "Holding this makes you luckier", [14]], //255
    ["Raw Beef", "raw_beef", "Some raw beef from a cow. You should probably cook it.", "Mobs", "Consume for +3 HP<br />50% chance to give Nausea (1 turn)", [10,11,30]], //256
    ["Steak", "cooked_beef", "Some steak from a cow.", "Mobs", "Consume for +6 HP", [10,30]], //257
    ["Raw Pork", "raw_pork", "Some raw pork from a pig. You should probably cook it.", "Mobs", "Consume for +3 HP<br />50% chance to give Nausea (1 turn)", [10,11,30]], //258
    ["Cooken Pork", "cooked_pork", "Some pork from a pig.", "Mobs", "Consume for +6 HP", [10,30]], //259
    ["Raw Chicken", "raw_chicken", "Some raw chicken from a chicken. You should probably cook it.", "Mobs", "Consume for +3 HP<br />75% chance to give Nausea (1 turn)", [10,11,30]], //260
    ["Cooken Chicken", "cooked_chicken", "Some chicken from a chicken.", "Mobs", "Consume for +6 HP", [10,30]], //261
    ["Raw Mutton", "raw_mutton", "Some raw mutton from a sheep. You should probably cook it.", "Mobs", "Consume for +4 HP<br />50% chance to give Nausea (1 turn)", [10,11,30]], //262
    ["Cooked Mutton", "cooked_mutton", "Some mutton from a sheep.", "Mobs", "Consume for +8 HP", [10,30]], //263
    ["Meat Paste", "meat_paste", "A paste made from some meat. What, exactly, would you do with this?", "Crafting", "Consume for +5 HP", [11]], //264
    ["Cookie", "cookie", "A plain cookie.", "Cooking", "Consume for +5 HP", [10,30]], //265
    ["Chocolate Chip Cookie", "cookie", "A cookie with chocolate chips inside. A classic.", "Cooking", "Consume for +7 HP", [10,30]], //266
    ["Apple Cookie", "cookie", "A cookie with small chunks of apples inside.", "Cooking", "Consume for +8 HP", [10,30]], //267
    ["Carrot Cookie", "cookie", "A cookie with small ribbons of carrot inside. It's like a carrot cake, but a cookie.<br />For some reason, you get the feeling that these will be important...", "Cooking", "Consume for +6 HP", [10,30]], //268
    ["Cocoa Beans", "cocoa_bean", "Some cocoa beans.", "Farming", "", [13,11]], //269
    ["Chocolate Chips", "chocolate_chips", "Some chocolate chips.", "Cooking", "Consume for +2 HP", [10,11]], //270
    ["Chocolate Bar", "chocolate_bar", "A bar made of solid chocolate. Yummy.", "Cooking", "Consume for +5 HP", [10]], //271
]