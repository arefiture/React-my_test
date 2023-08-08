import class_message_item from "./MessageItem.module.css";

const MessageItem = (props) => {
    return (
        <div className={class_message_item.message}>
            {props.message}
        </div>
    );
};
export default MessageItem;