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
            };
            currentBox += '</span>';
            if (j[2]) {
                currentBox += '<span class="setting_desc"><span class="setting_desc_inner">' + getTranslatedString(j[1]+'.desc') + '</span></span>';
            };
            currentBox += '</div>';
        };
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
            };
        };
    };
    document.getElementById("save_button").innerText = 'Changes saved!';
    setTimeout(resetButton, 1000);
};

setTimeout(settingFunc, 100);
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