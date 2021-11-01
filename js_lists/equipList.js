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
    ["Wooden Shovel", "wood_shovel", "A shovel made out of wood.", "Crafting", "+1 Indirect Attack<br />+1 to Digging"], //10
    ["Stick and Rock", "stick_rock", "A rock taped to a stick. This isn't very good.", "Crafting", "50% Chance of breaking on hit"], //11
    ["Golden Carrot", "gold_carrot", "A carrot made out of gold. Aren't carrots supposed to give you better eyesight?", "Farming", "+0.3 Indirect Defense"], //12
    ["Diamond Shield", "diamond_shield", "A shield with a diamond in the center.", "Crafting", "+1 Indirect Defense<br />+1 Direct Defense"], //13
    ["Golden Sword", "gold_sword", "A sword made out of gold. Seems fragile.", "Crafting", "+2 Indirect Attack<br />10% chance of breaking on hit"], //14
    ["Golden Shovel", "gold_shovel", "A shovel made out of gold. Seems fragile.", "Crafting", "+1 Indirect Attack<br />+2 to Digging<br />10% chance of breaking on hit or dig"], //15
    ["Golden Pickaxe", "gold_pickaxe", "A pickaxe made out of gold. Seems fragile.", "Crafting", "+1 Indirect Attack<br />+2 to Mining<br />10% chance of breaking on hit or mine"], //16
    ["Golden Axe", "gold_axe", "A axe made out of gold. Seems fragile.", "Crafting", "+1 Indirect Attack<br />+2 to Chopping<br />10% chance of breaking on hit or chop"], //17
    ["Iron Sword", "iron_sword", "A sword made out of iron.", "Crafting", "+1 Direct Attack<br />+2 Indirect Attack"], //18
    ["Iron Shovel", "iron_shovel", "A shovel made out of iron.", "Crafting", "+1 Indirect Attack<br />+2 to Digging<br />5% chance to steal an item"], //19
    ["Iron Pickaxe", "iron_pickaxe", "A pickaxe made out of iron.", "Crafting", "+1 Direct Attack<br />+2 to Mining"], //20
    ["Iron Axe", "iron_axe", "A axe made out of iron.", "Crafting", "+1 Direct Attack<br />+1 Indirect Attack<br />+2 to Chopping"], //21
    ["Stone Sword", "stone_sword", "A sword made out of stone.", "Crafting", "+1 Direct Attack<br />+1 Indirect Attack"], //22
    ["Stone Shovel", "stone_shovel", "A shovel made out of stone.", "Crafting", "+1 Indirect Attack<br />+1 to Digging"], //23
    ["Stone Pickaxe", "stone_pickaxe", "A pickaxe made out of stone.", "Crafting", "+1 Indirect Attack<br />+1 to Mining"], //24
    ["Stone Axe", "stone_axe", "A axe made out of stone.", "Crafting", "+1 Direct Attack<br />+1 to Chopping"], //25
    ["Diamond Sword", "diamond_sword", "A sword made out of diamonds.", "Crafting", "+2 Direct Attack<br />+1 Indirect Attack"], //26
    ["Diamond Shovel", "diamond_shovel", "A shovel made out of diamonds.", "Crafting", "+2 Indirect Attack<br />+3 to Digging<br />10% chance to steal an item"], //27
    ["Diamond Pickaxe", "diamond_pickaxe", "A pickaxe made out of diamonds.", "Crafting", "+1 Direct Attack<br />+2 Indirect Attack<br />+3 to Mining"], //28
    ["Diamond Axe", "diamond_axe", "A axe made out of diamonds.", "Crafting", "+2 Direct Attack<br />+3 to Chopping"], //29
    ["Wooden Pickaxe", "wood_pickaxe", "A pickaxe made out of wood.", "Crafting", "+1 Indirect Attack<br />+1 to Mining"], //30
    ["Wooden Axe", "wood_axe", "A axe made out of wood.", "Crafting", "+1 Indirect Attack<br />+1 to Chopping"], //31
    ["Logo 3", "logo_3", 'The "3" from the logo.', "Unknown", ""], //32
    ["Logo F", "logo_f", 'The "F" from the logo. Why\'s it so small now?', "Unknown", ""], //33
    ["Logo S", "logo_s", 'The "S" from the logo.', "Unknown", ""], //34
    ["Rock", "rock", "It's a small rock.", "Gathering", "Throw to deal 4 damage"], //35
    ["Coal", "coal", "It's a piece of coal.", "Mining", ""], //36
    ["Diamond", "diamond", "It's a diamond. These things are rare!", "Mining", ""], //37
    ["Decent Hammer", "decent_hammer", "Bonk.", "Crafting", "+1 Direct Attack"], //38
    ["Slingshot", "slingshot", "You shoot things with it.", "Crafting", "+1 Indirect Attack<br />Can be used with ammo to deal more damage"], //39
    ["Flint & Steel", "flint_and_steel", "Sets things on fire.", "Crafting", "+30% chance to inflict On Fire on hit for 1 turn"], //40
    ["TNT", "tnt", "Explodes after being ignited.", "Unknown", ""], //41
    ["Icicle", "icicle", "It's cold, and kinda pointy.", "Gathering", "+10% chance to inflict Frozen on hit for 2 turns"], //42
    ["Tray of Cookies", "cookie_tray", "A tray filled with cookies.", "Cooking", ""], //43
    ["Log", "log", "A log.", "Chopping", ""], //44
    ["Stick", "stick_item", "It's a stick. You can use it in a bunch of different things.", "Chopping", ""], //45
    ["Planks", "planks", "Some planks.", "Chopping", ""], //46
    ["Rotting Mush", "crop_mush", "Eww, why did you keep this?", "Farming", "Make it into fertilizer, or just get rid of it<br />Potion effect: Nausea (1 turn)"], //47
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
    ["Iron Ore", "iron_ore", "Some iron ore. Can be crafted into bars, requiring 2 ore per bar.", "Mining", "Potion effect: 50% chance of Defense Up (1 turn)"], //68
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
    ["Sandstone Brick Wall", "sandstone_brick_wall", "A wall made of Sandstone Bricks.", "Crafting", "40 HP<br />3+1 Defense"], //79
    ["Brick Wall", "brick_wall", "A wall made of Bricks.", "Crafting", "50 HP<br />3+1 Defense"], //80
    ["Stone Brick Wall", "stone_brick_wall", "A wall made of Stone Bricks.", "Crafting", "50 HP<br />4+1 Defense"], //81
    ["Stone Wall", "stone_wall", "A wall made of Stone.", "Crafting", "50 HP<br />4+1 Defense"], //82
    ["Iron Wall", "iron_wall", "A wall made of Iron.", "Crafting", "75 HP<br />4+2 Defense"], //83
    ["Hardite Wall", "hardite_wall", "A wall made of Hardite.", "Crafting", "125 HP<br />5+2 Defense"], //84
    ["Plank Wall", "plank_wall", "A wall made of Planks.", "Crafting", "25 HP<br />2 Defense"], //85
    ["Flint", "flint", "A piece of flint.", "Crafting", "Potion effect: 50% chance of Attack Up (1 turn)"], //86
    ["String", "string", "A piece of string.", "Gathering", ""], //87
    ["Bow", "bow", "A bow. You can shoot arrows with it.", "Crafting", "+1 Indirect Attack<br />Consume 1 Arrow for +1 Direct Attack"], //88
    ["Arrow", "arrow", "An arrow.", "Crafting", "Use it with a bow"], //89
    ["Empty Can", "can", "A can with nothing in it.", "Crafting", "Fill it with stuff"], //90
    ["Canned Water", "can", "A can with water in it. You can drink it.", "Crafting", "Drink for 3 HP"], //91
    ["Can of Beans", "can", "A can with beans in it.", "Farming", "+5 HP on consume"], //92
    ["Golden Can of Beans", "gold_can", "A golden can with golden beans in it.", "Farming", "+0.1 Direct Defense"], //93
    ["Clay Bowl", "clay_bowl", "A bowl made of clay.", "Pottery", ""], //94
    ["Clay Vase", "clay_vase", "A vase made of clay.", "Pottery", ""], //95
    ["Glass Bowl", "glass_bowl", "A bowl made of glass.", "Crafting", ""], //96
    ["Red Tulip", "red_tulip", "A red tulip. Can be turned into red dye.", "Gardening", ""], //97
    ["Orange Tulip", "orange_tulip", "An orange tulip. Can be turned into orange dye.", "Gardening", ""], //98
    ["Yellow Tulip", "yellow_tulip", "A yellow tulip. Can be turned into yellow dye.", "Gardening", ""], //99
    ["Cyan Tulip", "cyan_tulip", "A cyan tulip. Can be turned into cyan dye.", "Gardening", ""], //100
    ["Azure Tulip", "azure_tulip", "An azure tulip. Can be turned into cyan dye.", "Gardening", ""], //101
    ["Blue Tulip", "blue_tulip", "A blue tulip. Can be turned into blue dye.", "Gardening", ""], //102
    ["Purple Tulip", "purple_tulip", "A purple tulip. Can be turned into purple dye.", "Gardening", ""], //103
    ["Pink Tulip", "pink_tulip", "A pink tulip. Can be turned into pink dye.", "Gardening", ""], //104
    ["White Dandelion", "white_dandelion", "A white dandelion. Can be turned into white dye.", "Gardening", "Potion effect: 25% chance of Regen (1 turn)"], //105
    ["Gray Dandelion", "gray_dandelion", "A gray dandelion. Can be turned into gray dye.", "Gardening", "Potion effect: 25% chance of Regen (1 turn)"], //106
    ["Yellow Dandelion", "yellow_dandelion", "A yellow dandelion. Can be turned into yellow dye.", "Gardening", "Potion effect: 25% chance of Regen (1 turn)"], //107
    ["Leaf", "leaf", "A single leaf.", "Gathering", ""], //108
    ["Blade of Grass", "grass_blade", "A single blade of grass.", "Gathering", ""], //109
    ["Block of Leaves", "leaf_block", "A block of leaves.", "Gathering", ""], //110
    ["Red Dye", "red_dye", "{placeholder}", "Crafting", ""], //111
    ["Orange Dye", "orange_dye", "{placeholder}", "Crafting", ""], //112
    ["Yellow Dye", "yellow_dye", "{placeholder}", "Crafting", ""], //113
    ["Green Dye", "green_dye", "{placeholder}", "Crafting", ""], //114
    ["Cyan Dye", "cyan_dye", "{placeholder}", "Crafting", ""], //115
    ["Blue Dye", "blue_dye", "{placeholder}", "Crafting", ""], //116
    ["Purple Dye", "purple_dye", "{placeholder}", "Crafting", ""], //117
    ["Pink Dye", "pink_dye", "{placeholder}", "Crafting", ""], //118
    ["White Dye", "white_dye", "{placeholder}", "Crafting", ""], //119
    ["Gray Dye", "gray_dye", "{placeholder}", "Crafting", ""], //120
    ["Black Dye", "black_dye", "{placeholder}", "Crafting", ""], //121
    ["Glass Bottle", "glass_bottle", "A bottle made of glass.", "Crafting", "Fill it with stuff"], //122
    ["Water Bottle", "potion_blue", "A bottle filled with water.", "Crafting", "Drink for 3 HP<br />Or fill it with more stuff and cook it"], //123
    ["Fertilizer", "fertilizer", "Some fertilizer.", "Crafting", "Use on a plant for +1 growth turn"], //124
    ["Dirt", "dirt", "A block of dirt. Not the best material to make a house out of, but you do you.", "Digging", ""], //125
    ["Grass", "grass", "A block of dirt with some grass on it.", "Unknown", ""], //126
    ["Wooden Shield", "wood_shield", "A shield made out of wood.", "Crafting", "+1 Indirect Defense"], //127
    ["Gold Shield", "iron_shield", "A shield made out of wood, with an iron core.", "Crafting", "+1 Direct Defense"], //128
    ["Iron Shield", "gold_shield", "A shield made out of wood, with a golden core.", "Crafting", "+1 Indirect Defense"], //129
    ["Radish", "radish", "A radish.", "Farming", "+5 HP on consume"], //130
    ["Golden Radish", "gold_radish", "A golden radish.", "Farming", "+0.15 Mining"], //131
    ["Potato", "potato", "A potato.", "Farming", "+5 HP on consume<br />Potion effect: 25% chance of Defense Up (1 turn)"], //132
    ["Golden Potato", "gold_potato", "A golden potato. No, it's not butter.", "Farming", "+0.15 Chopping"], //133
    ["Cabbage", "cabbage", "A head of cabbage.", "Farming", "+5 HP on consume"], //134
    ["Golden Cabbage", "gold_cabbage", "A golden head of cabbage. Some people use the leaves as decoration.", "Farming", "+0.2 Max HP"], //135
    ["Corn Cob", "corn", "A cob of corn.", "Farming", "+5 HP on consume"], //136
    ["Golden Corn Cob", "gold_corn", "A golden cob of corn. No, it's not butter.", "Farming", "+0.3 Indirect Attack"], //137
    ["Beetroot", "beetroot", "A beetroot.", "Farming", "+5 HP on consume"], //138
    ["Golden Beetroot", "gold_beetroot", "A golden beetroot.", "Farming", "+0.15 Digging"], //139
    ["Buttered Corn Cob", "corn", "A cob of corn, covered in butter.", "Crafting", "+7 HP on consume"], //140
    ["Baked Potato", "baked_potato", "A baked potato.", "Cooking", "+7 HP on consume"], //141
    ["Butter", "butter", "A bar of butter. No, it's not golden.", "Unknown", "-1 HP on consume<br />Potion effect: 30% chance to upgrade one effect"], //142
    ["Wooden Bowl", "wood_bowl", "A bowl made of wood.", "Carving", ""], //143
    ["Wooden Table", "wood_table", "A table made of wood. You can put things on it.", "Crafting", "Place it down as a Structure"], //144
    ["Wooden Chair", "wood_chair", "A chair made of wood. You can sit on it.", "Crafting", ""], //145
    ["Folding Chair", "fold_chair", "A chair made of iron. It can fold into a smaller form.", "Crafting", ""], //146
    ["Wheat Bundle", "wheat_bundle", "A bundle of wheat. You can't eat it raw, but you can make it into dough.", "Farming", ""], //147
    ["Golden Wheat Bundle", "gold_wheat", "A bundle of golden wheat. You can make it into dough, or equip it.", "Farming", "+0.15 Max HP"], //148
    ["Dough", "dough", "A ball of dough.", "Cooking", ""], //149
    ["Golden Dough", "gold_dough", "A ball of golden dough.", "Cooking", "+0.1 Cooking"], //150
    ["Apple Pie", "apple_pie", "A pie with apples in it.", "Cooking", "+10 HP on consume"], //151
    ["Golden Apple Pie", "gold_apple_pie", "A golden pie with golden apples in it.", "Cooking", "+17 HP on consume<br />Gain Regen+ and Defense Up+ (1 turn) on consume<br />Can't be equipped"], //152
    ["Bread", "bread", "A loaf of bread.", "Cooking", "+6 HP on consume<br />Potion effect: +3 HP<br />Potion effect: 50% chance to add 1 turn to one effect"], //153
    ["Wooden Hoe", "wood_hoe", "A hoe made out of wood. There isn't much of a point for this.", "Crafting", "+1 Indirect Attack<br />+1 Farming"], //154
    ["Stone Hoe", "stone_hoe", "A hoe made out of stone. There isn't much of a point for this.", "Crafting", "+1 Indirect Attack<br />+1 Farming"], //155
    ["Gold Hoe", "gold_hoe", "A hoe made out of gold. There isn't much of a point for this.", "Crafting", "+1 Indirect Attack<br />+2 Farming<br />10% chance of breaking per hit or harvest"], //156
    ["Iron Hoe", "iron_hoe", "A hoe made out of iron. There isn't much of a point for this.", "Crafting", "+1 Indirect Attack<br />+2 Farming"], //157
    ["Diamond Hoe", "diamond_hoe", "A hoe made out of diamond. Why did you <i>make</i> this?", "Crafting", "+1 Indirect Attack<br />+3 Farming"], //158
    ["Gold Helmet", "gold_helm", "A helmet made of gold.", "Crafting", "+1 Indirect Defense"], //159
    ["Gold Chestplate", "gold_chest", "A chestplate made of gold.", "Crafting", "+1 Direct Defense"], //160
    ["Gold Leggings", "gold_legs", "A pair of leggings made of gold.", "Crafting", "+1 Direct Defense"], //161
    ["Gold Boots", "gold_boots", "A pair of boots made of gold.", "Crafting", "+1 Indirect Defense"], //162
    ["Iron Helmet", "iron_helm", "A helmet made of iron.", "Crafting", "+1 Direct Defense"], //163
    ["Iron Chestplate", "iron_chest", "A chestplate made of iron.", "Crafting", "+1 Direct Defense<br />+1 Indirect Defense"], //164
    ["Iron Leggings", "iron_legs", "A pair of leggings made of iron.", "Crafting", "+1 Direct Defense<br />+1 Indirect Defense"], //165
    ["Iron Boots", "iron_boots", "A pair of boots made of iron.", "Crafting", "+1 Indirect Defense"], //166
    ["Red Mushroom", "red_mushroom", "A mushroom with a spotted red cap.", "Gathering", "Eat for Poison (1 turn)<br />Potion effect: Poison (1 turn)"], //167
    ["Brown Mushroom", "brown_mushroom", "A mushroom with a brown cap.", "Gathering", "Eat for +2 HP<br />Potion effect: 50% chance to add 1 turn to one effect"], //168
    ["Wooden Hammer", "wood_hammer", "A hammer made of wood.", "Crafting", "(has not been assigned attack values yet)<br />+1 Construction"], //169
    ["Wooden Trowel", "wood_trowel", "A trowel made of wood.", "Crafting", "(has not been assigned attack values yet)<br />+1 Gardening"], //170
    ["Wooden Fishing Rod", "wood_fish_rod", "A fishing rod made of wood.", "Crafting", "(has not been assigned attack values yet)<br />+1 Fishing"], //171
    ["Stone Hammer", "stone_hammer", "A hammer made of stone.", "Crafting", "(has not been assigned attack values yet)<br />+1 Construction"], //172
    ["Stone Trowel", "stone_trowel", "A trowel made of stone.", "Crafting", "(has not been assigned attack values yet)<br />+1 Gardening"], //173
    ["Stone Fishing Rod", "stone_fish_rod", "A fishing rod made of stone.", "Crafting", "(has not been assigned attack values yet)<br />+1 Fishing"], //174
    ["Gold Hammer", "gold_hammer", "A hammer made of gold.", "Crafting", "(has not been assigned attack values yet)<br />+2 Construction"], //175
    ["Gold Trowel", "gold_trowel", "A trowel made of gold.", "Crafting", "(has not been assigned attack values yet)<br />+2 Gardening"], //176
    ["Gold Fishing Rod", "gold_fish_rod", "A fishing rod made of gold.", "Crafting", "(has not been assigned attack values yet)<br />+2 Fishing"], //177
    ["Iron Hammer", "iron_hammer", "A hammer made of iron.", "Crafting", "(has not been assigned attack values yet)<br />+2 Construction"], //178
    ["Iron Trowel", "iron_trowel", "A trowel made of iron.", "Crafting", "(has not been assigned attack values yet)<br />+2 Gardening"], //179
    ["Iron Fishing Rod", "iron_fish_rod", "A fishing rod made of iron.", "Crafting", "(has not been assigned attack values yet)<br />+2 Fishing"], //180
    ["Diamond Hammer", "diamond_hammer", "A hammer made of diamond.", "Crafting", "(has not been assigned attack values yet)<br />+3 Construction"], //181
    ["Diamond Trowel", "diamond_trowel", "A trowel made of diamond.", "Crafting", "(has not been assigned attack values yet)<br />+3 Gardening"], //182
    ["Diamond Fishing Rod", "diamond_fish_rod", "A fishing rod made of diamond.", "Crafting", "(has not been assigned attack values yet)<br />+3 Fishing"], //183
    ["Old Boot", "old_boot", "An old boot you fished up.", "Fishing", ""], //184
    ["Pair of Old Boots", "old_boot_pair", "A pair of old boots you fished up. Surprisingly effective at defending you.", "Fishing", "+1 Direct Defense<br />+1 Fishing"], //185
    ["Wad of String", "string_wad", "A wad of String you fished up.", "Crafting", ""], //186
    ["Goldfish", "goldfish", "A small goldfish.", "Fishing", "Potion effect: 30% chance of Water Resistance (1 turn)<br />Cook it to make it edible"], //187
    ["Jellyfish", "jellyfish", "A small jellyfish. Packs a mean sting.", "Fishing", "Throw it at someone to deal 5 damage<br />Throw Effect: 20% chance of Paralysis (1 turn)"], //188
    ["Fish 3", "fish_3", "{placeholder}", "Fishing", ""], //189
    ["Fish 4", "fish_4", "{placeholder}", "Fishing", ""], //190
    ["Solid Goldfish", "gold_goldfish", "Like a goldfish, but actually gold.", "Fishing", "Cook it to make it equippable"], //191
    ["Spinach", "spinach", "A bunch of spinach. Supposedly makes you stronger.", "Farming", "+5 HP on consume<br />Potion effect: 25% chance of Attack Up (1 turn)"], //192
    ["Golden Spinach", "gold_spinach", "A bunch of gold spinach. <i>Actually</i> makes you stronger.", "Farming", "Equip for 0.4 Direct Attack"], //193
    ["Ripe Apple", "ripe apple", "An apple that's riper than usual.", "Farming", "+10 HP on Consume"], //194
    ["Ripe Orange", "ripe orange", "An orange that's riper than usual.", "Farming", "+10 HP on Consume"], //195
    ["Ripe Carrot", "ripe carrot", "A carrot that's riper than usual. It's oranger.", "Farming", "+10 HP on Consume"], //196
    ["Can of Ripe Beans", "ripe can", "A cab of beans that's riper than usual.", "Farming", "+10 HP on Consume"], //197
    ["Ripe Radish", "ripe radish", "A radish that's riper than usual.", "Farming", "+10 HP on Consume"], //198
    ["Ripe Potato", "ripe potato", "A potato that's riper than usual.", "Farming", "+10 HP on Consume<br />Potion effect: 40% chance of Defense Up (1 turn)"], //199
    ["Ripe Cabbage", "ripe cabbage", "A head of cabbage that's riper than usual.", "Farming", "+10 HP on Consume"], //200
    ["Ripe Corn Cob", "ripe corn", "A cob of corn that's riper than usual.", "Farming", "+10 HP on Consume"], //201
    ["Ripe Beetroot", "ripe beetroot", "A beetroot that's riper than usual. Can be turned into red dye.", "Farming", "+10 HP on Consume"], //202
    ["Ripe Wheat Bundle", "ripe wheat_bundle", "A bundle of wheat that's riper than usual. Still can't be eaten directly, though.", "Farming", ""], //203
    ["Ripe Spinach", "ripe spinach", "A bunch of spinach that's riper than usual.", "Farming", "+10 HP on consume<br />Potion effect: 40% chance of Attack Up (1 turn)"], //204
    ["Enchanted Golden Carrot", "enchanted gold_carrot", "An enchanted carrot made out of gold. Surprisingly rare.", "Farming", "+0.6 Indirect Defense"], //205
    ["Enchanted Golden Apple", "enchanted golden_apple", "An enchanted golden apple. This is really rare!", "Farming", "Equip for +1 Max HP<br />Eat for Regen+ and Defense Up+ (1 turn)"], //206
]