let myPromises = [
    messenger.messageDisplayScripts.register({
      js: [
          { file: "/change_message.js"}
      ],
    }),
    messenger.composeScripts.register({
      js: [
          { file: "/change_message.js"},
          { file: "/change_replies.js"}
      ],
    }),
];

