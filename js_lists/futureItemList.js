var futureitemlist =  [ //[name, css class for icon, description, source, bonuses, [categories], name class id, sell price]
    // gun
    [["Bullet", "bullet", "A bullet. You know, for a gun.", "Crafting", "Use it with a gun", [22,56], 2, 0]], //? (2 iron bars + 1 copper bar = 8 bullet)
    // carving/cooking tools

    // ms4/5/6 tools

    // new equipment tiers (copper/clay, depleted electrum, ruby-sapphire)

    // skill items
    [["Crafting Table", "crafting_table", "A crafting table.", "Crafting", "+2 Crafting", [17], 1, 5]], //? (4 planks)
    [["Brewing Stand", "brewing_stand", "A brewing stand.", "Crafting", "+1 Alchemy<br />+1 max potion brewed at once", [17], 2, 11]], //? (3 glass bottles + 3 stone + 1 iron bar)
    [["Silt", "silt", "A cube of silt. There might be some stuff inside!", "Digging", "", [17], 1, 2]], //? (from digging)
    // shop items

    // stickers
    [["Clover Sticker", "sticker_clover", "A sticker of a four-leaf clover.<br />[St3, 1, C]", "Unknown", "Put it in your Sticker Book for +0.5 Luck", [20,37], 1, 0]], //?
    [["Raised Clover Sticker", "sticker_clover_rare", "A raised sticker of a four-leaf clover. No, it doesn't have a 1/20 chance to act like an eight-leaf clover.<br />[St3, 2, R]", "Unknown", "Put it in your Sticker Book for +1.1 Luck", [20,37], 3, 0]], //?
    [["Chevron Sticker", "sticker_chevron", "A sticker of two chevrons. You know, the arrow shape used in speed boost icons.<br />[St3, 3, C]", "Unknown", "Put it in your Sticker Book for +0.5 Speed", [20,37], 1, 0]], //?
    [["Raised Chevron Sticker", "sticker_chevron_rare", "A raised sticker of two chevrons.<br />[St3, 4, R]", "Unknown", "Put it in your Sticker Book for +1.1 Speed", [20,37], 3, 0]], //?
    [["Saw Sticker", "sticker_saw", "A sticker of a saw.<br />[St3, 5, C]", "Unknown", "Put it in your Sticker Book for +0.7 Crafting", [20,37], 1, 0]], //?
    [["Raised Saw Sticker", "sticker_saw_rare", "A raised sticker of a saw. It's not that sharp.<br />[St3, 6, R]", "Unknown", "Put it in your Sticker Book for +2 Crafting", [20,37], 3, 0]], //?
    [["Carving Knife Sticker", "sticker_carve_knife", "A sticker of a carving knife. Not to be confused with a sticker of a knife.<br />[St3, 7, C]", "Unknown", "Put it in your Sticker Book for +0.7 Carving", [20,37], 1, 0]], //?
    [["Raised Carving Knife Sticker", "sticker_carve_knife_rare", "A raised sticker of a carving knife.<br />[St3, 8, R]", "Unknown", "Put it in your Sticker Book for +2 Carving", [20,37], 3, 0]], //?
    [["Ladle Sticker", "sticker_ladle", "A sticker of a ladle.<br />[St3, 9, C]", "Unknown", "Put it in your Sticker Book for +0.7 Cooking", [20,37], 1, 0]], //?
    [["Raised Ladle Sticker", "sticker_ladle_rare", "A raised sticker of a ladle. The water's fake.<br />[St3, 10, R]", "Unknown", "Put it in your Sticker Book for +2 Cooking", [20,37], 3, 0]], //?
    [["Pot Sticker", "sticker_pot", "A sticker of a pot.<br />[St3, 11, C]", "Unknown", "Put it in your Sticker Book for +0.7 Pottery", [20,37], 1, 0]], //?
    [["Raised Pot Sticker", "sticker_pot_rare", "A raised sticker of a pot. It might be hollow?<br />[St3, 12, R]", "Unknown", "Put it in your Sticker Book for +2 Pottery", [20,37], 3, 0]], //?
    [["Ballet Shoes Sticker", "sticker_ballet", "A sticker of a pair of ballet shoes.<br />[St3, 13, C]", "Unknown", "Put it in your Sticker Book for +0.7 Dancing", [20,37], 1, 0]], //?
    [["Raised Ballet Shoes Sticker", "sticker_ballet_rare", "A raised sticker of a pair of ballet shoes. The ribbons are made of real ribbon.<br />[St3, 14, R]", "Unknown", "Put it in your Sticker Book for +2 Dancing", [20,37], 3, 0]], //?
    [["Microphone Sticker", "sticker_microphone", "A sticker of a microphone.<br />[St3, 15, C]", "Unknown", "Put it in your Sticker Book for +0.7 MS4", [20,37], 1, 0]], //?
    [["Raised Microphone Sticker", "sticker_microphone_rare", "A raised sticker of a microphone.<br />[St3, 16, R]", "Unknown", "Put it in your Sticker Book for +2 MS4", [20,37], 3, 0]], //?
    [["Golf Ball Sticker", "sticker_golf_ball", "A sticker of a golf ball.<br />[St3, 17, C]", "Unknown", "Put it in your Sticker Book for +0.7 MS5", [20,37], 1, 0]], //?
    [["Raised Golf Ball Sticker", "sticker_golf_ball_rare", "A raised sticker of a golf ball.<br />[St3, 18, R]", "Unknown", "Put it in your Sticker Book for +2 MS5", [20,37], 3, 0]], //?
    [["Fly Sticker", "sticker_fly", "A sticker of a fly. You know, I'm pretty sure flies don't look like circles with wings.<br />[St3, 19, C]", "Unknown", "Put it in your Sticker Book for +0.7 MS6", [20,37], 1, 0]], //?
    [["Raised Fly Sticker", "sticker_fly_rare", "A raised sticker of a fly.<br />[St3, 20, R]", "Unknown", "Put it in your Sticker Book for +2 MS6", [20,37], 3, 0]], //?

    // upgrades (note: upgrades might all be merged into one item that uses nbt)
    [["Speed Upgrade", "upgrade_speed", "An upgrade square that upgrades Speed.", "Summon/Ally", "+1 Speed", [44], 1, 0]], //?
    [["STR Upgrade", "upgrade_str", "An upgrade square that upgrades STR.", "Summon/Ally", "+1 STR", [44], 1, 0]], //?
    [["INT Upgrade", "upgrade_int", "An upgrade square that upgrades INT.", "Summon/Ally", "+1 INT", [44], 1, 0]], //?
    [["AGI Upgrade", "upgrade_agi", "An upgrade square that upgrades AGI.", "Summon/Ally", "+1 AGI", [44], 1, 0]], //?
    [["CHR Upgrade", "upgrade_chr", "An upgrade square that upgrades CHR.", "Summon/Ally", "+1 CHR", [44], 1, 0]], //?
    [["DEX Upgrade", "upgrade_dex", "An upgrade square that upgrades DEX.", "Summon/Ally", "+1 DEX", [44], 1, 0]], //?
    [["CON Upgrade", "upgrade_con", "An upgrade square that upgrades CON.", "Summon/Ally", "+1 CON", [44], 1, 0]], //?

    // electrum revamp
    [["Electrum Nugget", "electrum_nugget", "A nugget of electrum. It's like a weak battery.", "Crafting", "Contains {eu_stored}/1 EU<br />Discharge: 1 EU/t", [11,41,58], 1, 2]], //371?
    [["Graphite", "graphite", "A chunk of graphite. It's made of carbon.", "Crafting", "", [11,24], 1, 4]], //? (3 coal = 2 graphite, req. craft 2)
    [["Graphite Nugget", "graphite_nugget", "A nugget of graphite. It's like a really bad pencil.", "Crafting", "", [11,41], 1, 1]], //? (2 graphite = 5 graphite nuggets)
    [["Silicon", "silicon", "A disk of silicon.", "Crafting", "", [11,24], 1, 5]], //? (3 quartz = 2 silicon, req. craft 2) or (2 sand + 3 fuel = 2 silicon, req. craft 1)
    [["Battery", "battery", "A battery.", "Crafting", "Contains {eu_stored}/10 EU<br />Maximum Output: 5 EU/t", [11,58], 1, 4]], //? (1 iron bar + 3 electrum bars = 2 batteries)

    // other
    [["Pencil", "pencil", "A pencil. You don't really have a use for this, so you should just sell it.", "Crafting", "", [20], 1, 2]], //? (5 sticks + 1 graphite = 5 pencils) or (1 stick + 1 graphite nugget = 1 pencil)
    [["Glass Table", "glass_table", "A table with an iron frame and glass top. You can put things on it.", "Crafting", "Place it down as a Structure", [18], 1, 6]], //? (2 iron bars + 1 glass, req. const 2)
    [["Cheese", "cheese", "A wedge of generic cheese. If you added holes, then it would be more obvious that it's cheese, but you'd also have less cheese.", "Cooking", "+4 HP on consume", [10,30], 1, 4]], //? (1 milk bucket = 2 cheese, returns bucket)
    // dagger
    // stool, wool chairs, wood bench, pebbles, bookshelf, lamps, table lamps
    // punching bag (leather and sand)
    // ice block
    // monocle
    // mod textures (not items): sleeping bags (comforts)
]