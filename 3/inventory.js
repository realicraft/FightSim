/*
Valid 'NBT' data:
potion_eff: effect id, effect length (turns)
enchant: enchant id, enchant level
desc_append: string to append

Future 'NBT' data:
name_color: color as a string*/
// [id, count, {nbt_name: [nbt_conts]}]
var inventoryList = {
    "realicraft": [
        [43,1,{}],[243,1,{desc_append:["<br />2x Effect Candy<br />2x Skill Candy<br />2x Item Candy<br />1x Time Candy<br />1x Santa Hat<br />1x LTT Hoodie"]}],[99,6,{}],
         [0,1,{}],  [0,1,{}],[0,1,{}],
         [0,1,{}],  [0,1,{}],[0,1,{}],
         [0,1,{}],  [0,1,{}],[0,1,{}]
    ],
    "SausageMcSauce": [
        [240,1,{}],[244,1,{}],[0,1,{}],
          [0,1,{}],  [0,1,{}],[0,1,{}],
          [0,1,{}],  [0,1,{}],[0,1,{}],
          [0,1,{}],  [0,1,{}],[0,1,{}]
    ],
    "CatsUnited": [
        [240,1,{}],[93,8,{}],[0,1,{}],
          [0,1,{}], [0,1,{}],[0,1,{}],
          [0,1,{}], [0,1,{}],[0,1,{}],
          [0,1,{}], [0,1,{}],[0,1,{}]
    ],
    "Squirrelflight": [
        [240,1,{}],[245,1,{}],[0,1,{}],
          [0,1,{}],  [0,1,{}],[0,1,{}],
          [0,1,{}],  [0,1,{}],[0,1,{}],
          [0,1,{}],  [0,1,{}],[0,1,{}]
    ],
    "IncendiaryGaming": [
         [32,1,{}],[51,11,{}],[36,5,{}],
         [243,1,{desc_append:["<br />2x Effect Candy<br />2x Skill Candy<br />2x Item Candy<br />1x Time Candy<br />1x Santa Hat"]}],[246,1,{}], [46,3,{}],
          [0,1,{}],  [0,1,{}], [0,1,{}],
          [0,1,{}],  [0,1,{}], [0,1,{}]
    ],
    "Byron_Inc_TBG": [
        [40,1,{}],                  [25,1,{}],[0,1,{}],
         [0,1,{}],[207,1,{potion_eff:[10,1]}],[0,1,{}],
        [23,1,{}],[243,1,{desc_append:["<br />2x Effect Candy<br />2x Skill Candy<br />2x Item Candy<br />1x Time Candy<br />1x Santa Hat<br />1x LTT Hoodie"]}],[124,10,{}],
         [0,1,{}],                   [0,1,{}],[0,1,{}]
    ],
    "cheesyfriedeggs": [
         [35,3,{}], [38,1,{}], [46,4,{}],
         [47,5,{}], [10,1,{}],[143,1,{}],
         [44,2,{}],[243,1,{desc_append:["<br />2x Effect Candy<br />2x Skill Candy<br />1x Item Candy<br />1x Time Candy<br />1x Santa Hat<br />1x LTT Hoodie"]}],[247,1,{}],
        [35,10,{}],  [0,1,{}],  [0,1,{}]
    ],
    "solitare": [
        [237,1,{}], [73,1,{}], [50,5,{}],
         [49,2,{}],[187,1,{}],  [0,1,{}],
          [0,1,{}],[174,1,{}], [22,1,{}],
         [24,1,{}], [47,6,{}],[243,1,{desc_append:["<br />2x Effect Candy<br />7x Skill Candy<br />2x Item Candy<br />1x Time Candy<br />1x LTT Hoodie<br />5x Beetroot<br />5x Ripe Beetroot"]}]
    ],
    "Faressain": [
        [39,1,{}],[240,1,{}],[36,10,{}],
         [0,1,{}],  [0,1,{}],  [0,1,{}],
         [0,1,{}],  [0,1,{}],  [0,1,{}],
         [0,1,{}],  [0,1,{}],  [0,1,{}]
    ],
    "LeopardyLeaf": [
        [36,3,{}],[37,1,{}],[240,1,{}],
        [20,1,{}], [0,1,{}],  [0,1,{}],
         [0,1,{}], [0,1,{}],  [0,1,{}],
         [0,1,{}], [0,1,{}],  [0,1,{}]
    ],
    "gilbert_given_TBG": [
         [44,6,{}],                     [46,9,{}],[45,4,{}],
        [154,1,{}],                      [9,1,{}],[51,3,{}],
         [30,1,{}],                     [18,1,{}],[89,3,{}],
          [0,1,{}],[248,1,{desc_append:["2/50"]}], [0,1,{}]
    ],
    "TwilightSeleneMisty": [
         [92,1,{}],[130,1,{}],                                                        [72,1,{}],
        [144,1,{}],[ 45,3,{}],                                                        [23,1,{}],
         [31,1,{}],  [9,1,{}],                                                        [68,7,{}],
        [239,1,{}], [47,8,{}],[243,1,{desc_append:["<br />1x Item Candy<br />1x Skill Candy<br />1x Mystery Gift"]}]
    ],
};

var invenRows = "";
var invenRow = "";
var didFirstArg = false
var didSecondArg = false
for (var i in inventoryList) {
    invenRow = "<tr><td class='inv_user'>";
    invenRow += i;
    invenRow += "</td><td class='inv_space'></td>";
    for (var j of inventoryList[i]) {
        didFirstArg = false
        didSecondArg = false
        invenRow += "<td class='inv_item'>";
        if (j[0] == 0) {}
        else {
            invenRow += "<span class='icon ";
            if ("enchant" in j[2]) {invenRow += "enchanted "}
            invenRow += equiplist[j[0]][1];
            invenRow += "' onmouseover='tt(";
            invenRow += j[0];
            for (k in j[2]) { // check for first argument data (enchants)
                if (k == "enchant") {
                    if (!didFirstArg) {invenRow += ",\""}
                    else {invenRow += "<br />"}
                    didFirstArg = true
                    invenRow += enchantlist[j[2]["enchant"][0]][0] + " " + j[2]["enchant"][1]
                }
                else if (k == "potion_eff") {
                    if (!didFirstArg) {invenRow += ",\""}
                    else {invenRow += "<br />"}
                    didFirstArg = true
                    invenRow += effectlist[j[2]["potion_eff"][0]][0] + " (" + j[2]["potion_eff"][1] + " turn"
                    if (j[2]["potion_eff"][1] == 1) {} else {invenRow += "s"}
                    invenRow += ")"
                }
            }
            if (didFirstArg) {invenRow += "\""}
            else {invenRow += ",\"\""}
            for (k in j[2]) { // check for second argument data (description appends)
                if (k == "desc_append") {
                    if (!didSecondArg) {invenRow += ",\""}
                    didSecondArg = true
                    invenRow += j[2]["desc_append"][0]
                }
            }
            if (didSecondArg) {invenRow += "\""}
            else {invenRow += ",\"\""}
            invenRow += ");' onmouseout='nt();'></span>";
        };
        if (j[1] == 1) {}
        else {
            invenRow += "<span>"
            invenRow += j[1]
            invenRow += "</span>"
        };
        invenRow += "</td>"
    };
    invenRow += "</tr>"
    invenRows += invenRow
};

var invenListEl = document.getElementById("player_inv");
invenListEl.innerHTML = invenRows