var typelist = ["typeless", "normal_type", "fire_type", "water_type", "elec_type", "plant_type", "ice_type", "light_type", "dark_type", "missingtype"]
var user_data = {
    "realicraft":         {"type":0,"health": [62,100],"attack":["7+3","7+3"],"defense":     [5,5],"kills":1,"deaths":1,"skills":                                                       [[6,0,35]],"effects":       [],"equips":   [1,2,3,4,5,6,7,8,""],"exp":[0,1,10]},
    "SausageMcSauce":     {"type":0,"health": [84,100],"attack":["7+3","7+3"],"defense":     [5,5],"kills":1,"deaths":1,"skills":                                                               [],"effects":[[1,"*"]],"equips":   [1,2,3,4,5,6,7,8,""],"exp":[0,9,10]},
    "CatsUnited":         {"type":0,"health":[100,100],"attack":["7+3","7+3"],"defense":     [5,5],"kills":0,"deaths":3,"skills":                                                               [],"effects":[[1,"*"]],"equips":   [1,2,3,4,5,6,7,8,""],"exp":[0,0,10]},
    "Squrrelflight":      {"type":0,"health": [97,100],"attack":["7+3","7+3"],"defense":     [5,5],"kills":0,"deaths":1,"skills":                                                               [],"effects":[[1,"*"]],"equips":   [1,2,3,4,5,6,7,8,""],"exp":[0,0,10]},
    "IncendiaryGaming":   {"type":0,"health": [61,102],"attack":["8+3","7+3"],"defense":     [5,5],"kills":1,"deaths":1,"skills":                           [[7,3,128],[8,0,10],[4,0,30],[2,2,23]],"effects":       [],"equips":  [1,2,3,4,78,6,7,8,""],"exp":[2,1,30]},
    "Byron_Inc_TBG":      {"type":0,"health": [62,102],"attack":["7+3","7+3"],"defense":["10+1",5],"kills":1,"deaths":2,"skills":                          [[1,5,256],[4,0,50],[7,2,168],[8,1,40]],"effects":       [],"equips": [1,2,3,4,5,13,7,12,21],"exp":[2,9,30]},
    "cheesyfriedeggs":    {"type":0,"health": [91,100],"attack":["7+4","7+3"],"defense":     [5,5],"kills":0,"deaths":1,"skills":                            [[4,1,10],[1,2,54],[3,0,55],[5,0,65]],"effects":       [],"equips":   [1,2,3,4,9,6,7,8,""],"exp":[0,8,10]},
    "solitare":           {"type":0,"health": [86,100],"attack":["7+3","7+3"],"defense":     [5,5],"kills":0,"deaths":0,"skills":[[2,1,35],[5,0,30],[3,0,65],[1,1,25],[7,0,90],[10,0,10],[9,0,60]],"effects":       [],"equips":   [1,2,3,4,5,6,7,8,""],"exp":[1,3,20]},
    "Faressain":          {"type":0,"health": [82,100],"attack":["7+3","7+3"],"defense":     [5,5],"kills":0,"deaths":0,"skills":                                                               [],"effects":[[1,"*"]],"equips":   [1,2,3,4,5,6,7,8,""],"exp":[0,0,10]},
    "LeopardyLeaf":       {"type":0,"health": [81,100],"attack":["7+3","7+3"],"defense":     [5,5],"kills":0,"deaths":0,"skills":                                                       [[2,0,80]],"effects":[[1,"*"]],"equips":   [1,2,3,4,5,6,7,8,""],"exp":[0,2,10]},
    "gilbert_given_TBG":  {"type":0,"health":[100,100],"attack":["7+3","7+3"],"defense":     [5,5],"kills":0,"deaths":0,"skills":                                                       [[3,1,10]],"effects":[[1,"*"]],"equips":   [1,2,3,4,5,6,7,8,""],"exp":[0,4,10]},
    "TwilightSeleneMisty":{"type":0,"health": [83,100],"attack":["8+3","7+3"],"defense":     [6,5],"kills":0,"deaths":1,"skills":                                              [[3,0,85],[2,0,25]],"effects":       [],"equips":[1,2,3,4,30,127,7,8,""],"exp":[0,8,10]},
}

