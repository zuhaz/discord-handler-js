const { Events, ActivityType } = require("discord.js");
const { commandHandler } = require("../../commandHandler");
const config=  require('../../config.json')
module.exports = {
  name: "ready",
  once: true,
  execute(client) {
    console.log(`Ready! Logged in as ${client.user.tag}`);
    commandHandler(client)
      .then(() => {
        console.log("Loaded And Registered All Commands.");
      })
      .catch(() => {
        console.log("Couldn't load and register commands");
      });
    client.user.setActivity({
      name: config.botactivity,
      type: ActivityType.Watching,
    });
  },
};
