var questbox_turn = document.getElementById("quest_turn")
var questbox_quadturn = document.getElementById("quest_quadturn")
var questbox_full = document.getElementById("quest_full")
var questbox_rep = document.getElementById("quest_rep")
var questbox_turnpast = document.getElementById("quest_turnpast")
var questbox_quadturnpast = document.getElementById("quest_quadturnpast")
var questbox_fullpast = document.getElementById("quest_fullpast")

var quests = [ // [[quest lang_id, number], [claimed], reward, turn]
    [["make_shield", 1], [], "3 Misc EXP", "84"],
    [["go_mine_electrum", 1], [], "2 Disposable Phones, 4 Misc EXP", "84"],
    [["equip_accessory", 1], [], "4 Fabric, 4 Leather, 4 String", "84"],
    [["damage_total", 30], [], "1 Diamond Sword", "84~87"],
    [["make_new_item", 1], [], "2 Sleep Shrooms, 1 Metal Triangle", "84~87"],
    [["use_scroll", 1], [], "2 Random Scrolls", "84~87"],
    [["talk_to_morshu", 1], [], "2 Bombs, 7 Misc EXP"],
    [["equip_gold_food", 1], [], "3 Gold Bars, 150% Farming"],
    [["level_up_skill", 8], [], "40 Misc EXP, 0.5 Direct Attack"], // incendiary 1
]

var repquests = [ // [lang id, [[username, req, rewards, comp], ...], goal, div height]
    ["crops",
        [
            ["reali", "2 Crops", "2 Misc EXP", "1/2"],
            ["S.&nbsp;McSaus", "1 Crop", "1 Misc EXP", "0/1"],
            ["Cats.", "1 Crop", "1 Misc EXP", "0/1"],
            ["Squirrelflight", "1 Crop", "1 Misc EXP", "0/1"],
            ["Incendiary", "1 Crop", "1 Misc EXP", "0/1"],
            ["Byron", "8 Crops", "8 Misc EXP", "0/8"],
            ["sparky", "7 Crops", "7 Misc EXP", "1/6"],
            ["solitare", "2 Crops", "2 Misc EXP", "0/2"],
            ["Fares", "1 Crop", "1 Misc EXP", "0/1"],
            ["Leopardy", "1 Crop", "1 Misc EXP", "0/1"],
            ["gilbert", "1 Crop", "1 Misc EXP", "0/1"],
            ["Twilight", "3 Crops", "3 Misc EXP", "0/3"],
            ["Luigi", "1 Crop", "1 Misc EXP", "0/1"],
            /*["Kitty", "1 Crop", "1 Misc EXP", "0/1"],*/
            /*["Savvy", "1 Crop", "1 Misc EXP", "0/1"],*/
            ["Bobby", "1 Crop", "1 Misc EXP", "0/1"],
            ["Tony", "1 Crop", "1 Misc EXP", "0/1"],
            ["Landon", "1 Crop", "1 Misc EXP", "0/1"],
        ], "75 Harvests (55/75)"
    ],
    ["wiki",
        [
            ["reali", "Ineligible", "N/A", "N/A"],
            ["S.&nbsp;McSause", "10 Edits", "1 Skill Candy", "0/10"],
            ["Cats.", "10 Edits", "1 Skill Candy", "0/10"],
            ["Squirrelflight", "10 Edits", "1 Skill Candy", "0/10"],
            ["Incendiary", "10 Edits", "1 Skill Candy", "3/10"],
            ["Byron", "10 Edits", "1 Skill Candy", "5/10"],
            ["sparky", "10 Edits", "1 Skill Candy", "0/10"],
            ["solitare", "10 Edits", "1 Skill Candy", "0/10"],
            ["Fares", "10 Edits", "1 Skill Candy", "0/10"],
            ["Leopardy", "10 Edits", "1 Skill Candy", "0/10"],
            ["gilbert", "10 Edits", "1 Skill Candy", "0/10"],
            ["Twilight", "10 Edits", "1 Skill Candy", "0/10"],
            ["Luigi", "10 Edits", "1 Skill Candy", "0/10"],
            /*["Kitty", "10 Edits", "1 Skill Candy", "0/10"],*/
            /*["Savvy", "10 Edits", "1 Skill Candy", "0/10"],*/
            ["Bobby", "10 Edits", "1 Skill Candy", "0/10"],
            ["Tony", "10 Edits", "1 Skill Candy", "5/10"],
            ["Landon", "10 Edits", "1 Skill Candy", "0/10"],
        ], "500 Edits (13/500)"
    ],
    ["use",
        [
            ["reali", "1 Use/Equip", "1 Lucky Block", "1/1"],
            ["S.&nbsp;McSause", "1 Use/Equip", "1 Lucky Block", "0/1"],
            ["Cats.", "1 Use/Equip", "1 Lucky Block", "0/1"],
            ["Squirrelflight", "1 Use/Equip", "1 Lucky Block", "0/1"],
            ["Incendiary", "1 Use/Equip", "1 Lucky Block", "1/1"],
            ["Byron", "1 Use/Equip", "1 Lucky Block", "0/1"],
            ["sparky", "1 Use/Equip", "1 Lucky Block", "0/1"],
            ["solitare", "1 Use/Equip", "1 Lucky Block", "0/1"],
            ["Fares", "1 Use/Equip", "1 Lucky Block", "0/1"],
            ["Leopardy", "1 Use/Equip", "1 Lucky Block", "0/1"],
            ["gilbert", "1 Use/Equip", "1 Lucky Block", "1/1"],
            ["Twilight", "1 Use/Equip", "1 Lucky Block", "0/1"],
            ["Luigi", "1 Use/Equip", "1 Lucky Block", "1/1"],
            /*["Kitty", "1 Use/Equip", "1 Lucky Block", "0/1"],*/
            /*["Savvy", "1 Use/Equip", "1 Lucky Block", "0/1"],*/
            ["Bobby", "1 Use/Equip", "1 Lucky Block", "0/1"],
            ["Tony", "1 Use/Equip", "1 Lucky Block", "0/1"],
            ["Landon", "3 Use/Equips", "3 Lucky Blocks", "7/3"],
        ], "75 Uses or Equips (7/75)"
    ],
]

