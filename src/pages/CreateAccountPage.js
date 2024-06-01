import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

 const CreateAccountPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();
    const createAccount = async () => {
        if(password !== confirmPassword){
            setError("password and confirm password doesn't match");
            return
        }
        try {
            await createUserWithEmailAndPassword(getAuth(), email, password);
            navigate('/articles')
        } catch (e) {
            setError(e.message);
        }
    }

    return (
        <>
        <h3>Create Account </h3>
        {error && <p className="error">{error}</p>}
        <input 
            value={email}
            placeholder="Your email"
            onChange={e => setEmail(e.target.value)}/>
        <input 
            value={password}
            type="password"
            placeholder="Password"
            onChange={e => setPassword(e.target.value)}/>
        <input 
            value={confirmPassword}
            type="confirmPassword"
            placeholder="Re-enter Password"
            onChange={e => setConfirmPassword(e.target.value)}/>
        <button onClick={createAccount}>Log in</button>
        <Link to="/login">Already have an account? Login</Link>
        </> 
    )
 }

 export default CreateAccountPage;