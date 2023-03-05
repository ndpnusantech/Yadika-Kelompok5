import React from 'react';
import './Login.css';

function Login() {
    const signInButton = document.getElementById('signIn');
    const main = document.getElementById('main');
    signInButton.addEventListener('click', () =>{
        main.classList.remove("right-panel-active");
    })
    return(
        <div className='container' id='main'>
            <div className='sign-in'>
                <from action='#'>
                    <h1>Login</h1>
                    <div className='social-container'>
                        <a href='#' className='social'><i className='fab fa-google-plus-g'></i></a>
                        <a href='#' className='social'><i className='fab fa-linkedin-in'></i></a>
                        <a href='#' className='social'><i className='fab fa-facebook-f☻'></i></a>
                    </div>
                    <p>or use your account</p>
                    <input type='email' name='email' placeholder='Email' required=''></input>
                    <input type='password' name='pswd' placeholder='Password' required=''></input>
                    <button>Login</button>
                </from>
            </div>
            <div className='overlay-container'>
                <div className='overlay-right'>
                    <h1>Hello, Friends</h1>
                    <p>Enter your personal detail login with your personal info</p>
                    <button id='signIn'>Sign up</button>
                </div>
            </div>
        </div>
    );
}
export default Login()
