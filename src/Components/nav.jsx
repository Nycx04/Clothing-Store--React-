import logo from '../assets/logo.png';

function Nav() {
    return(
        <nav className="nav">
            <img className="nav" src={logo}></img>
            <a class="nav">Home</a>
            <a class="nav">About</a>
            <a class="nav">Contact</a>
        </nav>
    );
}

export default Nav;