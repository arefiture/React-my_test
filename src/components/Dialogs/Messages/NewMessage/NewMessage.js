import class_new_message from "./NewMessage.module.css";
import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../../../redux/messageReducer";

const NewMessage = (props) => {
    let newMessageElement = React.createRef();
    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    };
    let onMessageChange = () => {
        let currentText = newMessageElement.current.value;
        props.dispatch(updateNewMessageTextActionCreator(currentText));
    }
    return (
        <div className={class_new_message.new_message}>
            <textarea
                ref={newMessageElement}
                onChange={onMessageChange}
                value={props.newMessageText}
            />
            <button onClick={addMessage} type="button">Send message</button>
        </div>
    );
}

export default NewMessage;