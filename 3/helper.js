/* mining rewards */
var run_mine = function() {
    var rollEl = document.getElementById("mine_roll")
    var targetEl = document.getElementById("mine_target")
    var outputEl = document.getElementById("mine_output")
    var rollNum = rollEl.value;
    var target = targetEl.value;
    if ((rollNum < 1) | (rollNum > 40) | (Math.floor(rollNum) != rollNum)) {
        outputEl.innerText = "That roll doesn't make sense."
        return
    }
    var mrl = mineRewardList[rollNum-1]
    if (target == "none") {outputEl.innerText = mrl[0] + ' Stone, ' + mrl[3] + ' Iron Ore, ' + mrl[5] + ' Electrum Ore, ' + mrl[6] + ' Diamonds, ' + mrl[7] + ' Emeralds, ' + mrl[8] + ' Hardite Ore, ' + mrl[9] + ' Geodes'}
    else if (target == "stone") {outputEl.innerText = Math.round(mrl[0]*1.25) + ' Stone, ' + mrl[3] + ' Iron Ore, ' + mrl[5] + ' Electrum Ore, ' + mrl[6] + ' Diamonds, ' + mrl[7] + ' Emeralds, ' + mrl[8] + ' Hardite Ore, ' + mrl[9] + ' Geodes'}
    else if (target == "coal") {outputEl.innerText = mrl[0] + ' Stone, ' + mrl[1] + ' Coal, ' + mrl[3] + ' Iron Ore, ' + mrl[5] + ' Electrum Ore, ' + mrl[6] + ' Diamonds, ' + mrl[7] + ' Emeralds, ' + mrl[8] + ' Hardite Ore, ' + mrl[9] + ' Geodes'}
    else if (target == "copper") {outputEl.innerText = mrl[0] + ' Stone, ' + mrl[2] + ' Copper Ore, '  + mrl[3] + ' Iron Ore, ' + mrl[5] + ' Electrum Ore, ' + mrl[6] + ' Diamonds, ' + mrl[7] + ' Emeralds, ' + mrl[8] + ' Hardite Ore, ' + mrl[9] + ' Geodes'}
    else if (target == "iron") {outputEl.innerText = mrl[0] + ' Stone, ' + Math.round(mrl[3]*1.25) + ' Iron Ore, ' + mrl[5] + ' Electrum Ore, ' + mrl[6] + ' Diamonds, ' + mrl[7] + ' Emeralds, ' + mrl[8] + ' Hardite Ore, ' + mrl[9] + ' Geodes'}
    else if (target == "gold") {outputEl.innerText = mrl[0] + ' Stone, ' + mrl[3] + ' Iron Ore, ' + mrl[4] + ' Gold Ore, '  + mrl[5] + ' Electrum Ore, ' + mrl[6] + ' Diamonds, ' + mrl[7] + ' Emeralds, ' + mrl[8] + ' Hardite Ore, ' + mrl[9] + ' Geodes'}
    else if (target == "electrum") {outputEl.innerText = mrl[0] + ' Stone, ' + mrl[3] + ' Iron Ore, ' + Math.round(mrl[5]*1.25) + ' Electrum Ore, ' + mrl[6] + ' Diamonds, ' + mrl[7] + ' Emeralds, ' + mrl[8] + ' Hardite Ore, ' + mrl[9] + ' Geodes'}
    else if (target == "diamond") {outputEl.innerText = mrl[0] + ' Stone, ' + mrl[3] + ' Iron Ore, ' + mrl[5] + ' Electrum Ore, ' + Math.round(mrl[6]*1.25) + ' Diamonds, ' + mrl[7] + ' Emeralds, ' + mrl[8] + ' Hardite Ore, ' + mrl[9] + ' Geodes'}
    else if (target == "emerald") {outputEl.innerText = mrl[0] + ' Stone, ' + mrl[3] + ' Iron Ore, ' + mrl[5] + ' Electrum Ore, ' + mrl[6] + ' Diamonds, ' + Math.round(mrl[7]*1.25) + ' Emeralds, ' + mrl[8] + ' Hardite Ore, ' + mrl[9] + ' Geodes'}
    else if (target == "hardite") {outputEl.innerText = mrl[0] + ' Stone, ' + mrl[3] + ' Iron Ore, ' + mrl[5] + ' Electrum Ore, ' + mrl[6] + ' Diamonds, ' + mrl[7] + ' Emeralds, ' + Math.round(mrl[8]*1.25) + ' Hardite Ore, ' + mrl[9] + ' Geodes'}
    else if (target == "geode") {outputEl.innerText = mrl[0] + ' Stone, ' + mrl[3] + ' Iron Ore, ' + mrl[5] + ' Electrum Ore, ' + mrl[6] + ' Diamonds, ' + mrl[7] + ' Emeralds, ' + mrl[8] + ' Hardite Ore, ' + Math.round(mrl[9]*1.25) + ' Geodes'}
    else {outputEl.innerText = "That target doesn't make sense."}
}

