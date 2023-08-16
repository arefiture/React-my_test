import class_post_item from './PostItem.module.css';

const PostItem = (props) => {
    return (
        <div className={class_post_item.item}>
            <img
                className={class_post_item.avatar}
                src='https://avatars.mds.yandex.net/i?id=a0855c572df89597965a82dcd8dc889f_sr-5191097-images-thumbs&n=13'
                alt='Аватар пользователя'/>
            <div className={class_post_item.content_block}>
                <div className={class_post_item.content}>
                    {props.text}
                </div>
                <div className={class_post_item.grade}>
                    <div className={class_post_item.like}>
                        <span>{props.likesCount}</span>
                        <span>🌲</span>
                    </div>
                    <div className={class_post_item.like}>
                        <span>{props.dislikesCount}</span>
                        <span>🌱</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostItem;