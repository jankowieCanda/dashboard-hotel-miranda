import { FormEvent, useContext, useState } from "react";
import { useNavigate, Navigate } from "react-router";
import { AuthContext } from '../components/AuthContext';



export const Login = () => {
    const authcontext = useContext(AuthContext);
    const [emailInput, setEmailInput] = useState<string>('');
    const [passwordInput, setPasswordInput] = useState<string>('');
    let navigate = useNavigate();
    
    const handleLoginSubmit = async (e: FormEvent) => {
        e.preventDefault();
        
        const formData = {email: emailInput, password: passwordInput}

        const response = await fetch(import.meta.env.VITE_LOCAL_BASE_URL + 'login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });
        const data = await response.json()
        if(response.ok) {
            localStorage.setItem(import.meta.env.VITE_AUTH_TOKEN, data.token);
            authcontext.dispatchSetAuthData('login');
            navigate('/');
        } else {
            alert('Login fail!!');
            setEmailInput('');
            setPasswordInput('');
        }

                
    }

    if(authcontext.authData.isAuth) {
        return(<Navigate to={'/'} />);
    }

    return(
        <>
            <h1>Welcome to MiranDashboard</h1>
            <form action="/" method="post" onSubmit={handleLoginSubmit} >
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