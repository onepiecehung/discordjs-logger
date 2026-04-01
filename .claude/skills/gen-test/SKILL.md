---
name: gen-test
description: Generate unit tests for discord.js event handler classes using vitest and mocked Client instances
disable-model-invocation: true
---

# Generate Tests

Generate unit tests for the discordjs-logger library.

## Instructions

1. Check if vitest is installed. If not, suggest adding it as a devDependency.
2. Read the source file(s) to understand the API surface.
3. Generate tests that cover:
   - `on()` method: registering a single event with a custom handler
   - `registerEvents()` with an array of `Events` (default logger)
   - `registerEvents()` with an array of `[event, handler]` tuples
   - `logAllEvents()` registers all discord.js events
   - Error handling: handler throwing an error is caught and logged
4. Mock the discord.js `Client` using `vi.fn()` — do not create a real Client or connect to Discord.
5. Place tests in a `tests/` directory at the project root.
6. Use descriptive test names that explain the expected behavior.
