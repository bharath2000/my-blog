import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();
    const logIn = async () => {
        try {
            await signInWithEmailAndPassword(getAuth(), email, password);
            navigate('/articles')
        } catch (e) {
            setError(e.message);
        }
    }

    return (
        <>
        <h3>Login </h3>
        {error && <p className="error">{error}</p>}
        <input 
            value={email}
            placeholder="Your email"
            onChange={e => setEmail(e.target.value)}/>
        <input 
            value={password}
            type="password"
            placeholder="password"
            onChange={e => setPassword(e.target.value)}/>
        <button onClick={logIn}>Log in</button>
        <Link to="/createAccount">Don't have an Account? Create One</Link>
        </> 
    )
}

export default LoginPage;