var recipelist = { // [category: [name, description, item1, stack1, item2, ..., stack6, type, output, out-stack, skill-id, exp]] (0 is empty slot (stack must be 1))
    "Wooden Equipment": [
        ["Wooden Pickaxe", "", "46", "3", "45", "2", "0", "1", "0", "1", "0", "1", "0", "1", "2", "30", "1", "4", "15"],
        ["Wooden Shovel", "", "46", "1", "45", "2", "0", "1", "0", "1", "0", "1", "0", "1", "2", "10", "1", "4", "15"],
        ["Wooden Sword", "", "46", "2", "45", "1", "0", "1", "0", "1", "0", "1", "0", "1", "2", "9", "1", "4", "15"],
        ["Wooden Axe", "", "46", "3", "45", "2", "0", "1", "0", "1", "0", "1", "0", "1", "2", "31", "1", "4", "15"],
        ["Wooden Hoe", "", "46", "2", "45", "2", "0", "1", "0", "1", "0", "1", "0", "1", "2", "154", "1", "4", "10"],
        ["Wooden Hammer", "", "46", "3", "45", "2", "0", "1", "0", "1", "0", "1", "0", "1", "2", "169", "1", "4", "15"],
        ["Wooden Trowel", "", "46", "1", "45", "1", "0", "1", "0", "1", "0", "1", "0", "1", "2", "170", "1", "4", "15"],
        ["Wooden Fishing Rod", "", "46", "3", "87", "2", "0", "1", "0", "1", "0", "1", "0", "1", "2", "171", "1", "4", "15"],
        ["Wooden Shield", "", "46", "5", "0", "1", "0", "1", "0", "1", "0", "1", "0", "1", "2", "127", "1", "4", "15"],
    ],
    "Stone Equipment": [
        ["Stone Pickaxe", "", "51", "3", "45", "2", "0", "1", "0", "1", "0", "1", "0", "1", "2", "24", "1", "4", "20"],
        ["Stone Shovel", "", "51", "1", "45", "2", "0", "1", "0", "1", "0", "1", "0", "1", "2", "23", "1", "4", "20"],
        ["Stone Sword", "", "51", "2", "45", "1", "0", "1", "0", "1", "0", "1", "0", "1", "2", "22", "1", "4", "20"],
        ["Stone Axe", "", "51", "3", "45", "2", "0", "1", "0", "1", "0", "1", "0", "1", "2", "25", "1", "4", "20"],
        ["Stone Hoe", "", "51", "2", "45", "2", "0", "1", "0", "1", "0", "1", "0", "1", "2", "155", "1", "4", "15"],
        ["Stone Hammer", "", "51", "3", "45", "2", "0", "1", "0", "1", "0", "1", "0", "1", "2", "172", "1", "4", "20"],
        ["Stone Trowel", "", "51", "1", "45", "1", "0", "1", "0", "1", "0", "1", "0", "1", "2", "173", "1", "4", "20"],
        ["Stone Fishing Rod", "", "51", "3", "87", "2", "0", "1", "0", "1", "0", "1", "0", "1", "2", "174", "1", "4", "20"],
        ["Stone Shield", "", "46", "4", "51", "1", "0", "1", "0", "1", "0", "1", "0", "1", "2", "327", "1", "4", "20"],
    ],
    "Iron Equipment": [
        ["Iron Pickaxe", "", "72", "3", "45", "2", "0", "1", "0", "1", "0", "1", "0", "1", "2", "20", "1", "4", "20"],
        ["Iron Shovel", "", "72", "1", "45", "2", "0", "1", "0", "1", "0", "1", "0", "1", "2", "19", "1", "4", "20"],
        ["Iron Sword", "", "72", "2", "45", "1", "0", "1", "0", "1", "0", "1", "0", "1", "2", "18", "1", "4", "20"],
        ["Iron Axe", "", "72", "3", "45", "2", "0", "1", "0", "1", "0", "1", "0", "1", "2", "21", "1", "4", "20"],
        ["Iron Hoe", "", "72", "2", "45", "2", "0", "1", "0", "1", "0", "1", "0", "1", "2", "157", "1", "4", "15"],
        ["Iron Hammer", "", "72", "3", "45", "2", "0", "1", "0", "1", "0", "1", "0", "1", "2", "178", "1", "4", "20"],
        ["Iron Trowel", "", "72", "1", "45", "1", "0", "1", "0", "1", "0", "1", "0", "1", "2", "179", "1", "4", "20"],
        ["Iron Fishing Rod", "", "72", "3", "87", "2", "0", "1", "0", "1", "0", "1", "0", "1", "2", "180", "1", "4", "20"],
        ["Iron Helmet", "", "72", "3", "0", "1", "0", "1", "0", "1", "0", "1", "0", "1", "2", "163", "1", "4", "25"],
        ["Iron Chestplate", "", "72", "4", "0", "1", "0", "1", "0", "1", "0", "1", "0", "1", "2", "164", "1", "4", "30"],
        ["Iron Leggings", "", "72", "3", "0", "1", "0", "1", "0", "1", "0", "1", "0", "1", "2", "165", "1", "4", "25"],
        ["Iron Boots", "", "72", "2", "0", "1", "0", "1", "0", "1", "0", "1", "0", "1", "2", "166", "1", "4", "25"],
        ["Iron Shield", "", "46", "4", "72", "1", "0", "1", "0", "1", "0", "1", "0", "1", "2", "128", "1", "4", "25"],
    ],
    "Gold Equipment": [
        ["Gold Pickaxe", "", "71", "3", "45", "2", "0", "1", "0", "1", "0", "1", "0", "1", "2", "16", "1", "4", "15"],
        ["Gold Shovel", "", "71", "1", "45", "2", "0", "1", "0", "1", "0", "1", "0", "1", "2", "15", "1", "4", "15"],
        ["Gold Sword", "", "71", "2", "45", "1", "0", "1", "0", "1", "0", "1", "0", "1", "2", "14", "1", "4", "15"],
        ["Gold Axe", "", "71", "3", "45", "2", "0", "1", "0", "1", "0", "1", "0", "1", "2", "17", "1", "4", "15"],
        ["Gold Hoe", "", "71", "2", "45", "2", "0", "1", "0", "1", "0", "1", "0", "1", "2", "156", "1", "4", "10"],
        ["Gold Hammer", "", "71", "3", "45", "2", "0", "1", "0", "1", "0", "1", "0", "1", "2", "175", "1", "4", "15"],
        ["Gold Trowel", "", "71", "1", "45", "1", "0", "1", "0", "1", "0", "1", "0", "1", "2", "176", "1", "4", "15"],
        ["Gold Fishing Rod", "", "71", "3", "87", "2", "0", "1", "0", "1", "0", "1", "0", "1", "2", "177", "1", "4", "15"],
        ["Gold Helmet", "", "71", "3", "0", "1", "0", "1", "0", "1", "0", "1", "0", "1", "2", "159", "1", "4", "20"],
        ["Gold Chestplate", "", "71", "4", "0", "1", "0", "1", "0", "1", "0", "1", "0", "1", "2", "160", "1", "4", "25"],
        ["Gold Leggings", "", "71", "3", "0", "1", "0", "1", "0", "1", "0", "1", "0", "1", "2", "161", "1", "4", "20"],
        ["Gold Boots", "", "71", "2", "0", "1", "0", "1", "0", "1", "0", "1", "0", "1", "2", "162", "1", "4", "20"],
        ["Gold Shield", "", "46", "4", "71", "1", "0", "1", "0", "1", "0", "1", "0", "1", "2", "129", "1", "4", "15"],
    ],
    "Diamond Equipment": [
        ["Diamond Pickaxe", "Requires Crafting 1", "37", "3", "45", "2", "0", "1", "0", "1", "0", "1", "0", "1", "2", "28", "1", "4", "25"],
        ["Diamond Shovel", "Requires Crafting 1", "37", "1", "45", "2", "0", "1", "0", "1", "0", "1", "0", "1", "2", "27", "1", "4", "25"],
        ["Diamond Sword", "Requires Crafting 1", "37", "2", "45", "1", "0", "1", "0", "1", "0", "1", "0", "1", "2", "26", "1", "4", "25"],
        ["Diamond Axe", "Requires Crafting 1", "37", "3", "45", "2", "0", "1", "0", "1", "0", "1", "0", "1", "2", "29", "1", "4", "25"],
        ["Diamond Hoe", "Requires Crafting 1", "37", "2", "45", "2", "0", "1", "0", "1", "0", "1", "0", "1", "2", "158", "1", "4", "20"],
        ["Diamond Hammer", "Requires Crafting 1", "37", "3", "45", "2", "0", "1", "0", "1", "0", "1", "0", "1", "2", "181", "1", "4", "25"],
        ["Diamond Trowel", "Requires Crafting 1", "37", "1", "45", "1", "0", "1", "0", "1", "0", "1", "0", "1", "2", "182", "1", "4", "25"],
        ["Diamond Fishing Rod", "Requires Crafting 1", "37", "3", "87", "2", "0", "1", "0", "1", "0", "1", "0", "1", "2", "183", "1", "4", "25"],
        ["Diamond Helmet", "Requires Crafting 1", "37", "3", "0", "1", "0", "1", "0", "1", "0", "1", "0", "1", "2", "58", "1", "4", "30"],
        ["Diamond Chestplate", "Requires Crafting 1", "37", "4", "0", "1", "0", "1", "0", "1", "0", "1", "0", "1", "2", "59", "1", "4", "35"],
        ["Diamond Leggings", "Requires Crafting 1", "37", "3", "0", "1", "0", "1", "0", "1", "0", "1", "0", "1", "2", "60", "1", "4", "30"],
        ["Diamond Boots", "Requires Crafting 1", "37", "2", "0", "1", "0", "1", "0", "1", "0", "1", "0", "1", "2", "61", "1", "4", "30"],
        ["Diamond Shield", "Requires Crafting 1", "46", "4", "37", "1", "0", "1", "0", "1", "0", "1", "0", "1", "2", "13", "1", "4", "25"],
    ],
    "Misc. Armor": [
        ["Pair of Old Boots", "", "184", "2", "0", "1", "0", "1", "0", "1", "0", "1", "0", "1", "0", "185", "1", "4", "20"],
    ],
    "Ores": [
        ["Iron Bar", "", "68", "2", "228", "4", "0", "1", "0", "1", "0", "1", "0", "1", "3", "72", "1", "4", "15"],
        ["Gold Bar", "", "70", "1", "228", "4", "0", "1", "0", "1", "0", "1", "0", "1", "3", "71", "1", "4", "10"],
        ["Copper Bar", "", "69", "1", "228", "4", "0", "1", "0", "1", "0", "1", "0", "1", "3", "73", "1", "4", "10"],
        ["Electrum Bar", "", "369", "1", "228", "4", "0", "1", "0", "1", "0", "1", "0", "1", "3", "370", "1", "4", "11"],
        ["Electrum Nugget", "", "370", "1", "0", "1", "0", "1", "0", "1", "0", "1", "0", "1", "2", "371", "5", "4", "4"],
        ["Hardite Bar", "Requires Mining 3, Crafting 2", "76", "3", "229", "5", "0", "1", "0", "1", "0", "1", "0", "1", "3", "77", "1", "4", "30"],
    ],
    "Walls": [
        ["Stone Wall", "", "51", "4", "0", "1", "0", "1", "0", "1", "0", "1", "0", "1", "0", "82", "1", "7", "15"],
        ["Stone Brick Wall", "", "54", "4", "0", "1", "0", "1", "0", "1", "0", "1", "0", "1", "0", "81", "1", "7", "15"],
        ["Sandstone Brick Wall", "", "55", "4", "0", "1", "0", "1", "0", "1", "0", "1", "0", "1", "0", "79", "1", "7", "15"],
        ["Brick Wall", "", "53", "4", "0", "1", "0", "1", "0", "1", "0", "1", "0", "1", "0", "80", "1", "7", "15"],
        ["Iron Wall", "Requires Crafting 1", "72", "4", "0", "1", "0", "1", "0", "1", "0", "1", "0", "1", "2", "83", "1", "7", "20"],
        ["Plank Wall", "", "46", "4", "0", "1", "0", "1", "0", "1", "0", "1", "0", "1", "0", "85", "1", "7", "10"],
        ["Hardite Wall", "Requires Crafting 2", "77", "4", "0", "1", "0", "1", "0", "1", "0", "1", "0", "1", "2", "84", "1", "7", "35"],
    ],
    "Blocks": [
        ["Glass", "", "49", "4", "227", "3", "0", "1", "0", "1", "0", "1", "0", "1", "3", "57", "2", "4", "10"],
        ["Planks", "", "44", "1", "0", "1", "0", "1", "0", "1", "0", "1", "0", "1", "0", "46", "4", "4", "5"],
        ["Block of Leaves", "", "108", "16", "0", "1", "0", "1", "0", "1", "0", "1", "0", "1", "0", "110", "1", "4", "5"],
        ["Furnace", "", "51", "8", "0", "1", "0", "1", "0", "1", "0", "1", "0", "1", "0", "242", "1", "4", "20"],
        ["TNT", "", "49", "2", "372", "2", "0", "1", "0", "1", "0", "1", "0", "1", "0", "41", "1", "4", "20"],
        ["Snow", "", "374", "4", "0", "1", "0", "1", "0", "1", "0", "1", "0", "1", "0", "373", "1", "4", "0"],
    ],
    "Furniture": [
        ["Wood Table", "", "46", "4", "0", "1", "0", "1", "0", "1", "0", "1", "0", "1", "0", "144", "1", "4", "15"],
        ["Wood Chair", "", "46", "3", "0", "1", "0", "1", "0", "1", "0", "1", "0", "1", "0", "145", "1", "4", "15"],
        ["Folding Chair", "", "72", "3", "0", "1", "0", "1", "0", "1", "0", "1", "0", "1", "2", "146", "1", "4", "15"],
    ],
    "Technology": [
        ["Lever", "", "45", "1", "51", "1", "0", "1", "0", "1", "0", "1", "0", "1", "0", "376", "1", "4", "7"],
        ["Wooden Button", "", "46", "1", "0", "1", "0", "1", "0", "1", "0", "1", "0", "1", "0", "377", "1", "4", "4"],
        ["Stone Button", "", "51", "1", "0", "1", "0", "1", "0", "1", "0", "1", "0", "1", "0", "378", "1", "4", "5"],
        ["Iron Button", "", "72", "1", "0", "1", "0", "1", "0", "1", "0", "1", "0", "1", "0", "379", "1", "4", "6"],
        ["Wooden Pressure Plate", "", "46", "2", "0", "1", "0", "1", "0", "1", "0", "1", "0", "1", "0", "380", "1", "4", "8"],
        ["Stone Pressure Plate", "", "51", "2", "0", "1", "0", "1", "0", "1", "0", "1", "0", "1", "0", "381", "1", "4", "9"],
        ["Wire String", "", "73", "1", "370", "1", "0", "1", "0", "1", "0", "1", "0", "1", "0", "382", "3", "4", "13"],
        ["Disposable Phone", "", "72", "1", "370", "1", "371", "2", "0", "1", "0", "1", "0", "1", "0", "383", "2", "4", "10"],
        ["Reusable Phone", "", "383", "1", "77", "1", "0", "1", "0", "1", "0", "1", "0", "1", "0", "384", "1", "4", "50"],
    ],
    "Alchemy": [
        ["Glass Bottle", "", "57", "1", "0", "1", "0", "1", "0", "1", "0", "1", "0", "1", "0", "122", "2", "4", "10"],
        ["Bottle of Water", "", "122", "1", "74", "1", "0", "1", "0", "1", "0", "1", "0", "1", "0", "123", "1", "11", "5"],
    ],
    "Baking": [
        ["Dough", "", "147", "2", "0", "1", "0", "1", "0", "1", "0", "1", "0", "1", "0", "149", "1", "6", "10"],
        ["Golden Dough", "Requires Cooking 2", "148", "2", "0", "1", "0", "1", "0", "1", "0", "1", "0", "1", "0", "150", "1", "6", "30"],
        ["Bread", "", "149", "1", "227", "3", "0", "1", "0", "1", "0", "1", "0", "1", "3", "153", "1", "6", "15"],
        ["Apple Pie", "", "149", "2", "62", "2", "228", "4", "0", "1", "0", "1", "0", "1", "3", "151", "1", "6", "25"],
        ["Golden Apple Pie", "Requires Cooking 2", "150", "2", "63", "2", "229", "5", "0", "1", "0", "1", "0", "1", "3", "152", "1", "6", "50"],
        ["Orange Pie", "", "149", "2", "64", "2", "228", "4", "0", "1", "0", "1", "0", "1", "3", "277", "1", "6", "25"],
        ["Chocolate Chips", "", "269", "2", "225", "1", "0", "1", "0", "1", "0", "1", "0", "1", "3", "270", "1", "6", "10"],
        ["Chocolate Bar", "", "269", "3", "225", "1", "0", "1", "0", "1", "0", "1", "0", "1", "3", "271", "2", "6", "15"],
        ["Cookie", "", "149", "2", "226", "2", "0", "1", "0", "1", "0", "1", "0", "1", "3", "265", "1", "6", "15"],
        ["Chocolate Chip Cookie", "", "149", "2", "270", "2", "226", "2", "0", "1", "0", "1", "0", "1", "3", "266", "1", "6", "20"],
        ["Apple Cookie", "", "149", "2", "62", "2", "226", "2", "0", "1", "0", "1", "0", "1", "3", "267", "1", "6", "20"],
        ["Carrot Cookie", "", "149", "2", "66", "2", "226", "2", "0", "1", "0", "1", "0", "1", "3", "268", "1", "6", "25"],
    ],
    "Cooking":[
        ["Baked Potato", "", "132", "1", "226", "2", "0", "1", "0", "1", "0", "1", "0", "1", "3", "141", "1", "6", "15"],
        ["Shepherd's Pie", "", "149", "2", "257", "1", "132", "2", "228", "4", "0", "1", "0", "1", "3", "278", "1", "6", "30"],
        ["Cooked Goldfish", "", "187", "1", "226", "2", "0", "1", "0", "1", "0", "1", "0", "1", "3", "215", "1", "13", "10"],
        ["Cooked Solid Goldfish", "", "191", "1", "227", "3", "0", "1", "0", "1", "0", "1", "0", "1", "3", "214", "1", "13", "25"],
        ["Cooked Cod", "", "390", "1", "226", "2", "0", "1", "0", "1", "0", "1", "0", "1", "3", "391", "1", "13", "13"],
    ],
    "Canning":[
        
    ],
    "Misc. Food":[
        ["Buttered Corn Cob", "", "136", "1", "142", "1", "0", "1", "0", "1", "0", "1", "0", "1", "0", "140", "1", "6", "15"],
        ["Popcorn", "", "136", "1", "0", "1", "0", "1", "0", "1", "0", "1", "0", "1", "0", "350", "1", "6", "12"],
        ["High Fructose Corn Syrup", "", "136", "2", "0", "1", "0", "1", "0", "1", "0", "1", "0", "1", "0", "349", "3", "6", "20"],
        ["Sugar", "", "138", "2", "0", "1", "0", "1", "0", "1", "0", "1", "0", "1", "0", "348", "3", "6", "21"],
        ["Lemon Juice", "", "338", "1", "0", "1", "0", "1", "0", "1", "0", "1", "0", "1", "0", "344", "1", "6", "10"],
        ["Lime Juice", "", "341", "1", "0", "1", "0", "1", "0", "1", "0", "1", "0", "1", "0", "345", "1", "6", "10"],
        ["Lemonade", "", "344", "1", "348", "1", "0", "1", "0", "1", "0", "1", "0", "1", "0", "346", "1", "6", "15"],
        ["Limeade", "", "345", "1", "348", "1", "0", "1", "0", "1", "0", "1", "0", "1", "0", "347", "1", "6", "15"],
    ],
    "Misc. Meatpasting": [
        ["8-Leaf Clover", "", "254", "2", "264", "1", "0", "1", "0", "1", "0", "1", "0", "1", "4", "255", "1", "4", "15"],
    ],
    "Misc. Weapons": [
        ["Decent Hammer", "", "51", "1", "45", "1", "87", "2", "0", "1", "0", "1", "0", "1", "2", "38", "1", "4", "15"],
        ["Flint and Steel", "", "86", "1", "72", "1", "0", "1", "0", "1", "0", "1", "0", "1", "2", "40", "1", "4", "20"],
        ["Stick and Rock", "", "45", "1", "35", "1", "0", "1", "0", "1", "0", "1", "0", "1", "2", "11", "1", "4", "5"],
        ["Rock-on-a-Stick", "", "11", "1", "51", "2", "0", "1", "0", "1", "0", "1", "0", "1", "2", "78", "1", "4", "10"],
        ["Bow", "", "45", "3", "87", "3", "0", "1", "0", "1", "0", "1", "0", "1", "2", "88", "1", "4", "15"],
        ["Arrow", "", "45", "1", "86", "1", "0", "1", "0", "1", "0", "1", "0", "1", "0", "89", "1", "4", "10"],
        ["Snowball", "", "373", "1", "0", "1", "0", "1", "0", "1", "0", "1", "0", "1", "0", "374", "4", "4", "10"],
        ["Snowball with Rock", "", "374", "1", "35", "1", "0", "1", "0", "1", "0", "1", "0", "1", "0", "375", "1", "4", "5"],
        
    ],
    "Misc": [
        ["Stick", "", "46", "2", "264", "1", "0", "1", "0", "1", "0", "1", "0", "1", "0", "45", "4", "4", "2"],
        ["Flint", "", "50", "3", "0", "1", "0", "1", "0", "1", "0", "1", "0", "1", "0", "86", "1-2", "4", "5"],
        ["Empty Can", "", "72", "2", "0", "1", "0", "1", "0", "1", "0", "1", "0", "1", "2", "90", "3", "4", "10"],
        ["Canned Water", "", "90", "1", "74", "1", "0", "1", "0", "1", "0", "1", "0", "1", "0", "91", "1", "4", "10"],
        ["Fertilizer", "Requires Farming 2", "47", "2", "0", "1", "0", "1", "0", "1", "0", "1", "0", "1", "0", "124", "1", "1", "10"],
        ["String", "", "186", "1", "0", "1", "0", "1", "0", "1", "0", "1", "0", "1", "0", "87", "5-7", "13", "10"],
        ["Wooden Bowl", "", "46", "1", "0", "1", "0", "1", "0", "1", "0", "1", "0", "1", "0", "143", "1", "4", "10"],
        ["Rope", "", "87", "10", "0", "1", "0", "1", "0", "1", "0", "1", "0", "1", "0", "366", "3", "4", "10"],
        ["Coin", "", "71", "1", "73", "1", "0", "1", "0", "1", "0", "1", "0", "1", "0", "389", "3", "4", "15"],
    ]
}