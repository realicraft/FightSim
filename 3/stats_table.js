var typelist = ["typeless", "normal_type", "fire_type", "water_type", "elec_type", "plant_type", "ice_type", "light_type", "dark_type", "missingtype"]

var getPlus = function(input) {
    if (input[1] == 0) {return input[0].toString()}
    else {return input[0].toString() + "+" + input[1].toString()}
}

var stat_tables = ""
var stat_table = ""
for (var i in user_data["3"]) {
    stat_table = '<div class="player_table user_'
    stat_table += i.toLowerCase()
    stat_table += '"><span class="pt_level_contain"><p class="pt_level_upper">Level '
    stat_table += user_data["3"][i]["exp"][0]
    stat_table += '</p><p class="pt_level_lower">'
    stat_table += user_data["3"][i]["exp"][1]
    stat_table += '/'
    stat_table += user_data["3"][i]["exp"][2]
    stat_table += '</p></span><span style="position: relative; width: 100%; display: inline-block;"><span class="icon '
    stat_table += typelist[user_data["3"][i]["type"]]
    stat_table += ' type_icon" title="Type"></span></span><h2 class="username">' + i + '</h2><div class="meter_container"><div class="health_disp"><span class="icon '
    if (user_data["3"][i]["health"][0] > 50) {stat_table += 'health'}
    else if (user_data["3"][i]["health"][0] > 0) {stat_table += 'heart2'}
    else {stat_table += 'ko'}
    stat_table += '" style="position:absolute;left:0px;" title="Health"></span><span class="vat'
    if (user_data["3"][i]["health"][0] > 50) {}
    else if (user_data["3"][i]["health"][0] > 0) {stat_table += ' lowhp'}
    else {stat_table += ' kod'}
    stat_table += '">'
    stat_table += user_data["3"][i]["health"][0]
    stat_table += '</span><span class="lh" style="font-size: 25px;">/</span><span class="vab">'
    stat_table += user_data["3"][i]["health"][1]
    stat_table += '</span></div><div class="combat_disp"><span class="icon attack" style="position:absolute;left:0px;" title="Attack"></span><span class="vat">'
    stat_table += getPlus(user_data["3"][i]["attack"][0]) + "<br />(" + getPlus(user_data["3"][i]["attack"][1])
    stat_table += ')</span><span class="lh" style="font-size: 25px;">/</span><span class="vab">'
    stat_table += getPlus(user_data["3"][i]["defense"][0]) + "<br />(" + getPlus(user_data["3"][i]["defense"][1])
    stat_table += ')</span><span class="icon defense" style="position:absolute;right:0px;" title="Defense"></span></div><div class="kd_disp"><span class="icon swing" style="position:absolute;left:0px;" title="Kills"></span><span class="vat">'
    stat_table += user_data["3"][i]["kills"]
    stat_table += '</span><span class="lh" style="font-size: 25px;">/</span><span class="vab">'
    stat_table += user_data["3"][i]["deaths"]
    stat_table += '</span><span class="icon broken_shield" style="position:absolute;right:0px;" title="Deaths"></span></div></div>'
    if (user_data["3"][i]["effects"].length != 0) {
        stat_table += '<h3 style="margin: 0px;">Effects</h3><table class="pt_effects"><colgroup><col style="width:32px; background-color: #7f7f7f;"><col style="width:100%; background-color: #9f9f9f;"><col style="width:20px; background-color: #7f7f7f;"></colgroup><thead><tr style="font-size: 10px;"><th>Icon</th><th>Name</th><th>Turns</th></tr></thead><tbody>'
        for (var j of user_data["3"][i]["effects"]) {
            stat_table += '<tr><td><span class="icon '
            stat_table += effectlist[j[0]][1]
            stat_table += '"onmouseover="ttEffect('
            stat_table += j[0]
            stat_table += ');" onmouseout="nt();"></span></td><td>'
            stat_table += effectlist[j[0]][0]
            stat_table += '</td><td>'
            stat_table += j[1]
            stat_table += '</td></tr>'
        }
        stat_table += '</tbody></table>'
    }
    if (user_data["3"][i]["skills"].length != 0) {
        stat_table += '<h3 style="margin: 0px;">Skills</h3><table class="pt_skills"><colgroup><col style="width:32px; background-color: #7f7f7f;"><col style="width:100%; background-color: #9f9f9f;"><col style="width:20px; background-color: #7f7f7f;"><col style="width:30px; background-color: #9f9f9f;"></colgroup><thead><tr style="font-size: 10px;"><th>Icon</th><th>Name</th><th>Level</th><th>Exp.</th></tr></thead><tbody>'
        for (var k of user_data["3"][i]["skills"]) {
            stat_table += '<tr><td><span class="icon '
            stat_table += skilllist[k[0]][1]
            stat_table += '" title="Skill: '
            stat_table += skilllist[k[0]][0]
            stat_table += '"></span></td><td>'
            stat_table += skilllist[k[0]][0]
            stat_table += '</td><td>'
            stat_table += k[1]
            stat_table += '</td><td>'
            stat_table += k[2]
            stat_table += '%</td></tr>'
        }
        stat_table += '</tbody></table>'
    }
    stat_table += '<h3 style="margin: 0px;">Equipment</h3><span class="pt_equip">'
    for (var l of user_data["3"][i]["equips"].slice(0,7)) {
        stat_table += '<span class="icon '
        stat_table += equiplist[l][1]
        stat_table += '" onmouseover="ttEquip('
        stat_table += l
        stat_table += ');" onmouseout="nt();"></span>'
    }
    stat_table += '<span class="icon '
    stat_table += equiplist[user_data["3"][i]["equips"][7]][1]
    stat_table += '" onmouseover="ttEquip('
    stat_table += user_data["3"][i]["equips"][7]
    stat_table += ');" onmouseout="nt();" style="position:relative;"><span class="pt_stackcount">'
    stat_table += user_data["3"][i]["equips"][8]
    stat_table += '</span></span>'
    stat_table += '</span></div>'
    stat_tables += stat_table
}
var containEl = document.getElementById("stat_table_container")
containEl.innerHTML = stat_tables