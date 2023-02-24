var mobbox = document.getElementById("mob_box")
var curr_mobs = document.getElementById("current_mobs")
var mobs_all = ""
var mobs_group = ""
var cmobs_all = ""
var cmobs_group = ""

var getPlus = function(input) {
    if (input[1] == 0) {return input[0].toString()}
    else {return input[0].toString() + "+" + input[1].toString()}
}

var allmob_func = function() {
    for (var i of moblist.slice(1)) {
        mobs_group = '<div class="struct collapse" id="'
        mobs_group += i[0]
        mobs_group += '"><span class="small_icon collapse_button collapse_closed" onclick="collapse(\''
        mobs_group += i[0]
        mobs_group += '\');"></span><h3 class="collapse_header">'
        mobs_group += getTranslatedString("mob." + i[0] + ".name")
        mobs_group += '</h3><div class="collapse_body" style="display:none;">'
        mobs_group += '<div style="height:33px;"><div class="mob_health2"><span class="icon health" style="position:absolute;left:0px;" title="Health"></span><span class="vat">' + i[1] + '</span></div>'
        mobs_group += '<span class="mob_type2"><span class="icon ' + typelist[i[7]] + ' type_icon" title="Type"></span></span>'
        mobs_group += '<div class="mob_stats2"><span class="icon attack" style="position:absolute;left:0px;" title="Attack"></span><span class="vat">'
        mobs_group += getPlus(i[2]) + "<br />(" + getPlus(i[4])
        mobs_group += ')</span><span class="lh slash">/</span><span class="vab">'
        mobs_group += getPlus(i[3]) + "<br />(" + getPlus(i[5])
        mobs_group += ')</span><span class="icon defense" style="position:absolute;right:0px;" title="Defense"></span></div></div>'
        mobs_group += '<p style="margin-bottom:2px;margin-top:2px;">Drops:</p><table style="margin-top:2px;"><tr>'
        for (j of i[6]) {
            mobs_group += "<td class='inv_item'>";
            if (j[0] == 0) {}
            else {
                mobs_group += makeItem(j[0], j[1], j[2], j[3]);
            };
            if (j[2] == 1) {}
            else {
                mobs_group += "<span>"
                mobs_group += j[2]
                mobs_group += "</span>"
            };
            mobs_group += "</td>"
        }
        mobs_group += '</tr><tr>'
        for (k of i[6]) {
            mobs_group += '<td>'
            mobs_group += k[4]
            mobs_group += '</td>'
        }
        mobs_group += '</tr></table></div></div>'
        mobs_all += mobs_group
    }
    mobbox.innerHTML = mobs_all
}

var cmob_func = function() {
    for (var l of activeMobs) {
        cmobs_group = '<div class="struct cmob">'

        cmobs_group += '<div class="mob_name"><h2>'
        if (l[1]) {cmobs_group += "<span class='pad1'>" + getTranslatedString("mob." + moblist[l[0]][0] + ".name") + "</span>"}
        else {cmobs_group += getTranslatedString("mob." + moblist[l[0]][0] + ".name")}
        cmobs_group += '</h2><span class="mob_turn">' + l[2] + '</span><span class="mob_type"><span class="icon ' + typelist[moblist[l[0]][7]] + ' type_icon" title="Type"></span></span></div>'


        cmobs_group += '<div class="mob_health"><span class="icon '
        if (l[3][0] > (l[3][1]/2)) {cmobs_group += 'health'}
        else if (l[3][0] > 0) {cmobs_group += 'heart2'}
        else {cmobs_group += 'ko'}
        cmobs_group += '" style="position:absolute;left:0px;" title="Health"></span><span class="vat">' + l[3][0] + '</span><span class="lh slash">/</span><span class="vab">' + l[3][1] + '</span></div>'

        cmobs_group += '<div class="mob_stats"><span class="icon attack" style="position:absolute;left:0px;" title="Attack"></span><span class="vat">'
        cmobs_group += getPlus(l[4]) + "<br />(" + getPlus(moblist[l[0]][4])
        cmobs_group += ')</span><span class="lh slash">/</span><span class="vab">'
        cmobs_group += getPlus(l[5]) + "<br />(" + getPlus(moblist[l[0]][5])
        cmobs_group += ')</span><span class="icon defense" style="position:absolute;right:0px;" title="Defense"></span></div>'

        cmobs_group += '<div class="mob_kill_acc"><span class="icon swing" style="position:absolute;left:0px;" title="Kills"></span><span class="vat">'
        cmobs_group += l[6]
        cmobs_group += '</span><span class="lh slash pad1">/</span><span class="vab">'
        cmobs_group += l[7]
        cmobs_group += '</span><span class="icon accuracy" style="position:absolute;right:0px;" title="Deaths"></span></div>'

        cmobs_group += '<div class="mob_other">This section intentionally left blank.</div>'

        cmobs_group += '<div class="mob_equip">'
        cmobs_group += '<h3>Equipment</h3><table style="margin-top: 0px;margin-bottom: 0px;"><tr>'
        for (var m of l[8]) {
            cmobs_group += '<td class="inv_item">'
            cmobs_group += makeItem(m[0],m[1],m[2],m[3])
            cmobs_group += '</td>'
        }
        cmobs_group += '</tr></table></div>'

        cmobs_group += '<div class="mob_effect">'
        cmobs_group += '<h3>Effects</h3><table style="margin-top: 0px;margin-bottom: 0px;"><tr>'
        for (var n of l[9]) {
            if (n[0] != 0) {cmobs_group += '<td class="inv_item"><span class="icon ' + effectlist[n[0]][1] + '" onmouseover="ttEffect(' + n[0] + ');" onmouseout="nt();"></span><span class="pt_stackcount">' + n[1] + '</span></td>'}
            else {cmobs_group += '<td class="inv_item"></td>'}
        }
        cmobs_group += '</tr></table></div>'

        cmobs_group += '</div>'
        cmobs_all += cmobs_group

    }
    curr_mobs.innerHTML = cmobs_all
}

waitForLang(allmob_func)
waitForLang(cmob_func)