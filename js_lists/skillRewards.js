// stone, coal, copper, iron, gold, electrum, diamond, emerald, hardite, geodes
var mineRewardList = [
    [0,0,0,0,0,0,0,0,0,0], //1
    [0,0,0,0,0,0,0,0,0,0], //2
    [0,0,0,0,0,0,0,0,0,0], //3
    [0,0,0,0,0,0,0,0,0,0], //4
    [1,0,0,0,0,0,0,0,0,0], //5
    [1,1,0,0,0,0,0,0,0,0], //6
    [1,1,1,0,0,0,0,0,0,0], //7
    [1,1,1,1,0,0,0,0,0,0], //8
    [2,1,1,1,1,0,0,0,0,1], //9
    [2,1,1,1,1,1,0,0,0,1], //10
    [2,1,1,1,1,1,0,0,0,1], //11
    [2,2,1,1,1,1,1,0,0,1], //12
    [3,2,1,1,1,1,1,1,0,1], //13
    [3,2,2,2,1,1,1,1,0,1], //14
    [3,2,2,2,1,1,1,1,0,1], //15
    [3,2,2,2,2,1,1,1,1,1], //16
    [4,2,2,2,2,2,1,1,1,2], //17
    [4,2,2,2,2,2,1,1,1,2], //18
    [4,3,2,2,2,2,2,1,1,2], //19
    [4,3,2,3,2,2,2,2,1,2], //20
    [5,3,2,3,2,2,2,2,1,2], //21
    [5,3,3,3,3,2,2,2,1,2], //22
    [5,3,3,3,3,3,2,2,1,2], //23
    [5,3,3,3,3,3,2,2,2,2], //24
    [6,3,3,3,3,3,2,2,2,3], //25
    [6,3,3,4,3,3,3,2,2,3], //26
    [6,4,3,4,3,3,3,3,2,3], //27
    [6,4,3,4,3,3,3,3,2,3], //28
    [7,4,3,4,4,3,3,3,2,3], //29
    [7,4,3,4,4,4,3,3,2,3], //30
    [7,4,4,4,4,4,3,3,3,3], //31
    [7,4,4,5,4,4,3,3,3,3], //32
    [8,4,4,5,4,4,3,3,3,4], //33
    [8,4,4,5,4,4,4,3,3,4], //34
    [8,4,4,5,5,4,4,4,3,4], //35
    [8,5,4,5,5,5,4,4,3,4], //36
    [9,5,4,6,5,5,4,4,4,4], //37
    [9,5,4,6,5,5,4,4,4,4], //38
    [9,5,4,6,5,5,4,4,4,4], //39
    [9,5,4,6,5,5,4,4,4,4], //40
]

// "name lang_str": [row[ item id, item dv, droprate, droprate max ](, [])]
var fishRewardList = {
    "junk": [
        [[184,0,1,7],[186,0,1,7],[392,0,2,7],[385,0,3,7]]
    ],"poor": [
        [[187,0,1,2],[561,0,1,2]]
    ],"mediocre": [
        [[188,0,2,3],[390,0,1,3]]
    ],"good": [
        [[189,0,1,1]]
    ],"great": [
        [[190,0,3,4],[393,0,1,4]]
    ],"excelent": [
        [[191,0,4,5],[394,0,1,5]]
    ],"treasure": [
        [[191,0,3,9],[180,0,1,9],[395,0,2,9],[396,0,1,9],[401,0,2,9]]
    ],
}