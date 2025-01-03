import Facebook from '../img/facebook.png'
import Google from '../img/google.png'
import Github from '../img/github.png'

function google(){
    window.open("http://localhost:5000/auth/google", "_self");
}

function github(){
    window.open("http://localhost:5000/auth/github", "_self");
}

function facebook(){
    window.open("http://localhost:5000/auth/facebook", "_self");
}

export default function Login() {
  return (
    <div className="login">
	    <h1 className="loginTitle">Choose a Login Method</h1>
        <div className="wrapper">
            <div className="left">
                <div className="loginButton google" onClick={google}>
                    <img src={Google} alt="a" className="icon" />
                    Google
                </div>
                <div className="loginButton facebook" onClick={facebook}>
                    <img src={Facebook} alt="a" className="icon" />
                    Facebook
                </div>
                <div className="loginButton github" onClick={github}>
                    <img src={Github} alt="a" className="icon" />
                    Github
                </div>
            </div>
            <div className="center">
                <div className="line" />
                <div className="or">OR</div>
            </div>
            <div className="right">
                <input type="text" placeholder="Username" />
                <input type="text" placeholder="Password" />
                <button className="submit">Login</button>
            </div>
        </div>
    </div>
  )
}
