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
    ["Regen++", "regen", "You're \"slowly\" recovering health.", "Potions", "+12 HP/turn"], //12
    ["Attack Up", "atk_up", "You feel stronger, and deal more damage.", "Potions", "+1 Direct Attack"], //13
    ["Attack Up+", "atk_up", "You feel stronger, and deal more damage.", "Potions", "+2 Direct Attack"], //14
    ["Attack Up++", "atk_up", "You feel significantly stronger, and deal more damage.", "Potions", "+3 Direct Attack"], //15
    ["Defense Up", "def_up", "You feel sturdier, and take less damage.", "Potions", "+1 Direct Defense"], //16
    ["Defense Up+", "def_up", "You feel sturdier, and take less damage.", "Potions", "+2 Direct Defense"], //17
    ["Defense Up++", "def_up", "You feel significantly sturdier, and take less damage.", "Potions", "+3 Direct Defense"], //18
    ["Blind", "blind", "Hey, who turned the lights out?", "Potions/Sand", "40% chance of missing an attack"], //18
    ["Badly Poisoned", "poisoned", "Okay, maybe <i>avoid</i> the purple stuff.", "Poison", "-9 to 6 HP each turn, depending on remaining duration"], //19
    ["Asleep", "sleep", "The ground isn't a very good place to sleep, you know.", "Sleeping", "Can't do anything<br />Can attempt to wake up, 75% success rate<br />Getting hit removes this effect"], //20
    ["Deep Sleep", "sleep", "Hey, wake up already!", "Sleeping", "Can't do anything<br />Can attempt to wake up, 45% success rate<br />Getting hit replaces this effect with Asleep"], //21
    ["Restful Sleep", "sleep", "That's a nice bed you got there.", "Sleeping", "Can't do anything<br />Can attempt to wake up, 80% success rate<br />Getting hit removes this effect<br />+6 HP per turn"], //22
]