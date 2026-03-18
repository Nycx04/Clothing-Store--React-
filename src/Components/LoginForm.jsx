import './LoginForm.css';


function LoginForm(){
    return(
        <>
        <div id="Login-Box-Parent">
            <div id="Login-Box">
                    <h2>
                        Login/Signup
                    </h2>
                    <form>
                        <input type="textbox" placeholder="Email"/><br/><br/>
                        <input type="Password" placeholder="Password"/><br/><br/>
                        <input type="button" value="Submit"/><br/><br/>
                    </form>
                
            </div>
            </div>
        </>
    );
}

export default LoginForm;