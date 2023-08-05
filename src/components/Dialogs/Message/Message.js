import class_dialogs from './../Dialogs.module.css';

const Message = (props) => {
    return (
        <div className={class_dialogs.message}>
            {props.message}
        </div>
    );
};
export default Message;