var settingFunc = function() {
    var settingsEl = document.getElementById("all_settings");
    var settingsComp = "";
    var currentBox = "";

    for (i in settingslist) {
        currentBox = '<div class="settings_box"><div class="settings_title">' + getTranslatedString(settingslist[i][0]) + '</div>';
        for (j of settingslist[i][1]) {
            currentBox += '<hr><div class="settings_inner"><span class="setting_left">' + getTranslatedString(j[1]+'.name') + '</span><span class="setting_right">';
            switch(j[3]) {
                case "bool":
                    currentBox += '<label class="toggle_input"><input type="checkbox" id="' + j[0] + '"';
                    if (getCookie("set_"+j[0]) == "true") {currentBox += ' checked'}
                    currentBox += '><span class="toggle_inner"></span></label>';
                    break;
                case "lang":
                    currentBox += '<select id="lang_sel">';
                    for (k in langlist) {
                        currentBox += '<option value="' + langlist[k][0] + '"'
                        if (getCookie("set_lang") == langlist[k][0]) {currentBox += ' selected'}
                        currentBox += '>' + getTranslatedString("langs." + langlist[k][0] + ".name") + ' [' + langlist[k][1] + ']</option>'
                    }
                    currentBox += '</select>'
                    break;
                case "theme":
                    currentBox += '<select id="theme_sel">';
                    for (k in themelist) {
                        currentBox += '<option value="' + themelist[k][0] + '"'
                        if (getCookie("set_theme") == themelist[k][0]) {currentBox += ' selected'}
                        currentBox += '>' + getTranslatedString("themes." + themelist[k][0] + ".name") + '</option>'
                    }
                    currentBox += '</select>'
                    break;
                case "iconset":
                    currentBox += '<select id="iconset_sel">';
                    for (k in iconsetlist) {
                        currentBox += '<option value="' + iconsetlist[k][0] + '"'
                        if (getCookie("set_iconset") == iconsetlist[k][0]) {currentBox += ' selected'}
                        currentBox += '>' + getTranslatedString("iconsets." + iconsetlist[k][0] + ".name") + '</option>'
                    }
                    currentBox += '</select>'
                    break;
            };
            currentBox += '</span>';
            if (j[2]) {
                currentBox += '<span class="setting_desc"><span class="setting_desc_inner">' + getTranslatedString(j[1]+'.desc') + '</span></span>';
            };
            currentBox += '</div>';
        };
        currentBox += '</div><br /><br />'
        settingsComp += currentBox;
    };

    settingsEl.innerHTML = settingsComp;
};

var resetButton = function() {
    document.getElementById("save_button").innerText = 'Save Changes';
};

var save_settings = function() {
    for (i in settingslist) {
        for (j of settingslist[i][1]) {
            switch(j[3]) {
                case "bool":
                    setCookie("set_" + j[0], document.getElementById(j[0]).checked, 365);
                    break;
                case "lang":
                    setCookie("set_lang", document.getElementById("lang_sel").value, 365);
                    break;
                case "theme":
                    setCookie("set_theme", document.getElementById("theme_sel").value, 365);
                    break;
                case "iconset":
                    setCookie("set_iconset", document.getElementById("iconset_sel").value, 365);
                    break;
            };
        };
    };
    document.getElementById("save_button").innerText = 'Changes saved!';
    setTimeout(resetButton, 1000);
};

var not_on_wayback = function() {
    document.getElementById("all_settings").innerHTML = getTranslatedString("settings.no_wayback.text");
    document.getElementById("save_button").style = "display: none;";
}

if (!wayback) {
    waitForLang(settingFunc);
} else {
    waitForLang(not_on_wayback);
}
/*
<div class="settings_box">
    <div class="settings_title">Placeholders</div>
    <hr>
    <div class="settings_inner">
        <span class="setting_left">Placeholder</span>
        <span class="setting_right">( O)</span>
    </div>
    <hr>
    <div class="settings_inner">
        <span class="setting_left">Placeholder</span>
        <span class="setting_right">(O )</span>
        <span class="setting_desc"><span class="setting_desc_inner">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span></span>
    </div>
</div>
*/