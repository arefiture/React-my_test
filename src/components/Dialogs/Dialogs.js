import class_dialogs from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogElements = props.dialogState.dialogs.map(
        dialog => <DialogItem id={dialog.id} name={dialog.name}/>
    );

    let messageElements = props.dialogState.messages.map(
        message => <Message message={message.message}/>
    );

    return (
        <div className={class_dialogs.dialogs}>
            <div className={class_dialogs.dialogs_items}>
                { dialogElements }
            </div>
            <div className={class_dialogs.messages}>
                { messageElements }
            </div>
        </div>
    );
}

export default Dialogs;