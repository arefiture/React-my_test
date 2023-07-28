import NewPost from './NewPost/NewPost';
import class_posts from './Posts.module.css';
import PostsList from './PostsList/PostsList';

const Posts = () => {
    return (
        <div className={class_posts.posts}>
            Posts
            <NewPost />
            <PostsList />
        </div>
    );
}

export default Posts;