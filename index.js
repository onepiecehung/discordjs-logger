"use strict";
//  Discord all events!
//  A quick and dirty fleshing out of the discord.js event listeners  (not tested at all!)
//     listed here -> https://discord.js.org/#/docs/main/stable/class/Client
//  Learn from this, do not just copy it mofo!
Object.defineProperty(exports, "__esModule", { value: true });
class CDiscordEvent {
    client;
    constructor(client) {
        this.client = client;
    }
    applicationCommandPermissionsUpdate() {
        this.client.on("applicationCommandPermissionsUpdate", (application) => {
            console.log("applicationCommandPermissionsUpdate: ", application);
        });
    }
    /**
     * channelCreate
     */
    channelCreate() {
        this.client.on("channelCreate", (channel) => {
            console.log("channelCreate: ", channel);
        });
    }
    /**
     * channelDelete
     */
    channelDelete() {
        this.client.on("channelDelete", (channel) => {
            console.log("channelDelete", channel);
        });
    }
    /**
     * channelPinsUpdate
     */
    channelPinsUpdate() {
        this.client.on("channelPinsUpdate", (channel, time) => {
            console.log("channelPinsUpdate", channel, time);
        });
    }
    /**
     * channelUpdate
     */
    channelUpdate() {
        this.client.on("channelUpdate", (oldChannel, newChannel) => {
            console.log("channelUpdate: ", "oldChannel: ", oldChannel, "newChannel: ", newChannel);
        });
    }
    /**
     * debug
     */
    debug() {
        this.client.on("debug", (info) => {
            console.log("debug", info);
        });
    }
    /**
     * emojiCreate
     */
    emojiCreate() {
        this.client.on("emojiCreate", (emoji) => {
            console.log("emojiCreate: ", emoji);
        });
    }
    /**
     * emojiDelete
     */
    emojiDelete() {
        this.client.on("emojiDelete", (emoji) => {
            console.log("emojiDelete", emoji);
        });
    }
    /**
     * emojiUpdate
     */
    emojiUpdate() {
        this.client.on("emojiUpdate", (oldEmoji, newEmoji) => {
            console.log("emojiUpdate: ", "oldEmoji: ", oldEmoji, "newEmoji: ", newEmoji);
        });
    }
    /**
     * error
     */
    error() {
        this.client.on("error", (error) => {
            console.log("error: ", error);
        });
    }
    /**
     * guildBanAdd
     */
    guildBanAdd() {
        this.client.on("guildBanAdd", (ban) => {
            console.log("guildBanAdd: ", ban);
        });
    }
    /**
     * guildBanRemove
     */
    guildBanRemove() {
        this.client.on("guildBanRemove", (ban) => {
            console.log("guildBanRemove: ", ban);
        });
    }
    /**
     * guildCreate
     */
    guildCreate() {
        this.client.on("guildCreate", (guild) => {
            console.log("guildCreate: ", guild);
        });
    }
    /**
     * guildDelete
     */
    guildDelete() {
        this.client.on("guildDelete", (guild) => {
            console.log("guildDelete: ", guild);
        });
    }
    /**
     * guildIntegrationsUpdate
     */
    guildIntegrationsUpdate() {
        this.client.on("guildIntegrationsUpdate", (guild) => {
            console.log("guildIntegrationUpdate: ", guild);
        });
    }
    /**
     * guildMemberAdd
     */
    guildMemberAdd() {
        this.client.on("guildMemberAdd", (member) => {
            console.log("guildMemberAdd: ", member);
        });
    }
    /**
     * guildMemberAvailable
     */
    guildMemberAvailable() {
        this.client.on("guildMemberAvailable", (member) => {
            console.log("guildMemberAvailable: ", member);
        });
    }
    /**
     * guildMemberRemove
     */
    guildMemberRemove() {
        this.client.on("guildMemberRemove", (member) => {
            console.log("guildMemberRemove: ", member);
        });
    }
    /**
     * guildMembersChunk
     */
    guildMembersChunk() {
        this.client.on("guildMembersChunk", (members, guild, chunk) => {
            console.log("guildMembersChunk: ", "members: ", members, "guild: ", guild, "chunk", chunk);
        });
    }
    /**
     * guildMemberUpdate
     */
    guildMemberUpdate() {
        this.client.on("guildMemberUpdate", (oldMember, newMember) => {
            console.log("guildMemberUpdate: ", "oldMember: ", oldMember, "newMember: ", newMember);
        });
    }
    /**
     * guildScheduledEventCreate
     */
    guildScheduledEventCreate() {
        this.client.on("guildScheduledEventCreate", (guildScheduledEvent) => {
            console.log("guildScheduleEventCreate: ", guildScheduledEvent);
        });
    }
    /**
     * guildScheduledEventDelete
     */
    guildScheduledEventDelete() {
        this.client.on("guildScheduledEventDelete", (guildScheduledEvent) => {
            console.log("guildScheduledEventDelete: ", guildScheduledEvent);
        });
    }
    /**
     * guildScheduledEventUpdate
     */
    guildScheduledEventUpdate() {
        this.client.on("guildScheduledEventUpdate", (oldGuildScheduledEvent, newGuildScheduledEvent) => {
            console.log("guildScheduledEventUpdate: ", "oldGuildScheduledEvent: ", oldGuildScheduledEvent, "newGuildScheduledEvent: ", newGuildScheduledEvent);
        });
    }
    /**
     * guildScheduledEventUserAdd
     */
    guildScheduledEventUserAdd() {
        this.client.on("guildScheduledEventUserAdd", (guildScheduledEvent, user) => {
            console.log("guildScheduledEventUserAdd: ", "guildScheduledEvent: ", guildScheduledEvent, "user: ", user);
        });
    }
    /**
     * guildScheduledEventUserRemove
     */
    guildScheduledEventUserRemove() {
        this.client.on("guildScheduledEventUserRemove", (guildScheduledEvent, user) => {
            console.log("guildScheduledEventUserRemove: ", "guildScheduledEvent: ", guildScheduledEvent, "user: ", user);
        });
    }
    /**
     * guildUnavailable
     */
    guildUnavailable() {
        this.client.on("guildUnavailable", (guild) => {
            console.log("guildUnavailable: ", guild);
        });
    }
    /**
     * guildUpdate
     */
    guildUpdate() {
        this.client.on("guildUpdate", (oldGuild, newGuild) => {
            console.log("guildUpdate: ", "oldGuild: ", oldGuild, "newGuild: ", newGuild);
        });
    }
    /**
     * interactionCreate
     */
    interactionCreate() {
        this.client.on("interactionCreate", (interaction) => {
            console.log("interaction: ", interaction);
        });
    }
    /**
     * invalidated
     */
    invalidated() {
        this.client.on("invalidated", () => console.log("invalidated"));
    }
    /**
     * invalidRequestWarning
     */
    invalidRequestWarning() {
        this.client.on("invalidRequestWarningData", (invalidRequestWarningData) => {
            console.log("invalidRequestWarningData: ", invalidRequestWarningData);
        });
    }
    /**
     * inviteCreate
     */
    inviteCreate() {
        this.client.on("inviteCreate", (invite) => {
            console.log("inviteCreate: ", invite);
        });
    }
    /**
     * inviteDelete
     */
    inviteDelete() {
        this.client.on("inviteDelete", (invite) => {
            console.log("inviteDelete: ", invite);
        });
    }
    /**
     * messageCreate
     */
    messageCreate() {
        this.client.on("messageCreate", (message) => {
            console.log("messageCreate: ", message);
        });
    }
    /**
     * messageDelete
     */
    messageDelete() {
        this.client.on("messageDelete", (message) => {
            console.log("messageDelete: ", message);
        });
    }
    /**
     * messageDeleteBulk
     */
    messageDeleteBulk() {
        this.client.on("messageDeleteBulk", (messages, channel) => {
            console.log("messageDeleteBulk: ", "messages", messages);
            console.log("messageDeleteBulk: ", "channel", channel);
        });
    }
    /**
     * messageReactionAdd
     */
    messageReactionAdd() {
        this.client.on("messageReactionAdd", (messageReaction, user) => {
            console.log("messageReactionAdd: ", "messageReaction: ", messageReaction, "user: ", user);
        });
    }
    /**
     * messageReactionRemove
     */
    messageReactionRemove() {
        this.client.on("messageReactionRemove", (messageReaction, user) => {
            console.log("messageReactionRemove: ", "messageReaction: ", messageReaction, "user: ", user);
        });
    }
    /**
     * messageReactionRemoveAll
     */
    messageReactionRemoveAll() {
        this.client.on("messageReactionRemoveAll", (message, reactions) => {
            console.log("messageReactionRemoveAll: ", "message: ", message, "reactions: ", reactions);
        });
    }
    /**
     * messageReactionRemoveEmoji
     */
    messageReactionRemoveEmoji() {
        this.client.on("messageReactionRemoveEmoji", (reaction) => {
            console.log("messageReactionRemoveEmoji: ", reaction);
        });
    }
    /**
     * messageUpdate
     */
    messageUpdate() {
        this.client.on("messageUpdate", (oldMessage, newMessage) => {
            console.log("messageUpdate: ", "oldMessage: ", oldMessage, "newMessage: ", newMessage);
        });
    }
    /**
     * presenceUpdate
     */
    presenceUpdate() {
        this.client.on("presenceUpdate", (oldPresence, newPresence) => {
            console.log("presenceUpdate: ", "oldPresence: ", oldPresence, "newPresence: ", newPresence);
        });
    }
    /**
     * rateLimit
     */
    rateLimit() {
        this.client.on("rateLimit", (rateLimitData) => {
            console.log("rateLimit: ", rateLimitData);
        });
    }
    /**
     * ready
     */
    ready() {
        this.client.on("ready", (client) => {
            console.log("ready: ", client);
        });
    }
    /**
     * roleCreate
     */
    roleCreate() {
        this.client.on("roleCreate", (role) => {
            console.log("roleCreate: ", role);
        });
    }
    /**
     * roleDelete
     */
    roleDelete() {
        this.client.on("roleDelete", (role) => {
            console.log("roleDelete: ", role);
        });
    }
    /**
     * roleUpdate
     */
    roleUpdate() {
        this.client.on("roleUpdate", (oldRole, newRole) => {
            console.log("roleUpdate: ", "oldRole: ", oldRole, "newRole: ", newRole);
        });
    }
    /**
     * shardDisconnect
     */
    shardDisconnect() {
        this.client.on("shardDisconnect", (event, id) => {
            console.log("shardDisconnect: ", "event: ", event, "id: ", id);
        });
    }
    /**
     * shardError
     */
    shardError() {
        this.client.on("shardError", (error, shardId) => {
            console.log("shardError: ", "error: ", error, "shardId: ", shardId);
        });
    }
    /**
     * shardReady
     */
    shardReady() {
        this.client.on("shardReady", (id, unavailableGuilds) => {
            console.log("shardReady: ", "id: ", id, "unavailableGuilds: ", unavailableGuilds);
        });
    }
    /**
     * shardReconnecting
     */
    shardReconnecting() {
        this.client.on("shardReconnecting", (id) => {
            console.log("shardReconnecting: ", id);
        });
    }
    /**
     * shardResume
     */
    shardResume() {
        this.client.on("shardResume", (id, replayedEvents) => {
            console.log("shardResume: ", "id: ", id, "replayedEvents: ", replayedEvents);
        });
    }
    /**
     * stageInstanceCreate
     */
    stageInstanceCreate() {
        this.client.on("stageInstanceCreate", (stageInstance) => {
            console.log("stageInstanceCreate: ", stageInstance);
        });
    }
    /**
     * stageInstanceDelete
     */
    stageInstanceDelete() {
        this.client.on("stageInstanceDelete", (stageInstance) => {
            console.log("stageInstanceDelete: ", stageInstance);
        });
    }
    /**
     * stageInstanceUpdate
     */
    stageInstanceUpdate() {
        this.client.on("stageInstanceUpdate", (oldStageInstance, newStageInstance) => {
            console.log("stageInstanceUpdate: ", "oldStageInstance: ", oldStageInstance, "newStageInstance: ", newStageInstance);
        });
    }
    /**
     * stickerCreate
     */
    stickerCreate() {
        this.client.on("stickerCreate", (sticker) => {
            console.log("stickerCreate: ", sticker);
        });
    }
    /**
     * stickerDelete
     */
    stickerDelete() {
        this.client.on("stickerDelete", (sticker) => {
            console.log("stickerDelete: ", sticker);
        });
    }
    /**
     * stickerUpdate
     */
    stickerUpdate() {
        this.client.on("stickerUpdate", (oldSticker, newSticker) => {
            console.log("stickerUpdate: ", "oldSticker: ", oldSticker, "newSticker: ", newSticker);
        });
    }
    /**
     * threadCreate
     */
    threadCreate() {
        this.client.on("threadCreate", (thread, newlyCreated) => {
            console.log("threadCreate: thread", thread);
            console.log("threadCreate: newlyCreated", newlyCreated);
        });
    }
    /**
     * threadDelete
     */
    threadDelete() {
        this.client.on("threadDelete", (thread) => {
            console.log("threadDelete: ", thread);
        });
    }
    /**
     * threadListSync
     */
    threadListSync() {
        this.client.on("threadListSync", (threads, guild) => {
            console.log("threadListSync: threads", threads);
            console.log("threadListSync: guild", guild);
        });
    }
    /**
     * threadMembersUpdate
     */
    threadMembersUpdate() {
        this.client.on("threadMembersUpdate", (addedMembers, removedMembers, thread) => {
            console.log("threadMembersUpdate: ", "addedMembers: ", addedMembers, "removedMembers: ", removedMembers);
            console.log(thread);
        });
    }
    /**
     * threadMemberUpdate
     */
    threadMemberUpdate() {
        this.client.on("threadMemberUpdate", (oldMember, newMember) => {
            console.log("threadMemberUpdate: ", "oldMember: ", oldMember, "newMember: ", newMember);
        });
    }
    /**
     * threadUpdate
     */
    threadUpdate() {
        this.client.on("threadUpdate", (oldThread, newThread) => {
            console.log("threadUpdate: ", "oldThread: ", oldThread, "newThread: ", newThread);
        });
    }
    /**
     * typingStart
     */
    typingStart() {
        this.client.on("typingStart", (typing) => {
            console.log("typingStart", typing);
        });
    }
    /**
     * userUpdate
     */
    userUpdate() {
        this.client.on("userUpdate", (oldUser, newUser) => {
            console.log("userUpdate: ", "oldUser: ", oldUser, "newUser: ", newUser);
        });
    }
    /**
     * voiceStateUpdate
     */
    voiceStateUpdate() {
        this.client.on("voiceStateUpdate", (oldState, newState) => {
            console.log("voiceStateUpdate: ", "oldState: ", oldState, "newState", newState);
        });
    }
    /**
     * warn
     */
    warn() {
        this.client.on("warn", (info) => {
            console.log("warn: ", info);
        });
    }
    /**
     * webhookUpdate
     */
    webhookUpdate() {
        this.client.on("webhookUpdate", (channel) => {
            console.log("webhookUpdate: ", channel);
        });
    }
}
exports.default = CDiscordEvent;
