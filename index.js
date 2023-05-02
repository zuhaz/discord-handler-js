const fs = require("node:fs");
const path = require("node:path");
const { Client, Collection, Events, GatewayIntentBits } = require("discord.js");
const { token } = require("./config.json");
const { eventHandler } = require("./eventHandler");
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
  ],
});

client.commands = new Collection();
client.events = new Collection();
client.setMaxListeners(0);
eventHandler(client)
  .then(() => {
    console.log("Loaded All Events");
  })
  .catch(() => {
    console.log("Couldn't load events");
  });
client.login(token);
