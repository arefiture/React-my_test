import NewPost from './NewPost/NewPost';
import class_posts from './Posts.module.css';
import PostsList from './PostsList/PostsList';

const Posts = (props) => {
    return (
        <div className={class_posts.posts}>
            <h3>My post</h3>
            <NewPost dispatch={props.dispatch}
                     newPostText={props.profilePage.newPostText}
            />
            <PostsList posts={props.profilePage.posts}/>
        </div>
    );
}

export default Posts;