var fishTable = function() {
    var headerEl = document.getElementById("fishing_header");
    var textEl = document.getElementById("fishing_text");
    var tableEl = document.getElementById("fish_pool_table");
    headerEl.innerHTML = getTranslatedString("info.header.fishing_items");
    textEl.innerHTML = getTranslatedString("info.paragraph.fishing.1") + "<br />" + getTranslatedString("info.paragraph.fishing.2");

    var fishTableCont = '<table class="fish_pool_table" id="fish_pool_table">';
    var currentfishRow = '';
    var doSpacer = false;
    for (var i in fishRewardList) {
        currentfishRow = '';
        if (doSpacer) {currentfishRow += '<tr style="background-color: transparent;height: 10px;border: none;"></tr>'}
        else {doSpacer = true;}
        currentfishRow += '<tr><th colspan="6">' + getTranslatedString('info.fishing.' + i) + '</tr>';
        for (var j in fishRewardList[i]) {
            currentfishRow += '<tr>';
            var l = 0;
            for (var k in fishRewardList[i][j]) {
                currentfishRow += '<td>'
                if (fishRewardList[i][j][k][0] == 385) {currentfishRow += '<span class="info-hover" data-info-title="Used Disposable Phone Count" data-info-desc="The chance of catching a phone goes up the more phones are used (and down the more are caught.) The formula for this is floor(sqrt(phones_used)).<br /><br />The current value is as follows:<br />floor(sqrt(<b>11</b>))<br />floor(<b>3.317</b>)<br /><b>3</b>" id="info-used-phone" onmouseover="info(\'info-used-phone\');" onmouseout="noinfo();">Used Disp. Phone</span><br />'}
                else {currentfishRow += equiplist[fishRewardList[i][j][k][0]][fishRewardList[i][j][k][1]][0]};
                currentfishRow += ' (' + fishRewardList[i][j][k][0] + ')<br />' + fishRewardList[i][j][k][2] + '/' + fishRewardList[i][j][k][3] + ' (' + (fishRewardList[i][j][k][2]/fishRewardList[i][j][k][3]).toFixed(1) + ')%';
                currentfishRow += '</td>';
                l++;
            };
            while (l<6) {
                currentfishRow += '<td></td>';
                l++;
            }
            currentfishRow += '</tr>';
        };
        fishTableCont += currentfishRow;
    };
    fishTableCont += '</table>';
    
    tableEl.innerHTML = fishTableCont;
}

waitForLang(fishTable);

/*
<table class="fish_pool_table" id="fish_pool_table">
    <tr><th colspan="6">Junk</th></tr>
    <tr>
        <td>Old Boot (184)<br />1/7 (14.3%)</td>
        <td>Wad of String<br />(186)<br />1/7 (14.3%)</td>
        <td>Seaweed (392)<br />2/7 (28.6%)</td>
        <td><span class="info-hover" data-info-title="Used Disposable Phone Count" data-info-desc="The chance of catching a phone goes up the more phones are used (and down the more are caught.) The formula for this is floor(sqrt(phones_used)).<br /><br />The current value is as follows:<br />floor(sqrt(<b>11</b>))<br />floor(<b>3.317</b>)<br /><b>3</b>" id="info-used-phone" onmouseover="info('info-used-phone');" onmouseout="noinfo();">Used Disp. Phone</span><br />(385)<br />3/7 (42.9%)</td>
        <td></td>
        <td></td>
    </tr>
    <tr style="background-color: transparent;height: 10px;border: none;"></tr>
*/