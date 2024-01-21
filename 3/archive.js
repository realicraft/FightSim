var bodyEl = document.getElementById("archive_body");
// from https://stackoverflow.com/a/901144
var urlSearchParams = new URLSearchParams(window.location.search);
var params = Object.fromEntries(urlSearchParams.entries());

var showSearch = false;

if (("turn" in params) && (params["turn"] in archiveList)) {
    showSearch = true;
}

var get_daytime = function(turn) {
    turn = ((turn-1) % 50) + 1;
    if ((turn >= 1) && (turn <= 3)) {
        return "dawn";
    } else if ((turn >= 4) && (turn <= 22)) {
        return "day";
    } else if ((turn >= 23) && (turn <= 28)) {
        return "dusk";
    } else if ((turn >= 29) && (turn <= 47)) {
        return "night";
    } else if ((turn >= 48) && (turn <= 50)) {
        return "dawn";
    } else {
        return "???";
    }
}

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

var get_time = function(turn) {
    var datetime = new Date(1625724000000+(1728000*(turn-1)));
    // 06:00:00 AM, on July 8, 2021
    var datestr = ((datetime.getUTCHours()-1)%12)+1 + ":" + datetime.getUTCMinutes().toString().padStart(2, "0") + ":" + datetime.getUTCSeconds().toString().padStart(2, "0")
    datestr += " " + (datetime.getUTCHours()<12 ? "AM" : "PM") + ", on ";
    datestr += months[datetime.getUTCMonth()] + " " + datetime.getUTCDate() + ", " + datetime.getUTCFullYear();
    return datestr;
}

var goto_turn = function() {
    var selectEl = document.getElementById("turn_select");
    var turn = parseInt(selectEl.value, 10);
    window.location.search = "?turn=" + turn;
}

if (showSearch) {
    var turn = params["turn"];
    var turnData = archiveList[turn];
    // turn select
    var innerText = "<label for=\"turn_select\">Select a turn:</label><select id=\"turn_select\">";
    for (i in archiveList) {
        innerText += "<option value=\"" + i + "\">" + i + "</option>";
    }
    innerText += "</select> <button id=\"arch_go\" onclick=\"goto_turn();\">Go</button>";

    // metadata
    innerText += "<div id=\"metadata\"><h2>Metadata</h2>";
    innerText += "This is turn <b>" + turn + "</b>. Its skeledop was posted on <b>" + turnData["metadata"]["skeledop"] + "</b>, and its update was posted on <b>" + turnData["metadata"]["update"] + "</b>.<br/>"
    innerText += "Of the <b>" + turnData["metadata"]["allplayers"] + "</b> players active at the time, <b><i>" + turnData["metadata"]["players"] + "</i></b> were present.<br/>"
    innerText += "At the start of the turn, it was <b>" + get_daytime(turn) + "</b>, and the weather was <span class=\"small_icon " + turnData["metadata"]["start_weather"] + "\"></span><b>" + turnData["metadata"]["start_weather"] + "</b>.<br/>"
    innerText += "There are <b>" + turnData["metadata"]["posts"] + "</b> posts, containing <b>" + turnData["metadata"]["actions"] + "</b> actions.<br/>";
    innerText += "In-game, the turn started at <b>" + get_time(turn) + "</b>."
    innerText += "</div>";

    // summary
    innerText += "<div id=\"summary\"><h2>Summary</h2>" + turnData["summary"] + "</div>"

    // contents
    innerText += "<div id=\"contents\">" + turnData["contents"] + "</div>"

    bodyEl.innerHTML = innerText;
} else {
    var innerText = "<p>In order to use the archive, you need to select a turn first.</p><label for=\"turn_select\">Select a turn:</label><select id=\"turn_select\">";
    for (i in archiveList) {
        innerText += "<option value=\"" + i + "\">" + i + "</option>";
    }
    innerText += "</select> <button id=\"arch_go\" onclick=\"goto_turn();\">Go</button>";
    bodyEl.innerHTML = innerText;
}