module.exports = {
  name: "interactionCreate",
  async execute(interaction) {
    const { options, commandName } = interaction;
    if (interaction.isAutocomplete()) {
      if (commandName === "your_command_name") {
        const focusedValue = options.getFocused();
      }
    }
  },
};
