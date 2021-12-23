var recipebox = document.getElementById("recipe-box")
var recipe_all = '<h2>Crafting</h2>'
var recipe_group = ""
var recipe_current = ""
var k = 0

var recipetypelist = [
    "craft_default",
    "craft_alchemy",
    "craft_smithing",
    "craft_smelting",
]

for (var i in recipelist) {
    recipe_group = '<div class="struct collapse" id="'
    recipe_group += i.toLowerCase().replace(" ","_")
    recipe_group += '"><span class="small_icon collapse_button collapse_closed" onclick="collapse(\''
    recipe_group += i.toLowerCase().replace(" ","_")
    recipe_group += '\');"></span><h3 class="collapse_header">'
    recipe_group += i
    recipe_group += '</h3><div class="collapse_body" style="display:none;">'
    for (var j in recipelist[i]) {
        recipe_current = '<div class="recipe_inner">'
        recipe_current += '<span class="icon ' + skilllist[recipelist[i][j][17]][1] + '"><span>' + recipelist[i][j][18] + '</span></span>'
        recipe_current += '<h4>' + recipelist[i][j][0] + '</h4>'
        if (recipelist[i][j][1] != "") {
            recipe_current += '<p>' + recipelist[i][j][1] + '</p>'
        }
        recipe_current += '<table><tr>'
        k = 0
        while (k<6) {
            recipe_current += "<td class='inv_item'>";
            if (recipelist[i][j][2+(k*2)] == 0) {}
            else {
                recipe_current += "<span class='icon ";
                recipe_current += equiplist[recipelist[i][j][2+(k*2)]][1];
                recipe_current += "' onmouseover='tt(";
                recipe_current += recipelist[i][j][2+(k*2)];
                recipe_current += ");' onmouseout='nt();'></span>";
            };
            if (recipelist[i][j][3+(k*2)] == 1) {}
            else {
                recipe_current += "<span>"
                recipe_current += recipelist[i][j][3+(k*2)]
                recipe_current += "</span>"
            };
            recipe_current += "</td>"
            k++
        }
        recipe_current += '<td class="inv_space" style="width:20px;"><span class="small_icon '
        recipe_current += recipetypelist[recipelist[i][j][14]];
        recipe_current += '"></span></td>'
        recipe_current += "<td class='inv_item'>";
            if (recipelist[i][j][15] == 0) {}
            else {
                recipe_current += "<span class='icon ";
                recipe_current += equiplist[recipelist[i][j][15]][1];
                recipe_current += "' onmouseover='tt(";
                recipe_current += recipelist[i][j][15];
                recipe_current += ");' onmouseout='nt();'></span>";
            };
            if (recipelist[i][j][16] == 1) {}
            else {
                recipe_current += "<span>"
                recipe_current += recipelist[i][j][16]
                recipe_current += "</span>"
            };
            recipe_current += "</td>"
        recipe_current += '</tr></table></div>'
        recipe_group += recipe_current
    }
    recipe_group += "</div></div>"
    recipe_all += recipe_group
}

recipebox.innerHTML = recipe_all

// <div class="struct" id="recipe-box">
// <h2>Crafting</h2>
// <div class="struct collapse" id="wood-tools">
//     <span class="small_icon collapse_button collapse_closed" onclick="collapse('wood-tools');"></span>
//     <h3 class="collapse_header">Wooden Tools</h3>
//     <div class="collapse_body">
//         <h4>Wooden Pickaxe</h4>
//         <table>
//             <tr>
//                 <td class="inv_item"></td>
//                 <td class="inv_item"></td>
//                 <td class="inv_item"></td>
//                 <td class="inv_item"></td>
//                 <td class="inv_item"></td>
//                 <td class="inv_item"></td>
//                 <td class="inv_space"></td>
//                 <td class="inv_item"></td>
//             </tr>
//         </table>
//     </div>
// </div>
// </div>