var decoders = messenger.runtime.decoders;

// Clean all links in <a> tags
var links = document.body.getElementsByTagName("a");
Array.prototype.forEach.call(
    links,
    link => {
        let href = link.getAttribute("href");
        if (!href)
            return;
        let originalSrc = link.getAttribute("originalsrc");

        // Decode what Outlook did
        if (originalSrc != null) {
            // First case: the <a> tag was mingled by safelink directly
            link.setAttribute("href", originalSrc);
            link.setAttribute("safelinkhref", href);
            link.setAttribute("title", "Decoded from: " + href);
        } else if (href.search(decoders.outlook_regex) > -1) {
            // Second case: the link is raw in the mail, it was generated by Thunderbird
            let decodedUri = decoders.safelinkDecoder(href);
            link.setAttribute("safelinkhref", href);
            link.setAttribute("href", decodedUri);
            link.setAttribute("title", "Decoded from: " + href);
            link.textContent = decoders.safelinkDecoder(link.textContent);
        }

        // Decode what ProofPoint did -- usually Outlook is the outer one
        // if there are both, since ProofPoint runs on an intermediate
        // mail relay.
        let pphref = link.getAttribute("href");
        if (pphref.search(decoders.proofpoint_regex) > -1) {
            let decodedUri = decoders.proofPointDecoder(pphref);
            link.setAttribute("urldefensehref", pphref);
            link.setAttribute("href", decodedUri);
            link.setAttribute("title", "Decoded from: " + href);
            link.textContent = decoders.proofPointDecoder(link.textContent);
        }
});
