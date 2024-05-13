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
                currentfishRow += ' (' + fishRewardList[i][j][k][0] + ')<br />' + fishRewardList[i][j][k][2] + '/' + fishRewardList[i][j][k][3] + ' (' + ((fishRewardList[i][j][k][2]/fishRewardList[i][j][k][3])*100).toFixed(1) + '%)';
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

var levelBonusTable = function() {
    var headerEl = document.getElementById("skill_level_header");
    var textEl = document.getElementById("skill_level_text");
    var tableEl = document.getElementById("skill_level_table");
    headerEl.innerHTML = getTranslatedString("info.header.skill_bonuses");
    textEl.innerHTML = getTranslatedString("info.paragraph.skill_bonuses.1") + "<br />" + getTranslatedString("info.paragraph.skill_bonuses.2");
}

waitForLang(fishTable);
waitForLang(levelBonusTable);