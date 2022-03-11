var areaList = [
    [""], //0
    ["Unisland"], //1
    ["Bisland"], //2
    ["Trisland"], //3
    ["Talent Island"], //4
    ["Mainland"], //5
]
var areaContainEl = document.getElementById("area_contain")
var popup = function(id) {
    areaContainEl.innerHTML = areaList[id][0]
    areaContainEl.setAttribute("style", "display: inline-block;")

}
var nopopup = function() {
    areaContainEl.setAttribute("style", "display: none;")
}