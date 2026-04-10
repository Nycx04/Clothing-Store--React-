import './main.css';
import { useState } from 'react';

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
        }
    ]);

        return(
<div className="shop">
    {ItemList.map((item) => (
        <div className="card" key={item.id}>
        <img src={item.img} />

        <h2>{item.name}</h2>
        <p>{item.desc}</p>
        <h3>₱{item.price}</h3>

        <button>Add to Cart</button>
        </div>
    ))}
    </div>
);
}

export default Main;