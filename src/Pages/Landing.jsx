import './Landing.css';
import Bg from '../assets/freestocks-_3Q3tsJ01nc-unsplash.jpg';
import LoginForm from '../Components/LoginForm.jsx';

function Landing(){
    return(
        <div id="Body">
        <div id="first-scroll">
            <h1>Clothier</h1>
            <img src={Bg} className='bg'></img>
        </div>
        <div id="LoginForm">
        <LoginForm/>
        </div>
        </div>
    );
} 

export default Landing;