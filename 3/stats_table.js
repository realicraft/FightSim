var typelist = ["typeless", "normal_type", "fire_type", "water_type", "elec_type", "plant_type", "ice_type", "light_type", "dark_type", "missingtype"]
var effectlist = [ //[name, css class for icon]
    ["None", "iconless"],
    ["AFK", "afk"],
    ["On Fire", "on_fire"],
    ["Frozen", "frozen"]
]
var skilllist = [ //[name, css class for icon]
    ["None", "iconless"],
    ["Gardening", "gardening"],
    ["Mining", "mining"],
    ["Chopping", "chopping"],
    ["Crafting", "crafting"],
    ["Carving", "carving"],
    ["Cooking", "cooking"],
    ["Construction", "construction"],
    ["Gathering", "gathering"]
]
var user_data = {
    "realicraft":{"type":0,"health":[95,100],"attack":[10,10],"defense":[5,5],"kills":1,"deaths":1,"skills":[[6,0,25]],"effects":[]},
    "SausageMcSauce":{"type":0,"health":[84,100],"attack":[10,10],"defense":[5,5],"kills":1,"deaths":1,"skills":[],"effects":[[1,"*"]]},
    "CatsUnited":{"type":0,"health":[100,100],"attack":[10,10],"defense":[5,5],"kills":0,"deaths":3,"skills":[],"effects":[[1,"*"]]},
    "Squrrelflight":{"type":0,"health":[97,100],"attack":[10,10],"defense":[5,5],"kills":0,"deaths":1,"skills":[],"effects":[[1,"*"]]},
    "IncendiaryGaming":{"type":0,"health":[70,100],"attack":[10,10],"defense":[5,5],"kills":1,"deaths":1,"skills":[[7,1,78],[8,0,10]],"effects":[]},
    "Byron_Inc_TBG":{"type":0,"health":[78,100],"attack":[10,10],"defense":[5,5],"kills":1,"deaths":2,"skills":[[1,3,86]],"effects":[]},
    "cheesyfriedeggs":{"type":0,"health":[91,100],"attack":[10,10],"defense":[5,5],"kills":0,"deaths":1,"skills":[[4,0,90],[1,0,77],[3,0,55]],"effects":[]},
    "solitare":{"type":0,"health":[86,100],"attack":[10,10],"defense":[5,5],"kills":0,"deaths":0,"skills":[[2,0,60],[5,0,30],[3,0,65],[1,0,65]],"effects":[]},
    "Faressain":{"type":0,"health":[82,100],"attack":[10,10],"defense":[5,5],"kills":0,"deaths":0,"skills":[],"effects":[[1,"*"]]},
    "LeopardyLeaf":{"type":0,"health":[81,100],"attack":[10,10],"defense":[5,5],"kills":0,"deaths":0,"skills":[[2,0,80]],"effects":[[1,"*"]]}
}
var stat_tables = ""
var stat_table = ""
for (var i in user_data) {
    stat_table = '<div class="player_table user_'
    stat_table += i.toLowerCase()
    stat_table += '"><span style="position: relative; width: 100%; display: inline-block;"><span class="icon '
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
            stat_table += '"></td><td>'
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
            stat_table += '"></td><td>'
            stat_table += skilllist[k[0]][0]
            stat_table += '</td><td>'
            stat_table += k[1]
            stat_table += '</td><td>'
            stat_table += k[2]
            stat_table += '%</td></tr>'
        }
        stat_table += '</tbody></table>'
    }
    stat_table += "</div>"
    stat_tables += stat_table
}
var containEl = document.getElementById("stat_table_container")
containEl.innerHTML = stat_tables