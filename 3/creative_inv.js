var creativeRows = "";
var creativeRow = "";
var rowCount = Math.ceil(equiplist.length/9)
var currentRow = 0
var currentCol = 0
var remainItems = equiplist.length - ((rowCount-1)*9)
while (currentRow < rowCount) {
    creativeRow = "<tr>"
    currentCol = 0
    while (currentCol < 9) {
        creativeRow += "<td class='inv_item'>";
        if ((currentRow*9)+currentCol >= equiplist.length) {}
        else {
            creativeRow += "<span class='icon ";
            creativeRow += equiplist[(currentRow*9)+currentCol][1];
            creativeRow += "' onmouseover='tt(";
            creativeRow += (currentRow*9)+currentCol;
            creativeRow += ");' onmouseout='nt();'></span>";
            creativeRow += "<span>"
            creativeRow += (currentRow*9)+currentCol
            creativeRow += "</span>"
        }
        creativeRow += "</td>"
        currentCol++
    };
    creativeRow += "</tr>"
    creativeRows += creativeRow
    currentRow++
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