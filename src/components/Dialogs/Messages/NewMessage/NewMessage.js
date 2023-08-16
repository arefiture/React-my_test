import class_new_message from "./NewMessage.module.css";
import React from "react";

const NewMessage = (props) => {
    let newMessageElement = React.createRef();
    let addMessage = () => {
        props.addMessage();
    };
    let onMessageChange = () => {
        let currentText = newMessageElement.current.value;
        props.updateNewMessageText(currentText);
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