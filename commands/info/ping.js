const { SlashCommandBuilder } = require("discord.js");
module.exports = {
  name: "ping",
  description: "Ping command",
  async execute(interaction) {
    await interaction.deferReply({ ephemeral: false });
    await interaction.editReply({ content: "!pong" });
  },
};
