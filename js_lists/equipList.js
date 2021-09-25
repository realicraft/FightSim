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
    ["Wooden Sword", "wood_sword", "A sword made out of wood.", "Crafting", "+1 Indirect Attack"], //9
    ["Wooden Shovel", "wood_shovel", "A shovel made out of wood. Not the most conventional of weapons.", "Crafting", "+1 Indirect Attack"], //10
    ["Stick and Rock", "stick_rock", "A rock taped to a stick. This isn't very good.", "Crafting", "50% Chance of breaking on hit"], //11
    ["Golden Carrot", "gold_carrot", "A carrot made out of gold. Aren't carrots supposed to give you better eyesight?", "Gardening", "+0.3 Indirect Defense"], //12
    ["Diamond Shield", "diamond_shield", "A shield with a diamond in the center.", "???", "+2 Indirect Defense<br />+1 Direct Defense"], //13
    ["Golden Sword", "gold_sword", "A sword made out of gold. Seems fragile.", "Crafting", "+1 Indirect Attack<br />10% chance of breaking on hit"], //14
    ["Golden Shovel", "gold_shovel", "A shovel made out of gold. Seems fragile.", "Crafting", "+1 Indirect Attack<br />10% chance of breaking on hit"], //15
    ["Golden Pickaxe", "gold_pickaxe", "A pickaxe made out of gold. Seems fragile, and is probably better used for mining.", "Crafting", "+1 Indirect Attack<br />+2 to Mining<br />10% chance of breaking on hit or mine"], //16
    ["Golden Axe", "gold_axe", "A axe made out of gold. Seems fragile, and is probably better used for chopping.", "Crafting", "+2 Indirect Attack<br />+2 to Chopping<br />10% chance of breaking on hit or chop"], //17
    ["Iron Sword", "iron_sword", "A sword made out of iron.", "Crafting", "+1 Direct Attack<br />+1 Indirect Attack"], //18
    ["Iron Shovel", "iron_shovel", "A shovel made out of iron.", "Crafting", "+1 Indirect Attack"], //19
    ["Iron Pickaxe", "iron_pickaxe", "A pickaxe made out of iron. You should probably use this for mining instead.", "Crafting", "+1 Direct Attack<br />+2 to Mining"], //20
    ["Iron Axe", "iron_axe", "A axe made out of iron. You should probably use this for chopping instead.", "Crafting", "+1 Direct Attack<br />+2 Indirect Attack<br />+2 to Chopping"], //21
    ["Stone Sword", "stone_sword", "A sword made out of stone.", "Crafting", "+1 Direct Attack"], //22
    ["Stone Shovel", "stone_shovel", "A shovel made out of stone.", "Crafting", "+1 Indirect Attack"], //23
    ["Stone Pickaxe", "stone_pickaxe", "A pickaxe made out of stone. You should probably use this for mining instead.", "Crafting", "+1 Indirect Attack<br />+1 to Mining"], //24
    ["Stone Axe", "stone_axe", "A axe made out of stone. You should probably use this for chopping instead.", "Crafting", "+1 Direct Attack<br />+1 Indirect Attack<br />+1 to Chopping"], //25
    ["Diamond Sword", "diamond_sword", "A sword made out of diamonds.", "Crafting", "+2 Direct Attack"], //26
    ["Diamond Shovel", "diamond_shovel", "A shovel made out of diamonds.", "Crafting", "+2 Indirect Attack"], //27
    ["Diamond Pickaxe", "diamond_pickaxe", "A pickaxe made out of diamonds. You should probably use this for mining instead.", "Crafting", "+1 Direct Attack<br />+2 Indirect Attack<br />+3 to Mining"], //28
    ["Diamond Axe", "diamond_axe", "A axe made out of diamonds. You should probably use this for chopping instead.", "Crafting", "+2 Direct Attack<br />+1 Indirect Attack<br />+3 to Chopping"], //29
    ["Wooden Pickaxe", "wood_pickaxe", "A pickaxe made out of wood. You should probably use this for mining instead.", "Crafting", "+1 Indirect Attack<br />+1 to Mining"], //30
    ["Wooden Axe", "wood_axe", "A axe made out of wood. You should probably use this for chopping instead.", "Crafting", "+1 Indirect Attack<br />+1 to Chopping"] //31
]