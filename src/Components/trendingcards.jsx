import './trendingcards.css';
import Card1 from '../assets/photo-1529636273736-fc88b31ea9d9.avif';

function Card(){
    return(
        <div id="layout">
        <div className="Cards">
        <div id="card1" className="cards">
            <img src={Card1}/>
        <div id="card-text" className="card-text">
            <h1>White Dress</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis iste perferendis </p>
        </div>
        </div>
        </div>

        <div className="Cards">
        <div id="card2" className="cards">
            <img src={Card1}/>
        <div id="card-text" className="card-text">
            <h1>White Dress</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis iste perferendis </p>
        </div>
        </div>
        </div>

        <div className="Cards">
        <div id="card3" className="cards">
            <img src={Card1}/>
        <div id="card-text" className="card-text">
            <h1>White Dress</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis iste perferendis </p>
        </div>
        </div>
        </div>
        </div>
    );
}


export default Card;