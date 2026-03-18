import head from './assets/head.jpg';
import './header.css'

function Header () {
    return (
        <header>
            <img className="bg" src={head}></img>
        </header>
    );
}

export default Header