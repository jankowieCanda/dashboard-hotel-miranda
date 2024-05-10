import { FormEvent, useContext, useState } from "react";
import { useNavigate, Navigate } from "react-router";
import { AUTH_EMAIL, AUTH_PASSWORD, LOCAL_AUTH } from "../var";
import { AuthContext } from '../components/AuthContext';



export const Login = () => {
    const authcontext = useContext(AuthContext);
    const [emailInput, setEmailInput] = useState<string>('');
    const [passwordInput, setPasswordInput] = useState<string>('');
    let navigate = useNavigate();

    const handleLoginSubmit = (e: FormEvent) => {
        e.preventDefault();
        
        if(emailInput != '' && emailInput === AUTH_EMAIL && passwordInput != '' && passwordInput === AUTH_PASSWORD) {
            authcontext.dispatchSetAuthData('login');
            
            navigate('/');
        }
        
    }

    if(authcontext.authData.isAuth) {
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