var pastquests = [ // same as quests inside, outside is turn, quadturn, full
    [
        ["Go Mining for Electrum Ore.", [], "80% Mining, 2 Electrum Bars", "83"],
        ["Chop a tree.", ["Incendiary"], "80% Chopping, 20 Oak Planks", "83"],
        ["Go Fishing.", [], "100% Fishing, 1 Bag of Fish", "83"],
        ["Obtain a Sticker.", ["Incendiary"], "Sword Sticker, 2 Misc EXP", "82"],
        ["Go Digging.", [], "3 Gravel, 125% Digging", "82"],
        ["Consume an item.", [], "1 Item Candy, 3 Misc EXP", "82"],
        ["Go Chopping.", ["Incendiary"], "75% Chopping, 3 Birch Logs", "81"],
        ["Go Gathering.", ["Landon"], "75% Gathering, 1 Item Candy", "81"],
        ["Go Fishing.", [], "75% Fishing, 1 Old Boot", "81"],
        ["Chop a Birch tree.", [], "75% Chopping", "80"],
        ["Deal damage to a mob.", [], "5 HP", "80"],
        ["Die.", [], "0.4 Direct Attack", "80"],
        ["Go Fishing.", [], "150% Fishing", "79"],
        ["Fight another player.", [], "4 Misc EXP", "79"],
        ["Deal at least 10 damage at once.", [], "5 HP, 3 Misc EXP", "79"],
        ["Be at Turret 3 by the end of the Turn.", ["Byron", "Gilbert", "Landon"], "3 Prizes", "78"],
        ["Brew a potion.", [], "1 Bottle of Honey", "78"],
        ["Consume an item.", [], "3 Misc EXP", "78"],
        ["Deal damage to a player.", [], "3 Misc EXP", "77"],
        ["Mine 2 Electrum Ore.", [], "175% Mining", "77"],
        ["Plant a crop or flower", [], "2 Fertilizer", "77"],
        ["Acquire a Hamburger.", [], "1 Cheeseburger", "76"],
        ["Go Fishing.", [], "150% Fishing", "76"],
        ["Chop a Birch tree.", [], "150% Chopping", "76"],
        ["Craft some form of juice.", [], "2 Apple Juices, 2 Orange Juices", "75"],
        ["Open a Lucky Block.", ["Landon"], "2 Lucky Blocks", "75"],
        ["Pet a Slime.", [], "5 Misc EXP", "75"],
        ["Use a Skill.", ["Landon"], "2 Lucky Blocks", "74"],
        ["Consume an item.", ["Landon"], "2 Lucky Blocks", "74"],
        ["Deal damage.", ["Byron"], "2 Lucky Blocks", "74"],
        ["Deal at least 10 damage at once.", [], "2 Rocks", "73"],
        ["Go Gathering.", [], "150% Gathering", "73"],
        ["Interact with an enemy.", ["Landon"], "5 Misc EXP", "73"],
        ["Be at Turret 3 by the end of the Turn.", ["Landon","gilbert"], "A Prize (can be claimed by multiple people)", "72"],
        ["Deal type-aligned damage.", [], "3 Snowballs", "72"],
        ["Interact with an NPC.", [], "1 Disposable Phone", "72"],
        ["Plant a crop or flower.", [], "2 Fertilizer", "71"],
        ["Cook something.", ["Byron"], "Tray of Cookies", "71"],
        ["Use a current or former Mystery Skill.", ["Byron"], "500% in that skill", "71"],
        ["Use a Disposable Phone.", ["Reali"], "2 Disposable Phones", "70"],
        ["Cook something.", [], "Tray of Cookies", "70"],
        ["Use a current or former Mystery Skill.", [], "1 Random Potion, 1 Random Fish, 2 Clay", "70"],
        ["Use a Disposable Phone.", ["Reali"], "2 Disposable Phones", "69"],
        ["Block an attack.", ["Reali"], "+0.2 Direct Defense", "69"],
        ["Use a current or former Mystery Skill.", [], "1 Random Potion, 1 Random Fish, 2 Clay", "69"],
        ["Carve something.", [], "60% Carving Exp", "68"],
        ["Craft 2 items.", ["TonyBrown148"], "50% Crafting Exp, 1 Coal", "68"],
        ["Obtain an item.", ["TonyBrown148"], "1 Item Candy", "68"],
        ["Fight a mob.", [], "1 Gold Sword", "67"],
        ["Do some Pottery.", [], "10 Misc EXP", "67"],
        ["Obtain a Sticker.", [], "1 Knife Sticker", "67"],
        ["Fight another player.", [], "1 Iron Sword", "66"],
        ["Go Gathering.", [], "1 Contact Card (Dry)", "66"],
        ["Obtain a Sticker.", [], "1 Bow Sticker", "66"],
        ["Fight a mob.", [], "2 Meat Paste", "65"],
        ["Go Fishing.", [], "1 Contact Card (Wet)", "65"],
        ["Obtain a Sticker.", [], "1 Bow Sticker", "65"],
        ["Use \"smeckledorf\" in your post.", ["Tony","Byron","Theta"], "1 Bottle o' Enchanting (can be claimed by multiple people)", "64"],
        ["Go Fishing.", [], "1 Contact Card (Wet)", "64"],
        ["Obtain a Scroll.", [], "1 Scroll (Runes 20, 5)", "64"],
        ["Go Mining for Electrum.", ["Incendiary"], "2 Disposable Phones, 2 Misc EXP", "63"],
        ["Go Gathering.", ["Reali"], "1 Contact Card (Dry)", "63"],
        ["Obtain a Sticker.", [], "1 Scroll (Runes 1, 4)", "63"],
        ["Go Mining for Electrum.", ["Byron"], "2 Disposable Phones, 3 Misc EXP", "62"],
        ["Go Fishing.", [], "1 Contact Card (Wet)", "62"],
        ["Buy a scroll.", [], "1 Scroll (Runes 1, 3)", "62"],
        ["Go Mining for Electrum.", ["gilbert"], "2 Disposable Phones, 4 Misc EXP", "61"],
        ["Go Fishing.", [], "1 Contact Card (Wet)", "61"],
        ["Mint a coin or decicoin.", [], "1 Coin", "61"],
        ["Go Mining for Electrum.", ["Sparky"], "2 Disposable Phones, 5 Misc EXP", "60"],
        ["Go Mining for Electrum.", ["Reali"], "2 Disposable Phones, 5 Misc EXP", "60"],
        ["Go Mining for Electrum.", [], "2 Disposable Phones, 5 Misc EXP", "60"],
        ["Go Fishing.", ["Reali"], "40% Fishing Exp", "59"],
        ["Make a food.", [], "25% Cooking Exp, 2 Dough", "59"],
        ["Move three items.", ["Byron"], "3 Misc EXP", "59"],
        ["Deal damage to a mob.", ["Byron"], "5 HP, 1 Misc EXP", "58"],
        ["Go Chopping.", ["Byron"], "40% Chopping Exp", "58"],
        ["Make a Chestplate.", [], "Leather Helmet", "58"],
        ["Deal damage to a player.", ["Byron"], "5 HP, 1 Misc EXP", "57"],
        ["Go Fishing.", ["solitare"], "40% Fishing Exp", "57"],
        ["Make a shield.", ["solitare"], "3 Misc EXP", "57"],
        ["Go Gathering.", ["Byron"], "40% Gathering Exp", "56"],
        ["Kill a mob.", ["Byron"], "2 Misc EXP", "56"],
        ["Make a weapon.", [], "10 HP, 2 Misc EXP", "56"],
        ["Use a Candy.", ["solitare"], "2 Misc EXP, 1 Copper Bar", "55"],
        ["Go Digging.", [], "3 Gravel, 35% Digging Exp", "55"],
        ["Start a Potion.", [], "40% Alchemy Exp", "55"],
        ["Use a Candy.", ["gilbert"], "2 Misc EXP", "54"],
        ["Go Chopping.", [], "1 Log, 30% Chopping Exp", "54"],
        ["Make 10 edits to the wiki.", [], "4 Misc EXP, 1 Item Candy", "54"],
        ["Use a Candy.", ["Byron"], "1 Misc EXP", "53"],
        ["Obtain a Stick.", [], "1 Stick, 5% Chopping Exp", "53"],
        ["Craft an item.", [], "40% Crafting Exp", "53"],
        ["Hang a Stocking.", ["Byron"], "1 Effect Candy", "52"],
        ["Harvest a crop.", ["TwilightSeleneMisty"], "1 Skill Candy", "52"],
        ["Obtain an item.", ["TwilightSeleneMisty"], "1 Item Candy", "52"],
        ["Go Mining.", ["Byron"], "25% Mining Exp", "51"],
        ["Go Digging.", [], "25% Digging Exp", "51"],
        ["Attack someone.", [], "3 Misc EXP", "51"],
        ["Start a potion.", [], "30% Alchemy Exp", "50"],
        ["Damage a mob.", ["Byron"], "2 Misc EXP", "50"],
        ["Carve something.", [], "30% Carving Exp", "50"],
        ["Harvest a flower.", [], "30% Gardening Exp", "49"],
        ["Level up a skill.", ["Byron"], "2 Misc EXP", "49"],
        ["Go Fishing.", ["solitare"], "30% Fishing Exp, 1 Goldfish", "49"],
        ["Harvest 2 crops.", [], "30% Farming Exp", "48"],
        ["Craft a tool.", [], "20% Crafting Exp, 1 Gold Bar", "48"],
        ["Make only one action total.", ["gilbert"], "5 Misc EXP, 1 Iron Sword", "48"],
        ["Plant a crop.", [], "10% Farming Exp", "47"],
        ["Craft a weapon.", ["solitare"], "20% Crafting Exp, 1 Iron Bar", "47"],
        ["Cook something.", ["Byron"], "10% Cooking Exp, 1 Dough", "47"],
        ["Plant a flower.", ["Byron"], "10% Gardening Exp", "46"],
        ["Craft 2 items.", [], "20% Crafting Exp, 1 Coal", "46"],
        ["Chop a tree.", ["Byron"], "10% Chopping Exp, 1 Orange", "46"],
        ["Go fishing.", ["solitare"], "10% ??? Exp", "45"],
        ["Brew a potion.", [], "10% ??? Exp, 1 Bottle of Water", "45"],
        ["Attack a Structure.", [], "3 Misc EXP", "45"],
        ["Go digging.", [], "10% Digging Exp", "44"],
        ["Gather something.", ["Byron"], "10% Gathering Exp, 1 Rock", "44"],
        ["Craft 2 items.", ["TwilightSeleneMisty"], "1 Chair, 1 Misc EXP", "44"],
        ["Go mining.", ["solitare"], "10% Mining Exp, 1 Coal", "43"],
        ["Chop a tree.", ["TwilightSeleneMisty"], "10% Chopping Exp", "43"],
        ["Cook something.", [], "1 Apple", "43"],
        ["Plant a flower.", ["solitare"], "10% Gardening Exp", "42"],
        ["Dig something up.", ["solitare"], "1 Sand", "42"],
        ["Damage someone.", [], "1 Misc EXP", "42"],
    ],
    [
        ["Deal type-aligned damage.", ["Sparky"], "10 HP", "80~83"],
        ["Use 5 Skills.", ["Incendiary"], "3 Bottles o' Enchanting", "80~83"],
        ["Interact with an enemy.", ["Reali"], "5 Misc EXP", "80~83"],
        ["Make a Carrot Cake.", [], "250% Cooking", "76~79"],
        ["Discover a Mystery Skill.", [], "20 Misc EXP", "76~79"],
        ["Kill 3 things.", [], "+0.2 Direct Attack", "76~79"],
        ["Cause a new item to be added to the data.", ["Landon"], "2 of that item", "72~75"],
        ["Equip any armor.", ["Sparky"], "0.8 Indirect Defense", "72~75"],
        ["Craft 5 unique items.", [], "350% Crafting", "72~75"],
        ["Create a Structure.", ["Byron"], "Stone Hammer", "68~71"],
        ["Die twice.", [], "Regen Potion", "68~71"],
        ["Obtain a Carrot-based item.", ["Reali"], "200% Farming, 200% Cooking, 200% Gathering, 3 Iron Bars", "68~71"],
        ["Plant a flower.", [], "100% Gardening Exp", "64~67"],
        ["Plant Wheat.", ["Byron"], "110% Farming Exp", "64~67"],
        ["Equip a Helmet or Chestplate.", [], "4 Misc EXP", "64~67"],
        ["Use a Disposable Phone.", ["Byron"], "1 Electrum Bar, 5 Misc EXP", "60~63"],
        ["Make an 8-Leaf Clover.", [], "1 Bottle o' Enchanting,", "60~63"],
        ["Cause a new item to be made.", [], "2 Misc EXP", "60~63"],
        ["Create a Structure.", ["Incendiary"], "30% Construction Exp, 3 Planks", "52~55"],
        ["Go Digging twice.", [], "40% Digging Exp", "52~55"],
        ["Deal 10 damage.", [], "3 Misc EXP, 1 Rock", "52~55"],
        ["Repair a Structure.", [], "30% Construction Exp, 3 Stone", "48~51"],
        ["Go Chopping twice.", ["Byron"], "35% Chopping Exp", "48~51"],
        ["Mine 2 Iron Ore.", ["Byron"], "25% Mining Exp, 1 Coal", "48~51"],
        ["Deal 20 damage total.", ["Byron"], "10 HP, 1 Gold Bar, 2 Misc EXP", "44~47"],
        ["Harvest a flower.", [], "15% Gardening Exp", "44~47"],
        ["Mine 5 Stone.", [], "20% Mining Exp", "44~47"],
        ["Take 20 damage total.", ["TwilightSeleneMisty"], "10 HP, 1 Iron Bar, 2 Misc EXP", "40~43"],
        ["Harvest a crop.", ["Sparky"], "15% Farming Exp", "40~43"],
        ["Mine 3 Iron Ore.", [], "30% Mining Exp", "40~43"],
    ],
    [
        ["Equip a Sticker.", ["Gilbert"], "Orb Sticker"],
        ["Recruit an ally or summon.", ["Byron"], "1 Max HP Upgrade"],
        ["Attack a Structure.", ["Theta"], "1 Indirect Attack"],
        ["Reach Proficient in any skill.", ["sparky"], "4 Misc EXP"],
        ["Obtain 2 Stickers.", ["gilbert"], "3 Misc EXP, 1 Sticker Pack"],
        ["Buy a scroll.", ["Reali"], "1 Dollar Bill"],
        ["Equip any chestplate.", ["gilbert"], "Leather Leggings"],
        ["Equip any accessory.", ["Byron"], "2 Iron Bars"],
        ["Die.", ["gilbert"], "5 Misc EXP, 4 Iron Ore"],
        ["Use a thin-air weapon.", ["gilbert"], "2 Misc EXP"],
        ["Kill someone.", ["Byron"], "3 Misc EXP"],
        ["Complete a Structure.", ["Incendiary"], "30% Construction Exp"],
        ["Equip any armor.", ["Byron"], "1 Misc EXP, 1 Wooden Shield"],
    ],
]

