import class_dialogs from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
  return (
      <div className={class_dialogs.dialog}>
          <NavLink to={path}
                   className={({isActive})=>
                       (isActive?class_dialogs.active:class_dialogs.item)}
          >{props.name}</NavLink>
      </div>
  );
};
export default DialogItem;