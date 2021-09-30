var info = function(id) {
    var infoBodyEl = document.getElementsByClassName("info_body")[0];
    var infoNameEl = document.getElementsByClassName("info_name")[0];
    var infoDescEl = document.getElementsByClassName("info_desc")[0];
    var infoSourceEl = document.getElementById(id)
    infoNameEl.innerHTML = infoSourceEl.dataset.infoTitle;
    infoDescEl.innerHTML = infoSourceEl.dataset.infoDesc;
    infoBodyEl.setAttribute("style", "display: block;")
}
var noinfo = function() {
    var infoBodyEl = document.getElementsByClassName("info_body")[0];
    var infoNameEl = document.getElementsByClassName("info_name")[0];
    var infoDescEl = document.getElementsByClassName("info_desc")[0];
    infoNameEl.innerHTML = "";
    infoDescEl.innerHTML = "";
    infoBodyEl.setAttribute("style", "display: none;")
}