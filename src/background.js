let myPromise = messenger.messageDisplayScripts.register({
    js: [
        { file: "/decoders.js" },
        { file: "/change_message.js" }
    ],
});