var moblist = [ // [name, max hp, attack [ind,dir], defense [ind,dir], base attack, base defense, 9 drops [[id, dv, count, chance],...], type]
    ["Cow",               15, [0,0],[2,1], [0,0],[2,1],[[216,0,1, "75%"],[216,0,1,"30%"],[256,0,1,"75%"],[256,0,1,"30%"],     [0,0,1,""],[0,0,1,""],[0,0,1,""],[0,0,1,""],[0,0,1,""]], 0],
    ["Pig",               15, [0,0],[2,0], [0,0],[2,0],[[258,0,1, "75%"],[258,0,1,"30%"],     [0,0,1,""],     [0,0,1,""],     [0,0,1,""],[0,0,1,""],[0,0,1,""],[0,0,1,""],[0,0,1,""]], 0],
    ["Sheep",             15, [0,0],[2,3], [0,0],[2,3],[[218,0,1, "80%"],[262,0,1,"75%"],[262,0,1,"30%"],     [0,0,1,""],     [0,0,1,""],[0,0,1,""],[0,0,1,""],[0,0,1,""],[0,0,1,""]], 0],
    ["Chicken",           10, [2,1],[1,0], [2,1],[1,0],[[219,0,2, "50%"],[219,0,1,"70%"],[260,0,1,"75%"],[260,0,1,"30%"],[308,0,1,"25%"],[0,0,1,""],[0,0,1,""],[0,0,1,""],[0,0,1,""]], 0],
    ["Green Slime",       10, [5,2],[5,0], [5,2],[5,0],[[223,0,1, "60%"],[223,0,1,"60%"],     [0,0,1,""],     [0,0,1,""],     [0,0,1,""],[0,0,1,""],[0,0,1,""],[0,0,1,""],[0,0,1,""]], 5],
    ["Red Slime",         12, [6,2],[4,0], [6,2],[4,0],[[223,1,1, "60%"],[223,1,1,"60%"],     [0,0,1,""],     [0,0,1,""],     [0,0,1,""],[0,0,1,""],[0,0,1,""],[0,0,1,""],[0,0,1,""]], 2],
    ["Blue Slime",        12, [5,1],[5,1], [5,1],[5,1],[[223,2,1, "60%"],[223,2,1,"60%"],     [0,0,1,""],     [0,0,1,""],     [0,0,1,""],[0,0,1,""],[0,0,1,""],[0,0,1,""],[0,0,1,""]], 3],
    ["Yellow Slime",      14, [4,2],[6,0], [4,2],[6,0],[[223,3,1, "60%"],[223,3,1,"60%"],     [0,0,1,""],     [0,0,1,""],     [0,0,1,""],[0,0,1,""],[0,0,1,""],[0,0,1,""],[0,0,1,""]], 4],
    ["Purple Slime",      18, [5,3],[3,0], [5,3],[3,0],[[223,4,1, "60%"],[223,4,1,"60%"],     [0,0,1,""],     [0,0,1,""],     [0,0,1,""],[0,0,1,""],[0,0,1,""],[0,0,1,""],[0,0,1,""]], 8],
    ["Zombie",            22, [6,3],[2,2], [6,3],[2,2],[[220,0,1, "85%"],[220,0,1,"45%"], [222,0,1,"1%"],     [0,0,1,""],     [0,0,1,""],[0,0,1,""],[0,0,1,""],[0,0,1,""],[0,0,1,""]], 0],
    ["Skeleton",          20, [7,3],[2,1], [6,2],[2,1],[[217,0,1, "75%"],[217,0,1,"30%"],  [88,0,1,"5%"], [89,0,1,"80%"], [89,0,1,"40%"],[0,0,1,""],[0,0,1,""],[0,0,1,""],[0,0,1,""]], 0],
    ["Creeper",           20, [9,6],[1,1], [9,6],[1,1],[[372,0,1, "75%"],[372,0,1,"30%"],     [0,0,1,""],     [0,0,1,""],     [0,0,1,""],[0,0,1,""],[0,0,1,""],[0,0,1,""],[0,0,1,""]], 0],
    ["Smeckledorf Smurf",  5,[12,4],[0,0],[10,3],[0,0],[[489,0,1,"100%"],     [0,0,1,""],     [0,0,1,""],     [0,0,1,""],     [0,0,1,""],[0,0,1,""],[0,0,1,""],[0,0,1,""],[0,0,1,""]], 0],
]

