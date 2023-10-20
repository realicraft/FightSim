var replaceSingleList = { // keyword: replacement
    "hr": "[img alt=Horizontal rule]https://realicraft.github.io/FightSim/Icons/Exported/hr.png[/img]",
    "hr2": "[hr]",
    "br": "[br]",
    "links": "[url=https://realicraft.github.io/FightSim/3/]Website[/url] [url=https://fightsim.miraheze.org/wiki/Main_Page]Wiki[/url] [url=https://forms.gle/VtpwBew9qHj1NcUt9]Disp. Phone Submission Form[/url]",
    "coi": "[img alt=Coin]https://realicraft.github.io/FightSim/Icons/Text/coin.png[/img]",
    "dec": "[img alt=Decicoin]https://realicraft.github.io/FightSim/Icons/Text/decicoin.png[/img]",
    "dol": "[img alt=Dollar Bill]https://realicraft.github.io/FightSim/Icons/Text/dollar_bill.png[/img]",
    "rub": "[img alt=Ruby]https://realicraft.github.io/FightSim/Icons/Text/ruby.png[/img]",
    "pho": "[img alt=Phone]https://realicraft.github.io/FightSim/Icons/Text/phone.png[/img]",
    "needcite": "[sup][[i][url=\"https://en.wikipedia.org/wiki/Wikipedia:Citation_needed\"]citation needed[/url][/i]][/sup]",
}
var replaceDoubleList = { // keyword: "replacement before", "replacement after", parse inside?
    // bbcode tags
    "b": ["[b]", "[/b]", true],
    "i": ["[i]", "[/i]", true],
    "u": ["[u]", "[/u]", true],
    "s": ["[s]", "[/s]", true],
    "*": ["[li]", "[/li]", true],
    "bi": ["[b][i]", "[/i][/b]", true],
    "sup": ["[sup]", "[/sup]", true],
    "sub": ["[sub]", "[/sub]", true],
    // specific tags
    "green": ["[color=green]", "[/color]", true],
    "red": ["[color=red]", "[/color]", true],
    "crhit": ["[color=green][b]", "[/b][/color]", true],
    "crmiss": ["[color=red][b]", "[/b][/color]", true],
    "phone": ["[img alt=Phone]https://realicraft.github.io/FightSim/Icons/Text/phone.png[/img][color=#0f5f0f]", "[/color]", true],
    "comment": ["([color=transparent]","[/color])", true],
    // bbcode tags 2
    "quote": ["[quote]","[/quote]", true],
    "code": ["[code]","[/code]", false],
    "list": ["[list]","[/list]", true],
    "nlist": ["[list type=decimal]","[/list]", true],
    "pre": ["[pre]","[/pre]", false],
    // fonts
    "small": ["[size=1]","[/size]", true],
    "normal": ["[size=2]","[/size]", true],
    "large": ["[size=3]","[/size]", true],
    "larger": ["[size=4]","[/size]", true],
    "massive": ["[size=5]","[/size]", true],
    "gigantic": ["[size=6]","[/size]", true],
    "extreme": ["[size=7]","[/size]", true],
    "arial": ["[font=Arial]","[/font]", true],
    "comicsans": ["[font=Comic Sans MS]","[/font]", true],
    "courier": ["[font=Courier New]","[/font]", true],
    "impact": ["[font=Impact]","[/font]", true],
    "times": ["[font=Times New Roman]","[/font]", true],
    "trebuche": ["[font=Trebuche MS]","[/font]", true],
    "verdana": ["[font=Verdana]","[/font]", true],
    "wingdings": ["[font=Wingdings]","[/font]", true],
    // tables
    "table": ["[table]","[/table]", true],
    "tr": ["[tr]","[/tr]", true],
    "td": ["[td]","[/td]", true],
    // wiki links
    "wiki": ["[i][[", "]][/i]", true],
    // esolang output
    "esocode": ["[pre][color=green]", "[/color][/pre]", false],
    "esooutput": ["[pre][color=#002f00]", "[/color][/pre]", false],
    "esowarn": ["[pre][color=red]", "[/color][/pre]", false],
    "esoerror": ["[pre][color=red][b]", "[/b][/color][/pre]", false],
    // types
    "normal": ["[color=#5f5f5f]","[/color]", true],
    "fire": ["[color=#4f0f0f]","[/color]", true],
    "water": ["[color=#0f0f5f]","[/color]", true],
    "elec": ["[color=#4f4f0f]","[/color]", true],
    "plant": ["[color=#0f4f0f]","[/color]", true],
    "ice": ["[color=#0f4f4f]","[/color]", true],
    "light": ["[color=#5f5f1f]","[/color]", true],
    "dark": ["[color=#1f1f4f]","[/color]", true],
    // players
    "reali": ["[color=#5f4f0f][b]reali[/b]: ","[/color]", true],
    "incend": ["[color=#5f2f0f][b]Incendiary[/b]: ","[/color]", true],
    "byron": ["[color=#3f1f0f][b]Byron[/b]: ","[/color]", true],
    "cheesy": ["[color=#6f5f0f][b]Cheesy[/b]: ","[/color]", true],
    "sparky": ["[color=#6f5f0f][b]Sparky[/b]: ","[/color]", true],
    "soli": ["[color][b]Solitare[/b]: ","[/color]", true],
    "fares": ["[color=#0f3f0f][b]Faressain[/b]: ","[/color]", true],
    "gilb": ["[color][b]gilbert[/b]: ","[/color]", true],
    "twi": ["[color=#4f0f4f][b]Twilight[/b]: ","[/color]", true],
    "luigi": ["[color=#0f5f0f][b]Luigi[/b]: ","[/color]", true],
    "kitty": ["[color=#3f0f3f][b]Kitty[/b]: ","[/color]", true],
    "savvy": ["[color][b]Savvy[/b]: ","[/color]", true],
    "bobby": ["[color][b]bobby[/b]: ","[/color]", true],
    "tony": ["[color=#2f1f00][b]Tony[/b]: ","[/color]", true],
    "landon": ["[color][b]Landon[/b]: ","[/color]", true],
    // npcs
    "laurie": ["[color=#5f0f5f][b]Laurie[/b]: ","[/color]", true],
    "morshu": ["[color=#5f2f0f][b]Morshu[/b]: ","[/color]", true],
    "hank": ["[color=#5f0f0f][b]Hank[/b]: ","[/color]", true],
    "sans": ["[b]Sans[/b]: [font=Comic Sans MS]","[/font]", true],
}