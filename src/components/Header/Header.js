import class_header from './Header.module.css';

const Header = () => {
    return (
        <header className={class_header.header}>
            <img
                src='https://starwars-galaxy.ru/800/600/http/koloro.ru/images/portfolio/globino-maslo/picture-splash-3.png'
                alt='Иконка сайта'
            />
        </header>
    );
}

export default Header;