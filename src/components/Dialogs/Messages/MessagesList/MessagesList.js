import MessageItem from "./MessageItem/MessageItem";
import class_message_item from "./MessagesList.module.css";

const MessagesList = (props) => {
    let messageElements = props.messagesPage.messages.map(
        message => <MessageItem message={message.message}/>
    );

    return (
        <div className={class_message_item.message_list}>
            {messageElements}
        </div>
    );
}

export default MessagesList;