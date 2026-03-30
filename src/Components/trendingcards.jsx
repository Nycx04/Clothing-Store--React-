import './trendingcards.css';
import Card1 from '../assets/photo-1529636273736-fc88b31ea9d9.avif';

function Card(){
    return(
        <div id="cards">
        <div id="card1">
        <img src={Card1}/>
        <h1>White Dress</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
        </div>
        <div id="card2">

        </div>
        <div id="card3">

        </div>
        </div>
    );
}


export default Card;