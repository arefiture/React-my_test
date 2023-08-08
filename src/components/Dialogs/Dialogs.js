import class_dialogs from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./Messages/Messages";

const Dialogs = (props) => {
    let dialogElements = props.messagesPage.dialogs.map(
        dialog => <DialogItem id={dialog.id} name={dialog.name}/>
    );

    return (
        <div className={class_dialogs.dialogs}>
            <div className={class_dialogs.dialogs_items}>
                { dialogElements }
            </div>
            <Messages messagesPage={props.messagesPage}
                      dispatch={props.dispatch}
            />
        </div>
    );
}

export default Dialogs;