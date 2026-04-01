---
name: npm-publish
description: Compile TypeScript, bump version, verify declarations, and publish the package to npm
disable-model-invocation: true
---

# npm Publish

Prepare and publish a new version of the discordjs-logger package.

## Instructions

1. **Pre-flight checks**:
   - Run `npx tsc --noEmit` to verify no type errors
   - Verify `index.d.ts` exists and exports `DiscordEventHandler`
   - Check git working tree is clean (no uncommitted changes)

2. **Version bump** (ask the user which bump type: patch, minor, or major):
   - Run `npm version <type>` to bump the version

3. **Compile**:
   - Run `npx tsc` to generate `index.js` and `index.d.ts`

4. **Verify output**:
   - Confirm `index.js` and `index.d.ts` are present and non-empty
   - Run `npm pack --dry-run` to show what will be published

5. **Publish** (ask for confirmation before running):
   - Run `npm publish`

6. **Post-publish**:
   - Create a git tag for the version
   - Push the tag to origin
