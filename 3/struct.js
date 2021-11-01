var inven_els = document.getElementsByClassName("store_room")
var inven = ""
var final_table = ""
var invenRow = "";

for (var i of inven_els) {
    final_table = ""
    inven = JSON.parse(i.dataset.inven)
    inven = inven["items"]
    for (var j in inven) {
        invenRow = "<tr>";
        for (var k of inven[j]) {
            invenRow += "<td class='inv_item'>";
            if (k[0] == 0) {}
            else {
                invenRow += "<span class='icon ";
                invenRow += equiplist[k[0]][1];
                invenRow += "' onmouseover='tt(";
                invenRow += k[0];
                invenRow += ");' onmouseout='nt();'></span>";
            };
            if (k[1] == 1) {}
            else {
                invenRow += "<span>"
                invenRow += k[1]
                invenRow += "</span>"
            };
            invenRow += "</td>"
        };
        invenRow += "</tr>"
        final_table += invenRow
    };
    i.innerHTML = final_table
}