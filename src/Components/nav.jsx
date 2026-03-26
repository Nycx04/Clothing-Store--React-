import './nav.css';
import Icon from '../assets/Dialogue-Dirge-Chibi-Icon.png';

function Nav() {
    return(
    <div id="black-tile">
        <h1>Clothier</h1>
        <input type="search" placeholder='Search'></input>
        <a href="#Home">Home</a>
        <a href="#Discover">Discover</a>
        <a href="#Cart">Cart🛒</a>
        <a href="#Messages">Messages</a>
        <a href="#Profile"><img src={Icon}></img></a>
    </div>
    );
}

export default Nav;