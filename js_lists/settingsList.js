var settingslist = [ // [section lang_str, [cookie id, lang_str id, has_desc, type, default, values]]
    [
        "settings.headers.general", [
            ["sans", "settings.comic_sans", true, "bool", false, ""],
            ["splashes", "settings.splashes_anywhere", true, "bool", false, ""],
            ["skew", "settings.skew_page", true, "bool", false, ""],
        ]
    ],
    [
        "settings.headers.access", [
            ["min_ico", "settings.mini_icons_item", true, "bool", false, ""],
            /*["critter_plain", "settings.plain_critter_descs", true, "bool", false, ""],*/
        ]
    ],
    [
        "settings.headers.lang", [
            ["lang", "settings.lang", false, "lang", "en_us", ""],
        ]
    ],
    [
        "settings.headers.theme", [
            ["theme", "settings.theme", false, "theme", "medium", ""],
            ["iconset", "settings.iconset", false, "iconset", "default", ""],
        ]
    ],
]

var langlist = [ // [id, name]
    ["en_us", "English (US)"],
    ["es_es", "Español (España)"],
];

var themelist = [ // [id]
    ["light"],
    ["medium"],
    // ["dark"],
    ["cga"],
    ["neon"],
    ["ace"],
];

var iconsetlist = [ // [id]
    ["default"],
    ["cga"],
    //["ega"],
    //["lowcolor"],
    ["plastic"],
    ["resprite"],
]