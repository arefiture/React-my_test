import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/profileReducer";
import NewPost from "./NewPost";

const NewPostContainer = (props) => {
    let state = props.store.getState();
    let onAddPost = () => {
        props.store.dispatch(addPostActionCreator());
    };

    let onPostChange = (currentText) => {
        props.store.dispatch(updateNewPostTextActionCreator(currentText));
    };

    return (
        <NewPost
            updateNewPostText={onPostChange}
            addPost={onAddPost}
            newPostText={state.profilePage.newPostText}
        />
    );
}

export default NewPostContainer;