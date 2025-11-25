import ChatMessageObject from '../types/ChatMessageObject';

const createChatObject = ({newUserDisplayName, newUserID, newUserProfilePicture, newUserContent}
    : {
        newUserDisplayName: string,
        newUserID: string,
        newUserProfilePicture: string | null,
        newUserContent: string
    }
) => {
    let inputObject = {
        userDisplayName: newUserDisplayName,
        userID: newUserID,
        userProfilePicture: newUserProfilePicture,
        userContent: newUserContent,
        messageTime: new Date(),
        messageId: Date.now().toString() // TODO: Change
    } as ChatMessageObject;

    return inputObject;
}

export default createChatObject;