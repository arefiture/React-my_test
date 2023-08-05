import NewPost from './NewPost/NewPost';
import class_posts from './Posts.module.css';
import PostsList from './PostsList/PostsList';

const Posts = (props) => {
    return (
        <div className={class_posts.posts}>
            <h3>My post</h3>
            <NewPost addPost={props.addPost}
                     updateNewPostText={props.updateNewPostText}
                     newPostText={props.newPostText}
            />
            <PostsList postData={props.postData}/>
        </div>
    );
}

export default Posts;