var gardenFunc = function() {
    var listEl = document.getElementById("crop_list");
    var cropListRow = "";
    var cropListRows = "<tr class='small_head'><th>Crop</th><th>Norm.</th><th>Ripe</th><th>Gold</th></tr>";

    for (i in croplist) {
        cropListRow = "<tr>";
        cropListRow += "<td>" + getTranslatedString("crop." + croplist[i][0] + ".name") + "</td>";
        cropListRow += "<td class='inv_item'>" + makeItem(croplist[i][2],0,1,{}) + "</td>";
        if (croplist[i][1]) {cropListRow += "<td class='inv_item'>" + makeItem(croplist[i][3],0,1,{}) + "</td>"}
        else {cropListRow += "<td class='inv_item'>" + makeItem(548,1,1,{}) + "</td>"};
        cropListRow += "<td class='inv_item'>" + makeItem(croplist[i][4],0,1,{}) + "</td>";
        cropListRow += "</tr>";
        cropListRows += cropListRow;
    }

    listEl.innerHTML = cropListRows;
};

waitForLang(gardenFunc);