import class_new_post from './NewPost.module.css';

const NewPost = () => {
    return (
        <div className={class_new_post.new_post}>
            <textarea></textarea>
            <button>Add post</button>
        </div>
    );
}

export default NewPost;