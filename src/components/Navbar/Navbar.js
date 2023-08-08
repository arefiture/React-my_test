import class_nav from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={class_nav.nav}>
            <div className={class_nav.item}>
                <NavLink to='/profile'
                         className={({isActive})=>(isActive?class_nav.active:class_nav.item)}
                >Profile</NavLink>
            </div>
            <div className={class_nav.item}>
                <NavLink to='/dialogs'
                         className={({isActive})=>(isActive?class_nav.active:class_nav.item)}
                >Messages</NavLink>
            </div>
            <div className={class_nav.item}>
                <NavLink to='/news'
                         className={({isActive})=>(isActive?class_nav.active:class_nav.item)}
                >News</NavLink>
            </div>
            <div className={class_nav.item}>
                <NavLink to='/music'
                         className={({isActive})=>(isActive?class_nav.active:class_nav.item)}
                >Music</NavLink>
            </div>
            <div className={class_nav.item}>
                <NavLink to='/settings'
                         className={({isActive})=>(isActive?class_nav.active:class_nav.item)}
                >Settings</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;