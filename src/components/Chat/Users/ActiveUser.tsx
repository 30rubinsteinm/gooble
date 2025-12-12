import "../../../App.css";
import "./Users.css"

const UserDisplay = ({
  userID,
  displayName,
  profilePicture,
  isDarkBG,
}: {
  userID: string;
  displayName: string;
  profilePicture: string;
  isDarkBG: boolean;
}) => {
  return (
    <div
      className={ isDarkBG ?
        "user-container-dark" : "user-container-light"
      }
    >
        <img
          src={profilePicture}
          alt=""
          className="user-profile-picture"
        />

        <p className="username">
          {userID == "0" ? "Deleted user" : displayName}
        </p>
    </div>
  );
};

export default UserDisplay;
