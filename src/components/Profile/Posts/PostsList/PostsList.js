import PostItem from './PostItem/PostItem';
import class_posts_list from './PostsList.module.css';

const PostsList = (props) => {
    let postElements = props.postData.map(
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