var collapse = function(id) {
    var collapse_target = document.getElementById(id)
    var collapse_body = collapse_target.getElementsByClassName("collapse_body")[0]
    var collapse_button = collapse_target.getElementsByClassName("collapse_button")[0]
    if (collapse_body.hasAttribute("style")) {
        collapse_body.removeAttribute("style")
    } else {
        collapse_body.toggleAttribute("style", true)
        collapse_body.setAttribute("style", "display:none;")
    }
    if (collapse_button.classList.contains("collapse_closed")) {
        collapse_button.className = "small_icon collapse_button collapse_open"
    } else {
        collapse_button.className = "small_icon collapse_button collapse_closed"
    }
}