var settingslist = [ // [section lang_str, [cookie id, lang_str id, has_desc, type, default, values]]
    [
        "settings.headers.general", [
            ["min_ico", "settings.mini_icons_item", true, "bool", false, ""],
            ["sans", "settings.comic_sans", true, "bool", false, ""],
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
    ["dark"],
    ["cga"],
];

var iconsetlist = [ // [id]
    ["default"],
    ["cga"],
    //["cga4"],
    //["lowcolor"],
    ["plastic"],
]