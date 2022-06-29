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
                invenRow += makeItem(k[0], k[1], k[2], k[3])
            };
            if (k[2] == 1) {}
            else {
                invenRow += "<span>"
                invenRow += k[2]
                invenRow += "</span>"
            };
            invenRow += "</td>"
        };
        invenRow += "</tr>"
        final_table += invenRow
    };
    i.innerHTML = final_table
}