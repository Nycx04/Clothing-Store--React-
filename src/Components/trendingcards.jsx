import './trendingcards.css';
import Card1 from '../assets/photo-1529636273736-fc88b31ea9d9.avif';

function Card(){
    const cardData = [
    { title: "White Dress", body: "$200",  image: "photo-1529636273736-fc88b31ea9d9.avif" },
    { title: "Red Jacket",  body: "$150",  image: "premium_photo-1675186049366-64a655f8f537.avif" },
    ];

    return(
        <div id="cards">
        {cardData.map((card, i) => (
        <div key={i} className="card">
        <img src={card.image} alt={card.title} className="card-img" />
        <div className="card-title">{card.title}</div>
        <div className="card-body">{card.body}</div>
        </div>
        ))}
        </div>
    );
}


export default Card;