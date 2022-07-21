//  Discord all events!
//  A quick and dirty fleshing out of the discord.js event listeners  (not tested at all!)
//     listed here -> https://discord.js.org/#/docs/main/stable/class/Client
//  Learn from this, do not just copy it mofo!

import {
    ApplicationCommandPermissionsUpdateData,
    BaseInteraction,
    Client,
    CloseEvent,
    Collection,
    DMChannel,
    Guild,
    GuildBan,
    GuildChannel,
    GuildEmoji,
    GuildMember,
    GuildScheduledEvent,
    GuildScheduledEventStatus,
    Invite,
    Message,
    MessageReaction,
    NewsChannel,
    PartialGuildMember,
    PartialMessage,
    PartialMessageReaction,
    PartialThreadMember,
    PartialUser,
    Presence,
    Role,
    Snowflake,
    StageInstance,
    Sticker,
    TextBasedChannel,
    TextChannel,
    ThreadChannel,
    ThreadMember,
    Typing,
    User,
    VoiceChannel,
    VoiceState,
} from "discord.js";

class CDiscordEvent {
    private client: Client;
    constructor(client: Client) {
        this.client = client;
    }

    applicationCommandPermissionsUpdate() {
        this.client.on(
            "applicationCommandPermissionsUpdate",
            (application: ApplicationCommandPermissionsUpdateData) => {
                console.log(
                    "applicationCommandPermissionsUpdate: ",
                    application
                );
            }
        );
    }
    /**
     * channelCreate
     */
    channelCreate() {
        this.client.on("channelCreate", (channel: GuildChannel) => {
            console.log("channelCreate: ", channel);
        });
    }
    /**
     * channelDelete
     */
    channelDelete() {
        this.client.on("channelDelete", (channel: DMChannel | GuildChannel) => {
            console.log("channelDelete", channel);
        });
    }
    /**
     * channelPinsUpdate
     */
    channelPinsUpdate() {
        this.client.on(
            "channelPinsUpdate",
            (channel: TextBasedChannel, time: Date) => {
                console.log("channelPinsUpdate", channel, time);
            }
        );
    }
    /**
     * channelUpdate
     */
    channelUpdate() {
        this.client.on(
            "channelUpdate",
            (
                oldChannel: DMChannel | GuildChannel,
                newChannel: DMChannel | GuildChannel
            ) => {
                console.log(
                    "channelUpdate: ",
                    "oldChannel: ",
                    oldChannel,
                    "newChannel: ",
                    newChannel
                );
            }
        );
    }
    /**
     * debug
     */
    debug() {
        this.client.on("debug", (info: string) => {
            console.log("debug", info);
        });
    }
    /**
     * emojiCreate
     */
    emojiCreate() {
        this.client.on("emojiCreate", (emoji: GuildEmoji) => {
            console.log("emojiCreate: ", emoji);
        });
    }
    /**
     * emojiDelete
     */
    emojiDelete() {
        this.client.on("emojiDelete", (emoji: GuildEmoji) => {
            console.log("emojiDelete", emoji);
        });
    }
    /**
     * emojiUpdate
     */
    emojiUpdate() {
        this.client.on(
            "emojiUpdate",
            (oldEmoji: GuildEmoji, newEmoji: GuildEmoji) => {
                console.log(
                    "emojiUpdate: ",
                    "oldEmoji: ",
                    oldEmoji,
                    "newEmoji: ",
                    newEmoji
                );
            }
        );
    }
    /**
     * error
     */
    error() {
        this.client.on("error", (error: Error) => {
            console.log("error: ", error);
        });
    }
    /**
     * guildBanAdd
     */
    guildBanAdd() {
        this.client.on("guildBanAdd", (ban: GuildBan) => {
            console.log("guildBanAdd: ", ban);
        });
    }
    /**
     * guildBanRemove
     */
    guildBanRemove() {
        this.client.on("guildBanRemove", (ban: GuildBan) => {
            console.log("guildBanRemove: ", ban);
        });
    }
    /**
     * guildCreate
     */
    guildCreate() {
        this.client.on("guildCreate", (guild: Guild) => {
            console.log("guildCreate: ", guild);
        });
    }
    /**
     * guildDelete
     */
    guildDelete() {
        this.client.on("guildDelete", (guild: Guild) => {
            console.log("guildDelete: ", guild);
        });
    }
    /**
     * guildIntegrationsUpdate
     */
    guildIntegrationsUpdate() {
        this.client.on("guildIntegrationsUpdate", (guild: Guild) => {
            console.log("guildIntegrationUpdate: ", guild);
        });
    }
    /**
     * guildMemberAdd
     */
    guildMemberAdd() {
        this.client.on("guildMemberAdd", (member: GuildMember) => {
            console.log("guildMemberAdd: ", member);
        });
    }
    /**
     * guildMemberAvailable
     */
    guildMemberAvailable() {
        this.client.on(
            "guildMemberAvailable",
            (member: GuildMember | PartialGuildMember) => {
                console.log("guildMemberAvailable: ", member);
            }
        );
    }
    /**
     * guildMemberRemove
     */
    guildMemberRemove() {
        this.client.on(
            "guildMemberRemove",
            (member: GuildMember | PartialGuildMember) => {
                console.log("guildMemberRemove: ", member);
            }
        );
    }
    /**
     * guildMembersChunk
     */
    guildMembersChunk() {
        this.client.on(
            "guildMembersChunk",
            (
                members: Collection<Snowflake, GuildMember>,
                guild: Guild,
                chunk: {
                    count: number;
                    index: number;
                    nonce: string | undefined;
                }
            ) => {
                console.log(
                    "guildMembersChunk: ",
                    "members: ",
                    members,
                    "guild: ",
                    guild,
                    "chunk",
                    chunk
                );
            }
        );
    }
    /**
     * guildMemberUpdate
     */
    guildMemberUpdate() {
        this.client.on(
            "guildMemberUpdate",
            (
                oldMember: GuildMember | PartialGuildMember,
                newMember: GuildMember
            ) => {
                console.log(
                    "guildMemberUpdate: ",
                    "oldMember: ",
                    oldMember,
                    "newMember: ",
                    newMember
                );
            }
        );
    }
    /**
     * guildScheduledEventCreate
     */
    guildScheduledEventCreate() {
        this.client.on(
            "guildScheduledEventCreate",
            (guildScheduledEvent: GuildScheduledEvent) => {
                console.log("guildScheduleEventCreate: ", guildScheduledEvent);
            }
        );
    }
    /**
     * guildScheduledEventDelete
     */
    guildScheduledEventDelete() {
        this.client.on(
            "guildScheduledEventDelete",
            (guildScheduledEvent: GuildScheduledEvent) => {
                console.log("guildScheduledEventDelete: ", guildScheduledEvent);
            }
        );
    }
    /**
     * guildScheduledEventUpdate
     */
    guildScheduledEventUpdate() {
        this.client.on(
            "guildScheduledEventUpdate",
            (
                oldGuildScheduledEvent: GuildScheduledEvent<GuildScheduledEventStatus> | null,
                newGuildScheduledEvent: GuildScheduledEvent
            ) => {
                console.log(
                    "guildScheduledEventUpdate: ",
                    "oldGuildScheduledEvent: ",
                    oldGuildScheduledEvent,
                    "newGuildScheduledEvent: ",
                    newGuildScheduledEvent
                );
            }
        );
    }
    /**
     * guildScheduledEventUserAdd
     */
    guildScheduledEventUserAdd() {
        this.client.on(
            "guildScheduledEventUserAdd",
            (guildScheduledEvent: GuildScheduledEvent, user: User) => {
                console.log(
                    "guildScheduledEventUserAdd: ",
                    "guildScheduledEvent: ",
                    guildScheduledEvent,
                    "user: ",
                    user
                );
            }
        );
    }
    /**
     * guildScheduledEventUserRemove
     */
    guildScheduledEventUserRemove() {
        this.client.on(
            "guildScheduledEventUserRemove",
            (guildScheduledEvent: GuildScheduledEvent, user: User) => {
                console.log(
                    "guildScheduledEventUserRemove: ",
                    "guildScheduledEvent: ",
                    guildScheduledEvent,
                    "user: ",
                    user
                );
            }
        );
    }
    /**
     * guildUnavailable
     */
    guildUnavailable() {
        this.client.on("guildUnavailable", (guild: Guild) => {
            console.log("guildUnavailable: ", guild);
        });
    }
    /**
     * guildUpdate
     */
    guildUpdate() {
        this.client.on("guildUpdate", (oldGuild: Guild, newGuild: Guild) => {
            console.log(
                "guildUpdate: ",
                "oldGuild: ",
                oldGuild,
                "newGuild: ",
                newGuild
            );
        });
    }
    /**
     * interactionCreate
     */
    interactionCreate() {
        this.client.on("interactionCreate", (interaction: BaseInteraction) => {
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
        this.client.on(
            "invalidRequestWarningData",
            (invalidRequestWarningData) => {
                console.log(
                    "invalidRequestWarningData: ",
                    invalidRequestWarningData
                );
            }
        );
    }
    /**
     * inviteCreate
     */
    inviteCreate() {
        this.client.on("inviteCreate", (invite: Invite) => {
            console.log("inviteCreate: ", invite);
        });
    }
    /**
     * inviteDelete
     */
    inviteDelete() {
        this.client.on("inviteDelete", (invite: Invite) => {
            console.log("inviteDelete: ", invite);
        });
    }
    /**
     * messageCreate
     */
    messageCreate() {
        this.client.on("messageCreate", (message: Message) => {
            console.log("messageCreate: ", message);
        });
    }
    /**
     * messageDelete
     */
    messageDelete() {
        this.client.on(
            "messageDelete",
            (message: Message<boolean> | PartialMessage) => {
                console.log("messageDelete: ", message);
            }
        );
    }
    /**
     * messageDeleteBulk
     */
    messageDeleteBulk() {
        this.client.on(
            "messageDeleteBulk",
            (
                messages: Collection<string, Message<boolean> | PartialMessage>,
                channel: TextBasedChannel
            ) => {
                console.log("messageDeleteBulk: ", "messages", messages);
                console.log("messageDeleteBulk: ", "channel", channel);
            }
        );
    }
    /**
     * messageReactionAdd
     */
    messageReactionAdd() {
        this.client.on(
            "messageReactionAdd",
            (
                messageReaction: MessageReaction | PartialMessageReaction,
                user: User | PartialUser
            ) => {
                console.log(
                    "messageReactionAdd: ",
                    "messageReaction: ",
                    messageReaction,
                    "user: ",
                    user
                );
            }
        );
    }
    /**
     * messageReactionRemove
     */
    messageReactionRemove() {
        this.client.on(
            "messageReactionRemove",
            (
                messageReaction: MessageReaction | PartialMessageReaction,
                user: User | PartialUser
            ) => {
                console.log(
                    "messageReactionRemove: ",
                    "messageReaction: ",
                    messageReaction,
                    "user: ",
                    user
                );
            }
        );
    }
    /**
     * messageReactionRemoveAll
     */
    messageReactionRemoveAll() {
        this.client.on(
            "messageReactionRemoveAll",
            (
                message: Message<boolean> | PartialMessage,
                reactions: Collection<string, MessageReaction>
            ) => {
                console.log(
                    "messageReactionRemoveAll: ",
                    "message: ",
                    message,
                    "reactions: ",
                    reactions
                );
            }
        );
    }
    /**
     * messageReactionRemoveEmoji
     */
    messageReactionRemoveEmoji() {
        this.client.on(
            "messageReactionRemoveEmoji",
            (reaction: MessageReaction | PartialMessageReaction) => {
                console.log("messageReactionRemoveEmoji: ", reaction);
            }
        );
    }
    /**
     * messageUpdate
     */
    messageUpdate() {
        this.client.on(
            "messageUpdate",
            (
                oldMessage: Message<boolean> | PartialMessage,
                newMessage: Message<boolean> | PartialMessage
            ) => {
                console.log(
                    "messageUpdate: ",
                    "oldMessage: ",
                    oldMessage,
                    "newMessage: ",
                    newMessage
                );
            }
        );
    }
    /**
     * presenceUpdate
     */
    presenceUpdate() {
        this.client.on(
            "presenceUpdate",
            (oldPresence: Presence | null, newPresence: Presence) => {
                console.log(
                    "presenceUpdate: ",
                    "oldPresence: ",
                    oldPresence,
                    "newPresence: ",
                    newPresence
                );
            }
        );
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
        this.client.on("ready", (client: Client) => {
            console.log("ready: ", client);
        });
    }
    /**
     * roleCreate
     */
    roleCreate() {
        this.client.on("roleCreate", (role: Role) => {
            console.log("roleCreate: ", role);
        });
    }
    /**
     * roleDelete
     */
    roleDelete() {
        this.client.on("roleDelete", (role: Role) => {
            console.log("roleDelete: ", role);
        });
    }
    /**
     * roleUpdate
     */
    roleUpdate() {
        this.client.on("roleUpdate", (oldRole: Role, newRole: Role) => {
            console.log(
                "roleUpdate: ",
                "oldRole: ",
                oldRole,
                "newRole: ",
                newRole
            );
        });
    }
    /**
     * shardDisconnect
     */
    shardDisconnect() {
        this.client.on("shardDisconnect", (event: CloseEvent, id: number) => {
            console.log("shardDisconnect: ", "event: ", event, "id: ", id);
        });
    }
    /**
     * shardError
     */
    shardError() {
        this.client.on("shardError", (error: Error, shardId: number) => {
            console.log("shardError: ", "error: ", error, "shardId: ", shardId);
        });
    }
    /**
     * shardReady
     */
    shardReady() {
        this.client.on(
            "shardReady",
            (id: number, unavailableGuilds: Set<Snowflake> | undefined) => {
                console.log(
                    "shardReady: ",
                    "id: ",
                    id,
                    "unavailableGuilds: ",
                    unavailableGuilds
                );
            }
        );
    }
    /**
     * shardReconnecting
     */
    shardReconnecting() {
        this.client.on("shardReconnecting", (id: number) => {
            console.log("shardReconnecting: ", id);
        });
    }
    /**
     * shardResume
     */
    shardResume() {
        this.client.on("shardResume", (id: number, replayedEvents: number) => {
            console.log(
                "shardResume: ",
                "id: ",
                id,
                "replayedEvents: ",
                replayedEvents
            );
        });
    }
    /**
     * stageInstanceCreate
     */
    stageInstanceCreate() {
        this.client.on(
            "stageInstanceCreate",
            (stageInstance: StageInstance) => {
                console.log("stageInstanceCreate: ", stageInstance);
            }
        );
    }
    /**
     * stageInstanceDelete
     */
    stageInstanceDelete() {
        this.client.on(
            "stageInstanceDelete",
            (stageInstance: StageInstance) => {
                console.log("stageInstanceDelete: ", stageInstance);
            }
        );
    }
    /**
     * stageInstanceUpdate
     */
    stageInstanceUpdate() {
        this.client.on(
            "stageInstanceUpdate",
            (
                oldStageInstance: StageInstance | null,
                newStageInstance: StageInstance
            ) => {
                console.log(
                    "stageInstanceUpdate: ",
                    "oldStageInstance: ",
                    oldStageInstance,
                    "newStageInstance: ",
                    newStageInstance
                );
            }
        );
    }
    /**
     * stickerCreate
     */
    stickerCreate() {
        this.client.on("stickerCreate", (sticker: Sticker) => {
            console.log("stickerCreate: ", sticker);
        });
    }
    /**
     * stickerDelete
     */
    stickerDelete() {
        this.client.on("stickerDelete", (sticker: Sticker) => {
            console.log("stickerDelete: ", sticker);
        });
    }
    /**
     * stickerUpdate
     */
    stickerUpdate() {
        this.client.on(
            "stickerUpdate",
            (oldSticker: Sticker, newSticker: Sticker) => {
                console.log(
                    "stickerUpdate: ",
                    "oldSticker: ",
                    oldSticker,
                    "newSticker: ",
                    newSticker
                );
            }
        );
    }
    /**
     * threadCreate
     */
    threadCreate() {
        this.client.on(
            "threadCreate",
            (thread: ThreadChannel, newlyCreated: boolean) => {
                console.log("threadCreate: thread", thread);
                console.log("threadCreate: newlyCreated", newlyCreated);
            }
        );
    }
    /**
     * threadDelete
     */
    threadDelete() {
        this.client.on("threadDelete", (thread: ThreadChannel) => {
            console.log("threadDelete: ", thread);
        });
    }
    /**
     * threadListSync
     */
    threadListSync() {
        this.client.on(
            "threadListSync",
            (threads: Collection<Snowflake, ThreadChannel>, guild: Guild) => {
                console.log("threadListSync: threads", threads);
                console.log("threadListSync: guild", guild);
            }
        );
    }
    /**
     * threadMembersUpdate
     */
    threadMembersUpdate() {
        this.client.on(
            "threadMembersUpdate",
            (
                addedMembers: Collection<Snowflake, ThreadMember>,
                removedMembers: Collection<
                    Snowflake,
                    ThreadMember | PartialThreadMember
                >,
                thread: ThreadChannel
            ) => {
                console.log(
                    "threadMembersUpdate: ",
                    "addedMembers: ",
                    addedMembers,
                    "removedMembers: ",
                    removedMembers
                );
                console.log(thread);
            }
        );
    }
    /**
     * threadMemberUpdate
     */
    threadMemberUpdate() {
        this.client.on(
            "threadMemberUpdate",
            (oldMember: ThreadMember, newMember: ThreadMember) => {
                console.log(
                    "threadMemberUpdate: ",
                    "oldMember: ",
                    oldMember,
                    "newMember: ",
                    newMember
                );
            }
        );
    }
    /**
     * threadUpdate
     */
    threadUpdate() {
        this.client.on(
            "threadUpdate",
            (oldThread: ThreadChannel, newThread: ThreadChannel) => {
                console.log(
                    "threadUpdate: ",
                    "oldThread: ",
                    oldThread,
                    "newThread: ",
                    newThread
                );
            }
        );
    }
    /**
     * typingStart
     */
    typingStart() {
        this.client.on("typingStart", (typing: Typing) => {
            console.log("typingStart", typing);
        });
    }
    /**
     * userUpdate
     */
    userUpdate() {
        this.client.on(
            "userUpdate",
            (oldUser: User | PartialUser, newUser: User) => {
                console.log(
                    "userUpdate: ",
                    "oldUser: ",
                    oldUser,
                    "newUser: ",
                    newUser
                );
            }
        );
    }
    /**
     * voiceStateUpdate
     */
    voiceStateUpdate() {
        this.client.on(
            "voiceStateUpdate",
            (oldState: VoiceState, newState: VoiceState) => {
                console.log(
                    "voiceStateUpdate: ",
                    "oldState: ",
                    oldState,
                    "newState",
                    newState
                );
            }
        );
    }
    /**
     * warn
     */
    warn() {
        this.client.on("warn", (info: string) => {
            console.log("warn: ", info);
        });
    }
    /**
     * webhookUpdate
     */
    webhookUpdate() {
        this.client.on(
            "webhookUpdate",
            (channel: TextChannel | NewsChannel | VoiceChannel) => {
                console.log("webhookUpdate: ", channel);
            }
        );
    }
}

export default CDiscordEvent;
