// Clean all plain-text links in new messages (replies etc.)
// Logic copied from https://github.com/phavekes/unmangleOutlookSafelinks
var doc = document.body;
let proofpoint_regex_g = RegExp(proofpoint_regex, "g")
var spans = doc.getElementsByTagName("span");
for (var i=0; i < spans.length; i++) {
	var span = spans[i];
	for (var j=0; j < span.childNodes.length; j++) {
		var node = span.childNodes[j]
		if (node.nodeName == '#text') {
			node.textContent = node.textContent.replaceAll(outlook_regex, safelinkDecoder).replaceAll(proofpoint_regex_g, proofPointDecoder)
		}
	}
}
var pres = doc.getElementsByTagName("pre");
for (var i=0; i < pres.length; i++) {
	pres[i].textContent = pres[i].textContent.replaceAll(outlook_regex, safelinkDecoder).replaceAll(proofpoint_regex_g, proofPointDecoder)
}

