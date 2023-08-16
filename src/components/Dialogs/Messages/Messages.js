import class_messages from "./Messages.module.css";
import MessagesList from "./MessagesList/MessagesList";
import NewMessageContainer from "./NewMessage/NewMessageContainter";

const Messages = (props) => {
    return (
        <div className={class_messages.messages}>
            <MessagesList store={props.store}/>
            <NewMessageContainer store={props.store} />
        </div>
    );
}

export default Messages;