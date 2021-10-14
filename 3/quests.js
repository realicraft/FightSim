var questbox_turn = document.getElementById("quest_turn")
var questbox_quadturn = document.getElementById("quest_quadturn")
var questbox_full = document.getElementById("quest_full")
var questbox_turnpast = document.getElementById("quest_turnpast")
var questbox_quadturnpast = document.getElementById("quest_quadturnpast")
var questbox_fullpast = document.getElementById("quest_fullpast")

var quests = [ // [quest, claimed, reward]
    ["Plant a flower.", "Unclaimed", "10% Gardening Exp"],
    ["Dig something up.", "Unclaimed", "1 Sand"],
    ["Damage someone.", "Unclaimed", "5 HP"],
    ["Take 20 damage total.", "Unclaimed", "20 HP, 1 Iron Bar"],
    ["Harvest a crop.", "Unclaimed", "15% Farming Exp"],
    ["Mine 3 Iron Ore.", "Unclaimed", "30% Mining Exp"],
    ["Kill someone.", "Unclaimed", "10 HP"],
    ["Complete a Structure.", "Unclaimed", "30% Construction Exp"],
    ["Equip any armor.", "Unclaimed", "5 HP, 1 Wooden Shield"],
]

var pastquests = [ // same as quests inside, outside is turn, quadturn, full
    [
        
    ],
    [
        
    ],
    [
        
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
    quest_current += '</div></div>'
    quest_full += quest_current
}
questbox_quadturn.innerHTML = quest_full

// Full Quests
quest_full = '<h2>Full Quests</h2>'
for (i in quests.slice(0,3)) {
    i = parseInt(i)
    quest_current = '<div class="struct questbox"><div class="questleft">'
    quest_current += quests[i+3][0]
    quest_current += '</div><div class="questright">'
    quest_current += quests[i+3][1]
    quest_current += '</div><div class="questbottom">Reward: '
    quest_current += quests[i+3][2]
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