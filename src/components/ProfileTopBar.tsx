import '../App.css';
import UserProfileObject from '../types/UserProfileObject';

const ProfileTopBar = ({profile}: {profile: UserProfileObject}) => {
    return (
        <div
        id='profileTopBar'
        className='profile-top-bar'
        >
           <p className='{title-text}'>GoobApp</p>
           <img className='profile-picture' src={profile.userProfilePicture} alt="Profile Picture"></img>

        </div>
    )
}

export default ProfileTopBar;