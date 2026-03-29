
import './header.css'
import Card from './trendingcards.jsx';

function Header () {
    return (
        <div id="Trending">
        <h1>You might like!</h1>
        <div id="Box">
            <Card/>
        </div>
        </div>
    );
}

export default Header