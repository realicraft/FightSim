var effectlist = [ //[name, css class for icon, description, source, bonuses]
    ["None", "iconless", "Looks like someone forgot to clear the slot.", "An error", ""], //0
    ["AFK", "afk", "Hey, where'd you go?", "Not playing", "Can't be interacted with"], //1
    ["On Fire", "on_fire", "It burns, like fire normally does.", "Fire", "-4 HP each turn<br />Items have a small chance of burning up"], //2
    ["Frozen", "frozen", "Where'd all this ice come from, anyway?", "Ice", "Can't move"], //3
    ["KOd", "ko", "Maybe pay more attention to your HP next time?", "Reaching 0 HP", "Can't interact with anything<br />Can't be interacted with"], //4
    ["Paralyzed", "paralyzed", "Bzzzt!", "Electricity", "Actions have a 1/3 chance of failing<br />If an action fails due to this, you take 3 damage"], //5
    ["Poisoned", "poisoned", "\"Oooh, what's this purple stuff do?\"", "Poison", "-6 to 3 HP each turn, depending on remaining duration"], //6
    ["Soaked", "soaked", "You stayed in the rain too long and now you're all soggy.", "Rain", "You keep tracking water everywhere"], //7
    ["Bleeding", "bleeding", "owie", "Taking damage", "-5 HP per turn<br />-1 Direct Attack"], //8
    ["Nausea", "poisoned", "You feel sick, and it's kinda hard to see.", "Spoiled food", "25% chance of missing an attack<br />-1 to all skills"], //9
    ["Regen", "regen", "You're slowly recovering health.", "Potions", "+4 HP/turn"], //10
    ["Regen+", "regen", "You're slowly recovering health.", "Potions", "+8 HP/turn"], //11
    ["Regen++", "regen", "You're slowly recovering health.", "Potions", "+12 HP/turn"], //12
    ["Attack Up", "atk_up", "You feel stronger, and deal more damage.", "Potions", "+1 Direct Attack"], //13
    ["Attack Up+", "atk_up", "You feel stronger, and deal more damage.", "Potions", "+2 Direct Attack"], //14
    ["Attack Up++", "atk_up", "You feel significantly stronger, and deal more damage.", "Potions", "+3 Direct Attack"], //15
    ["Defense Up", "def_up", "You feel sturdier, and take less damage.", "Potions", "+1 Direct Defense"], //16
    ["Defense Up+", "def_up", "You feel sturdier, and take less damage.", "Potions", "+2 Direct Defense"], //17
    ["Defense Up++", "def_up", "You feel significantly sturdier, and take less damage.", "Potions", "+3 Direct Defense"], //18
    ["Blind", "blind", "Hey, who turned the lights out?", "Sand", "40% chance of missing an attack"], //18
]