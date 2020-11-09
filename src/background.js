let myPromises = [
    messenger.messageDisplayScripts.register({
        js: [
            { file: "/decoders.js" },
            { file: "/change_message.js" }
        ],
    }),
    messenger.composeScripts.register({
        js: [
            { file: "/decoders.js" },
            { file: "/change_message.js" },
            { file: "/change_compose.js"}
        ],
    }),
];