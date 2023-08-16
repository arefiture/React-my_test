import class_dialogs from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./Messages/Messages";

const Dialogs = (props) => {
    let state = props.store.getState();
    let dialogElements = state.messagesPage.dialogs.map(
        dialog => <DialogItem id={dialog.id} name={dialog.name}/>
    );

    return (
        <div className={class_dialogs.dialogs}>
            <div className={class_dialogs.dialogs_items}>
                { dialogElements }
            </div>
            <Messages store={props.store}
            />
        </div>
    );
}

export default Dialogs;