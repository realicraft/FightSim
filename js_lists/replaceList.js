var replaceSingleList = { // keyword: replacement
    "hr": "[img=Horizontal rule]https://realicraft.github.io/FightSim/Icons/Exported/hr.png[/img]",
    "links": "[url=https://realicraft.github.io/FightSim/3/]Website[/url] [url=https://fightsim.miraheze.org/wiki/Main_Page]Wiki[/url]",
}
var replaceDoubleList = { // keyword: "replacement before", "replacement after"
    "b": ["[b]", "[/b]"],
    "i": ["[i]", "[/i]"],
    "u": ["[u]", "[/u]"],
    "s": ["[s]", "[/s]"],
    "bi": ["[b][i]", "[/i][/b]"],
    "green": ["[color=green]", "[/color]"],
    "red": ["[color=red]", "[/color]"],
    "crhit": ["[color=green][b]", "[/b][/color]"],
    "crmiss": ["[color=red][b]", "[/b][/color]"],
    "phone": ["[color=#0f5f0f]", "[/color]"],
    "comment": ["([color=transparent]","[/color])"],
}