// <span class="pt_level_contain">
//     <p class="pt_level_upper">Level 1</p>
//     <p class="pt_level_lower">5/20</p>
// </span>
var stat_tables = ""
var stat_table = ""
for (var i in user_data) {
    stat_table = '<div class="player_table user_'
    stat_table += i.toLowerCase()
    stat_table += '"><span class="pt_level_contain"><p class="pt_level_upper">Level '
    stat_table += user_data[i]["exp"][0]
    stat_table += '</p><p class="pt_level_lower">'
    stat_table += user_data[i]["exp"][1]
    stat_table += '/'
    stat_table += user_data[i]["exp"][2]
    stat_table += '</p></span><span style="position: relative; width: 100%; display: inline-block;"><span class="icon '
    stat_table += typelist[user_data[i]["type"]]
    stat_table += ' type_icon"></span></span><h2 class="username">' + i + '</h2><div class="meter_container"><div class="health_disp"><span class="icon health" style="position:absolute;left:0px;"></span><span class="vat">'
    stat_table += user_data[i]["health"][0]
    stat_table += '</span><span class="vat lh" style="font-size: 25px;">/</span><span class="vab">'
    stat_table += user_data[i]["health"][1]
    stat_table += '</span></div><div class="combat_disp"><span class="icon attack" style="position:absolute;left:0px;"></span><span class="vat">'
    stat_table += user_data[i]["attack"][0] + " (" + user_data[i]["attack"][1]
    stat_table += ')</span><span class="vat lh" style="font-size: 25px;">/</span><span class="vab">'
    stat_table += user_data[i]["defense"][0] + " (" + user_data[i]["defense"][1]
    stat_table += ')</span><span class="icon defense" style="position:absolute;right:0px;"></span></div><div class="kd_disp"><span class="icon swing" style="position:absolute;left:0px;"></span><span class="vat">'
    stat_table += user_data[i]["kills"]
    stat_table += '</span><span class="vat lh" style="font-size: 25px;">/</span><span class="vab">'
    stat_table += user_data[i]["deaths"]
    stat_table += '</span><span class="icon broken_shield" style="position:absolute;right:0px;"></span></div></div>'
    if (user_data[i]["effects"].length != 0) {
        stat_table += '<h3 style="margin: 0px;">Effects</h3><table class="pt_effects"><colgroup><col style="width:32px; background-color: #7f7f7f;"><col style="width:100%; background-color: #9f9f9f;"><col style="width:20px; background-color: #7f7f7f;"></colgroup><thead><tr style="font-size: 10px;"><th>Icon</th><th>Name</th><th>Turns</th></tr></thead><tbody>'
        for (var j of user_data[i]["effects"]) {
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
    if (user_data[i]["skills"].length != 0) {
        stat_table += '<h3 style="margin: 0px;">Skills</h3><table class="pt_skills"><colgroup><col style="width:32px; background-color: #7f7f7f;"><col style="width:100%; background-color: #9f9f9f;"><col style="width:20px; background-color: #7f7f7f;"><col style="width:30px; background-color: #9f9f9f;"></colgroup><thead><tr style="font-size: 10px;"><th>Icon</th><th>Name</th><th>Level</th><th>Prof.</th></tr></thead><tbody>'
        for (var k of user_data[i]["skills"]) {
            stat_table += '<tr><td><span class="icon '
            stat_table += skilllist[k[0]][1]
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
    for (var l of user_data[i]["equips"].slice(0,7)) {
        stat_table += '<span class="icon '
        stat_table += equiplist[l][1]
        stat_table += '" onmouseover="ttEquip('
        stat_table += l
        stat_table += ');" onmouseout="nt();"></span>'
    }
    stat_table += '<span class="icon '
    stat_table += equiplist[user_data[i]["equips"][7]][1]
    stat_table += '" onmouseover="ttEquip('
    stat_table += user_data[i]["equips"][7]
    stat_table += ');" onmouseout="nt();" style="position:relative;"><span class="pt_stackcount">'
    stat_table += user_data[i]["equips"][8]
    stat_table += '</span></span>'
    stat_table += '</span></div>'
    stat_tables += stat_table
}
var containEl = document.getElementById("stat_table_container")
containEl.innerHTML = stat_tables

var tooltip = function(name, desc, source, bonus) {
    var tooltipBodyEl = document.getElementsByClassName("tooltip_body")[0];
    var tooltipNameEl = document.getElementsByClassName("tooltip_name")[0];
    var tooltipDescEl = document.getElementsByClassName("tooltip_desc")[0];
    var tooltipSrc2El = document.getElementsByClassName("tooltip_src2")[0];
    var tooltipBonusEl = document.getElementsByClassName("tooltip_bonus")[0];
    tooltipNameEl.innerHTML = name;
    tooltipDescEl.innerHTML = desc;
    tooltipSrc2El.innerHTML = source;
    tooltipBonusEl.innerHTML = bonus;
    tooltipBodyEl.setAttribute("style", "display: block;")
}
var ttEquip = function(id=0) {
    if ((id >= 1) & (id <= 8)) {}
    else {tooltip(equiplist[id][0], equiplist[id][2], equiplist[id][3], equiplist[id][4])}
}
var ttEffect = function(id=0) {
    tooltip(effectlist[id][0], effectlist[id][2], effectlist[id][3], effectlist[id][4])
}
var nt = function() {
    var tooltipBodyEl = document.getElementsByClassName("tooltip_body")[0];
    var tooltipNameEl = document.getElementsByClassName("tooltip_name")[0];
    var tooltipDescEl = document.getElementsByClassName("tooltip_desc")[0];
    var tooltipSrc2El = document.getElementsByClassName("tooltip_src2")[0];
    var tooltipBonusEl = document.getElementsByClassName("tooltip_bonus")[0];
    tooltipNameEl.innerHTML = "";
    tooltipDescEl.innerHTML = "";
    tooltipSrc2El.innerHTML = "";
    tooltipBonusEl.innerHTML = "";
    tooltipBodyEl.setAttribute("style", "display: none;")
}