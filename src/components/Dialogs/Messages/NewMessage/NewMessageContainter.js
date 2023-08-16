import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../../../redux/messageReducer";
import NewMessage from "./NewMessage";

const NewMessageContainer = (props) => {
    let state = props.store.getState();
    let onAddMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    };
    let onMessageChange = (currentText) => {
        props.store.dispatch(updateNewMessageTextActionCreator(currentText));
    }
    return (
        <NewMessage
            addMessage={onAddMessage}
            updateNewMessageText={onMessageChange}
            newMessageText={state.messagesPage.newMessageText}
        />
    );
}

export default NewMessageContainer;