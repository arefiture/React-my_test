import Posts from './Posts/Posts';
import class_profile from './Profile.module.css';
import UserInfo from './UserInfo/UserInfo';
import Wallpaper from './Wallpaper/Wallpaper';

const Profile = () => {
    return (
        <div className={class_profile.content}>
            <Wallpaper />
            <UserInfo />
            <Posts />
        </div>
    );
}

export default Profile;