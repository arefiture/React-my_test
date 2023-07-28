import class_nav from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={class_nav.nav}>
            <div className={`${class_nav.item} ${class_nav.active}`}>
                <a>Profile</a>
            </div>
            <div className={class_nav.item}>
                <a>Messages</a>
            </div>
            <div className={class_nav.item}>
                <a>News</a>
            </div>
            <div className={class_nav.item}>
                <a>Music</a>
            </div>
            <div className={class_nav.item}>
                <a>Settings</a>
            </div>
        </nav>
    );
}

export default Navbar;