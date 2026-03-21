import './LoginForm.css';


function LoginForm(){
    return(
        <>
        <div id="Login-Box-Parent">
            <div id="Login-Box">
                    <h2>
                        Welcome to Clothier<br/>Create an account
                    </h2>
                    <form>
                        <input type="text" placeholder="Email"/>
                        <input type="password" placeholder="Password"/>
                        <input type="button" value="Submit"/>
                    </form>
            </div>
            </div>
        </>
    );
}

export default LoginForm;