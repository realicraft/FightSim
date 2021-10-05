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
    console.log(creativeRow)
    currentRow++
};

var invenListEl = document.getElementById("creative_inv");
invenListEl.innerHTML = creativeRows