import class_posts from './Posts.module.css';
import PostsList from './PostsList/PostsList';
import NewPostContainer from "./NewPost/NewPostContainer";

const Posts = (props) => {
    return (
        <div className={class_posts.posts}>
            <h3>My post</h3>
            <NewPostContainer store={props.store} />
            <PostsList store={props.store} />
        </div>
    );
}

export default Posts;