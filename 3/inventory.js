var inventoryList = {
    "realicraft":        [[43,1],[0,1],[0,1],[0,1],[0,1],[0,1],[0,1],[0,1],[0,1]],
    "SausageMcSausage":  [[0,1],[0,1],[0,1],[0,1],[0,1],[0,1],[0,1],[0,1],[0,1]],
    "CatsUnited":        [[0,1],[0,1],[0,1],[0,1],[0,1],[0,1],[0,1],[0,1],[0,1]],
    "Squrrelflight":     [[0,1],[0,1],[0,1],[0,1],[0,1],[0,1],[0,1],[0,1],[0,1]],
    "IncendiaryGaming":  [[32,1],[51,6],[36,4],[0,1],[0,1],[0,1],[0,1],[0,1],[0,1]],
    "Byron_Inc_TBG":     [[33,1],[34,1],[35,1],[40,1],[48,1],[0,1],[0,1],[0,1],[0,1]],
    "cheesyfriedeggs":   [[35,3],[38,1],[44,1],[47,5],[10,1],[0,1],[0,1],[0,1],[0,1]],
    "solitare":          [[36,1],[42,1],[44,2],[45,4],[0,1],[0,1],[0,1],[0,1],[0,1]],
    "Faressain":         [[39,1],[0,1],[0,1],[0,1],[0,1],[0,1],[0,1],[0,1],[0,1]],
    "LeopardyLeaf":      [[36,3],[37,1],[0,1],[0,1],[0,1],[0,1],[0,1],[0,1],[0,1]],
    "gilbert_given_TBG": [[44,3],[46,9],[45,6],[0,1],[0,1],[0,1],[0,1],[0,1],[0,1]]
};

var creativeRows = "";
var creativeRow = "";
for (var i in inventoryList) {
    creativeRow = "<tr><td class='inv_user'>";
    creativeRow += i;
    creativeRow += "</td><td class='inv_space'></td>";
    for (var j of inventoryList[i]) {
        creativeRow += "<td class='inv_item'>";
        if (j[0] == 0) {}
        else {
            creativeRow += "<span class='icon ";
            creativeRow += equiplist[j[0]][1];
            creativeRow += "' onmouseover='tt(";
            creativeRow += j[0];
            creativeRow += ");' onmouseout='nt();'></span>";
        };
        if (j[1] == 1) {}
        else {
            creativeRow += "<span>"
            creativeRow += j[1]
            creativeRow += "</span>"
        };
        creativeRow += "</td>"
    };
    creativeRow += "</tr>"
    creativeRows += creativeRow
};

var invenListEl = document.getElementById("player_inv");
invenListEl.innerHTML = creativeRows