var quest_full = ""
var quest_current = ""

var make_claimed = function(claims) {
    if (claims.length == 0) {
        return getTranslatedString("quests.meta.unclaimed")
    } else {
        return getTranslatedString("quests.meta.claimed_by") + " " + claims.join(", ")
    }
}

var quest_func = function() {
    // Turn Quests
    quest_full = '<h2>Turn Quests</h2>'
    for (i in quests.slice(0,3)) {
        i = parseInt(i)
        quest_current = '<div class="struct questbox"><div class="questleft">'
        if (quests[i][0][1] == 1) {
            quest_current += getTranslatedString("quests.normal." + quests[i][0][0] + ".sing")
        } else {
            quest_current += getTranslatedString("quests.normal." + quests[i][0][0] + ".plur", {"n1": quests[i][0][1]})
        }
        quest_current += '</div><div class="questright">'
        quest_current += make_claimed(quests[i][1])
        quest_current += '</div><div class="questbottom">Reward: '
        quest_current += quests[i][2]
        quest_current += '</div><div class="questbottomleft">'
        quest_current += quests[i][3]
        quest_current += '</div></div>'
        quest_full += quest_current
    }
    questbox_turn.innerHTML = quest_full

    // Quadturn Quests
    quest_full = '<h2>Quadturn Quests</h2>'
    for (i in quests.slice(0,3)) {
        i = parseInt(i)
        quest_current = '<div class="struct questbox"><div class="questleft">'
        if (quests[i+3][0][1] == 1) {
            quest_current += getTranslatedString("quests.normal." + quests[i+3][0][0] + ".sing")
        } else {
            quest_current += getTranslatedString("quests.normal." + quests[i+3][0][0] + ".plur", {"n1": quests[i+3][0][1]})
        }
        quest_current += '</div><div class="questright">'
        quest_current += make_claimed(quests[i+3][1])
        quest_current += '</div><div class="questbottom">Reward: '
        quest_current += quests[i+3][2]
        quest_current += '</div><div class="questbottomleft">'
        quest_current += quests[i+3][3]
        quest_current += '</div></div>'
        quest_full += quest_current
    }
    questbox_quadturn.innerHTML = quest_full

    // Full Quests
    quest_full = '<h2>Full Quests</h2>'
    for (i in quests.slice(0,3)) {
        i = parseInt(i)
        quest_current = '<div class="struct questbox"><div class="questleft">'
        if (quests[i+6][0][1] == 1) {
            quest_current += getTranslatedString("quests.normal." + quests[i+6][0][0] + ".sing")
        } else {
            quest_current += getTranslatedString("quests.normal." + quests[i+6][0][0] + ".plur", {"n1": quests[i+6][0][1]})
        }
        quest_current += '</div><div class="questright">'
        quest_current += make_claimed(quests[i+6][1])
        quest_current += '</div><div class="questbottom">Reward: '
        quest_current += quests[i+6][2]
        quest_current += '</div></div>'
        quest_full += quest_current
    }
    questbox_full.innerHTML = quest_full

    // Rep Quests
    quest_full = '<h2>Repeatable Quests</h2>'
    for (i in repquests) {
        i = parseInt(i)
        quest_current = '<div class="struct repquestbox"><div class="repquesttop">'
        quest_current += getTranslatedString("quests.multi." + repquests[i][0] + ".name")
        quest_current += '</div><div class="repquestmid">'
        quest_current += getTranslatedString("quests.multi." + repquests[i][0] + ".desc")
        quest_current += '</div>'
        var l = 6
        for (var j = 0; j < Math.ceil(repquests[i][1].length/6); j++) {
            quest_current += '<table class="repquesttable"><tr><th>User</th>'
            if ((j+1)*6 > repquests[i][1].length) {l = repquests[i][1].length % 6}
            for (k in repquests[i][1].slice(0, l)) {quest_current += '<th>' + repquests[i][1][parseInt(k)+(j*6)][0] + '</th>'}
            quest_current += '<th>User</th></tr><th>Req.</th>'
            for (k in repquests[i][1].slice(0, l)) {quest_current += '<td>' + repquests[i][1][parseInt(k)+(j*6)][1] + '</td>'}
            quest_current += '<th>Req.</th></tr><tr><th>Reward</th>'
            for (k in repquests[i][1].slice(0, l)) {quest_current += '<td>' + repquests[i][1][parseInt(k)+(j*6)][2] + '</td>'}
            quest_current += '<th>Reward</th></tr><tr><th>Comp.</th>'
            for (k in repquests[i][1].slice(0, l)) {quest_current += '<td>' + repquests[i][1][parseInt(k)+(j*6)][3] + '</td>'}
            quest_current += '<th>Comp.</th></tr></table>'
            
        }
        quest_current += '<div class="repquestbottom">Goal: <b>' + repquests[i][2] + '</b></div>'
        quest_full += '</div>'
        quest_full += quest_current
    }
    questbox_rep.innerHTML = quest_full

    // Turn Quests (Past)
    quest_full = '<span class="small_icon collapse_button collapse_closed" onclick="collapse(\'quest_turnpast\');"></span><h3 class="collapse_header">Turn Quests (Past)</h3><div class="collapse_body" style="display:none;">'
    for (i in pastquests[0]) {
        quest_current = '<div class="struct questbox"><div class="questleft">'
        quest_current += pastquests[0][i][0]
        quest_current += '</div><div class="questright">'
        quest_current += make_claimed(pastquests[0][i][1])
        quest_current += '</div><div class="questbottom">Reward: '
        quest_current += pastquests[0][i][2]
        quest_current += '</div><div class="questbottomleft">'
        quest_current += pastquests[0][i][3]
        quest_current += '</div></div>'
        quest_full += quest_current
    }
    quest_full += '</div>'
    questbox_turnpast.innerHTML = quest_full

    // Quadturn Quests (Past)
    quest_full = '<span class="small_icon collapse_button collapse_closed" onclick="collapse(\'quest_quadturnpast\');"></span><h3 class="collapse_header">Quadturn Quests (Past)</h3><div class="collapse_body" style="display:none;">'
    for (i in pastquests[1]) {
        quest_current = '<div class="struct questbox"><div class="questleft">'
        quest_current += pastquests[1][i][0]
        quest_current += '</div><div class="questright">'
        quest_current += make_claimed(pastquests[1][i][1])
        quest_current += '</div><div class="questbottom">Reward: '
        quest_current += pastquests[1][i][2]
        quest_current += '</div><div class="questbottomleft">'
        quest_current += pastquests[1][i][3]
        quest_current += '</div></div>'
        quest_full += quest_current
    }
    quest_full += '</div>'
    questbox_quadturnpast.innerHTML = quest_full

    // Full Quests (Past)
    quest_full = '<span class="small_icon collapse_button collapse_closed" onclick="collapse(\'quest_fullpast\');"></span><h3 class="collapse_header">Full Quests (Past)</h3><div class="collapse_body" style="display:none;">'
    for (i in pastquests[2]) {
        quest_current = '<div class="struct questbox"><div class="questleft">'
        quest_current += pastquests[2][i][0]
        quest_current += '</div><div class="questright">'
        quest_current += make_claimed(pastquests[2][i][1])
        quest_current += '</div><div class="questbottom">Reward: '
        quest_current += pastquests[2][i][2]
        quest_current += '</div></div>'
        quest_full += quest_current
    }
    quest_full += '</div>'
    questbox_fullpast.innerHTML = quest_full
}

waitForLang(quest_func)