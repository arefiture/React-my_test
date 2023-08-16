import PostItem from './PostItem/PostItem';
import class_posts_list from './PostsList.module.css';

const PostsList = (props) => {
    let posts = props.store.getState().profilePage.posts;
    let postElements = posts.map(
        post =>
            <PostItem text={post.text} likesCount={post.likesCount} dislikesCount={post.dislikesCount}/>
    );

    return (
        <div className={class_posts_list.posts}>
            {postElements}
        </div>
    );
}

export default PostsList;