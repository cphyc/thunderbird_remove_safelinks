var oldHTML = document.body.innerHTML;
console.log(oldHTML);
var regex = /https:\/\/\w+\.safelinks\.protection\.outlook\.com\/\?url=([^\s\"']+)/gm;

var newHTML = oldHTML.replace(regex, `$1`);

var links = document.body.getElementsByTagName("a");
Array.prototype.forEach.call(
    links,
    link => {
        let target = link.getAttribute("href");
        let originalSrc = link.getAttribute("originalsrc");
        if (originalSrc != null) {
            link.setAttribute("href", originalSrc);
            link.setAttribute("safelinkhref", target);
        }
});