/* chopping rewards */
var run_chop = function() {
    var rollEl = document.getElementById("chop_roll")
    var treeEl = document.getElementById("chop_tree")
    var outputEl = document.getElementById("chop_output")
    var rollNum = rollEl.value;
    var tree = treeEl.value;
    if ((rollNum < 1) | (rollNum > 40) | (Math.floor(rollNum) != rollNum)) {
        outputEl.innerText = "That roll doesn't make sense."
        return
    }
    var crl = chopRewardList[rollNum-1]
    var logs = {"oak": "Oak Log", "birch": "Birch Log", "spruce": "Spruce Log", "palm": "Palm Log", "acacia": "Acacia Log", "mangrove": "Mangrove Log", "dark_oak": "Dark Oak Log", "jungle": "Jungle Log", "warped": "Warped Stem", "crimson": "Crimson Stem", "bamboo": "Bamboo Log", "cherry": "Cherry Log", "charred": "Charred Log"}
    if (tree in logs) {
        if (rollNum <= 2) {
            outputEl.innerText = "No items obtained. (l)"
        } else {
            outputEl.innerText = ((crl[0] > 0) ? (crl[0] + " " + logs[tree] + ((crl[0] != 1) ? "s, " : ", ")) : "") + (crl[1] + " Stick" + ((crl[1] != 1) ? "s" : "")) + ((crl[2] > 0) ? (", " + crl[2] + " Sap") : "")
        }
    } else {
        outputEl.innerText = "That target doesn't make sense."
    }
}

