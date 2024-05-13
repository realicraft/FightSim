var getPlus = function(input) {
    if (input[1] == 0) {return input[0].toString()}
    else if (input[1] < 0) {return input[0].toString() + "-" + Math.abs(input[1]).toString()}
    else {return input[0].toString() + "+" + input[1].toString()}
}

var makeRestOfStickerRow = function(i,m,n) {
    o = user_data["3"][i]["stickers"][m][n]
    if (o == 0) {o = 330}
    return '<td class="inv_item"><span class="icon ' + equiplist[o][0][1] + '" onmouseover="ttEquip(' + o + ');" onmouseout="nt();"></span></td>'
}
var makeRestOfUpgradeRow = function(num,i,o,n) {
    q = user_data["3"][i]["summon/ally"][num][o][n]
    if (q == 0) {q = 448}
    return '<td class="inv_item"><span class="icon ' + equiplist[q][0][1] + '" onmouseover="ttEquip(' + q + ');" onmouseout="nt();"></span></td>'
}

var getLevelData = function(exp) {
    var expNext = 10;
    var level = 0;
    while (exp >= expNext) {
        level++;
        exp -= expNext;
        expNext += 10 * (Math.floor(level/10) + 1);
    }
    return [level, exp, expNext];
}

var tableFunc = function() {
    var stat_tables = ""
    var stat_table = ""
    for (var i in user_data["3"]) { // single table
        var levelData = getLevelData(user_data["3"][i]["exp"])
        // setup
        stat_table = '<div class="player_table user_' + user_data["3"][i]["css_class"].toLowerCase() + '">'
        // level bar
        stat_table += '<span class="pt_level_contain"><p class="pt_level_upper">Level ' + levelData[0] + '</p>'
        stat_table += '<div class="pt_level_bar_outer"><div class="pt_level_bar_inner" style="width:calc(calc(100% * ('
        stat_table += levelData[1] + ' / ' + levelData[2]
        stat_table += ')) - 2px);"></div></div><p class="pt_level_lower">'
        stat_table += levelData[1] + '/' + levelData[2]
        stat_table += '</p></span>'
        // type
        stat_table += '<span class="type_icon_contain"><span class="icon ' + typelist[user_data["3"][i]["type"]] + ' type_icon" title="Type"></span></span>'
        // header
        stat_table += '<h2 class="username"'
        if (user_data["3"][i]["do_pad"]) {stat_table += ' style="padding-right:1px;"'}
        stat_table += '>'
        // name
        stat_table += i
         // username
        if (!(user_data["3"][i]["un_same"])) {stat_table += '<p class="lower_username">' + user_data["3"][i]["username"] + '</p>'}
        // phone number
        stat_table += '<span class="pn_contain"><span class="small_icon phone_small" style="vertical-align:middle;"></span>' + user_data["3"][i]["pn"] + '</span>'
        // location
        stat_table += '<span class="locate_contain">' + user_data["3"][i]["location"] + '<span class="small_icon location" style="vertical-align:middle;"></span></span>'
        // end header
        stat_table += '</h2>'
        // health
        stat_table += '<div class="meter_container"><div class="health_disp"><span class="icon '
        if (user_data["3"][i]["health"][0] > 50) {stat_table += 'health'}
        else if (user_data["3"][i]["health"][0] > 0) {stat_table += 'heart2'}
        else {stat_table += 'ko'}
        stat_table += '" style="position:absolute;left:0px;" title="Health"></span><span class="vat'
        if (user_data["3"][i]["health"][0] > 50) {}
        else if (user_data["3"][i]["health"][0] > 0) {stat_table += ' lowhp'}
        else {stat_table += ' kod'}
        stat_table += '">' + user_data["3"][i]["health"][0] + '</span><span class="lh slash">/</span><span class="vab">' + user_data["3"][i]["health"][1] + '</span></div>'
        // attack
        stat_table += '<div class="combat_disp"><span class="icon attack" style="position:absolute;left:0px;" title="Attack"></span><span class="vat">'
        stat_table += getPlus(user_data["3"][i]["attack"][0]) + "<br />(" + getPlus(user_data["3"][i]["attack"][1])
        stat_table += ')</span>'
        // slash
        stat_table += '<span class="lh slash">/</span>'
        // defense
        stat_table += '<span class="vab">'
        stat_table += getPlus(user_data["3"][i]["defense"][0]) + "<br />(" + getPlus(user_data["3"][i]["defense"][1])
        stat_table += ')</span><span class="icon defense" style="position:absolute;right:0px;" title="Defense"></span></div>'
        // kills
        stat_table += '<div class="kd_disp"><span class="icon swing" style="position:absolute;left:0px;" title="Kills"></span><span class="vat">'
        stat_table += user_data["3"][i]["kills"]
        stat_table += '</span>'
        // slash
        stat_table += '<span class="lh slash pad1">/</span>'
        // deaths
        stat_table += '<span class="vab">'
        stat_table += user_data["3"][i]["deaths"]
        stat_table += '</span><span class="icon broken_shield" style="position:absolute;right:0px;" title="Deaths"></span></div></div>'
        // rpg stats
        stat_table += '<table class="rpg_stat_container"><tbody>'
        stat_table += '<tr><td>STR: ' + user_data["3"][i]["rpg_stats"][0] + '</td><td>INT: ' + user_data["3"][i]["rpg_stats"][1] + '</td><td>AGI: ' + user_data["3"][i]["rpg_stats"][2] + '</td></tr>'
        stat_table += '<tr><td>CHR: ' + user_data["3"][i]["rpg_stats"][3] + '</td><td>DEX: ' + user_data["3"][i]["rpg_stats"][4] + '</td><td>CON: ' + user_data["3"][i]["rpg_stats"][5] + '</td></tr>'
        stat_table += '</tbody></table>'
        // effects
        if (user_data["3"][i]["effects"].length != 0) {
            stat_table += '<h3 style="margin: 0px;">Effects</h3><table class="pt_effects"><colgroup><col class="col1"><col class="col2"><col class="col3"></colgroup><thead><tr style="font-size: 10px;"><th>Icon</th><th>Name</th><th>Turns</th></tr></thead><tbody>'
            for (var j of user_data["3"][i]["effects"]) {
                stat_table += '<tr><td><span class="icon ' + effectlist[j[0]][1] + '"onmouseover="ttEffect(' + j[0] + ');" onmouseout="nt();"></span></td>'
                stat_table += '<td>' + getTranslatedString(effectlist[j[0]][0]) + '</td>'
                stat_table += '<td>' + j[1] + '</td></tr>'
            }
            stat_table += '</tbody></table>'
        }
        // skills
        if (user_data["3"][i]["skills"].length != 0) {
            stat_table += '<h3 style="margin: 0px;">Skills</h3><table class="pt_skills"><colgroup><col class="col1"><col class="col2"><col class="col3"><col class="col4"></colgroup><thead><tr style="font-size: 10px;"><th>Icon</th><th>Name</th><th>Level</th><th>Exp.</th></tr></thead><tbody>'
            for (var k of user_data["3"][i]["skills"]) {
                stat_table += '<tr><td class="' + (k[1] >= 12 ? "grandmastered " : (k[1] >= 10 ? "mastered " : (k[1] >= 5 ? "proficient " : ""))) + '"><span class="icon ' + skilllist[k[0]][1] + '" title="Skill: ' + skilllist[k[0]][0] + '"></span></td>'
                stat_table += '<td>' + skilllist[k[0]][0] + '</td>'
                stat_table += '<td>' + k[1] + '</td>'
                stat_table += '<td>' + k[2] + '%</td></tr>'
            }
            stat_table += '</tbody></table>'
        }
        // equipment
        stat_table += '<h3 style="margin: 0px;padding-right:1px;">Equipment</h3><table style="margin-top: 0px;"><tr>'
        for (var l = 0; l < 10; l++) { // 10 is the number of equipment slots
            it = user_data["3"][i]["equips"][l];
            stat_table += "<td class='inv_item'>";
            if (it[0] == 0) {}
            else {stat_table += makeItem(it[0], it[1], it[2], it[3])};
            if (it[2] == 1) {}
            else {stat_table += "<span>" + it[2] + "</span>"};
            stat_table += "</td>";
            if (l == 4) {stat_table += "</tr><tr>"}; // after the fifth item, start a new row
        }
        stat_table += '</tr></table>'
        // stickers
        stat_table += '<h3 style="margin: 0px; margin-top: 5px;">Stickers</h3><table style="margin-top: 0px;margin-bottom: 0px;">'
        for (var m in user_data["3"][i]["stickers"]) {
            stat_table += "<tr>"
            if (m == 0) {stat_table += '<td class="inv_item"><span class="icon ' + equiplist[309][0][1] + '" onmouseover="ttEquip(309);" onmouseout="nt();"></span></td>'}
            else {stat_table += '<td class="inv_item"><span class="icon ' + equiplist[310][0][1] + '" onmouseover="ttEquip(310);" onmouseout="nt();"></span></td>'}
            for (var n in user_data["3"][i]["stickers"][m]) {stat_table += makeRestOfStickerRow(i,m,n)}
            stat_table += "</tr>"
        }
        stat_table += '</table>'
        // ally
        if (user_data["3"][i]["summon/ally"][0]) {
            stat_table += '<h3 style="margin: 0px; margin-top: 5px;">' + user_data["3"][i]["summon/ally"][1] + '</h3>'
            stat_table += '<div class="summon_div">'
            stat_table += '<h4 style="margin: 0px; margin-top: 5px;">' + user_data["3"][i]["summon/ally"][2] + '</h4>'
            stat_table += '<div class="summon_div_inner"><span class="icon '
            if (user_data["3"][i]["summon/ally"][3][0] > (user_data["3"][i]["summon/ally"][3][1]/2)) {stat_table += 'health'} // health
            else if (user_data["3"][i]["summon/ally"][3][0] > 0) {stat_table += 'heart2'}
            else {stat_table += 'ko'}
            stat_table += '" style="position:absolute;left:0px;" title="Health"></span><span class="vat'
            if (user_data["3"][i]["summon/ally"][3][0] > (user_data["3"][i]["summon/ally"][3][1]/2)) {}
            else if (user_data["3"][i]["summon/ally"][3][0] > 0) {stat_table += ' lowhp'}
            else {stat_table += ' kod'}
            stat_table += '">' + user_data["3"][i]["summon/ally"][3][0] + '</span><span class="lh slash pad1">/</span><span class="vab">' + user_data["3"][i]["summon/ally"][3][1] + '</span></div>'
            stat_table += '<div class="summon_div_inner combat_summon_div_inner"><span class="icon attack" style="position:absolute;left:0px;" title="Attack"></span><span class="icon defense" style="position:absolute;right:0px;" title="Defense"></span><span class="vat">' + getPlus(user_data["3"][i]["summon/ally"][3][2]) + '<br />(' + getPlus(user_data["3"][i]["summon/ally"][3][3]) + ')</span><span class="lh slash pad1">/</span><span class="vab">' + getPlus(user_data["3"][i]["summon/ally"][3][4]) + '<br />(' + getPlus(user_data["3"][i]["summon/ally"][3][4]) + ')</span></div>'
            stat_table += '<div class="summon_div_inner"><span class="icon kill" style="position:absolute;left:0px;" title="Kills"></span><span class="icon death" style="position:absolute;right:0px;" title="Deaths"></span><span class="vat">' + user_data["3"][i]["summon/ally"][3][6] + '</span><span class="lh slash pad1">/</span><span class="vab">' + user_data["3"][i]["summon/ally"][3][7] + '</span></div>'
            stat_table += '<div class="summon_div_inner table_summon_div_inner"><h4 style="margin: 0px; margin-top: 5px; padding-right: 1px;">' + user_data["3"][i]["summon/ally"][1] + ' Upgrades</h4><table style="margin-top: 0px;margin-bottom: 0px;">'
            for (var o in user_data["3"][i]["summon/ally"][4]) {
                stat_table += "<tr>"
                for (var p in user_data["3"][i]["summon/ally"][4][o]) {stat_table += makeRestOfUpgradeRow(4,i,o,p)}
                stat_table += "</tr>"
            }
            stat_table += '</table><h4 style="margin: 0px; margin-top: 5px;">Player Upgrades</h4><table style="margin-top: 0px;margin-bottom: 0px;">'
            for (var s in user_data["3"][i]["summon/ally"][5]) {
                stat_table += "<tr>"
                for (var t in user_data["3"][i]["summon/ally"][5][s]) {stat_table += makeRestOfUpgradeRow(5,i,s,t)}
                stat_table += "</tr>"
            }
            stat_table += '</table><span style="height:6px;display:inline-block"></span></div>'
            stat_table += '</div>'
        }
        // end outer div
        stat_table += '</div>'
        // add to all tables
        stat_tables += stat_table
    }
    // add stat tables to html
    var containEl = document.getElementById("stat_table_container")
    containEl.innerHTML = stat_tables
}

waitForLang(tableFunc);