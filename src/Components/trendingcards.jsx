import './trendingcards.css';
import Card1 from '../assets/photo-1529636273736-fc88b31ea9d9.avif';
import Card2 from '../assets/premium_photo-1675186049366-64a655f8f537.avif';
import Card3 from '../assets/photo-1685354218016-3899c9ef79ad.avif';
function Card(){
    return(
        <div id="layout">
        <div className="Cards">
        <div id="card1" className="cards">
            <img src={Card1}/>
        <div id="card-text" className="card-text">
            <h1>White Dress</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis iste perferendis </p>
            <button>Buy Now</button>
        </div>
        </div>
        </div>

        <div className="Cards">
        <div id="card2" className="cards">
            <img src={Card2}/>
        <div id="card-text" className="card-text">
            <h1>Red Coat</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis iste perferendis </p>
            <button>Buy Now</button>
        </div>
        </div>
        </div>

        <div className="Cards">
        <div id="card3" className="cards">
            <img src={Card3}/>
        <div id="card-text" className="card-text">
            <h1>Green Hoodie</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis iste perferendis </p>
            <button>Buy Now</button>
        </div>
        </div>
        </div>
        </div>
    );
}


export default Card;