/* TBGSBB+ to TBGSBB converter */
var loop_until_char = function(string, char) {
    var i = 0
    while (i < string.length) {
        if (string[i] == char) {break}
        i++
    }
    return i
}
var comp_conv = function(conv) {
    var outCont = ""
    var semiCont = ""
    var partA = ""
    var partB = ""
    var j = 0
    var k = 0
    var l = 0
    var braces = 0
    var done = false
    while (!done) {
        j = loop_until_char(conv, "{")
        outCont += conv.slice(0, j)
        if (j == conv.length) {
            done = true
            continue
        }
        conv = conv.slice(j+1)
        k = loop_until_char(conv, "}")
        semiCont = conv.slice(0, k)
        l = loop_until_char(semiCont, "|")
        if (l != semiCont.length) {
            partA = semiCont.slice(0, l)
        } else {
            partA = ""
        }
        if ((partA in replaceDoubleList) && !(replaceDoubleList[partA][2])) { // skip until the closing }
            outCont += replaceDoubleList[partA][0]
            conv = conv.slice(l+1)
            k = 0
            braces = 0
            while (braces > -1) {
                if (conv.slice(k, k+1) == "{") {
                    braces += 1
                } else if (conv.slice(k, k+1) == "}") {
                    braces -= 1
                }
                if (braces == -1) {break}
                outCont += conv.slice(k, k+1)
                k++
            }
            outCont += replaceDoubleList[partA][1]
            conv = conv.slice(k+1)
            continue
        }
        conv = comp_conv(conv)
        k = loop_until_char(conv, "}")
        semiCont = conv.slice(0, k)
        l = loop_until_char(semiCont, "|")
        if (l == semiCont.length) {
            if (semiCont in replaceSingleList) {outCont += replaceSingleList[semiCont]}
        } else {
            partA = semiCont.slice(0, l)
            partB = semiCont.slice(l+1)
            if (partA in replaceDoubleList) {
                if (replaceDoubleList[partA][2]) {outCont += replaceDoubleList[partA][0] + partB + replaceDoubleList[partA][1]}
                else (outCont += "{" + partA + partB + "}")
            }
        }
        conv = conv.slice(k+1)
    }
    return outCont
}
var comp_conv2 = function(conv, otype, outer) {
    var outCont = "";
    var semiCont = "";
    var sections = [""];
    var outTag = "";
    var done = false;
    var j = 0;
    var k = 0;
    var lastK = 0;
    var braces = 0;
    if (outer) { // if this is the outer-most call...
        if (otype == 2) { // ...and the output type is HTML...
            conv = conv.replaceAll("\n", "<br/>") // ...convert all line breaks to <br/>
        }
    }
    while (!done) {
        j = loop_until_char(conv, "{"); // find the beginning of the next tag
        outCont += conv.slice(0, j);
        if (j == conv.length) { // if the end's been reached, we're done
            done = true;
            continue;
        }
        conv = conv.slice(j+1);
        braces = 1;
        k = 0;
        while (braces > 0) { // find the end of the tag
            if (conv.charAt(k) == "{") {
                braces += 1;
            } else if (conv.charAt(k) == "}") {
                braces -= 1;
            }
            k++;
            if (k > conv.length) { // tag does not end properly
                done = true;
                outCont = "Failed to parse; unclosed tag"
                return outCont;
            }
        }
        semiCont = conv.slice(0, k-1); // get contents of tag
        conv = conv.slice(k);
        braces = 0;
        k = 0;
        lastK = 0;
        sections = [];
        while (k <= semiCont.length) {
            if (semiCont.charAt(k) == "{") {
                braces += 1;
            } else if (semiCont.charAt(k) == "}") {
                braces -= 1;
            } else if (semiCont.charAt(k) == "|") { // if we're at a pipe...
                if (braces == 0) { // ...and not in a nested tag, add what's before it to sections
                    sections.push(semiCont.slice(lastK, k));
                    lastK = k+1;
                } else {} // ...and in a nested tag, do nothing; we'll get to it later
            }
            k++;
        }
        sections.push(semiCont.slice(lastK, k-1)); // add the last section
        if (sections[0] in replaceList) { // if the given tag exists...
            if (replaceList[sections[0]][1]) { // ...if the inside should be parsed...
                for (sect = 1; sect < sections.length; sect++) {
                    sections[sect] = comp_conv2(sections[sect], otype, false); // ...parse each section indiviually, then...
                }
            }
            outTag = replaceList[sections[0]][2][otype]; // ...parse the tag contents...
            for (part = 1; part <= replaceList[sections[0]][0]; part++) {
                outTag = outTag.replace("%"+part, sections[part]);
            }
            outCont += outTag; // ...and add the tag contents
        }
    }
    return outCont;
}
var run_conv = function() {
    var inEl = document.getElementById("conv_in")
    var outEl = document.getElementById("conv_out")
    var typeEl = document.getElementById("conv_type")
    var cont = inEl.value;
    var outType = parseInt(typeEl.value, 10);
    outEl.value = comp_conv2(cont, outType, true);
}

