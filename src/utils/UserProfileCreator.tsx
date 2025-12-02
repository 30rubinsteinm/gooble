import UserProfile from "../types/UserProfileObject";

const createProfileObject = ({
  newUserDisplayName,
  newUserProfilePicture,
  newUserUUID,
}: {
  newUserDisplayName: string | null;
  newUserProfilePicture: string | null;
  newUserUUID: string | null;
}) => {
  let inputObject = {
    username: newUserDisplayName,
    userProfilePicture: newUserProfilePicture,
    userUUID: newUserUUID,
  } as UserProfile;

  return inputObject;
};

export default createProfileObject;
