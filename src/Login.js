import React, { useState } from 'react'
import { Link , useHistory } from 'react-router-dom';
import './login.css'
import {auth} from './firebase';
function Login() {
    const history = useHistory();
    const [email,setEmail] = useState(' ');
    const [password,setPassword] = useState(' ');
    const signIn = e => {
        e.preventDefault()
        auth
        .signInWithEmailAndPassword(email,password)
        .then(auth => {
            history.push('/');
        })
        .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();
        auth 
        .createUserWithEmailAndPassword(email,password)
        .then((auth) => {
            console.log(auth);
        })
        .catch(error => alert(error.message))
        if(auth)
        {
            history.push('/');
        }
    }
    return (
        <div className="login" >
            <Link to= "/">
            <img className ="login__logo" 
            src="http://pngimg.com/uploads/amazon/amazon_PNG24.png"  />
            </Link>
        <div className="login__container">
            <h2>Login</h2>
            <form>
            <p><strong>E-mail or mobile phone number</strong></p>
            <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>
            <p><strong>Password</strong></p>
            <input type='Password' value={password} onChange={e => setPassword(e.target.value)}/>
            <button type ="submit" className="login__SignInButton" onClick={signIn}>Sign In</button>
            <button onClick={register} className="login__registerButton" >Create Your Amazon Account</button>
            </form>
        </div>
        </div>
    )
}

export default Login ; 
