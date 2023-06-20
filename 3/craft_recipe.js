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

var makeCraftRecipe = function(i, j, recilist) {
    var out_recipe = '<div class="recipe_inner">'
    out_recipe += '<span class="icon ' + skilllist[recilist[i][j][10]][1] + '"><span>' + recilist[i][j][11] + '</span></span>'
    out_recipe += '<h4>' + recilist[i][j][0] + '</h4>'
    if (recilist[i][j][1] != "") {
        out_recipe += '<p>' + getTranslatedString(recilist[i][j][1][0], recilist[i][j][1][1]) + '</p>'
    }
    out_recipe += '<table><tr>'
    k = 0
    while (k<6) {
        out_recipe += "<td class='inv_item'>";
        if (recilist[i][j][2+(k)][0] == 0) {}
        else {
            out_recipe += makeItem(recilist[i][j][2+(k)][0], recilist[i][j][2+(k)][1], recilist[i][j][2+(k)][2], recilist[i][j][2+(k)][3]);
        };
        if (recilist[i][j][2+(k)][2] == 1) {}
        else {
            out_recipe += "<span>"
            out_recipe += recilist[i][j][2+(k)][2]
            out_recipe += "</span>"
        };
        out_recipe += "</td>"
        k++
    }
    out_recipe += '<td class="inv_space" style="width:20px;"><span class="small_icon '
    out_recipe += recipetypelist[recilist[i][j][8]];
    out_recipe += '"></span></td>'
    out_recipe += "<td class='inv_item'>";
        if (recilist[i][j][9][0] == 0) {}
        else {
            out_recipe += makeItem(recilist[i][j][9][0], recilist[i][j][9][1], recilist[i][j][9][2], recilist[i][j][9][3]);
        };
        if (recilist[i][j][9][2] == 1) {}
        else {
            out_recipe += "<span>"
            out_recipe += recilist[i][j][9][2]
            out_recipe += "</span>"
        };
        out_recipe += "</td>"
    out_recipe += '</tr></table></div>'
    return out_recipe
}

var makeDyeRecipe = function(i, recilist) {
    var out_recipe = '<div class="recipe_inner">';
    out_recipe += '<span class="icon ' + skilllist[recilist[i][19]][1] + '"><span>' + recilist[i][20] + '</span></span>'
    out_recipe += '<h4 style="margin: 0px;">' + getTranslatedString(recilist[i][0]) + '</h4>'
    if (recilist[i][1] != "") {
        out_recipe += '<p>' + getTranslatedString(recilist[i][1][0], recilist[i][1][1]) + '</p>'
    }
    out_recipe += "<table><tr><td class='inv_item'><span>" + getTranslatedString("recipe.message.no_dye") + "</span></td>"
    j = 0;
    while (j<16) {
        out_recipe += "<td class='inv_item'>";
        out_recipe += makeItem(111, j, 1, {});
        out_recipe += "</td>"
        j++
    }
    out_recipe += '</tr><tr>'
    k = 0;
    while (k<17) {
        out_recipe += "<td class='inv_item'>";
        if (recilist[i][2+(k)][0] == 0) {}
        else {
            out_recipe += makeItem(recilist[i][2+(k)][0], recilist[i][2+(k)][1], recilist[i][2+(k)][2], recilist[i][2+(k)][3]);
        };
        if (recilist[i][2+(k)][2] == 1) {}
        else {
            out_recipe += "<span>"
            out_recipe += recilist[i][2+(k)][2]
            out_recipe += "</span>"
        };
        out_recipe += "</td>"
        k++
    }
    out_recipe += '</tr></table></div>'
    return out_recipe
}

var craftFunc = function(craftrecipelist) {
    recipe_all = ''
    for (var j in craftrecipelist) {
        recipe_group = '<div class="struct collapse" id="'
        recipe_group += j
        recipe_group += '"><span class="small_icon collapse_button collapse_closed" onclick="collapse(\''
        recipe_group += j
        recipe_group += '\');"></span><h3 class="collapse_header">'
        recipe_group += getTranslatedString("recipe.category." + j + ".name")
        recipe_group += '</h3><div class="collapse_body" style="display:none;">'
        for (var k in craftrecipelist[j]) {
            recipe_current = makeCraftRecipe(j, k, craftrecipelist);
            recipe_group += recipe_current
        }
        recipe_group += "</div></div>"
        recipe_all += recipe_group
    }
}

var dyeFunc = function(craftrecipelist) {
    recipe_all = ''
    for (var j in craftrecipelist) {
        recipe_group = '<div class="struct" id="'
        recipe_group += j
        recipe_group += '">'
        recipe_current = makeDyeRecipe(j, craftrecipelist);
        recipe_group += recipe_current
        recipe_group += "</div>"
        recipe_all += recipe_group
    }
}

var recipeFunc = function() {
    var firstSect = false;
    for (var i in recipelist) {
        if (firstSect) {recipebox.innerHTML += "<hr>";}
        if (i == "crafting") {
            craftFunc(recipelist[i]);
        } else if (i == "cooking") {
            craftFunc(recipelist[i]);
        } else if (i == "dyeing") {
            dyeFunc(recipelist[i]);
        }
        recipebox.innerHTML += "<h2>" +  getTranslatedString("header.crafting." + i) + "</h2>" + recipe_all;
        firstSect = true;
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

//var final_recipe_func = function() {
//    recipebox.innerHTML = "<h2>" +  getTranslatedString("header.crafting.crafting") + "</h2>" + recipe_all;
//};

waitForLang(recipeFunc);
//waitForLang(final_recipe_func);