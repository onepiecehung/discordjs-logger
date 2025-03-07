<div align="center">
  <p>
    <a href="https://nodei.co/npm/discordjs-logger/">
      <img src="https://nodei.co/npm/discordjs-logger.png?downloads=true&stars=true" alt="NPM info" />
    </a>
  </p>
</div>

# discordjs-logger v5

A lightweight logger for Discord.js events – now with a new generic API for flexible event registration!

---

## Overview

Version 5 of discordjs-logger introduces a simplified and flexible API. Rather than having separate methods for every event (as in v4), you now register events via a generic interface. You can:

- **Register a single event** with a custom handler using `on()`.
- **Bulk-register events** with default logging or custom handlers via `registerEvents()`.
- **Log all available events** from Discord.js with a single call using `logAllEvents()`.

This approach reduces boilerplate and makes your code easier to maintain.

---

## Installation

To install discordjs-logger v5, update your package.json to use version 5:

```sh
npm i discordjs-logger@^5.0.0
```
### or
```sh
yarn add discordjs-logger@^5.0.0
```

_Note: If you’re still on v4, your package-lock or yarn.lock will prevent automatic upgrade. Please refer to the [Migration Guide](#migration-guide) below._

---

## Usage Instructions (v5)

Below are some examples demonstrating the new API.

### Basic Setup

```typescript
import { Client, GatewayIntentBits, Events } from "discord.js";
import DiscordEventHandler from "discordjs-logger";

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    // Add other intents as needed...
  ],
});

const eventHandler = new DiscordEventHandler(client);

// Register a few events with the default handler.
// The default handler logs the event name and its arguments.
eventHandler.registerEvents([
  Events.MessageCreate,
  Events.GuildCreate,
  Events.ClientReady, // equivalent to 'ready'
]);

// Alternatively, register specific events with custom handlers:
eventHandler.registerEvents([
  [
    Events.MessageCreate,
    (message) => {
      console.log("Custom handler for MessageCreate:", message.content);
    },
  ],
]);

// To log all available events from Discord.js:
eventHandler.logAllEvents();

client.login("YOUR_DISCORD_APP_TOKEN");
```

### API Methods

#### `on(event, handler)`

Registers a specific event with your custom handler.  
Example:

```typescript
eventHandler.on(Events.GuildCreate, (guild) => {
  console.log("Guild created:", guild.name);
});
```

#### `registerEvents(arg)`

Overloaded to support two usages:

1. **Default handler:**  
   Pass an array of events (from the Discord.js `Events` enum) to register them with a default logger.
   ```typescript
   eventHandler.registerEvents([Events.MessageCreate, Events.GuildCreate]);
   ```
2. **Custom handlers:**  
   Pass an array of tuples `[event, handler]` to register each event with a custom handler.
   ```typescript
   eventHandler.registerEvents([
     [
       Events.MessageCreate,
       (message) => {
         console.log("Custom MessageCreate:", message.content);
       },
     ],
   ]);
   ```

#### `logAllEvents()`

Registers all available events (retrieved from the Discord.js `Events` enum) with the default logging handler.

```typescript
eventHandler.logAllEvents();
```

---

## Migration Guide: Upgrading from Version 4 to Version 5

### Breaking Changes

1. **New API Structure:**

   - **v4:** Provided individual methods for each event (e.g. `channelCreate()`, `guildCreate()`, etc.).
   - **v5:** Uses a generic API: `on()`, `registerEvents()`, and `logAllEvents()`.
   - **Impact:** If your code directly calls methods like `channelCreate()`, you will need to refactor them to use the new API.

2. **Event Registration:**
   - **v4:** Separate event listener methods.
   - **v5:** Bulk registration is now available through `registerEvents()`, and a default logging handler is provided.
   - **Impact:** You must update your event registration logic to match the new format.

### How to Migrate

1. **Update your dependency:**

   - Change your `package.json` to use discordjs-logger v5 (`^5.0.0`).
   - With semver, users locked to `"^4.x.x"` will not automatically update to v5.

2. **Refactor event registration:**
   - **From v4 Example:**
     ```typescript
     // v4 approach:
     const logger = new CDiscordEvent(client);
     logger.channelCreate();
     logger.guildCreate();
     // etc.
     ```
   - **To v5 Approach:**

     ```typescript
     import { Events } from "discord.js";
     import DiscordEventHandler from "discordjs-logger";

     const eventHandler = new DiscordEventHandler(client);

     // Register specific events with default logging:
     eventHandler.registerEvents([Events.ChannelCreate, Events.GuildCreate]);

     // Or use custom handlers:
     eventHandler.registerEvents([
       [
         Events.MessageCreate,
         (message) => {
           console.log("Custom handler for MessageCreate:", message.content);
         },
       ],
     ]);
     ```
3. **Review your logging behavior:**

   - v5’s default handlers log every event triggered. If this is too verbose for production, consider using custom handlers to control logging output.

4. **Testing:**
   - Thoroughly test your bot with the new version in a development environment to ensure all events are logged and handled as expected.

---

## Compatibility Notes

- **Version 5:** Designed for use with Discord.js v14 or greater.
- **Version 4:** Continue to use for Discord.js v13 or lower.  
  (Please refer to the previous documentation for v4 if needed.)

---

## Additional Resources

- **Discord.js Documentation:** [https://discord.js.org/#/docs/main/stable/class/Client](https://discord.js.org/#/docs/main/stable/class/Client)

---

##### If you have any questions or run into issues during migration, please check our GitHub issues.