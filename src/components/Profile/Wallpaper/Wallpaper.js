import class_wallpaper from './Wallpaper.module.css';

const Wallpaper = () => {
    return (
        <div className={class_wallpaper.wallpaper_bg}>
            <img src='https://w.forfun.com/fetch/f5/f5b0d6e2e8b830336f82209989d79bc9.jpeg' alt='Обои страницы' />
        </div>
    );
}

export default Wallpaper;