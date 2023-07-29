import class_nav from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={class_nav.nav}>
            <div className={`${class_nav.item} ${class_nav.active}`}>
                <a href='/profile'>Profile</a>
            </div>
            <div className={class_nav.item}>
                <a href='/messages'>Messages</a>
            </div>
            <div className={class_nav.item}>
                <a href='/news'>News</a>
            </div>
            <div className={class_nav.item}>
                <a href='/music'>Music</a>
            </div>
            <div className={class_nav.item}>
                <a href='/settings'>Settings</a>
            </div>
        </nav>
    );
}

export default Navbar;