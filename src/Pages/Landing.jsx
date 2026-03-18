import './Landing.css';
import Bg from '../assets/nikola-duza-TSh8D8KutWU-unsplash.jpg';
import LoginForm from '../Components/LoginForm.jsx';

function Landing(){
    return(
        <div id="Body">
        <div id="first-scroll">
            <img src={Bg} className='bg'></img>
        </div>
        <div id="LoginForm">
        <LoginForm/>
        </div>
        </div>
    );
} 

export default Landing;