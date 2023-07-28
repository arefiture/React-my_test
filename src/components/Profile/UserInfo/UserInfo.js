import class_user_info from './UserInfo.module.css';

const UserInfo = () => {
    return (
        <div className={class_user_info.profile_info}>
            <img
                className={class_user_info.avatar}
                src='https://avatars.mds.yandex.net/i?id=a0855c572df89597965a82dcd8dc889f_sr-5191097-images-thumbs&n=13'
                alt='Аватар пользователя'
            />
            +discription
        </div>
    );
}

export default UserInfo;