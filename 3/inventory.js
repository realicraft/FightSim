/*
Valid 'NBT' data:
potion_eff: [effect id, effect length (turns)]
enchant: [enchant id, enchant level]
desc_append: ["string to append"]
bools: [background]
cname: "custom name"
tag: "tag_color" (use plain for colorless)

Future 'NBT' data:
name_color: color as a string*/

// [id, dv, count, {nbt_name: [nbt_conts]}]
var inventoryList = {
    "<span class='pad1'>realicraft</span>": [
        [
            [43,0,1,{}],[184,0,1,{}],[89,0,3,{}],[51,0,20,{}],[68,0,8,{}],[45,0,16,{}],
            [371,0,4,{}],[76,0,4,{}],[238,0,1,{}],[72,0,4,{}],[370,0,1,{}],[398,0,1,{}]
        ],[
            [369,0,5,{}],[404,0,3,{}],[66,0,2,{}],[363,0,2,{}],[37,0,4,{}],[392,0,2,{}],
            [75,0,1,{}],[362,0,2,{}],[558,0,1,{}],[196,0,4,{}],[70,0,1,{}],[47,0,3,{}]
        ],[
            [697,0,1,{"bools":[true]}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],
            [0,0,1,{}],[0,0,1,{}],[112,0,1,{"bools":[true]}],[233,0,1,{}],[351,0,1,{}],[112,0,1,{"bools":[true]}]
        ]
    ],
    "<span class='pad1'>SausageMcSauce</span>": [[
            [240,0,1,{}],[244,0,1,{}],[351,0,2,{}],[620,0,1,{}],[233,0,1,{}],[0,0,1,{}],
            [0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],
        ],[
            [0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],
            [0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}]
        ],[
            [697,0,1,{"bools":[true]}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],
            [0,0,1,{}],[0,0,1,{}],[112,0,1,{"bools":[true]}],[112,0,1,{"bools":[true]}],[112,0,1,{"bools":[true]}],[112,0,1,{"bools":[true]}]
        ]
    ],
    "CatsUnited": [[
            [240,0,1,{}],[93,0,8,{}],[351,0,2,{}],[620,0,1,{}],[233,0,1,{}],[0,0,1,{}],
            [0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],
        ],[
            [0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],
            [0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}]
        ],[
            [697,0,1,{"bools":[true]}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],
            [0,0,1,{}],[0,0,1,{}],[112,0,1,{"bools":[true]}],[112,0,1,{"bools":[true]}],[112,0,1,{"bools":[true]}],[112,0,1,{"bools":[true]}]
        ]
    ],
    "Squirrelflight": [[
            [240,0,1,{}],[245,0,1,{}],[351,0,2,{}],[620,0,1,{}],[233,0,1,{}],[0,0,1,{}],
            [0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],
        ],[
            [0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],
            [0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}]
        ],[
            [697,0,1,{"bools":[true]}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],
            [0,0,1,{}],[0,0,1,{}],[112,0,1,{"bools":[true]}],[112,0,1,{"bools":[true]}],[112,0,1,{"bools":[true]}],[112,0,1,{"bools":[true]}]
        ]
    ],
    "IncendiaryGaming": [[
            [32,0,1,{}],[51,0,54,{}],[72,0,6,{}],[233,0,1,{}],[246,0,1,{}],[46,0,1,{}],
            [68,0,13,{}],[216,0,3,{}],[234,0,2,{}],[86,0,2,{}],[361,0,5,{}],[238,0,1,{}],
        ],[
            [369,0,20,{}],[37,0,24,{}],[351,0,1,{}],[75,0,16,{}],[76,0,7,{}],[383,0,2,{}],
            [362,0,7,{}],[363,0,9,{}],[364,0,5,{}],[367,0,12,{}],[487,0,8,{}],[0,0,1,{}]
        ],[
            [697,0,1,{"bools":[true]}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],
            [0,0,1,{}],[0,0,1,{}],[112,0,1,{"bools":[true]}],[112,0,1,{"bools":[true]}],[112,0,1,{"bools":[true]}],[112,0,1,{"bools":[true]}]
        ]
    ],
    "Byron_Inc_TBG": [[
            [172,0,1,{}],[25,0,1,{}],[255,0,1,{}],[371,0,44,{}],[174,0,1,{}],[74,0,8,{}],
            [23,0,1,{}],[383,0,1,{}],[233,0,1,{}],[635,0,2,{desc_append:["0"]}],[351,0,1,{}],[0,0,1,{}],
        ],[
            [0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[500,0,2,{}],[384,0,1,{desc_append:["<br />Empty Slot<br />Empty Slot<br />Electrum Nugget (1/1)"]}],[390,0,1,{}],
            [43,0,1,{}],[87,0,4,{}],[396,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}]
        ],[
            [697,0,1,{"bools":[true]}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],
            [0,0,1,{}],[0,0,1,{}],[112,0,1,{"bools":[true]}],[112,0,1,{"bools":[true]}],[112,0,1,{"bools":[true]}],[112,0,1,{"bools":[true]}]
        ]
    ],
    "cheesyfriedeggs": [[
            [35,0,13,{}],[38,0,1,{}],[46,0,4,{}],[47,0,4,{}],[10,0,1,{}],[143,0,1,{}],
            [36,0,2,{}],[383,0,2,{}],[247,0,1,{}],[51,0,4,{}],[254,0,2,{}],[68,0,3,{}],
        ],[
            [369,0,3,{}],[37,0,2,{}],[75,0,2,{}],[234,0,1,{}],[235,0,2,{}],[236,0,1,{}],
            [238,0,1,{}],[620,0,1,{}],[241,0,1,{}],[76,0,1,{}],[400,0,2,{}],[134,0,42,{}]
        ],[
            [697,0,1,{"bools":[true]}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],
            [0,0,1,{}],[0,0,1,{}],[112,0,1,{"bools":[true]}],[233,0,1,{}],[351,0,1,{}],[112,0,1,{"bools":[true]}]
        ]
    ],
    "solitare": [[
            [46,0,3,{}],[351,0,2,{}],[51,0,7,{}],[68,0,4,{}],[37,0,4,{}],[369,0,4,{}],
            [400,0,3,{}],[22,0,1,{}],[23,0,1,{}],[24,0,1,{}],[47,0,6,{}],[202,0,5,{}],
        ],[
            [234,0,2,{}],[235,0,7,{}],[236,0,2,{}],[238,0,1,{}],[241,0,1,{}],[138,0,5,{}],
            [64,0,11,{}],[195,0,6,{}],[75,0,2,{}],[76,0,1,{}],[620,0,1,{}],[233,0,1,{}]
        ],[
            [697,0,1,{"bools":[true]}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],
            [0,0,1,{}],[0,0,1,{}],[112,0,1,{"bools":[true]}],[112,0,1,{"bools":[true]}],[112,0,1,{"bools":[true]}],[112,0,1,{"bools":[true]}]
        ]
    ],
    "<span class='pad1'>Faressain</span>": [[
            [39,0,1,{}],[240,0,1,{}],[36,0,10,{}],[351,0,2,{}],[620,0,1,{}],[233,0,1,{}],
            [0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],
        ],[
            [0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],
            [0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}]
        ],[
            [697,0,1,{"bools":[true]}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],
            [0,0,1,{}],[0,0,1,{}],[112,0,1,{"bools":[true]}],[112,0,1,{"bools":[true]}],[112,0,1,{"bools":[true]}],[112,0,1,{"bools":[true]}]
        ]
    ],
    "LeopardyLeaf": [[
            [36,0,3,{}],[37,0,1,{}],[240,0,1,{}],[20,0,1,{}],[351,0,2,{}],[620,0,1,{}],
            [233,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],
        ],[
            [0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],
            [0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}]
        ],[
            [697,0,1,{"bools":[true]}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],
            [0,0,1,{}],[0,0,1,{}],[112,0,1,{"bools":[true]}],[112,0,1,{"bools":[true]}],[112,0,1,{"bools":[true]}],[112,0,1,{"bools":[true]}]
        ]
    ],
    "gilbert_given_TBG": [[
            [37,0,11,{}],[51,0,11,{}],[45,0,9,{}],[68,0,6,{}],[9,0,1,{}],[397,0,2,{}],
            [46,0,1,{}],[18,0,1,{}],[620,0,1,{}],[399,0,6,{}],[248,0,1,{desc_append:["10/50"]}],[398,0,2,{}],
        ],[
            [404,0,5,{}],[224,0,4,{}],[488,0,6,{}],[233,0,1,{}],[351,0,1,{}],[400,0,8,{}],
            [383,0,6,{}],[0,0,1,{}],[489,0,1,{}],[319,0,1,{}],[311,0,1,{}],[502,0,6,{}]
        ],[
            [697,0,1,{"bools":[true]}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],
            [0,0,1,{}],[0,0,1,{}],[112,0,1,{"bools":[true]}],[112,0,1,{"bools":[true]}],[112,0,1,{"bools":[true]}],[112,0,1,{"bools":[true]}]
        ]
    ],
    "<span class='pad1'>TwilightSeleneMisty</span>": [[
            [35,0,10,{}],[23,0,1,{}],[31,0,1,{}],[9,0,1,{}],[47,0,8,{}],[51,0,6,{}],
            [68,0,2,{}],[369,0,2,{}],[37,0,2,{}],[75,0,1,{}],[76,0,1,{}],[400,0,2,{}],
        ],[
            [620,0,1,{}],[233,0,1,{}],[351,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],
            [0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}]
        ],[
            [697,0,1,{"bools":[true]}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],
            [0,0,1,{}],[0,0,1,{}],[112,0,1,{"bools":[true]}],[112,0,1,{"bools":[true]}],[112,0,1,{"bools":[true]}],[112,0,1,{"bools":[true]}]
        ]
    ],
    "Luigis_Pizza": [[
            [108,0,1,{}],[620,0,1,{}],[233,0,1,{}],[351,0,1,{}],[0,0,1,{}],[0,0,1,{}],
            [0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],
        ],[
            [0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],
            [0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}]
        ],[
            [697,0,1,{"bools":[true]}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],
            [0,0,1,{}],[0,0,1,{}],[112,0,1,{"bools":[true]}],[112,0,1,{"bools":[true]}],[112,0,1,{"bools":[true]}],[112,0,1,{"bools":[true]}]
        ]
    ],
    /*"<abbr title=\"Dark Necromancer Kitty\">D. N. Kitty</abbr>": [[
            [398,1,{}],[125,2,{}],[620,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],
            [0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],
        ],[
            [0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],
            [0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}]
        ]
    ],*/
    "<span class='pad1'>SAVVYSCLUTTER</span>": [[
            [620,0,1,{}],[233,0,1,{}],[351,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],
            [0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],
        ],[
            [0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],
            [0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}]
        ],[
            [697,0,1,{"bools":[true]}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],
            [0,0,1,{}],[0,0,1,{}],[112,0,1,{"bools":[true]}],[112,0,1,{"bools":[true]}],[112,0,1,{"bools":[true]}],[112,0,1,{"bools":[true]}]
        ]
    ],
    "<span class='pad1'>Bobby</span>": [[
            [620,0,1,{}],[233,0,1,{}],[351,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],
            [0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],
        ],[
            [0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],
            [0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}]
        ],[
            [697,0,1,{"bools":[true]}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],
            [0,0,1,{}],[0,0,1,{}],[112,0,1,{"bools":[true]}],[112,0,1,{"bools":[true]}],[112,0,1,{"bools":[true]}],[112,0,1,{"bools":[true]}]
        ]
    ],
    "<span class='pad1'>TonyBrown148</span>": [[
            [233,0,1,{}],[351,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],
            [0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}]
        ],[
            [0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],
            [0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}]
        ],[
            [697,0,1,{"bools":[true]}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],
            [0,0,1,{}],[0,0,1,{}],[112,0,1,{"bools":[true]}],[112,0,1,{"bools":[true]}],[112,0,1,{"bools":[true]}],[112,0,1,{"bools":[true]}]
        ]
    ],
    "<span class='pad1'>Landon</span>": [[
            [51,0,30,{}],[383,0,1,{}],[389,0,12,{}],[68,0,12,{}],[629,0,7,{}],[274,0,1,{}],
            [268,0,1,{}],[635,0,5,{desc_append:["0"]}],[99,0,1,{}],[365,0,1,{}],[254,0,2,{}],[565,0,4,{}],
        ],[
            [72,0,2,{}],[369,0,11,{}],[37,0,5,{}],[107,0,2,{}],[46,0,27,{}],[618,0,1,{}],
            [29,0,1,{}],[75,0,4,{}],[619,0,1,{}],[77,0,3,{}],[233,0,1,{}],[351,0,1,{}]
        ],[
            [697,0,1,{"bools":[true]}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],[0,0,1,{}],
            [0,0,1,{}],[0,0,1,{}],[112,0,1,{"bools":[true]}],[112,0,1,{"bools":[true]}],[112,0,1,{"bools":[true]}],[112,0,1,{"bools":[true]}]
        ]
    ],
};

var invenListEl = document.getElementById("player_inv");

var invenRows = "";
var invenRow = "";
for (var i in inventoryList) {
    invenRow = "<tr><td class='inv_user' rowspan='" + inventoryList[i].length + "'>";
    invenRow += i;
    invenRow += "</td><td class='inv_space' rowspan='" + inventoryList[i].length + "'></td>";
    for (var k in inventoryList[i]) {
        for (var j of inventoryList[i][k]) {
            didFirstArg = false
            didSecondArg = false
            invenRow += "<td class='inv_item'>";
            if (j[0] == 0) {}
            else {
                invenRow += makeItem(j[0], j[1], j[2], j[3])
            };
            if (j[2] == 1) {}
            else {
                invenRow += "<span>"
                invenRow += j[2]
                invenRow += "</span>"
            };
            invenRow += "</td>"
        };
        invenRow += "</tr><tr>"
    };
    invenRow += "</tr><tr style='height:5px;background-color:transparent;border:none'></tr>"
    invenRows += invenRow
};

invenListEl.innerHTML = invenRows