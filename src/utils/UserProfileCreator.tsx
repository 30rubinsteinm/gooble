import UserProfile from "../types/UserProfileObject";

const createProfileObject = ({newUserDisplayName, newUserID, newUserProfilePicture}
    : {
        newUserDisplayName: string,
        newUserID: number,
        newUserProfilePicture: string
    }
) => {
    let inputObject = {
        userDisplayName: newUserDisplayName,
        userID: newUserID,
        userProfilePicture: newUserProfilePicture,
    } as UserProfile

    return inputObject;
}

export default createProfileObject;