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

/* TBGSBB+ to TBGSBB converter */
var loop_until_char = function(string, char) {
    var i = 0
    while (i < string.length) {
        if (string[i] == char) {break}
        i++
    }
    return i
}
var run_conv = function() {
    var inEl = document.getElementById("conv_in")
    var outEl = document.getElementById("conv_out")
    var cont = inEl.value
    //var cont = "abc"
    var outCont = ""
    var semiCont = ""
    var partA = ""
    var partB = ""
    var j = 0
    var k = 0
    var l = 0
    var done = false
    while (!done) {
        j = loop_until_char(cont, "{")
        outCont += cont.slice(0, j)
        if (j == cont.length) {
            done = true
            continue
        }
        cont = cont.slice(j+1)
        k = loop_until_char(cont, "}")
        semiCont = cont.slice(0, k)
        l = loop_until_char(semiCont, "|")
        if (l == semiCont.length) {
            if (semiCont in replaceSingleList) {outCont += replaceSingleList[semiCont]}
        } else {
            partA = semiCont.slice(0, l)
            partB = semiCont.slice(l+1)
            if (partA in replaceDoubleList) {outCont += replaceDoubleList[partA][0] + partB + replaceDoubleList[partA][1]}
        }
        cont = cont.slice(k+1)
    }
    outEl.value = outCont
}