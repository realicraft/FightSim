var questbox_turn = document.getElementById("quest_turn")
var questbox_quadturn = document.getElementById("quest_quadturn")
var questbox_full = document.getElementById("quest_full")
var questbox_turnpast = document.getElementById("quest_turnpast")
var questbox_quadturnpast = document.getElementById("quest_quadturnpast")
var questbox_fullpast = document.getElementById("quest_fullpast")

var quests = [ // [quest, claimed, reward]
    ["Go fishing.", "Unclaimed", "10% ??? Exp", "45"],
    ["Brew a potion.", "Unclaimed", "10% ??? Exp, 1 Bottle of Water", "45"],
    ["Attack a Structure.", "Unclaimed", "3 Misc EXP", "45"],
    ["Deal 20 damage total.", "Claimed by Byron", "10 HP, 1 Gold Bar, 2 Misc Exp", "44~47"],
    ["Harvest a flower.", "Unclaimed", "15% Gardening Exp", "44~47"],
    ["Mine 5 Stone.", "Unclaimed", "20% Mining Exp", "44~47"],
    ["Kill someone.", "Unclaimed", "3 Misc Exp"],
    ["Complete a Structure.", "Unclaimed", "30% Construction Exp"],
    ["Equip any accessory.", "Unclaimed", "2 Iron Bars"],
]

var pastquests = [ // same as quests inside, outside is turn, quadturn, full
    [
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
        ["Take 20 damage total.", "Claimed by TwilightSeleneMisty", "10 HP, 1 Iron Bar, 2 Misc Exp", "40~43"],
        ["Harvest a crop.", "Claimed by cheesy", "15% Farming Exp", "40~43"],
        ["Mine 3 Iron Ore.", "Unclaimed", "30% Mining Exp", "40~43"],
    ],
    [
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