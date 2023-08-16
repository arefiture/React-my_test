import class_new_post from './NewPost.module.css';
import React from "react";

const NewPost = (props) => {
    let newPostElement = React.createRef();
    let addPost = () => {
        props.addPost();
    };

    let onPostChange = () => {
        let currentText = newPostElement.current.value;
        props.updateNewPostText(currentText);
    };

    return (
        <div className={class_new_post.new_post}>
            <div>
                <textarea
                    ref={newPostElement}
                    onChange={onPostChange}
                    value={props.newPostText}
                />
            </div>
            <div>
                <button onClick={addPost} type="button">Add post</button>
            </div>
        </div>
    );
}

export default NewPost;