var recipebox = document.getElementById("recipe-box")
var recipe_all = ''
var recipe_group = ""
var recipe_current = ""
var k = 0

var recipetypelist = [
    "craft_default",
    "craft_alchemy",
    "craft_smithing",
    "craft_smelting",
    "craft_meatpaste",
]

var makeRecipe = function(i, j) {
    out_recipe = '<div class="recipe_inner">'
    out_recipe += '<span class="icon ' + skilllist[recipelist[i][j][10]][1] + '"><span>' + recipelist[i][j][11] + '</span></span>'
    out_recipe += '<h4>' + recipelist[i][j][0] + '</h4>'
    if (recipelist[i][j][1] != "") {
        out_recipe += '<p>' + getTranslatedString(recipelist[i][j][1][0], recipelist[i][j][1][1]) + '</p>'
    }
    out_recipe += '<table><tr>'
    k = 0
    while (k<6) {
        out_recipe += "<td class='inv_item'>";
        if (recipelist[i][j][2+(k)][0] == 0) {}
        else {
            out_recipe += makeItem(recipelist[i][j][2+(k)][0], recipelist[i][j][2+(k)][1], recipelist[i][j][2+(k)][2], recipelist[i][j][2+(k)][3]);
        };
        if (recipelist[i][j][2+(k)][2] == 1) {}
        else {
            out_recipe += "<span>"
            out_recipe += recipelist[i][j][2+(k)][2]
            out_recipe += "</span>"
        };
        out_recipe += "</td>"
        k++
    }
    out_recipe += '<td class="inv_space" style="width:20px;"><span class="small_icon '
    out_recipe += recipetypelist[recipelist[i][j][8]];
    out_recipe += '"></span></td>'
    out_recipe += "<td class='inv_item'>";
        if (recipelist[i][j][9][0] == 0) {}
        else {
            out_recipe += makeItem(recipelist[i][j][9][0], recipelist[i][j][9][1], recipelist[i][j][9][2], recipelist[i][j][9][3]);
        };
        if (recipelist[i][j][9][2] == 1) {}
        else {
            out_recipe += "<span>"
            out_recipe += recipelist[i][j][9][2]
            out_recipe += "</span>"
        };
        out_recipe += "</td>"
    out_recipe += '</tr></table></div>'
    return out_recipe
}

var recipeFunc = function() {
    for (var i in recipelist) {
        recipe_group = '<div class="struct collapse" id="'
        recipe_group += i
        recipe_group += '"><span class="small_icon collapse_button collapse_closed" onclick="collapse(\''
        recipe_group += i
        recipe_group += '\');"></span><h3 class="collapse_header">'
        recipe_group += getTranslatedString("recipe.category." + i + ".name")
        recipe_group += '</h3><div class="collapse_body" style="display:none;">'
        for (var j in recipelist[i]) {
            recipe_current = makeRecipe(i, j);
            recipe_group += recipe_current
        }
        recipe_group += "</div></div>"
        recipe_all += recipe_group
    }
}

var findRecipies = function(id) {
    recipe_all = "";
    var recipefound;
    var recipesfound = 0;
    for (var i in recipelist) {
        recipefound = false;
        for (var j in recipelist[i]) {
            if ((recipelist[i][j][2][0] == id) || (recipelist[i][j][3][0] == id) || (recipelist[i][j][4][0] == id) || (recipelist[i][j][5][0] == id) || (recipelist[i][j][6][0] == id) || (recipelist[i][j][7][0] == id) || (recipelist[i][j][9][0] == id)) {
                if (!recipefound) {
                    recipe_group = '<div class="struct collapse" id="'
                    recipe_group += i
                    recipe_group += '"><span class="small_icon collapse_button collapse_closed" onclick="collapse(\''
                    recipe_group += i
                    recipe_group += '\');"></span><h3 class="collapse_header">'
                    recipe_group += getTranslatedString("recipe.category." + i + ".name")
                    recipe_group += '</h3><div class="collapse_body" style="display:none;">'
                    recipefound = true;
                }
                recipe_group += makeRecipe(i, j);
                recipesfound++;
            }
        }
        if (recipefound) {
            recipe_group += "</div></div>"
            recipe_all += recipe_group
        }
    }
    recipebox.innerHTML = "<h2>" +  getTranslatedString("header.crafting.found_recipes", {"fr":recipesfound}) + "</h2>" + recipe_all;
}

var final_recipe_func = function() {
    recipebox.innerHTML = "<h2>" +  getTranslatedString("header.crafting.crafting") + "</h2>" + recipe_all;
};

waitForLang(recipeFunc);
waitForLang(final_recipe_func);