var activeMobs = [ // [name, turn, [hp, mhp], [[atk],[batk]], [[def],[bdef]], kills, accuracy, [equips], [effects], type]
    ["Chicken", 51, [10,10], [[2,1],[2,1]], [[1,0],[1,0]], 0, 2, [[1,0,0,{}],[548,0,0,{}],[548,0,0,{}],[548,0,0,{}],[548,0,0,{}],[548,0,0,{}],[7,0,0,{}]], [[0,0],[0,0],[0,0],[0,0],[0,0]], 0],
    ["<span class='pad1'>Pig</span>", 66, [15,15], [[0,0],[0,0]], [[2,0],[2,0]], 0, "(N/A)", [[1,0,0,{}],[548,0,0,{}],[548,0,0,{}],[4,0,0,{}],[548,0,0,{}],[548,0,0,{}],[7,0,0,{}]], [[0,0],[0,0],[0,0],[0,0],[0,0]], 0],
    ["<span class='pad1'>Sheep</span>", 57, [17,15], [[0,0],[0,0]], [[2,3],[2,3]], 0, "(N/A)", [[1,0,0,{}],[548,0,0,{}],[548,0,0,{}],[4,0,0,{}],[548,0,0,{}],[548,0,0,{}],[7,0,0,{}]], [[0,0],[0,0],[0,0],[0,0],[0,0]], 0],
    ["<span class='pad1'>Sheep</span>", 57, [15,15], [[0,0],[0,0]], [[2,3],[2,3]], 0, "(N/A)", [[1,0,0,{}],[548,0,0,{}],[548,0,0,{}],[4,0,0,{}],[548,0,0,{}],[548,0,0,{}],[7,0,0,{}]], [[0,0],[0,0],[0,0],[0,0],[0,0]], 0],
    ["<span class='pad1'>Pig</span>", 66, [15,15], [[0,0],[0,0]], [[2,0],[2,0]], 0, "(N/A)", [[1,0,0,{}],[548,0,0,{}],[548,0,0,{}],[4,0,0,{}],[548,0,0,{}],[548,0,0,{}],[7,0,0,{}]], [[0,0],[0,0],[0,0],[0,0],[0,0]], 0],
    ["Blue Slime", 70, [12,12], [[5,1],[5,1]], [[5,1],[5,1]], 0, "(N/A)", [[1,0,0,{}],[548,0,0,{}],[548,0,0,{}],[548,0,0,{}],[548,0,0,{}],[548,0,0,{}],[7,0,0,{}]], [[0,0],[0,0],[0,0],[0,0],[0,0]], 3],
    ["Zombie", 70, [22,22], [[6,3],[6,3]], [[2,2],[2,2]], 0, "(N/A)", [[1,0,0,{}],[2,0,0,{}],[3,0,0,{}],[4,0,0,{}],[5,0,0,{}],[6,0,0,{}],[7,0,0,{}]], [[0,0],[0,0],[0,0],[0,0],[0,0]], 0],
    ["Zombie", 72, [22,22], [[6,3],[6,3]], [[2,2],[2,2]], 0, "(N/A)", [[1,0,0,{}],[2,0,0,{}],[3,0,0,{}],[4,0,0,{}],[5,0,0,{}],[6,0,0,{}],[7,0,0,{}]], [[0,0],[0,0],[0,0],[0,0],[0,0]], 0],
    ["<span class='pad1'>Sheep</span>", 72, [15,15], [[0,0],[0,0]], [[2,3],[2,3]], 0, "(N/A)", [[1,0,0,{}],[548,0,0,{}],[548,0,0,{}],[4,0,0,{}],[548,0,0,{}],[548,0,0,{}],[7,0,0,{}]], [[0,0],[0,0],[0,0],[0,0],[0,0]], 0],
    ["<span class='pad1'>Empty Slot</span>", "", ["",""], [["",""],["",""]], [["",""],["",""]], "", "", [[548,0,0,{}],[548,0,0,{}],[548,0,0,{}],[548,0,0,{}],[548,0,0,{}],[548,0,0,{}],[548,0,0,{}]], [[0,0],[0,0],[0,0],[0,0],[0,0]], 0],
    /* ["<span class='pad1'>Empty Slot</span>", "", ["",""], [["",""],["",""]], [["",""],["",""]], "", "", [[548,0,0,{}],[548,0,0,{}],[548,0,0,{}],[548,0,0,{}],[548,0,0,{}],[548,0,0,{}],[548,0,0,{}]], [[0,0],[0,0],[0,0],[0,0],[0,0]], 0], */
]