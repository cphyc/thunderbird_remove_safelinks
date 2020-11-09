var decoders = messenger.runtime.decoders;

// Clean all plain-text links in new messages (replies etc.)
// Logic copied from https://github.com/phavekes/unmangleOutlookSafelinks
var doc = document.body;
let proofpoint_regex_g = RegExp(decoders.proofpoint_regex, "g")
var spans = doc.getElementsByTagName("span");
for (var i=0; i < spans.length; i++) {
	let span = spans[i];
	for (var j=0; j < span.childNodes.length; j++) {
		let node = span.childNodes[j]
		if (node.nodeName == '#text') {
            node.textContent = node.textContent
                .replaceAll(decoders.outlook_regex, decoders.safelinkDecoder)
                .replaceAll(proofpoint_regex_g, decoders.proofPointDecoder);
		}
	}
}
var pres = doc.getElementsByTagName("pre");
for (var i=0; i < pres.length; i++) {
    pres[i].textContent = pres[i].textContent
        .replaceAll(decoders.outlook_regex, decoders.safelinkDecoder)
        .replaceAll(proofpoint_regex_g, decoders.proofPointDecoder)
}
