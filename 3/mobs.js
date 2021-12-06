var mobbox = document.getElementById("mob-box")
var mobs_all = ""
var mobs_group = ""
var k = 0

for (var i of moblist) {
    mobs_group = '<div class="struct collapse" id="'
    mobs_group += i[0].toLowerCase().replace(" ","_")
    mobs_group += '"><span class="small_icon collapse_button collapse_closed" onclick="collapse(\''
    mobs_group += i[0].toLowerCase().replace(" ","_")
    mobs_group += '\');"></span><h3 class="collapse_header">'
    mobs_group += i[0]
    mobs_group += '</h3><div class="collapse_body" style="display:none;">'
    mobs_group += '<p>Health: ' + i[1] + '<br />'
    mobs_group += 'Attack: ' + i[2][0] + '+' + i[2][1] + '<br />'
    mobs_group += 'Defense: ' + i[3][0] + '+' + i[3][1] + '</p><p style="margin-bottom:2px;">Drops:</p><table style="margin-top:2px;"><tr>'
    for (j of i[4]) {
        mobs_group += "<td class='inv_item'>";
        if (j[0] == 0) {}
        else {
            mobs_group += "<span class='icon ";
            mobs_group += equiplist[j[0]][1];
            mobs_group += "' onmouseover='tt(";
            mobs_group += j[0];
            mobs_group += ");' onmouseout='nt();'></span>";
        };
        if (j[1] == 1) {}
        else {
            mobs_group += "<span>"
            mobs_group += j[1]
            mobs_group += "</span>"
        };
        mobs_group += "</td>"
    }
    mobs_group += '</tr><tr>'
    for (k of i[4]) {
        mobs_group += '<td>'
        mobs_group += k[2]
        mobs_group += '</td>'
    }
    mobs_group += '</tr></table></div></div>'
    mobs_all += mobs_group
}

mobbox.innerHTML = mobs_all

// <div class="struct collapse" id="cow">
//     <span class="small_icon collapse_button collapse_closed" onclick="collapse('cow');"></span>
//     <h3 class="collapse_header">Cow</h3>
//     <div class="collapse_body">
//         <p>Health: 15</p>
//         <p>Attack: 0+0</p>
//         <p>Defense: 1+0</p>
//         <p>Drops:</p>
//         <table>
//             <tr>
//                 <td class="inv_item">item&count</td>
//                 <td class="inv_item"></td>
//                 <td class="inv_item"></td>
//                 <td class="inv_item"></td>
//                 <td class="inv_item"></td>
//                 <td class="inv_item"></td>
//                 <td class="inv_item"></td>
//                 <td class="inv_item"></td>
//                 <td class="inv_item"></td>
//             </tr><tr>
//                 <td>chance</td>
//                 <td></td>
//                 <td></td>
//                 <td></td>
//                 <td></td>
//                 <td></td>
//                 <td></td>
//                 <td></td>
//                 <td></td>
//             </tr>
//         </table>
//     </div>
// </div>