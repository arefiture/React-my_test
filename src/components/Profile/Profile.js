import Posts from './Posts/Posts';
/*import class_profile from './Profile.module.css';*/
import UserInfo from './UserInfo/UserInfo';
import Wallpaper from './Wallpaper/Wallpaper';

const Profile = (props) => {
    return (
        <div>
            <Wallpaper />
            <UserInfo />
            <Posts store={props.store} />
        </div>
    );
}

export default Profile;