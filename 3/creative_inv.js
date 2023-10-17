var creativeRows = "";
var creativeRow = "<tr>";
var numItems = 0

for (i in equiplist) {
    for (j in equiplist[i]) {
        numItems++;
    }
}
console.log(numItems)

var rowCount = Math.ceil(numItems/9)
var currentCol = 0
for (k in equiplist) {
    for (l in equiplist[k]) {
        var compId = "0";
        creativeRow += "<td class='inv_item'>";
        creativeRow += makeItem(k, l, 1, {}, true);
        creativeRow += "<span";
        if (equiplist[k].length == 1) {compId = k}
        else {compId = k + ":" + l};
        if (parseInt(compId.length) >= 6) {creativeRow += " style='font-family:\"FightSim 6\";font-size:6px;bottom:1px;'"};
        creativeRow += ">";
        creativeRow += compId;
        creativeRow += "</span>";
        creativeRow += "</td>";
        currentCol++;
        if (currentCol == 9) {
            currentCol = 0;
            creativeRow += "</tr>";
            creativeRows += creativeRow;
            creativeRow = "<tr>";
        };
    };
};
if (currentCol != 0) {
    while (currentCol < 9) {
        creativeRow += "<td class='inv_item'></td>";
        currentCol++;
    }
    creativeRow += "</tr>";
    creativeRows += creativeRow;
    creativeRow = "<tr>";
};

var invenListEl = document.getElementById("creative_inv");
invenListEl.innerHTML = creativeRows

var ett = ttEffect

var effectRows = "";
var effectRow = "";
var effectRowCount = Math.ceil(effectlist.length/9)
var currentEffectRow = 0
var currentEffectCol = 0
var remainEffects = effectlist.length - ((effectRowCount-1)*9)
while (currentEffectRow < effectRowCount) {
    effectRow = "<tr>"
    currentEffectCol = 0
    while (currentEffectCol < 9) {
        effectRow += "<td class='inv_item'>";
        if ((currentEffectRow*9)+currentEffectCol >= effectlist.length) {}
        else {
            effectRow += "<span class='icon ";
            effectRow += effectlist[(currentEffectRow*9)+currentEffectCol][1];
            effectRow += "' onmouseover='ett(";
            effectRow += (currentEffectRow*9)+currentEffectCol;
            effectRow += ");' onmouseout='nt();'></span>";
            effectRow += "<span>"
            effectRow += (currentEffectRow*9)+currentEffectCol
            effectRow += "</span>"
        }
        effectRow += "</td>"
        currentEffectCol++
    };
    effectRow += "</tr>"
    effectRows += effectRow
    currentEffectRow++
};

var skillListEl = document.getElementById("creative_skill_inv");
skillListEl.innerHTML = effectRows