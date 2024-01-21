var moblist = [ // [name langstring, max hp, attack [ind,dir], defense [ind,dir], base attack, base defense, 9 drops [[id, dv, count, nbt, chance],...], type]
    ["empty",                    "", ["",""],["",""], ["",""],["",""],[      [0,0,1,{},""],     [0,0,1,{},""],     [0,0,1,{},""],     [0,0,1,{},""],     [0,0,1,{},""],[0,0,1,{},""],[0,0,1,{},""],[0,0,1,{},""],[0,0,1,{},""]], 0],
    ["cow",                      15,   [0,0],  [2,1],   [0,0],  [2,1],[[216,0,1,{}, "75%"],[216,0,1,{},"30%"],[256,0,1,{},"75%"],[256,0,1,{},"30%"],     [0,0,1,{},""],[0,0,1,{},""],[0,0,1,{},""],[0,0,1,{},""],[0,0,1,{},""]], 0],
    ["pig",                      15,   [0,0],  [2,0],   [0,0],  [2,0],[[258,0,1,{}, "75%"],[258,0,1,{},"30%"],     [0,0,1,{},""],     [0,0,1,{},""],     [0,0,1,{},""],[0,0,1,{},""],[0,0,1,{},""],[0,0,1,{},""],[0,0,1,{},""]], 0],
    ["sheep",                    15,   [0,0],  [2,3],   [0,0],  [2,3],[[218,0,1,{}, "80%"],[262,0,1,{},"75%"],[262,0,1,{},"30%"],     [0,0,1,{},""],     [0,0,1,{},""],[0,0,1,{},""],[0,0,1,{},""],[0,0,1,{},""],[0,0,1,{},""]], 0],
    ["chicken",                  10,   [2,1],  [1,0],   [2,1],  [1,0],[[219,0,2,{}, "50%"],[219,0,1,{},"70%"],[260,0,1,{},"75%"],[260,0,1,{},"30%"],[308,0,1,{},"25%"],[0,0,1,{},""],[0,0,1,{},""],[0,0,1,{},""],[0,0,1,{},""]], 0],
    ["slime_green",              10,   [5,2],  [5,0],   [5,2],  [5,0],[[223,0,1,{}, "60%"],[223,0,1,{},"60%"],     [0,0,1,{},""],     [0,0,1,{},""],     [0,0,1,{},""],[0,0,1,{},""],[0,0,1,{},""],[0,0,1,{},""],[0,0,1,{},""]], 5],
    ["slime_red",                12,   [6,2],  [4,0],   [6,2],  [4,0],[[223,1,1,{}, "60%"],[223,1,1,{},"60%"],     [0,0,1,{},""],     [0,0,1,{},""],     [0,0,1,{},""],[0,0,1,{},""],[0,0,1,{},""],[0,0,1,{},""],[0,0,1,{},""]], 2],
    ["slime_blue",               12,   [5,1],  [5,1],   [5,1],  [5,1],[[223,2,1,{}, "60%"],[223,2,1,{},"60%"],     [0,0,1,{},""],     [0,0,1,{},""],     [0,0,1,{},""],[0,0,1,{},""],[0,0,1,{},""],[0,0,1,{},""],[0,0,1,{},""]], 3],
    ["slime_yellow",             14,   [4,2],  [6,0],   [4,2],  [6,0],[[223,3,1,{}, "60%"],[223,3,1,{},"60%"],     [0,0,1,{},""],     [0,0,1,{},""],     [0,0,1,{},""],[0,0,1,{},""],[0,0,1,{},""],[0,0,1,{},""],[0,0,1,{},""]], 4],
    ["slime_purple",             18,   [5,3],  [3,0],   [5,3],  [3,0],[[223,4,1,{}, "60%"],[223,4,1,{},"60%"],     [0,0,1,{},""],     [0,0,1,{},""],     [0,0,1,{},""],[0,0,1,{},""],[0,0,1,{},""],[0,0,1,{},""],[0,0,1,{},""]], 8],
    ["zombie",                   22,   [6,3],  [2,2],   [6,3],  [2,2],[[220,0,1,{}, "85%"],[220,0,1,{},"45%"],[222,0,1,{}, "5%"],     [0,0,1,{},""],     [0,0,1,{},""],[0,0,1,{},""],[0,0,1,{},""],[0,0,1,{},""],[0,0,1,{},""]], 0],
    ["skeleton",                 20,   [7,3],  [2,1],   [6,2],  [2,1],[[217,0,1,{}, "75%"],[217,0,1,{},"30%"], [88,0,1,{}, "5%"], [89,0,1,{},"80%"], [89,0,1,{},"40%"],[0,0,1,{},""],[0,0,1,{},""],[0,0,1,{},""],[0,0,1,{},""]], 0],
    ["creeper",                  20,   [9,6],  [1,1],   [9,6],  [1,1],[[372,0,1,{}, "75%"],[372,0,1,{},"30%"],     [0,0,1,{},""],     [0,0,1,{},""],     [0,0,1,{},""],[0,0,1,{},""],[0,0,1,{},""],[0,0,1,{},""],[0,0,1,{},""]], 0],
    ["smurf",                     5,  [12,4],  [0,0],  [10,3],  [0,0],[[489,0,1,{},"100%"],     [0,0,1,{},""],     [0,0,1,{},""],     [0,0,1,{},""],     [0,0,1,{},""],[0,0,1,{},""],[0,0,1,{},""],[0,0,1,{},""],[0,0,1,{},""]], 0],
    ["spider",                    1,   [0,1],  [0,0],   [0,1],  [0,0],[      [0,0,1,{},""],     [0,0,1,{},""],     [0,0,1,{},""],     [0,0,1,{},""],     [0,0,1,{},""],[0,0,1,{},""],[0,0,1,{},""],[0,0,1,{},""],[0,0,1,{},""]], 0],
]

