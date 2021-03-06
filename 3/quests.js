var questbox_turn = document.getElementById("quest_turn")
var questbox_quadturn = document.getElementById("quest_quadturn")
var questbox_full = document.getElementById("quest_full")
var questbox_rep = document.getElementById("quest_rep")
var questbox_turnpast = document.getElementById("quest_turnpast")
var questbox_quadturnpast = document.getElementById("quest_quadturnpast")
var questbox_fullpast = document.getElementById("quest_fullpast")

var quests = [ // [quest, claimed, reward, turn]
    ["Be at Turret 3 by the end of the Turn.", "Unclaimed (can be claimed by multiple people)", "A Prize", "72"],
    ["Deal type-aligned damage.", "Unclaimed", "", "72"],
    ["Interact with an NPC.", "Unclaimed", "", "72"],
    ["Cause a new item to be added to the data.", "Unclaimed", "2 of that item", "72~75"],
    ["Equip any armor.", "Unclaimed", "0.8 Indirect Defense", "72~75"],
    ["Craft 5 unique items.", "Unclaimed", "350% Crafting", "72~75"],
    ["Talk to Morshu.", "Unclaimed", "2 Bombs, 7 Misc EXP"],
    ["Equip a Golden Food.", "Unclaimed", "3 Gold Bars, 150% Farming"],
    ["Equip a Sticker.", "Unclaimed", "Orb Sticker"],
]

var repquests = [ // [quest, note, [[username, req, rewards, comp], ...], goal, div height]
    ["Harvest Crops.", "This is a repeatable quest, meaning you can complete it multiple times!<br />After the big goal is completed, the quest will be removed.",
        [
            ["reali", "1 Crop", "1 Misc EXP", "1/1"],
            ["S.&nbsp;McSaus", "1 Crop", "1 Misc EXP", "0/1"],
            ["Cats.", "1 Crop", "1 Misc EXP", "0/1"],
            ["Squirrelflight", "1 Crop", "1 Misc EXP", "0/1"],
            ["Incendiary", "1 Crop", "1 Misc EXP", "0/1"],
            ["Byron", "5 Crops", "5 Misc EXP", "0/6"],
            ["cheesy", "6 Crops", "6 Misc EXP", "1/6"],
            ["solitare", "2 Crops", "2 Misc EXP", "0/2"],
            ["Fares", "1 Crop", "1 Misc EXP", "0/1"],
            ["Leopardy", "1 Crop", "1 Misc EXP", "0/1"],
            ["gilbert", "1 Crop", "1 Misc EXP", "0/1"],
            ["Twilight", "3 Crops", "3 Misc EXP", "0/3"],
            ["Luigi", "1 Crop", "1 Misc EXP", "0/1"],
            /*["Kitty", "1 Crop", "1 Misc EXP", "0/1"],*/
            ["Savvy", "1 Crop", "1 Misc EXP", "0/1"],
            ["Bobby", "1 Crop", "1 Misc EXP", "0/1"],
            ["Tony", "1 Crop", "1 Misc EXP", "0/1"],
        ], "75 Harvests (29/75)", 60
    ],
    ["Make Wiki edits.", "The edits need to be significant in some way; fixing a typo won't count.",
        [
            ["reali", "Ineligible", "N/A", "N/A"],
            ["S.&nbsp;McSause", "10 Edits", "1 Skill Candy", "0/10"],
            ["Cats.", "10 Edits", "1 Skill Candy", "0/10"],
            ["Squirrelflight", "10 Edits", "1 Skill Candy", "0/10"],
            ["Incendiary", "10 Edits", "1 Skill Candy", "0/10"],
            ["Byron", "10 Edits", "1 Skill Candy", "5/10"],
            ["cheesy", "10 Edits", "1 Skill Candy", "0/10"],
            ["solitare", "10 Edits", "1 Skill Candy", "0/10"],
            ["Fares", "10 Edits", "1 Skill Candy", "0/10"],
            ["Leopardy", "10 Edits", "1 Skill Candy", "0/10"],
            ["gilbert", "10 Edits", "1 Skill Candy", "0/10"],
            ["Twilight", "10 Edits", "1 Skill Candy", "0/10"],
            ["Luigi", "10 Edits", "1 Skill Candy", "0/10"],
            /*["Kitty", "10 Edits", "1 Skill Candy", "0/10"],*/
            ["Savvy", "10 Edits", "1 Skill Candy", "0/10"],
            ["Bobby", "10 Edits", "1 Skill Candy", "0/10"],
            ["Tony", "10 Edits", "1 Skill Candy", "5/10"],
        ], "500 Edits (3/500)", 40
    ],
]

