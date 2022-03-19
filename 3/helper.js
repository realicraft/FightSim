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
    if (target == "stone") {outputEl.innerText = Math.round(mrl[0]*1.25) + ' Stone, ' + mrl[3] + ' Iron Ore, ' + mrl[5] + ' Electrum Ore, ' + mrl[6] + ' Diamonds, ' + mrl[7] + ' Emeralds, ' + mrl[8] + ' Hardite Ore, ' + mrl[9] + ' Geodes'}
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