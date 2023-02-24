var effectlist = [ //[name lang_id, css class for icon, description, source, bonuses, [categories], name class id]
    ["effect.none.name", "iconless", "effect.none.desc", "An error", "", [0], 0], //0
    ["effect.afk.name", "afk", "effect.afk.desc", "Not playing for 4 turns", "Can't be interacted with", [34], 1], //1
    ["effect.on_fire.name", "on_fire", "effect.on_fire.desc", "Fire", "-4 HP each turn<br />Items have a small chance of burning up", [34, 35, 49], 1], //2
    ["effect.frozen.name", "frozen", "effect.frozen.desc", "Ice", "Can't move", [34, 35, 53], 1], //3
    ["effect.ko.name", "ko", "effect.ko.desc", "Reaching 0 HP", "Can't interact with anything<br />Can't be interacted with", [34, 35], 3], //4
    ["effect.paralyzed.name", "paralyzed", "effect.paralyzed.desc", "Electricity", "Actions have a 1/4 chance of failing<br />If an action fails due to this, you take 4 damage", [34, 35, 51], 1], //5
    ["effect.poisoned.name", "poisoned", "effect.poisoned.desc", "Poison", "-6 to 3 HP each turn, depending on remaining duration", [34, 35], 1], //6
    ["effect.soaked.name", "soaked", "effect.soaked.desc", "Rain", "You keep tracking water everywhere", [34, 35, 50], 1], //7
    ["effect.bleeding.name", "bleeding", "effect.bleeding.desc", "Taking damage", "-5 HP per turn<br />-1 Direct Attack", [34, 35], 1], //8
    ["effect.nausea.name", "poisoned", "effect.poisoned.desc", "Eating 5+ food at once", "25% chance of missing an attack<br />-1 to all skills", [34, 35], 1], //9
    ["effect.regen.name", "regen", "effect.regen.desc", "Potions", "+3 HP/turn", [34, 36], 1], //10
    ["effect.regen+.name", "regen", "effect.regen+.desc", "Potions", "+6 HP/turn", [34, 36], 1], //11
    ["effect.regen++.name", "regen", "effect.regen++.desc", "Potions", "+9 HP/turn", [34, 36], 2], //12
    ["effect.atk_up.name", "atk_up", "effect.atk_up.desc", "Potions", "+1 Direct Attack", [34, 36], 1], //13
    ["effect.atk_up+.name", "atk_up", "effect.atk_up+.desc", "Potions", "+2 Direct Attack", [34, 36], 1], //14
    ["effect.atk_up++.name", "atk_up", "effect.atk_up++.desc", "Potions", "+3 Direct Attack", [34, 36], 2], //15
    ["effect.def_up.name", "def_up", "effect.def_up.desc", "Potions", "+1 Direct Defense", [34, 36], 1], //16
    ["effect.def_up+.name", "def_up", "effect.def_up+.desc", "Potions", "+2 Direct Defense", [34, 36], 1], //17
    ["effect.def_up++.name", "def_up", "effect.def_up++.desc", "Potions", "+3 Direct Defense", [34, 36], 2], //18
    ["effect.blind.name", "blind", "effect.blind.desc", "Potions/Sand", "40% chance of missing an attack", [34, 35, 55], 1], //19
    ["effect.badly_poisoned.name", "poisoned", "effect.badly_poisoned.desc", "Poison", "-9 to 6 HP each turn, depending on remaining duration", [34, 35], 2], //20
    ["effect.sleep.name", "sleep", "effect.sleep.desc", "Sleeping", "Can't do anything<br />Can attempt to wake up, 75% success rate<br />Getting hit removes this effect", [34, 35], 1], //21
    ["effect.deep_sleep.name", "deep_sleep", "effect.deep_sleep.desc", "Sleeping", "Can't do anything<br />Can attempt to wake up, 45% success rate<br />Getting hit replaces this effect with Asleep", [34, 35], 2], //22
    ["effect.restful_sleep.name", "sleep", "effect.restful_sleep.desc", "Sleeping", "Can't do anything<br />Can attempt to wake up, 80% success rate<br />Getting hit removes this effect<br />+6 HP per turn", [34, 36], 1], //23
    ["effect.rule_breaker.name", "rule_breaker", "effect.rule_breaker.desc", "Breaking a rule (FS1/2); Unobtainable (FS3)", "-50% Max HP", [34, 35, 38, 39, 40], 7], //24
    ["effect.sour.name", "sour", "effect.sour.desc", "Lemons (or limes)", "-2 Accuracy<br />-0.7 to all skills<br />-0.7 Direct Defense", [34, 35], 1], //25
    ["effect.sugar_rush.name", "sugar_rush", "effect.sugar_rush.desc", "Sugar", "-1 Accuracy<br />+0.6 to all skills<br />+0.7 Direct Attack", [34, 36], 1], //26
    ["effect.oiled.name", "oiled", "effect.oiled.desc", "Lamp Oil", "-0.3 to Farming and Gardening<br />On Fire deals 3 more damage per turn<br />On Fire has a 20% chance to not tick down", [34, 35], 1], //27
    ["effect.severe_nausea.name", "poisoned", "effect.severe_nausea.desc", "Eating 10+ food at once", "66% chance of missing an attack<br />-3 to all skills<br />-2 Direct Defense<br />-8 HP per turn<br />On expire, gain Nausea for 1 turn", [34, 35], 2], //28
    ["effect.invisible.name", "invisible", "effect.invisible.desc", "Potions", "Attacks made on you must make an acccuracy roll (>=11) to succeed", [34, 36], 1], //29
    ["effect.misted.name", "misted", "effect.misted.desc", "Unknown (FS1/2); Unobtainable (FS3)", "Attacks made on you must make an acccuracy roll (>=11) to succeed", [34, 36, 38, 39, 40], 7], //30
    ["effect.scared.name", "scared", "effect.scared.desc", "Unknown", "-2 Direct Attack<br />-1 Direct Defense<br />-1 to all Skills", [34, 35], 2], //31
    ["effect.leech_seed_user.name", "leech_seed", "effect.leech_seed_user.desc", "Unknown", "Sap 4 HP per turn<br />If the target loses Leech Seed (Target), this effect immediately expires", [34, 36], 2], //32
    ["effect.leech_seed_target.name", "leech_seed", "effect.leech_seed_target.desc", "Unknown", "4 HP is sapped from you per turn<br />If the attacker loses Leech Seed (User), this effect immediately expires", [34, 35], 2], //33
    ["effect.shackles_pain_user.name", "shackles_pain", "effect.shackles_pain_user.desc", "Unknown", "When you take damage, target will also take damage<br />If the target loses Shackles of Pain (Target), this effect immediately expires", [34, 36, 40], 7], //34
    ["effect.shackles_pain_target.name", "shackles_pain", "effect.shackles_pain_target.desc", "Unknown", "When the attacker takes damage, you will also take damage<br />If the attacker loses Shackles of Pain (User), this effect immediately expires", [34, 35, 40], 7], //35
    ["effect.intimidated.name", "intimidated", "effect.intimidated.desc", "Unknown", "-1 Direct Attack", [34, 35], 1], //36
    ["effect.defend_ally.name", "shield", "effect.defend_ally.desc", "Unknown", "Ally/Summon gains 2 Direct Defense<br />You take 50% of damage ally/summon would have taken", [34, 36], 1], //37
    ["effect.very_afk.name", "very_afk", "effect.very_afk.desc", "Not playing for 8 turns", "Can't be interacted with, except for theft", [34], 3], //38
    ["effect.night_vision.name", "night_vision", "effect.night_vision.desc", "Potions", "Does nothing during daytime or dawn<br />+1 All Accuracy<br />+2 AGI/DEX<br />+1 to all Skills", [34, 36], 2], //39
    ["effect.fire_charged.name", "on_fire", "effect.fire_charged.desc", "Unknown", "Expended on melee attack to deal 10 <span class='fire'>Fire</span> damage<br />Auto-expended when melee attacked<br />Can be turned into 3 Fire", [34, 36, 49], 3], //40
    ["effect.water_charged.name", "soaked", "effect.water_charged.desc", "Unknown", "Expended on melee attack to deal 10 <span class='water'>Water</span> damage<br />Auto-expended when melee attacked<br />Can be turned into 3 Water", [34, 36, 50], 3], //41
    ["effect.thunder_charged.name", "paralyzed", "effect.thunder_charged.desc", "Lighting", "Expended on melee attack to deal 10 <span class='electric'>Electric</span> damage<br />Auto-expended when melee attacked<br />Can be turned into 3 Batteries", [34, 36, 51], 3], //42
    ["effect.slight_regen.name", "regen", "effect.slight_regen.desc", "Potions", "+1 HP/turn", [34, 36], 1], //43
    ["effect.slight_atk_up.name", "atk_up", "effect.slight_atk_up.desc", "Potions", "+1 Indirect Attack", [34, 36], 1], //44
    ["effect.slight_def_up.name", "def_up", "effect.slight_def_up.desc", "Potions", "+1 Indirect Defense", [34, 36], 1], //45
]