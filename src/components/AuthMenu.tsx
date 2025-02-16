"use client";
import {useState} from 'react';
import styles from '../styles/AuthMenu.module.css';

const enum AuthMode {
    SignUp = 'SIGN_UP',
    SignIn = 'SIGN_IN'
}

const AuthMenu: React.FC<{}> = () =>{
    let [authMode, setAuthMode]= useState<AuthMode>(AuthMode.SignIn);

    const toggleAuthMode = () => {
        const newAuthMode = authMode === AuthMode.SignIn? AuthMode.SignUp : AuthMode.SignIn;
        setAuthMode(newAuthMode);

    }

    return (<div className={styles.auth}>
        
        <form className={styles.authForm}>
            <input name="email" placeholder='Email'></input>
            <input name="password" type='password' placeholder='Password'></input>
            <button>
                {authMode === AuthMode.SignIn? "Sign In" : "Sign Up"}
            </button>
            <p onClick={toggleAuthMode}> {authMode === AuthMode.SignIn? "Have an account? Sign In": "New to Midas? Sign Up"}</p>
        </form>
        
    </div>);
}

export default AuthMenu;