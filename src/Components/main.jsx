import './main.css';
import { useState } from 'react';
import Img1 from '../assets/premium_photo-1729788891863-0d9b6f2b453b.avif';
import Img2 from '../assets/istockphoto-2206793808-612x612.webp';
import Img3 from '../assets/photo-1620799140408-edc6dcb6d633.avif';
import Img4 from '../assets/photo-1620799139652-715e4d5b232d.avif';
import Img5 from '../assets/photo-1620799140188-3b2a02fd9a77.avif';
import Img6 from '../assets/premium_photo-1727942419322-0f09fd3b31e9.avif';
import Img7 from '../assets/photo-1585892478508-130c50eb7a69.avif';

function Main(){
    const [ItemList, setItemlist] = useState([
        {
            id:1,
            img:Img1,
            title:"Boots",
            Desc:"lorem ipsum"
        },{
            id:2,
            img:Img2,
            title:"T shirt",
            Desc:"lorem ipsum"
        },{
            id:3,
            img:Img3,
            title:"Sweatshirt",
            Desc:"Sweatshirt ni patrick"
        },{
            id:4,
            img:Img4,
            title:"V-neck",
            Desc:"V-neck ni lance"
        },{
            id:5,
            img:Img5,
            title:"Hoddie",
            Desc:"Hoodie ni kevs"
        },{
            id:6,
            img:Img6,
            title:"Sleeveless",
            Desc:"lorem ipsum"
        },{
            id:7,
            img:Img7,
            title:"Compression Shirt",
            Desc:"lorem ipsum"
        }
    ]);

        return(
<div className="shop">
    <div className="cards">
    {ItemList.map((item) => (
        <div className="card" key={item.id}>
        <div className="img" key={item.id}> 
        <img src={item.img} />
        </div>
        <h2>{item.title}</h2>
        <p>{item.Desc}</p>

        <button>Add to Cart</button>
        </div>
    ))}
    </div>
    <div align="center">
        <a href="#">See More</a>
    </div>
    </div>
);
}

export default Main;