var activeMobs = [ // [mob id, pad1, turn, [hp, mhp], [atk], [def], kills, accuracy, [equips], [effects]]
    [9,   true, 84, [18,18], [5,3], [3,0], 0, "(N/A)", [[1,0,0,{}],[548,0,0,{}],[548,0,0,{}],[548,0,0,{}],[548,0,0,{}],[548,0,0,{}],[7,0,0,{}]], [[0,0],[0,0],[0,0],[0,0],[0,0]]],
    [2,   true, 66, [12,15], [0,0], [2,0], 0, "(N/A)", [[1,0,0,{}],[548,0,0,{}],[548,0,0,{}],  [4,0,0,{}],[548,0,0,{}],[548,0,0,{}],[7,0,0,{}]], [[0,0],[0,0],[0,0],[0,0],[0,0]]],
    [3,   true, 57, [11,15], [0,0], [2,3], 0, "(N/A)", [[1,0,0,{}],[548,0,0,{}],[548,0,0,{}],  [4,0,0,{}],[548,0,0,{}],[548,0,0,{}],[7,0,0,{}]], [[0,0],[0,0],[0,0],[0,0],[0,0]]],
    [3,   true, 57, [11,15], [0,0], [2,3], 0, "(N/A)", [[1,0,0,{}],[548,0,0,{}],[548,0,0,{}],  [4,0,0,{}],[548,0,0,{}],[548,0,0,{}],[7,0,0,{}]], [[0,0],[0,0],[0,0],[0,0],[0,0]]],
    [2,   true, 66, [12,15], [0,0], [2,0], 0, "(N/A)", [[1,0,0,{}],[548,0,0,{}],[548,0,0,{}],  [4,0,0,{}],[548,0,0,{}],[548,0,0,{}],[7,0,0,{}]], [[0,0],[0,0],[0,0],[0,0],[0,0]]],
    [7,  false, 70,  [6,12], [5,1], [5,1], 0, "(N/A)", [[1,0,0,{}],[548,0,0,{}],[548,0,0,{}], [35,0,0,{}],[548,0,0,{}],[548,0,0,{}],[7,0,0,{}]], [[0,0],[0,0],[0,0],[0,0],[0,0]]],
    [10, false, 70, [16,22], [6,3], [2,2], 0, "(N/A)", [[1,0,0,{}],  [2,0,0,{}],  [3,0,0,{}],  [4,0,0,{}],  [5,0,0,{}],  [6,0,0,{}],[7,0,0,{}]], [[0,0],[0,0],[0,0],[0,0],[0,0]]],
    [6,   true, 86, [12,12], [6,2], [4,0], 0, "(N/A)", [[1,0,0,{}],[548,0,0,{}],[548,0,0,{}],[548,0,0,{}],[548,0,0,{}],[548,0,0,{}],[7,0,0,{}]], [[0,0],[0,0],[0,0],[0,0],[0,0]]],
    [3,   true, 72, [10,15], [0,0], [2,3], 0, "(N/A)", [[1,0,0,{}],[548,0,0,{}],[548,0,0,{}],  [4,0,0,{}],[548,0,0,{}],[548,0,0,{}],[7,0,0,{}]], [[0,0],[0,0],[0,0],[0,0],[0,0]]],
    [8,  false, 74, [11,14], [4,2], [6,0], 0, "(N/A)", [[1,0,0,{}],[548,0,0,{}],[548,0,0,{}],[548,0,0,{}],[548,0,0,{}],[548,0,0,{}],[7,0,0,{}]], [[0,0],[0,0],[0,0],[0,0],[0,0]]],
    /* [0, true, "", ["",""], ["",""], ["",""], "", "", [[548,0,0,{}],[548,0,0,{}],[548,0,0,{}],[548,0,0,{}],[548,0,0,{}],[548,0,0,{}],[548,0,0,{}]], [[0,0],[0,0],[0,0],[0,0],[0,0]]], */
]