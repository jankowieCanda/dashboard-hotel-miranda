import { useState } from "react";
import { useNavigate, Navigate } from "react-router";
import { AUTH_EMAIL, AUTH_PASSWORD } from "../var";



export const Login = (props) => {
    const [emailInput, setEmailInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    let navigate = useNavigate();

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        
        if(emailInput != '' && emailInput === AUTH_EMAIL && passwordInput != '' && passwordInput === AUTH_PASSWORD) {
            props.setAuth(true);
            navigate('/');
        }
        
    }

    if(props.auth) {
        return(<Navigate to={'/'} />);
    }

    return(
        <>
            <h1>Welcome to MiranDashboard</h1>
            <form action="/" method="post" onSubmit={handleLoginSubmit}>
                <label htmlFor="email">Email</label>
                <input value={emailInput} name="email" id="email" type="email" onChange={(e) => setEmailInput(e.target.value)} />
                <label htmlFor="password">Password</label>
                <input value={passwordInput} name="password" id="password" type="password" onChange={(e) => setPasswordInput(e.target.value)} />
                <input type="submit" value='Login' />
            </form>
            <div>
                <h2>Access Data</h2>
                <div>
                    <p>Email</p>
                    <p>user@mirandashboard.com</p>
                </div>
                <div>
                    <p>Password</p>
                    <p>mirandashboard</p>
                </div>
            </div>
        </>
    );
}