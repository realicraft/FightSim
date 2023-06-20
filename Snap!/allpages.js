var headerEl = document.getElementById("header_container")
var bodyEl = document.body

// cookies
// from https://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

for (i in settingslist) {
    for (j in settingslist[i][1]) {
        if (getCookie("set_" + settingslist[i][1][j][0]) == "") {
        setCookie("set_" + settingslist[i][1][j][0], settingslist[i][1][j][4], 365)
        }
    }
}

// functions for the translation system
var langStrings;
var enStrings;
var langLoaded = false;
var enLoaded = false
fetch("../lang/en_us.json").then(response => response.json()).then(json => enStrings = json).then(function(){enLoaded = true});
fetch("../lang/"+ getCookie("set_lang") +".json").then(response => response.json()).then(json => langStrings = json).then(function(){langLoaded = true});

var loop_until_char = function(string, char) {
    var i = 0
    while (i < string.length) {
        if (string[i] == char) {break}
        i++
    }
    return i
}

var getTranslatedString = function(id, nbt) {
    console.log("=> " + id)
    var preparse;
    var done = false;
    var outCont = ""
    var semiCont = ""
    var j = 0
    var k = 0
    if (id[0] == ":") {
        preparse = id.slice(1);
    } else {
        if (id in langStrings) {
            preparse = langStrings[id];
        } else if (id in enStrings) {
            preparse = enStrings[id];
        } else {
            return id;
        }
    }
    while (!done) {
        j = loop_until_char(preparse, "{")
        outCont += preparse.slice(0, j)
        if (j == preparse.length) {
            done = true
            continue
        }
        preparse = preparse.slice(j+1)
        preparse = getTranslatedString(":"+preparse, nbt)
        k = loop_until_char(preparse, "}")
        semiCont = preparse.slice(0, k)
        if (semiCont[0] == "-") {
            outCont += getTranslatedString(semiCont.slice(1), nbt);
        } else {
            if (typeof nbt !== 'undefined' && semiCont in nbt) {
                outCont += nbt[semiCont]
            } else {
                outCont += "{" + semiCont + "}"
            }
        }
        preparse = preparse.slice(k+1);
    }
    console.log("<= " + outCont)
    return outCont;
}

var waitForLang = function(func) {
    if (langLoaded && enLoaded) {
        func()
    } else {
        setTimeout(waitForLang, 50, func)
    }
}

// page elements
var headerFunc = function() {
    var headerCont = '<div class="header" style="padding-left:22px;"><span class="small_icon fsnap" style="position:absolute;left:4px;top:4px;" title="FSnap!"></span>';
    for (var i in headerLinks["S"]) {headerCont += '\n<a href="' + headerLinks["S"][i][1] + '">' + getTranslatedString("headerlink."+headerLinks["S"][i][0]+".name") + '</a>'};
    headerEl.innerHTML = headerCont;
};

waitForLang(headerFunc);

// functions for easter eggs
var egg_els = document.getElementsByClassName("easter_egg")
for (var i of egg_els) {
    egg_id = i.dataset.egg
    i.innerHTML = '<span class="icon ' + egglist[egg_id][1] + '" onClick="egg(' + egg_id + ')"></span>'
}

var egg = function(id) {
    alert(
        "You found an egg!\n[" + egglist[id][0] + "]\n" + egglist[id][3] + "\nCode: " + egglist[id][2] + "\nReward: " + egglist[id][4]
    )
}

// settings
if (getCookie("set_min_ico") == "true") {document.head.innerHTML += '<link rel="stylesheet" type="text/css" href="../CSS/mini/mini_icons.css"></link>'}
if (getCookie("set_sans") == "true") {document.head.innerHTML += '<link rel="stylesheet" type="text/css" href="../CSS/mini/comic_sans.css"></link>'}
document.head.innerHTML += '<link rel="stylesheet" type="text/css" href="../CSS/themes/' + getCookie("set_theme") + '.css"></link>'
document.head.innerHTML += '<link rel="stylesheet" type="text/css" href="../CSS/iconsets/' + getCookie("set_iconset") + '.css"></link>'