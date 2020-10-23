let myPromises = [
    messenger.messageDisplayScripts.register({
        js: [
            { file: "/decoders.js" },

        ],
    }),
    messenger.messageDisplayScripts.register({
        js: [
            { file: "/change_message.js" }
        ],
    })
];