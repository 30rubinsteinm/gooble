import "../../../App.css";
import UserProfile from "../../../types/UserProfileObject";
import "./Users.css";

const UserDisplay = ({
  userData,
  isDarkBG,
}: {
  userData: UserProfile;
  isDarkBG: boolean;
}) => {
  return (
    <div className={isDarkBG ? "user-container-dark" : "user-container-light"}>
      <img
        src={userData.userProfilePicture}
        alt=""
        className="user-profile-picture"
      />

      <p className="username">
        {userData.userID == "0" ? "Deleted user" : userData.username}
      </p>

      {userData.userRole && <span className="role">{userData.userRole}</span>}
    </div>
  );
};

export default UserDisplay;
