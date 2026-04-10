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
        <div id="Main">
        <div id="display">
            
        </div>
        </div>
    );
}

export default Main;