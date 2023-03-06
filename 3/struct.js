var structFunc = function() {
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
            for (var l of inven[j]) {
                invenRow += "<td class='inv_item'>";
                if (l[0] == 0) {}
                else {
                    invenRow += makeItem(l[0], l[1], l[2], l[3])
                };
                if (l[2] == 1) {}
                else {
                    invenRow += "<span>"
                    invenRow += l[2]
                    invenRow += "</span>"
                };
                invenRow += "</td>"
            };
            invenRow += "</tr>"
            final_table += invenRow
        };
        i.innerHTML = final_table
    }
}
waitForLang(structFunc);