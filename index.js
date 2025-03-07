"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
class DiscordEventHandler {
    client;
    /**
     * Constructs the DiscordEventHandler instance.
     * @param client - An instance of the Discord Client.
     */
    constructor(client) {
        this.client = client;
    }
    /**
     * Registers a specific event with a custom handler.
     *
     * @param event - The event name (a key from ClientEvents) you want to listen to.
     * @param handler - The function to call when the event is emitted.
     *
     * The handler is wrapped in a try-catch block to log errors without crashing the bot.
     */
    on(event, handler) {
        this.client.on(event, (...args) => {
            try {
                handler(...args);
            }
            catch (error) {
                console.error(`Error in event ${event}:`, error);
            }
        });
    }
    registerEvents(arg) {
        // Return if the provided array is empty.
        if (arg.length === 0)
            return;
        // If the first element is a string, we assume an array of events (default handler).
        if (typeof arg[0] === "string") {
            const events = arg;
            events.forEach((event) => {
                // Cast the event as a key of ClientEvents for type compatibility.
                this.client.on(event, (...args) => {
                    console.log(`[Default Logger] Event ${event} triggered with arguments:`, ...args);
                });
            });
        }
        // If the first element is an array, we assume an array of tuples [event, handler] (custom handler).
        else if (Array.isArray(arg[0])) {
            const eventHandlers = arg;
            eventHandlers.forEach(([event, handler]) => {
                this.on(event, handler);
            });
        }
    }
    /**
     * Registers all available events using the default handler which logs the event name and its arguments.
     *
     * How it works:
     * - Retrieves all values from the discord.js Events enum using Object.values().
     * - Filters out values to ensure only strings (valid events) are used.
     * - Calls registerEvents() with the array of events.
     */
    logAllEvents() {
        const allEvents = Object.values(discord_js_1.Events).filter((e) => typeof e === "string");
        this.registerEvents(allEvents);
    }
}
exports.default = DiscordEventHandler;
