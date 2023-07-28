import PostItem from './PostItem/PostItem';
import class_posts_list from './PostsList.module.css';

const PostsList = () => {
    return (
        <div className={class_posts_list.posts}>
            <PostItem text='Hi, how are you?' likesCount='7'/>
            <PostItem text='It`s my first post' likesCount='3'/>
        </div>
    );
}

export default PostsList;