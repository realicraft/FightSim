/*
Valid 'NBT' data:
potion_eff: effect id, effect length (turns)
enchant: enchant id, enchant level
*/
// [id, count, {nbt_name: [nbt_conts]}]
var inventoryList = {
    "realicraft": [
        [43,1,{}],[0,1,{}],[0,1,{}],
         [0,1,{}],[0,1,{}],[0,1,{}],
         [0,1,{}],[0,1,{}],[0,1,{}]
    ],
    "SausageMcSausage": [
        [0,1,{}],[0,1,{}],[0,1,{}],
        [0,1,{}],[0,1,{}],[0,1,{}],
        [0,1,{}],[0,1,{}],[0,1,{}]
    ],
    "CatsUnited": [
        [0,1,{}],[0,1,{}],[0,1,{}],
        [0,1,{}],[0,1,{}],[0,1,{}],
        [0,1,{}],[0,1,{}],[0,1,{}]
    ],
    "Squrrelflight": [
        [0,1,{}],[0,1,{}],[0,1,{}],
        [0,1,{}],[0,1,{}],[0,1,{}],
        [0,1,{}],[0,1,{}],[0,1,{}]
    ],
    "IncendiaryGaming": [
        [32,1,{}],[51,11,{}],[36,5,{}],
         [0,1,{}],  [0,1,{}], [0,1,{}],
         [0,1,{}],  [0,1,{}], [0,1,{}]
    ],
    "Byron_Inc_TBG": [
                          [40,1,{}], [74,3,{}],[127,1,{}],
                          [25,1,{}], [46,2,{}], [45,1,{}],
        [207,1,{potion_eff:[10,1]}],[149,1,{}], [51,3,{}]
    ],
    "cheesyfriedeggs": [
        [35,3,{}],[38,1,{}], [46,1,{}],
        [47,5,{}],[10,1,{}],[143,1,{}],
         [0,1,{}], [0,1,{}],  [0,1,{}]
    ],
    "solitare": [
         [36,3,{}], [42,1,{}], [44,2,{}],
         [45,5,{}], [72,1,{}], [51,2,{}],
        [187,1,{}],[216,3,{}], [22,1,{}]
    ],
    "Faressain": [
        [39,1,{}],[0,1,{}],[0,1,{}],
         [0,1,{}],[0,1,{}],[0,1,{}],
         [0,1,{}],[0,1,{}],[0,1,{}]
    ],
    "LeopardyLeaf": [
        [36,3,{}],[37,1,{}],[0,1,{}],
         [0,1,{}], [0,1,{}],[0,1,{}],
         [0,1,{}], [0,1,{}],[0,1,{}]
    ],
    "gilbert_given_TBG": [
         [44,6,{}],[46,8,{}],[45,3,{}],
        [154,1,{}], [9,1,{}],[51,3,{}],
         [30,1,{}], [0,1,{}], [0,1,{}]
    ],
    "TwilightSeleneMisty": [
         [92,1,{}],[130,1,{}],[72,1,{}],
        [144,1,{}],[ 45,3,{}],[23,1,{}],
         [31,1,{}],  [9,1,{}],[68,7,{}]
    ],
};

var invenRows = "";
var invenRow = "";
for (var i in inventoryList) {
    invenRow = "<tr><td class='inv_user'>";
    invenRow += i;
    invenRow += "</td><td class='inv_space'></td>";
    for (var j of inventoryList[i]) {
        invenRow += "<td class='inv_item'>";
        if (j[0] == 0) {}
        else {
            invenRow += "<span class='icon ";
            if ("enchant" in j[2]) {invenRow += "enchanted "}
            invenRow += equiplist[j[0]][1];
            invenRow += "' onmouseover='tt(";
            invenRow += j[0];
            for (k in j[2]) {
                if (k == "enchant") {invenRow += ",\"" + enchantlist[j[2]["enchant"][0]][0] + " " + j[2]["enchant"][1] + "\""}
                else if (k == "potion_eff") {
                    invenRow += ",\"" + effectlist[j[2]["potion_eff"][0]][0] + " (" + j[2]["potion_eff"][1] + " turn"
                    if (j[2]["potion_eff"][1] == 1) {} else {invenRow += "s"}
                    invenRow += ")\""
                }
            }
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