/* Golden Food Bonus Calc */
var run_gfood = function() {
    var bonusEl = document.getElementById("gfood_bonus")
    var countEl = document.getElementById("gfood_count")
    var outputEl = document.getElementById("gfood_output")
    var multi = 0
    for (var i = 0; i < countEl.value; i++) {
        multi += 0.95 ** (i)
        console.log(multi)
    }
    outputEl.innerText = bonusEl.value * multi
}

/* Random Number Generator */
var run_rand = function() {
    var minEl = document.getElementById("rand_min")
    var maxEl = document.getElementById("rand_max")
    var outputEl = document.getElementById("rand_output")
    var min = parseInt(minEl.value)
    var max = parseInt(maxEl.value)
    outputEl.innerText = Math.ceil((Math.random()*(max-min+1)))+(min-1)
}

/* Recipe Converter */
var generate_craft_recipe = function(recipe) {
    var output = "|-\n| "
    for (var i=0; i < 6; i++) {
        if (recipe[i+2][0] == 0) {
            i = 6;
            continue;
        }
        if (i != 0) {output += ", "}
        output += recipe[i+2][2];
        if (recipe[i+2][0] == 225) {output += " [[Fuel]]"}
        else {output += " [[" + equiplist[recipe[i+2][0]][recipe[i+2][1]][0] + "]]"}
    }
    output += " || {{Craft Recipe"
    for (var i=0; i < 6; i++) {
        if (recipe[i+2][0] == 0) {
            i = 6;
            continue;
        }
        output += "|item" + (i+1) + "=" + recipe[i+2][0];
        if (recipe[i+2][2] != 1) {output += "|count" + (i+1) + "=" + recipe[i+2][2];}
        if (recipe[i+2][1] != 0) {output += "|dv" + (i+1) + "=" + recipe[i+2][1];}
    }
    output += "|item7=" + recipe[9][0];
    if (recipe[9][2] != 1) {output += "|count7=" + recipe[9][2];}
    if (recipe[9][1] != 0) {output += "|dv7=" + recipe[9][1];}
    output += "|type=" + recipe[8];
    output += "}} || "
    output += recipe[9][2];
    output += " [[" + equiplist[recipe[9][0]][recipe[9][1]][0] + "]]";
    return output;
}
var run_recipe = function() {
    var idEl = document.getElementById("recipe_id");
    var outputEl = document.getElementById("recipe_out");
    var id = parseInt(idEl.value);
    var outputCont = ""
    // crafting
    var outputPart = ""
    var cat = "crafting"
    for (var i in recipelist[cat]) {
        for (var j in recipelist[cat][i]) {
            if ((recipelist[cat][i][j][2][0] == id) || (recipelist[cat][i][j][3][0] == id) || (recipelist[cat][i][j][4][0] == id) || (recipelist[cat][i][j][5][0] == id) || (recipelist[cat][i][j][6][0] == id) || (recipelist[cat][i][j][7][0] == id) || (recipelist[cat][i][j][9][0] == id)) {
                outputPart += generate_craft_recipe(recipelist[cat][i][j]) + "\n";
            }
        }
    }
    if (outputPart != "") {outputCont += "[Crafting]\n\n" + outputPart + "\n\n\n"}
    // cooking
    var outputPart = ""
    var cat = "cooking"
    for (var i in recipelist[cat]) {
        for (var j in recipelist[cat][i]) {
            if ((recipelist[cat][i][j][2][0] == id) || (recipelist[cat][i][j][3][0] == id) || (recipelist[cat][i][j][4][0] == id) || (recipelist[cat][i][j][5][0] == id) || (recipelist[cat][i][j][6][0] == id) || (recipelist[cat][i][j][7][0] == id) || (recipelist[cat][i][j][9][0] == id)) {
                outputPart += generate_craft_recipe(recipelist[cat][i][j]) + "\n";
            }
        }
    }
    if (outputPart != "") {outputCont += "[Cooking]\n\n" + outputPart + "\n\n\n"}
    outputEl.value = outputCont;
}