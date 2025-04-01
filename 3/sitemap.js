var sitemapEl = document.getElementById("sitemap");

var parseFileList = function(files, path) {
    var outList = "<ul>"
    for (var i = 0; i < files.length; i++) {
        outList += parseFile(files[i], path);
    }
    outList += "</ul>"
    return outList;
}

var parseFile = function(file, path) {
    var outFile = "<li><span class=\"small_icon " + file.type + "\"></span>";
    if (file.hasContents) {
        outFile += file.name + "<br />"
        outFile += parseFileList(file.contents, (path+"/"+file.name));
    } else {
        outFile += ("<a href=\".." + path + "/" + file.name + "\">" + file.name + "</a>");
    }
    outFile += "</li>";
    return outFile;
}

sitemapEl.innerHTML = parseFileList(fileList, "");