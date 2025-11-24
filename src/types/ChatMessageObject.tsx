export default interface ChatMessage {
    userDisplayName: string;
    userProfilePicture: string;
    userID: number;
    userContent: string;
    messageTime: Date;
    messageId: number;
}