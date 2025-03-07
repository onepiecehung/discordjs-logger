import { Client, ClientEvents, Events } from "discord.js";

/**
 * Type definition for an event handler based on ClientEvents.
 * The generic type "T extends keyof ClientEvents" ensures that the handler receives
 * the correct parameters for the specific event emitted by discord.js.
 */
type EventHandler<T extends keyof ClientEvents> = (
  ...args: ClientEvents[T]
) => void;

class DiscordEventHandler {
  /**
   * Constructs the DiscordEventHandler instance.
   * @param client - An instance of the Discord Client.
   */
  constructor(private readonly client: Client) {}

  /**
   * Registers a specific event with a custom handler.
   *
   * @param event - The event name (a key from ClientEvents) you want to listen to.
   * @param handler - The function to call when the event is emitted.
   *
   * The handler is wrapped in a try-catch block to log errors without crashing the bot.
   */
  public on<T extends keyof ClientEvents>(
    event: T,
    handler: EventHandler<T>
  ): void {
    this.client.on(event, (...args: ClientEvents[T]) => {
      try {
        handler(...args);
      } catch (error) {
        console.error(`Error in event ${event}:`, error);
      }
    });
  }

  /**
   * Overloaded method to register multiple events.
   *
   * Usage 1: Pass an array of events (of type Events) to register them with a default handler.
   * Usage 2: Pass an array of tuples [event, handler] to register custom handlers for each event.
   *
   * @param arg - Either an array of Events or an array of [event, handler] tuples.
   */
  public registerEvents(events: Events[]): void;
  public registerEvents<T extends keyof ClientEvents>(
    eventHandlers: [T, EventHandler<T>][]
  ): void;
  public registerEvents(arg: any[]): void {
    // Return if the provided array is empty.
    if (arg.length === 0) return;

    // If the first element is a string, we assume an array of events (default handler).
    if (typeof arg[0] === "string") {
      const events = arg as Events[];
      events.forEach((event) => {
        // Cast the event as a key of ClientEvents for type compatibility.
        this.client.on(event as keyof ClientEvents, (...args: any[]) => {
          console.log(
            `[Default Logger] Event ${event} triggered with arguments:`,
            ...args
          );
        });
      });
    }
    // If the first element is an array, we assume an array of tuples [event, handler] (custom handler).
    else if (Array.isArray(arg[0])) {
      const eventHandlers = arg as [keyof ClientEvents, EventHandler<any>][];
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
  public logAllEvents(): void {
    const allEvents = Object.values(Events).filter(
      (e) => typeof e === "string"
    ) as Events[];
    this.registerEvents(allEvents);
  }
}

export default DiscordEventHandler;
