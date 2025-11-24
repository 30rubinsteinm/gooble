import ChatMessageObject from '../types/ChatMessageObject';

const createChatObject = ({newUserDisplayName, newUserID, newUserProfilePicture, newUserContent}
    : {
        newUserDisplayName: string,
        newUserID: number,
        newUserProfilePicture: string,
        newUserContent: string
    }
) => {
    let inputObject = {
        userDisplayName: newUserDisplayName,
        userID: newUserID,
        userProfilePicture: newUserProfilePicture,
        userContent: newUserContent,
        messageTime: new Date(),
        messageId: Date.now()
    } as ChatMessageObject;

    return inputObject;
}

export default createChatObject;