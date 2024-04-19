import { useRef } from "react";
import { useNavigate, Navigate } from "react-router";

const authEmail = 'user@mirandashboard.com';
const authPassword = 'mirandashboard';

export const Login = (props) => {
    let loginEmailRef = useRef('');
    let passwordRef = useRef('');
    let navigate = useNavigate();

    

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        let inputMail = loginEmailRef.current.value;
        let inputPass = passwordRef.current.value;
        /* console.log(inputMail);
        console.log(inputPass); */
        if(inputMail != '' && inputMail === authEmail && inputPass != '' && inputPass === authPassword) {
            /* console.log(inputMail.value);
            console.log(inputPass.value); */
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
                <input name="email" id="email" type="email" ref={loginEmailRef} />
                <label htmlFor="password">Password</label>
                <input name="password" id="password" type="password" ref={passwordRef} />
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