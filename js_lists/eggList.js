var egglist = { // year: [name, css class, code, description, reward]
    "2022": [
        ["Plain Egg", "egg_plain", "null", "Someone forgot to paint this egg.", "Nothing, because this egg is a placeholder."], //0
        ["Plain Egg", "egg_plain", "uncooked", "Someone forgot to paint this egg. How sad.", "An egg."], //1
        ["Red Egg", "egg_red", "bloody", "An egg that's been dyed red.", "2 Red Dye, 2 Tomatoes"], //2
        ["Orange Egg", "egg_orange", "LIKEthefruit", "An egg that's been dyed orange.", "2 Orange Dye, 2 Oranges"], //3
        ["Yellow Egg", "egg_yellow", "joltColor", "An egg that's been dyed yellow.", "2 Yellow Dye, 2 Wheat"], //4
        ["Green Egg", "egg_green", "midori", "An egg that's been dyed green.", "2 Green Dye, 2 Cabbage"], //5
        ["Cyan Egg", "egg_cyan", "lIGHTbLUE", "An egg that's been dyed cyan.", "2 Cyan Dye, 3 Water"], //6
        ["Blue Egg", "egg_blue", "bluSpy", "An egg that's been dyed blue.", "2 Blue Dye, 2 Blueberries"], //7
        ["Purple Egg", "egg_purple", "purpleColour", "An egg that's been dyed purple.", "2 Purple Dye, 2 Grapes"], //8
        ["White Egg", "egg_white", "maybecooked", "An egg that's been dyed white. Or maybe it's naturally white. Who knows?", "2 White Dye, 3 Bones"], //9
        ["Monochrome Egg", "egg_mono", "WhEeLcHaIr", "ee ah oo ee  ee ee oo ah  ah oh ah ah  ee ah oo ee\nee oo ee ee  ee ah ee ah  ah oh ah oh  ee ee oo ah", "150% Myst. Skill 4 Exp"], //10
        ["CGA Egg", "egg_cga", "myEyes", "But where's the cyan?", "1 Electrum Bar, 1 Plain Shirt"], //11
        ["Iron Egg", "egg_iron", "itGOESclonk", "It's basically just a large nugget.", "3 Iron Bars"], //12
        ["Copper Egg", "egg_copper", "mulTIPlePENnies", "You sure this is an egg?", "3 Copper Bars"], //13
        ["Gold Egg", "egg_gold", "good-ol-goose", "But where's the goose?", "3 Gold Bars"], //14
        ["Hardite Egg", "egg_hardite", "call-me", "This is probably the most valuable one.", "3 Hardite Bars"], //15
        ["Smiling Egg", "egg_smile", "makingItSure;thatYOUalwaysSMILE!", "he's a litol frend", "A smile on your face, although that's really just a side-effect of the 2 Prizes"], //16
        ["Broken Egg", "egg_broke", "whOOPS", "It's a good thing these eggs aren't fertilized.", "Everyone but you takes 5 damage"], //17
        ["Spotted Egg", "egg_spots", "yosh", "mlem mlem mlem mlem", "A random critter"], //18
        ["Fire Egg", "egg_fire", "ONFIRE", "An egg that's been dyed red and orange.", "Splash Potion of Ignition"], //19
        ["Blue Fire Egg", "egg_blue_fire", "NOTONFIRE", "An egg that's been dyed blue and cyan.", "Splash Potion of Flash Freeze"], //20
        ["Chocolate Egg", "egg_chocolate", "notINtheFRIDGE", "This better be filled with something edible.", "Everyone gets a chocolate egg."], //21
        ["Mineral Egg", "egg_mineral", "CONTROVERSY", "haha i stole your egg", "2 Geodes"], //22
        ["Egg Outline", "egg_vanish", "itemSlot", "There is no egg. Or spoon.", "Nothing"], //23
    ],
    "2023": [
        ["Plain Egg", "egg_plain", "null", "Someone forgot to paint this egg.", "Nothing, because this egg is a placeholder."], //0
        ["Plain Egg", "egg_plain", "paintit", "Someone forgot to paint this egg. How sad.", "An egg."], //1
        ["Red Egg", "egg_red", "RoseRed", "An egg that's been dyed red.", "2 Red Dye, 2 Tomatoes"], //2
        ["Orange Egg", "egg_orange", "fruity", "An egg that's been dyed orange.", "2 Orange Dye, 2 Oranges"], //3
        ["Yellow Egg", "egg_yellow", "sunFlower", "An egg that's been dyed yellow.", "2 Yellow Dye, 2 Wheat"], //4
        ["Green Egg", "egg_green", "shinyJoltColor", "An egg that's been dyed green.", "2 Green Dye, 2 Cabbage"], //5
        ["Cyan Egg", "egg_cyan", "itsNOTlightBLUE", "An egg that's been dyed cyan.", "2 Cyan Dye, 3 Water"], //6
        ["Blue Egg", "egg_blue", "bluEngie", "An egg that's been dyed blue.", "2 Blue Dye, 2 Blueberries"], //7
        ["Purple Egg", "egg_purple", "OURPLE", "An egg that's been dyed purple.", "2 Purple Dye, 2 Grapes"], //8
        ["White Egg", "egg_white", "paintcat", "An egg that's been dyed white. Or maybe it's naturally white. Who knows?", "2 White Dye, 3 Bones"], //9
        ["Monochrome Egg", "egg_mono", "HEDIED", "ee ah oo ee  ee ee oo ah  ah oh ah ah  ee ah oo ee\nee oo ee ee  ee ah ee ah  ah oh ah oh  ee ee oo ah", "150% Myst. Skill 4 Exp"], //10
        ["Iron Egg", "egg_iron", "metALIcMADnesS", "It's basically just a large nugget.", "3 Iron Bars"], //11
        ["Copper Egg", "egg_copper", "cOPPAH", "You sure this is an egg?", "3 Copper Bars"], //12
        ["Gold Egg", "egg_gold", "honkless-egg", "But where's the goose?", "3 Gold Bars"], //13
        ["Hardite Egg", "egg_hardite", "on-my-reusable", "This is probably the most valuable one.", "3 Hardite Bars"], //14
        ["Broken Egg", "egg_broke", "WHoopsie", "It's a good thing these eggs aren't fertilized.", "Everyone but you takes 5 damage"], //15
        ["Fire Egg", "egg_fire", "enFLamED", "An egg that's been dyed red and orange.", "Someone random is set On Fire"], //16
        ["Blue Fire Egg", "egg_blue_fire", "unENflAMed", "An egg that's been dyed blue and cyan.", "Someone random is Frozen"], //17
        ["Chocolate Egg", "egg_chocolate", "tryTHEfreezerNEXT", "This better be filled with something edible.", "Everyone gets a chocolate egg."], //18
        ["Egg Outline", "egg_vanish", "equipSlot", "There is no egg. Or spoon.", "Nothing"], //19
        ["Gradient Egg", "egg_gradient", "eVeRyCoLoR", "An egg that's been dyed every color of the rainbow.", "16 random dyes"], //20
        ["Mono Gradient Egg", "egg_mono_gradient", "eveRYGray", "An egg that's been dyed every shade of gray.", "16 random colorless dyes"], //21
    ]
}