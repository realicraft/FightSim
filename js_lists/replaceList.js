var replaceSingleList = { // keyword: replacement
    "hr": "[img=Horizontal rule]https://realicraft.github.io/FightSim/Icons/Exported/hr.png[/img]",
    "links": "[url=https://realicraft.github.io/FightSim/3/]Website[/url] [url=https://fightsim.miraheze.org/wiki/Main_Page]Wiki[/url]",
    "coi": "[img=Coin]https://realicraft.github.io/FightSim/Icons/Text/coin.png[/img]",
    "dec": "[img=Decicoin]https://realicraft.github.io/FightSim/Icons/Text/decicoin.png[/img]",
    "dol": "[img=Dollar Bill]https://realicraft.github.io/FightSim/Icons/Text/dollar_bill.png[/img]",
    "rub": "[img=Ruby]https://realicraft.github.io/FightSim/Icons/Text/ruby.png[/img]",
    "pho": "[img=Phone]https://realicraft.github.io/FightSim/Icons/Text/phone.png[/img]",
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
    "phone": ["[img=Phone]https://realicraft.github.io/FightSim/Icons/Text/phone.png[/img][color=#0f5f0f]", "[/color]"],
    "comment": ["([color=transparent]","[/color])"],
}