var effectlist = [ //[name, css class for icon, description, source, bonuses, [categories], name class id]
    ["None", "iconless", "Looks like someone forgot to clear the slot.", "An error", "", [0], 0], //0
    ["AFK", "afk", "Hey, where'd you go?", "Not playing", "Can't be interacted with", [34], 1], //1
    ["On Fire", "on_fire", "It burns, like fire normally does.", "Fire", "-4 HP each turn<br />Items have a small chance of burning up", [34, 35], 1], //2
    ["Frozen", "frozen", "Where'd all this ice come from, anyway?", "Ice", "Can't move", [34, 35], 1], //3
    ["KOd", "ko", "Maybe pay more attention to your HP next time?", "Reaching 0 HP", "Can't interact with anything<br />Can't be interacted with", [34, 35], 3], //4
    ["Paralyzed", "paralyzed", "Bzzzt!", "Electricity", "Actions have a 1/3 chance of failing<br />If an action fails due to this, you take 3 damage", [34, 35], 1], //5
    ["Poisoned", "poisoned", "\"Oooh, what's this purple stuff do?\"", "Poison", "-6 to 3 HP each turn, depending on remaining duration", [34, 35], 1], //6
    ["Soaked", "soaked", "You stayed in the rain too long and now you're all soggy.", "Rain", "You keep tracking water everywhere", [34, 35], 1], //7
    ["Bleeding", "bleeding", "owie", "Taking damage", "-5 HP per turn<br />-1 Direct Attack", [34, 35], 1], //8
    ["Nausea", "poisoned", "You feel sick, and it's kinda hard to see.", "Spoiled food", "25% chance of missing an attack<br />-1 to all skills", [34, 35], 1], //9
    ["Regen", "regen", "You're slowly recovering health.", "Potions", "+4 HP/turn", [34, 36], 1], //10
    ["Regen+", "regen", "You're slowly recovering health.", "Potions", "+8 HP/turn", [34, 36], 1], //11
    ["Regen++", "regen", "You're \"slowly\" recovering health.", "Potions", "+12 HP/turn", [34, 36], 2], //12
    ["Attack Up", "atk_up", "You feel stronger, and deal more damage.", "Potions", "+1 Direct Attack", [34, 36], 1], //13
    ["Attack Up+", "atk_up", "You feel stronger, and deal more damage.", "Potions", "+2 Direct Attack", [34, 36], 1], //14
    ["Attack Up++", "atk_up", "You feel significantly stronger, and deal more damage.", "Potions", "+3 Direct Attack", [34, 36], 2], //15
    ["Defense Up", "def_up", "You feel sturdier, and take less damage.", "Potions", "+1 Direct Defense", [34, 36], 1], //16
    ["Defense Up+", "def_up", "You feel sturdier, and take less damage.", "Potions", "+2 Direct Defense", [34, 36], 1], //17
    ["Defense Up++", "def_up", "You feel significantly sturdier, and take less damage.", "Potions", "+3 Direct Defense", [34, 36], 2], //18
    ["Blind", "blind", "Hey, who turned the lights out?", "Potions/Sand", "40% chance of missing an attack", [34, 35], 1], //18
    ["Badly Poisoned", "poisoned", "Okay, maybe <i>avoid</i> the purple stuff.", "Poison", "-9 to 6 HP each turn, depending on remaining duration", [34, 35], 2], //19
    ["Asleep", "sleep", "The ground isn't a very good place to sleep, you know.", "Sleeping", "Can't do anything<br />Can attempt to wake up, 75% success rate<br />Getting hit removes this effect", [34, 35], 1], //20
    ["Deep Sleep", "sleep", "Hey, wake up already!", "Sleeping", "Can't do anything<br />Can attempt to wake up, 45% success rate<br />Getting hit replaces this effect with Asleep", [34, 35], 2], //21
    ["Restful Sleep", "sleep", "That's a nice bed you got there.", "Sleeping", "Can't do anything<br />Can attempt to wake up, 80% success rate<br />Getting hit removes this effect<br />+6 HP per turn", [34, 36], 1], //22
    ["Rule-Breaker", "rule_breaker", "Stop that.", "Breaking a rule (FS1/2); Unobtainable (FS3)", "-50% Max HP", [34, 35, 38, 39, 40], 7], //23
    ["Sour!", "sour", "Wow, that lemon (or lime) was really sour, and now you can't focus.", "Lemons (or limes)", "-2 Accuracy<br />-0.7 to all skills<br />-0.7 Direct Defense", [34, 35], 1], //24
    ["Sugar Rush", "sugar_rush", "You're filled with sugar. Nyoom!", "Sugar", "-1 Accuracy<br />+0.6 to all skills<br />+0.7 Direct Attack", [34, 36], 1], //25
    ["Oiled", "oiled", "You're covered in flammable oil.", "Lamp Oil", "-0.3 to Farming and Gardening<br />On Fire deals 3 more damage per turn<br />On Fire has a 20% chance to not tick down", [34, 35], 1], //26
]