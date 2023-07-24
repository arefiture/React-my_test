import class_profile from './Profile.module.css';

const Profile = () => {
    return (
        <div className={class_profile.content}>
            <div>
                <img src='https://i.pinimg.com/originals/db/78/cc/db78cc8db7ac6081e1c19a3d24a09a6f.jpg' />
            </div>
            <div>
                <img src='https://i.pinimg.com/originals/b9/05/3d/b9053d873e9f69058997913e0fffca2e.png' />
                +discription
            </div>
            <div>
                Posts
                <div>
                    New Post
                </div>
                <div className={class_profile.posts}>
                    <div className={class_profile.item}>
                        post1
                    </div>
                    <div className={class_profile.item}>
                        post2
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;