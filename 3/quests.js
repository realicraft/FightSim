var questbox_turn = document.getElementById("quest_turn")
var questbox_quadturn = document.getElementById("quest_quadturn")
var questbox_full = document.getElementById("quest_full")
var questbox_turnpast = document.getElementById("quest_turnpast")
var questbox_quadturnpast = document.getElementById("quest_quadturnpast")
var questbox_fullpast = document.getElementById("quest_fullpast")

var quests = [ // [quest, claimed, reward]
    ["Go Mining.", "Unclaimed", "25% Mining Exp", "51"],
    ["Go Digging.", "Unclaimed", "25% Digging Exp", "51"],
    ["Attack someone.", "Unclaimed", "3 Misc EXP", "51"],
    ["Repair a Structure.", "Unclaimed", "30% Construction Exp, 3 Stone", "48~51"],
    ["Go Chopping twice.", "Claimed by Byron", "35% Chopping Exp", "48~51"],
    ["Mine 2 Iron Ore.", "Claimed by Byron", "25% Mining Exp, 1 Coal", "48~51"],
    ["Die.", "Unclaimed", "5 Misc Exp, 4 Iron Ore"],
    ["Reach Proficient in any skill.", "Unclaimed", "4 Misc Exp"],
    ["Equip any accessory.", "Unclaimed", "2 Iron Bars"],
]

var pastquests = [ // same as quests inside, outside is turn, quadturn, full
    [
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
        ["Damage someone.", "Unclaimed", "1 Misc Exp", "42"],
    ],
    [
        ["Deal 20 damage total.", "Claimed by Byron", "10 HP, 1 Gold Bar, 2 Misc Exp", "44~47"],
        ["Harvest a flower.", "Unclaimed", "15% Gardening Exp", "44~47"],
        ["Mine 5 Stone.", "Unclaimed", "20% Mining Exp", "44~47"],
        ["Take 20 damage total.", "Claimed by TwilightSeleneMisty", "10 HP, 1 Iron Bar, 2 Misc Exp", "40~43"],
        ["Harvest a crop.", "Claimed by cheesy", "15% Farming Exp", "40~43"],
        ["Mine 3 Iron Ore.", "Unclaimed", "30% Mining Exp", "40~43"],
    ],
    [
        ["Use a thin-air weapon.", "Claimed by gilbert", "2 Misc Exp"],
        ["Kill someone.", "Claimed by Byron", "3 Misc Exp"],
        ["Complete a Structure.", "Claimed by Incendiary", "30% Construction Exp"],
        ["Equip any armor.", "Claimed by Byron", "1 Misc Exp, 1 Wooden Shield"],
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