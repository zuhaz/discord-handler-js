# Discord.js Bot Handler v14

![Discord.js Version](https://img.shields.io/badge/Discord.js-v14.12.1-blue)
![Node.js Version](https://img.shields.io/badge/Node.js-v16.0.0-green)
[![License](https://img.shields.io/badge/license-ISC-yellow.svg)](LICENSE)

## Introduction

Welcome to the Discord.js Bot Handler version 14 repository! This handler is designed to assist developers in managing and organizing their Discord.js bots efficiently, utilizing the features introduced in version 14 of the library.

## Features

- **Modular Structure**: Easily manage commands, events, and other bot features in a modular and organized manner.

- **Command Handling**: Implement command handling with ease using the new command structure in Discord.js v14.

- **Event Handling**: Manage Discord events seamlessly with the event handler provided.

- **Command Auto-complete**: Command autocomplete functionality, example provided in **(*events/client/autoComplete.js*)**

- **Error Handling**: Robust error handling to provide meaningful messages and logs.
- **More features** will be added with the passage of time!
## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16.0.0 or higher)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/zuhaz/discord-handler-js.git
## Getting Started

### Navigate to the project folder:

```bash
cd discord-handler-js
```
### Install dependencies:
1. Install the required dependencies needed for the bot to function and get to working.
    
    ```bash
    npm install
    ```
### Configuration:
1. Update the **token** field in config.json with your Discord bot token.
    - Discord bot token is highly sensitive, don't share with anyone in any case. Get your fresh discord bot token from [Discord Developers Portal](https://discord.com/developers/applications).
2. Update the **mongoKey** field in the config.json with your mongo url (*optional*).
    - Go on the [MongoDB](https://www.mongodb.com/) and create your database if you want to integrate database system in your bot.
3. Lastly, If you want to have custom bot presence, update the **botactivity** field in config.json to anything you'd like. (*Example: I'm a discord bot*)


### Running the bot:
After completing all the prequisities, follow these steps to get your bot running.

1. Run this command in the terminal 

    ```bash
    node .
    ```
### Enjoy!