var pastquests = [ // same as quests inside, outside is turn, quadturn, full
    [
        ["Plant a crop or flower.", "Unclaimed", "2 Fertilizer", "71"],
        ["Cook something.", "Claimed by Byron", "Tray of Cookies", "71"],
        ["Use a current or former Mystery Skill.", "Claimed by Byron", "500% in that skill", "71"],
        ["Use a Disposable Phone.", "Claimed by realicraft", "2 Disposable Phones", "70"],
        ["Cook something.", "Unclaimed", "Tray of Cookies", "70"],
        ["Use a current or former Mystery Skill.", "Unclaimed", "1 Random Potion, 1 Random Fish, 2 Clay", "70"],
        ["Use a Disposable Phone.", "Claimed by realicraft", "2 Disposable Phones", "69"],
        ["Block an attack.", "Claimed by realicraft", "+0.2 Direct Defense", "69"],
        ["Use a current or former Mystery Skill.", "Unclaimed", "1 Random Potion, 1 Random Fish, 2 Clay", "69"],
        ["Carve something.", "Unclaimed", "60% Carving Exp", "68"],
        ["Craft 2 items.", "Claimed by TonyBrown148", "50% Crafting Exp, 1 Coal", "68"],
        ["Obtain an item.", "Claimed by TonyBrown148", "1 Item Candy", "68"],
        ["Fight a mob.", "Unclaimed", "1 Gold Sword", "67"],
        ["Do some Pottery.", "Unclaimed", "10 Misc EXP", "67"],
        ["Obtain a Sticker.", "Unclaimed", "1 Knife Sticker", "67"],
        ["Fight another player.", "Unclaimed", "1 Iron Sword", "66"],
        ["Go Gathering.", "Unclaimed", "1 Contact Card (Dry)", "66"],
        ["Obtain a Sticker.", "Unclaimed", "1 Bow Sticker", "66"],
        ["Fight a mob.", "Unclaimed", "2 Meat Paste", "65"],
        ["Go Fishing.", "Unclaimed", "1 Contact Card (Wet)", "65"],
        ["Obtain a Sticker.", "Unclaimed", "1 Bow Sticker", "65"],
        ["Use \"smeckledorf\" in your post.", "Claimed by Tony, Byron, Theta", "1 Bottle o' Enchanting (can be claimed by multiple people)", "64"],
        ["Go Fishing.", "Unclaimed", "1 Contact Card (Wet)", "64"],
        ["Obtain a Scroll.", "Unclaimed", "1 Scroll (Runes 20, 5)", "64"],
        ["Go Mining for Electrum.", "Claimed by Incendiary", "2 Disposable Phones, 2 Misc EXP", "63"],
        ["Go Gathering.", "Claimed by reali", "1 Contact Card (Dry)", "63"],
        ["Obtain a Sticker.", "Unclaimed", "1 Scroll (Runes 1, 4)", "63"],
        ["Go Mining for Electrum.", "Claimed by Byron", "2 Disposable Phones, 3 Misc EXP", "62"],
        ["Go Fishing.", "Unclaimed", "1 Contact Card (Wet)", "62"],
        ["Buy a scroll.", "Unclaimed", "1 Scroll (Runes 1, 3)", "62"],
        ["Go Mining for Electrum.", "Claimed by gilbert", "2 Disposable Phones, 4 Misc EXP", "61"],
        ["Go Fishing.", "Unclaimed", "1 Contact Card (Wet)", "61"],
        ["Mint a coin or decicoin.", "Unclaimed", "1 Coin", "61"],
        ["Go Mining for Electrum.", "Claimed by cheesy", "2 Disposable Phones, 5 Misc EXP", "60"],
        ["Go Mining for Electrum.", "Claimed by reali", "2 Disposable Phones, 5 Misc EXP", "60"],
        ["Go Mining for Electrum.", "Unclaimed", "2 Disposable Phones, 5 Misc EXP", "60"],
        ["Go Fishing.", "Claimed by Reali", "40% Fishing Exp", "59"],
        ["Make a food.", "Unclaimed", "25% Cooking Exp, 2 Dough", "59"],
        ["Move three items.", "Claimed by Byron", "3 Misc EXP", "59"],
        ["Deal damage to a mob.", "Claimed by Byron", "5 HP, 1 Misc EXP", "58"],
        ["Go Chopping.", "Claimed by Byron", "40% Chopping Exp", "58"],
        ["Make a Chestplate.", "Unclaimed", "Leather Helmet", "58"],
        ["Deal damage to a player.", "Claimed by Byron", "5 HP, 1 Misc EXP", "57"],
        ["Go Fishing.", "Claimed by solitare", "40% Fishing Exp", "57"],
        ["Make a shield.", "Claimed by solitare", "3 Misc EXP", "57"],
        ["Go Gathering.", "Claimed by Byron", "40% Gathering Exp", "56"],
        ["Kill a mob.", "Claimed by Byron", "2 Misc EXP", "56"],
        ["Make a weapon.", "Unclaimed", "10 HP, 2 Misc EXP", "56"],
        ["Use a Candy.", "Claimed by solitare", "2 Misc EXP, 1 Copper Bar", "55"],
        ["Go Digging.", "Unclaimed", "3 Gravel, 35% Digging Exp", "55"],
        ["Start a Potion.", "Unclaimed", "40% Alchemy Exp", "55"],
        ["Use a Candy.", "Claimed by gilbert", "2 Misc EXP", "54"],
        ["Go Chopping.", "Unclaimed", "1 Log, 30% Chopping Exp", "54"],
        ["Make 10 edits to the wiki.", "Unclaimed", "4 Misc EXP, 1 Item Candy", "54"],
        ["Use a Candy.", "Claimed by Byron", "1 Misc EXP", "53"],
        ["Obtain a Stick.", "Unclaimed", "1 Stick, 5% Chopping Exp", "53"],
        ["Craft an item.", "Unclaimed", "40% Crafting Exp", "53"],
        ["Hang a Stocking.", "Claimed by Byron", "1 Effect Candy", "52"],
        ["Harvest a crop.", "Claimed by TwilightSeleneMisty", "1 Skill Candy", "52"],
        ["Obtain an item.", "Claimed by TwilightSeleneMisty", "1 Item Candy", "52"],
        ["Go Mining.", "Claimed by Byron", "25% Mining Exp", "51"],
        ["Go Digging.", "Unclaimed", "25% Digging Exp", "51"],
        ["Attack someone.", "Unclaimed", "3 Misc EXP", "51"],
        ["Start a potion.", "Unclaimed", "30% Alchemy Exp", "50"],
        ["Damage a mob.", "Claimed by Byron", "2 Misc EXP", "50"],
        ["Carve something.", "Unclaimed", "30% Carving Exp", "50"],
        ["Harvest a flower.", "Unclaimed", "30% Gardening Exp", "49"],
        ["Level up a skill.", "Claimed by Byron", "2 Misc EXP", "49"],
        ["Go Fishing.", "Claimed by solitare", "30% Fishing Exp, 1 Goldfish", "49"],
        ["Harvest 2 crops.", "Unclaimed", "30% Farming Exp", "48"],
        ["Craft a tool.", "Unclaimed", "20% Crafting Exp, 1 Gold Bar", "48"],
        ["Make only one action total.", "Claimed by gilbert", "5 Misc EXP, 1 Iron Sword", "48"],
        ["Plant a crop.", "Unclaimed", "10% Farming Exp", "47"],
        ["Craft a weapon.", "Claimed by solitare", "20% Crafting Exp, 1 Iron Bar", "47"],
        ["Cook something.", "Claimed by Byron", "10% Cooking Exp, 1 Dough", "47"],
        ["Plant a flower.", "Claimed by Byron", "10% Gardening Exp", "46"],
        ["Craft 2 items.", "Unclaimed", "20% Crafting Exp, 1 Coal", "46"],
        ["Chop a tree.", "Claimed by Byron", "10% Chopping Exp, 1 Orange", "46"],
        ["Go fishing.", "Claimed by solitare", "10% ??? Exp", "45"],
        ["Brew a potion.", "Unclaimed", "10% ??? Exp, 1 Bottle of Water", "45"],
        ["Attack a Structure.", "Unclaimed", "3 Misc EXP", "45"],
        ["Go digging.", "Unclaimed", "10% Digging Exp", "44"],
        ["Gather something.", "Claimed by Byron", "10% Gathering Exp, 1 Rock", "44"],
        ["Craft 2 items.", "Claimed by TwilightSeleneMisty", "1 Chair, 1 Misc EXP", "44"],
        ["Go mining.", "Claimed by solitare", "10% Mining Exp, 1 Coal", "43"],
        ["Chop a tree.", "Claimed by TwilightSeleneMisty", "10% Chopping Exp", "43"],
        ["Cook something.", "Unclaimed", "1 Apple", "43"],
        ["Plant a flower.", "Claimed by solitare", "10% Gardening Exp", "42"],
        ["Dig something up.", "Claimed by solitare", "1 Sand", "42"],
        ["Damage someone.", "Unclaimed", "1 Misc EXP", "42"],
    ],
    [
        ["Create a Structure.", "Claimed by Byron", "Stone Hammer", "68~71"],
        ["Die twice.", "Unclaimed", "Regen Potion", "68~71"],
        ["Obtain a Carrot-based item.", "Claimed by realicraft", "200% Farming, 200% Cooking, 200% Gathering, 3 Iron Bars", "68~71"],
        ["Plant a flower.", "Unclaimed", "100% Gardening Exp", "64~67"],
        ["Plant Wheat.", "Claimed by Byron", "110% Farming Exp", "64~67"],
        ["Equip a Helmet or Chestplate.", "Unclaimed", "4 Misc EXP", "64~67"],
        ["Use a Disposable Phone.", "Claimed by Byron", "1 Electrum Bar, 5 Misc EXP", "60~63"],
        ["Make an 8-Leaf Clover.", "Unclaimed", "1 Bottle o' Enchanting,", "60~63"],
        ["Cause a new item to be made.", "Unclaimed", "2 Misc EXP", "60~63"],
        ["Create a Structure.", "Claimed by Incendiary", "30% Construction Exp, 3 Planks", "52~55"],
        ["Go Digging twice.", "Unclaimed", "40% Digging Exp", "52~55"],
        ["Deal 10 damage.", "Unclaimed", "3 Misc EXP, 1 Rock", "52~55"],
        ["Repair a Structure.", "Unclaimed", "30% Construction Exp, 3 Stone", "48~51"],
        ["Go Chopping twice.", "Claimed by Byron", "35% Chopping Exp", "48~51"],
        ["Mine 2 Iron Ore.", "Claimed by Byron", "25% Mining Exp, 1 Coal", "48~51"],
        ["Deal 20 damage total.", "Claimed by Byron", "10 HP, 1 Gold Bar, 2 Misc EXP", "44~47"],
        ["Harvest a flower.", "Unclaimed", "15% Gardening Exp", "44~47"],
        ["Mine 5 Stone.", "Unclaimed", "20% Mining Exp", "44~47"],
        ["Take 20 damage total.", "Claimed by TwilightSeleneMisty", "10 HP, 1 Iron Bar, 2 Misc EXP", "40~43"],
        ["Harvest a crop.", "Claimed by cheesy", "15% Farming Exp", "40~43"],
        ["Mine 3 Iron Ore.", "Unclaimed", "30% Mining Exp", "40~43"],
    ],
    [
        ["Recruit an ally or summon.", "Byron_Inc_TBG", "1 Max HP Upgrade"],
        ["Attack a Structure.", "Claimed by Theta", "1 Indirect Attack"],
        ["Reach Proficient in any skill.", "Claimed by cheesy", "4 Misc EXP"],
        ["Obtain 2 Stickers.", "Claimed by gilbert", "3 Misc EXP, 1 Sticker Pack"],
        ["Buy a scroll.", "Claimed by realicraft", "1 Dollar Bill"],
        ["Equip any chestplate.", "Claimed by gilbert", "Leather Leggings"],
        ["Equip any accessory.", "Claimed by Byron", "2 Iron Bars"],
        ["Die.", "Claimed by gilbert", "5 Misc EXP, 4 Iron Ore"],
        ["Use a thin-air weapon.", "Claimed by gilbert", "2 Misc EXP"],
        ["Kill someone.", "Claimed by Byron", "3 Misc EXP"],
        ["Complete a Structure.", "Claimed by Incendiary", "30% Construction Exp"],
        ["Equip any armor.", "Claimed by Byron", "1 Misc EXP, 1 Wooden Shield"],
    ],
]

var quest_full = ""
var quest_current = ""

// Turn Quests
quest_full = '<h2>Turn Quests</h2>'
for (i in quests.slice(0,3)) {
    i = parseInt(i)
    quest_current = '<div class="struct questbox"><div class="questleft">'
    quest_current += quests[i][0]
    quest_current += '</div><div class="questright">'
    quest_current += quests[i][1]
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
    quest_current += quests[i+3][0]
    quest_current += '</div><div class="questright">'
    quest_current += quests[i+3][1]
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
    quest_current += quests[i+6][0]
    quest_current += '</div><div class="questright">'
    quest_current += quests[i+6][1]
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
    quest_current += repquests[i][0]
    quest_current += '</div><div class="repquestmid">'
    quest_current += repquests[i][1]
    quest_current += '</div><div style="height:' + repquests[i][4] + 'px;"></div>'
    var l = 6
    for (var j = 0; j < Math.ceil(repquests[i][2].length/6); j++) {
        quest_current += '<table class="repquesttable"><tr><th>User</th>'
        if ((j+1)*6 > repquests[i][2].length) {l = repquests[i][2].length % 6}
        for (k in repquests[i][2].slice(0, l)) {quest_current += '<th>' + repquests[i][2][parseInt(k)+(j*6)][0] + '</th>'}
        quest_current += '<th>User</th></tr><th>Req.</th>'
        for (k in repquests[i][2].slice(0, l)) {quest_current += '<td>' + repquests[i][2][parseInt(k)+(j*6)][1] + '</td>'}
        quest_current += '<th>Req.</th></tr><tr><th>Reward</th>'
        for (k in repquests[i][2].slice(0, l)) {quest_current += '<td>' + repquests[i][2][parseInt(k)+(j*6)][2] + '</td>'}
        quest_current += '<th>Reward</th></tr><tr><th>Comp.</th>'
        for (k in repquests[i][2].slice(0, l)) {quest_current += '<td>' + repquests[i][2][parseInt(k)+(j*6)][3] + '</td>'}
        quest_current += '<th>Comp.</th></tr></table>'
        
    }
    quest_current += '<div class="repquestbottom">Goal: <b>' + repquests[i][3] + '</b></div>'
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
    quest_current += pastquests[0][i][1]
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
    quest_current += pastquests[1][i][1]
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
    quest_current += pastquests[2][i][1]
    quest_current += '</div><div class="questbottom">Reward: '
    quest_current += pastquests[2][i][2]
    quest_current += '</div></div>'
    quest_full += quest_current
}
quest_full += '</div>'
questbox_fullpast.innerHTML = quest_full