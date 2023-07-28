import class_post_item from './PostItem.module.css';

const PostItem = (props) => {
    return (
        <div className={class_post_item.item}>
            <div className={class_post_item.content}>
                {props.text}
            </div>
            <div className={class_post_item.like}><span>{props.likesCount}</span>♥</div>
        </div>
    );
}

export default PostItem;