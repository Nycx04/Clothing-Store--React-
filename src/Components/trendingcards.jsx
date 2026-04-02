import { useState, useEffect } from "react";
import './trendingcards.css';
import Card1 from '../assets/photo-1529636273736-fc88b31ea9d9.avif';
import Card2 from '../assets/premium_photo-1675186049366-64a655f8f537.avif';
import Card3 from '../assets/photo-1685354218016-3899c9ef79ad.avif';

function Card() {


    const [currentIndex, setCurrentIndex] = useState(0);

    const cards = [
        {
            img: Card1,
            title: "White Dress",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            img: Card2,
            title: "Red Coat",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            img: Card3,
            title: "Green Hoodie",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        }
    ];

    
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
        }, 3000);

        return () => clearInterval(interval); 
    }, []);

    return (
        <div id="layout">
            <div className="Cards">
                <div className="cards">
                    <img src={cards[currentIndex].img} />

                    <div className="card-text">
                        <h1>{cards[currentIndex].title}</h1>
                        <p>{cards[currentIndex].desc}</p>
                        <button>Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;