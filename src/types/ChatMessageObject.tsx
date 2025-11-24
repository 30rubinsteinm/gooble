export default interface ChatMessage {
    userDisplayName: string;
    userProfilePicture: string | null;
    userID: number;
    userContent: string;
    messageTime: Date;
    messageId: number;
}