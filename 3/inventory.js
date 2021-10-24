var inventoryList = {
    "realicraft":          [[43,1],  [0,1], [0,1],  [0,1],  [0,1],  [0,1],  [0,1],  [0,1], [0,1]],
    "SausageMcSausage":    [ [0,1],  [0,1], [0,1],  [0,1],  [0,1],  [0,1],  [0,1],  [0,1], [0,1]],
    "CatsUnited":          [ [0,1],  [0,1], [0,1],  [0,1],  [0,1],  [0,1],  [0,1],  [0,1], [0,1]],
    "Squrrelflight":       [ [0,1],  [0,1], [0,1],  [0,1],  [0,1],  [0,1],  [0,1],  [0,1], [0,1]],
    "IncendiaryGaming":    [[32,1],[51,11],[36,5],  [0,1],  [0,1],  [0,1],  [0,1],  [0,1], [0,1]],
    "Byron_Inc_TBG":       [[33,1], [34,1],[40,1], [48,1],[124,2], [74,3], [71,1], [51,4],[36,2]],
    "cheesyfriedeggs":     [[35,3], [38,1],[46,1], [47,5], [10,1],[143,1],[167,2],[168,1], [0,1]],
    "solitare":            [[36,3], [42,1],[44,2], [45,3], [49,3],[125,2], [51,5], [47,6], [0,1]],
    "Faressain":           [[39,1],  [0,1], [0,1],  [0,1],  [0,1],  [0,1],  [0,1],  [0,1], [0,1]],
    "LeopardyLeaf":        [[36,3], [37,1], [0,1],  [0,1],  [0,1],  [0,1],  [0,1],  [0,1], [0,1]],
    "gilbert_given_TBG":   [[44,3], [46,7],[45,5],[154,1],  [0,1],  [0,1],  [0,1],  [0,1], [0,1]],
    "TwilightSeleneMisty": [[92,1],[130,1],[72,1],[144,1], [45,3], [23,1], [31,1],  [9,1],[68,2]],
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
            invenRow += equiplist[j[0]][1];
            invenRow += "' onmouseover='tt(";
            invenRow += j[0];
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