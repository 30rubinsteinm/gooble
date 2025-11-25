export default interface ChatMessage {
    userDisplayName: string;
    userProfilePicture: string | null;
    userID: string;
    userContent: string;
    messageTime: Date;
    messageId: string;
}