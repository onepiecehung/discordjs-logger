import { Client, ClientEvents, Events } from "discord.js";
/**
 * Type definition for an event handler based on ClientEvents.
 * The generic type "T extends keyof ClientEvents" ensures that the handler receives
 * the correct parameters for the specific event emitted by discord.js.
 */
type EventHandler<T extends keyof ClientEvents> = (...args: ClientEvents[T]) => void;
declare class DiscordEventHandler {
    private readonly client;
    /**
     * Constructs the DiscordEventHandler instance.
     * @param client - An instance of the Discord Client.
     */
    constructor(client: Client);
    /**
     * Registers a specific event with a custom handler.
     *
     * @param event - The event name (a key from ClientEvents) you want to listen to.
     * @param handler - The function to call when the event is emitted.
     *
     * The handler is wrapped in a try-catch block to log errors without crashing the bot.
     */
    on<T extends keyof ClientEvents>(event: T, handler: EventHandler<T>): void;
    /**
     * Overloaded method to register multiple events.
     *
     * Usage 1: Pass an array of events (of type Events) to register them with a default handler.
     * Usage 2: Pass an array of tuples [event, handler] to register custom handlers for each event.
     *
     * @param arg - Either an array of Events or an array of [event, handler] tuples.
     */
    registerEvents(events: Events[]): void;
    registerEvents<T extends keyof ClientEvents>(eventHandlers: [T, EventHandler<T>][]): void;
    /**
     * Registers all available events using the default handler which logs the event name and its arguments.
     *
     * How it works:
     * - Retrieves all values from the discord.js Events enum using Object.values().
     * - Filters out values to ensure only strings (valid events) are used.
     * - Calls registerEvents() with the array of events.
     */
    logAllEvents(): void;
}
export default DiscordEventHandler;
