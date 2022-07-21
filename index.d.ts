import { Client } from "discord.js";
declare class CDiscordEvent {
    private client;
    constructor(client: Client);
    applicationCommandPermissionsUpdate(): void;
    /**
     * channelCreate
     */
    channelCreate(): void;
    /**
     * channelDelete
     */
    channelDelete(): void;
    /**
     * channelPinsUpdate
     */
    channelPinsUpdate(): void;
    /**
     * channelUpdate
     */
    channelUpdate(): void;
    /**
     * debug
     */
    debug(): void;
    /**
     * emojiCreate
     */
    emojiCreate(): void;
    /**
     * emojiDelete
     */
    emojiDelete(): void;
    /**
     * emojiUpdate
     */
    emojiUpdate(): void;
    /**
     * error
     */
    error(): void;
    /**
     * guildBanAdd
     */
    guildBanAdd(): void;
    /**
     * guildBanRemove
     */
    guildBanRemove(): void;
    /**
     * guildCreate
     */
    guildCreate(): void;
    /**
     * guildDelete
     */
    guildDelete(): void;
    /**
     * guildIntegrationsUpdate
     */
    guildIntegrationsUpdate(): void;
    /**
     * guildMemberAdd
     */
    guildMemberAdd(): void;
    /**
     * guildMemberAvailable
     */
    guildMemberAvailable(): void;
    /**
     * guildMemberRemove
     */
    guildMemberRemove(): void;
    /**
     * guildMembersChunk
     */
    guildMembersChunk(): void;
    /**
     * guildMemberUpdate
     */
    guildMemberUpdate(): void;
    /**
     * guildScheduledEventCreate
     */
    guildScheduledEventCreate(): void;
    /**
     * guildScheduledEventDelete
     */
    guildScheduledEventDelete(): void;
    /**
     * guildScheduledEventUpdate
     */
    guildScheduledEventUpdate(): void;
    /**
     * guildScheduledEventUserAdd
     */
    guildScheduledEventUserAdd(): void;
    /**
     * guildScheduledEventUserRemove
     */
    guildScheduledEventUserRemove(): void;
    /**
     * guildUnavailable
     */
    guildUnavailable(): void;
    /**
     * guildUpdate
     */
    guildUpdate(): void;
    /**
     * interactionCreate
     */
    interactionCreate(): void;
    /**
     * invalidated
     */
    invalidated(): void;
    /**
     * invalidRequestWarning
     */
    invalidRequestWarning(): void;
    /**
     * inviteCreate
     */
    inviteCreate(): void;
    /**
     * inviteDelete
     */
    inviteDelete(): void;
    /**
     * messageCreate
     */
    messageCreate(): void;
    /**
     * messageDelete
     */
    messageDelete(): void;
    /**
     * messageDeleteBulk
     */
    messageDeleteBulk(): void;
    /**
     * messageReactionAdd
     */
    messageReactionAdd(): void;
    /**
     * messageReactionRemove
     */
    messageReactionRemove(): void;
    /**
     * messageReactionRemoveAll
     */
    messageReactionRemoveAll(): void;
    /**
     * messageReactionRemoveEmoji
     */
    messageReactionRemoveEmoji(): void;
    /**
     * messageUpdate
     */
    messageUpdate(): void;
    /**
     * presenceUpdate
     */
    presenceUpdate(): void;
    /**
     * rateLimit
     */
    rateLimit(): void;
    /**
     * ready
     */
    ready(): void;
    /**
     * roleCreate
     */
    roleCreate(): void;
    /**
     * roleDelete
     */
    roleDelete(): void;
    /**
     * roleUpdate
     */
    roleUpdate(): void;
    /**
     * shardDisconnect
     */
    shardDisconnect(): void;
    /**
     * shardError
     */
    shardError(): void;
    /**
     * shardReady
     */
    shardReady(): void;
    /**
     * shardReconnecting
     */
    shardReconnecting(): void;
    /**
     * shardResume
     */
    shardResume(): void;
    /**
     * stageInstanceCreate
     */
    stageInstanceCreate(): void;
    /**
     * stageInstanceDelete
     */
    stageInstanceDelete(): void;
    /**
     * stageInstanceUpdate
     */
    stageInstanceUpdate(): void;
    /**
     * stickerCreate
     */
    stickerCreate(): void;
    /**
     * stickerDelete
     */
    stickerDelete(): void;
    /**
     * stickerUpdate
     */
    stickerUpdate(): void;
    /**
     * threadCreate
     */
    threadCreate(): void;
    /**
     * threadDelete
     */
    threadDelete(): void;
    /**
     * threadListSync
     */
    threadListSync(): void;
    /**
     * threadMembersUpdate
     */
    threadMembersUpdate(): void;
    /**
     * threadMemberUpdate
     */
    threadMemberUpdate(): void;
    /**
     * threadUpdate
     */
    threadUpdate(): void;
    /**
     * typingStart
     */
    typingStart(): void;
    /**
     * userUpdate
     */
    userUpdate(): void;
    /**
     * voiceStateUpdate
     */
    voiceStateUpdate(): void;
    /**
     * warn
     */
    warn(): void;
    /**
     * webhookUpdate
     */
    webhookUpdate(): void;
}
export default CDiscordEvent;
