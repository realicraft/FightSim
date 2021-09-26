var effectlist = [ //[name, css class for icon, description, source, bonuses]
    ["None", "iconless", "Looks like someone forgot to clear the slot.", "An error", ""], //0
    ["AFK", "afk", "Hey, where'd you go?", "Not playing", "Can't be interacted with"], //1
    ["On Fire", "on_fire", "It burns, like fire normally does.", "Fire", "-4 HP each turn<br />Items have a small chance of burning up"], //2
    ["Frozen", "frozen", "Where'd all this ice come from, anyway?", "Ice", "Can't move"], //3
    ["KOd", "ko", "Maybe pay more attention to your HP next time?", "Reaching 0 HP", "Can't interact with anything<br />Can't be interacted with"], //4
    ["Paralyzed", "paralyzed", "Bzzzt!", "Electricity", "Actions have a 1/3 chance of failing"], //5
    ["Poisoned", "poisoned", "\"Oooh, what's this purple stuff do?\"", "Poison", "-6 to 3 HP each turn, depending on remaining duration"], //6
    ["Soaked", "soaked", "You stayed in the rain too long and now you're all soggy.", "Rain", "You keep tracking water everywhere"], //7
    ["Bleeding", "bleeding", "owie", "Taking damage", "-5 HP per turn<br />-1 Direct Attack"] //8
]