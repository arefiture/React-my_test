import class_messages from "./Messages.module.css";
import MessagesList from "./MessagesList/MessagesList";
import NewMessage from "./NewMessage/NewMessage";

const Messages = (props) => {
    return (
        <div className={class_messages.messages}>
            <MessagesList messagesPage={props.messagesPage}/>
            <NewMessage dispatch={props.dispatch}
                        newMessageText={props.messagesPage.newMessageText}
            />
        </div>
    );
}

export default Messages;