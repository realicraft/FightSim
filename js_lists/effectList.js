var effectlist = [ //[name, css class for icon, description, source, bonuses, [categories], name class id]
    ["None", "iconless", "Looks like someone forgot to clear the slot.", "An error", "", [0], 0], //0
    ["AFK", "afk", "Hey, where'd you go?", "Not playing for 4 turns", "Can't be interacted with", [34], 1], //1
    ["On Fire", "on_fire", "It burns, like fire normally does.", "Fire", "-4 HP each turn<br />Items have a small chance of burning up", [34, 35, 49], 1], //2
    ["Frozen", "frozen", "Where'd all this ice come from, anyway?", "Ice", "Can't move", [34, 35, 53], 1], //3
    ["KOd", "ko", "Maybe pay more attention to your HP next time?", "Reaching 0 HP", "Can't interact with anything<br />Can't be interacted with", [34, 35], 3], //4
    ["Paralyzed", "paralyzed", "Bzzzt!", "Electricity", "Actions have a 1/3 chance of failing<br />If an action fails due to this, you take 3 damage", [34, 35, 51], 1], //5
    ["Poisoned", "poisoned", "\"Oooh, what's this purple stuff do?\"", "Poison", "-6 to 3 HP each turn, depending on remaining duration", [34, 35], 1], //6
    ["Soaked", "soaked", "You stayed in the rain too long and now you're all soggy.", "Rain", "You keep tracking water everywhere", [34, 35, 50], 1], //7
    ["Bleeding", "bleeding", "owie", "Taking damage", "-5 HP per turn<br />-1 Direct Attack", [34, 35], 1], //8
    ["Nausea", "poisoned", "You feel sick, and it's kinda hard to see.", "Eating 5+ food at once", "25% chance of missing an attack<br />-1 to all skills", [34, 35], 1], //9
    ["Regen", "regen", "You're slowly recovering health.", "Potions", "+3 HP/turn", [34, 36], 1], //10
    ["Regen+", "regen", "You're slowly recovering health.", "Potions", "+6 HP/turn", [34, 36], 1], //11
    ["Regen++", "regen", "You're \"slowly\" recovering health.", "Potions", "+9 HP/turn", [34, 36], 2], //12
    ["Attack Up", "atk_up", "You feel stronger, and deal more damage.", "Potions", "+1 Direct Attack", [34, 36], 1], //13
    ["Attack Up+", "atk_up", "You feel stronger, and deal more damage.", "Potions", "+2 Direct Attack", [34, 36], 1], //14
    ["Attack Up++", "atk_up", "You feel significantly stronger, and deal more damage.", "Potions", "+3 Direct Attack", [34, 36], 2], //15
    ["Defense Up", "def_up", "You feel sturdier, and take less damage.", "Potions", "+1 Direct Defense", [34, 36], 1], //16
    ["Defense Up+", "def_up", "You feel sturdier, and take less damage.", "Potions", "+2 Direct Defense", [34, 36], 1], //17
    ["Defense Up++", "def_up", "You feel significantly sturdier, and take less damage.", "Potions", "+3 Direct Defense", [34, 36], 2], //18
    ["Blind", "blind", "Hey, who turned the lights out?", "Potions/Sand", "40% chance of missing an attack", [34, 35, 55], 1], //19
    ["Badly Poisoned", "poisoned", "Okay, maybe <i>avoid</i> the purple stuff.", "Poison", "-9 to 6 HP each turn, depending on remaining duration", [34, 35], 2], //20
    ["Asleep", "sleep", "The ground isn't a very good place to sleep, you know.", "Sleeping", "Can't do anything<br />Can attempt to wake up, 75% success rate<br />Getting hit removes this effect", [34, 35], 1], //21
    ["Deep Sleep", "deep_sleep", "Hey, wake up already!", "Sleeping", "Can't do anything<br />Can attempt to wake up, 45% success rate<br />Getting hit replaces this effect with Asleep", [34, 35], 2], //22
    ["Restful Sleep", "sleep", "That's a nice bed you got there.", "Sleeping", "Can't do anything<br />Can attempt to wake up, 80% success rate<br />Getting hit removes this effect<br />+6 HP per turn", [34, 36], 1], //23
    ["Rule-Breaker", "rule_breaker", "Stop that.", "Breaking a rule (FS1/2); Unobtainable (FS3)", "-50% Max HP", [34, 35, 38, 39, 40], 7], //24
    ["Sour!", "sour", "Wow, that lemon (or lime) was really sour, and now you can't focus.", "Lemons (or limes)", "-2 Accuracy<br />-0.7 to all skills<br />-0.7 Direct Defense", [34, 35], 1], //25
    ["Sugar Rush", "sugar_rush", "You're filled with sugar. Nyoom!", "Sugar", "-1 Accuracy<br />+0.6 to all skills<br />+0.7 Direct Attack", [34, 36], 1], //26
    ["Oiled", "oiled", "You're covered in flammable oil.", "Lamp Oil", "-0.3 to Farming and Gardening<br />On Fire deals 3 more damage per turn<br />On Fire has a 20% chance to not tick down", [34, 35], 1], //27
    ["Severe Nausea", "poisoned", "You ate WAY too much food, and now you feel like you want to die.", "Eating 10+ food at once", "66% chance of missing an attack<br />-3 to all skills<br />-2 Direct Defense<br />-8 HP per turn<br />On expire, gain Nausea for 1 turn", [34, 35], 2], //28
    ["Invisible", "invisible", "You're invisible.", "Potions", "Attacks made on you must make an acccuracy roll (>=11) to succeed", [34, 36], 1], //29
    ["Misted", "misted", "You've been turned to mist, somehow.", "Unknown (FS1/2); Unobtainable (FS3)", "Attacks made on you must make an acccuracy roll (>=11) to succeed", [34, 36, 38, 39, 40], 7], //30
    ["Scared", "scared", "help", "Unknown", "-2 Direct Attack<br />-1 Direct Defense<br />-1 to all Skills", [34, 35], 2], //31
    ["Leech Seed (User)", "leech_seed", "You threw some seeds at someone, and now you're stealing their health. Neat.", "Unknown", "Sap 4 HP per turn<br />If the target loses Leech Seed (Target), this effect immediately expires", [34, 36], 2], //32
    ["Leech Seed (Target)", "leech_seed", "Someone threw some seeds at you, and now they're stealing your health. Well, that's annoying.", "Unknown", "4 HP is sapped from you per turn<br />If the attacker loses Leech Seed (User), this effect immediately expires", [34, 35], 2], //33
    ["Shackles of Pain (User)", "shackles_pain", "You're making someone take the damage you take.", "Unknown", "When you take damage, target will also take damage<br />If the target loses Shackles of Pain (Target), this effect immediately expires", [34, 36, 40], 7], //34
    ["Shackles of Pain (Target)", "shackles_pain", "Someone's making you take the damage they take.", "Unknown", "When the attacker takes damage, you will also take damage<br />If the attacker loses Shackles of Pain (User), this effect immediately expires", [34, 35, 40], 7], //35
    ["Intimidated", "intimidated", "Someone intimidated you, and now you're kinda scared.", "Unknown", "-1 Direct Attack", [34, 35], 1], //36
    ["Defending Ally", "shield", "You're defending your Ally (or Summon.)", "Unknown", "Ally/Summon gains 2 Direct Defense<br />You take 50% of damage ally/summon would have taken", [34, 36], 1], //37
    ["Very AFK", "very_afk", "You ever gonna, like, start playing again? No? Then I call dibs on your inventory.", "Not playing for 8 turns", "Can't be interacted with, except for theft", [34], 3], //38
    ["Night Vision", "night_vision", "You are better at seeing at night.<br /><br />Since your sight during the night is basically the same as during the day, this is just a night-locked sight boost.", "Potions", "Does nothing during daytime or dawn<br />+1 All Accuracy<br />+2 AGI/DEX<br />+1 to all Skills", [34, 35], 2], //39
    ["Fire-charged", "on_fire", "You're engulfed in a surprisingly harmless layer of fire. You should put it somewhere.", "Unknown", "Expended on melee attack to deal 10 <span class='fire'>Fire</span> damage<br />Auto-expended when melee attacked<br />Can be turned into 3 Fire", [34, 35, 49], 3], //40
    ["Water-charged", "soaked", "You're covered in a layer of water (yet you can still breathe). You should put it somewhere.", "Unknown", "Expended on melee attack to deal 10 <span class='water'>Water</span> damage<br />Auto-expended when melee attacked<br />Can be turned into 3 Water", [34, 35, 50], 3], //41
    ["Thunder-charged", "paralyzed", "You're brimming with electricity. You should put it somewhere.", "Lighting", "Expended on melee attack to deal 10 <span class='electric'>Electric</span> damage<br />Auto-expended when melee attacked<br />Can be turned into 3 Batteries", [34, 35, 51], 3], //42
]