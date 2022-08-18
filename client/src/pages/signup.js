import { useState } from "react"
import { validateSignup } from '../utils/helpers';
function Signup({setcurrentPage}) {
    const [formSignup, setSignup] = useState({ signupName: '', signupEmail: '', signupPassword: '' })
    const [errorMessage, setErrorMessage] = useState('');
    const { signupName, signupEmail, signupPassword } = formSignup;
    // const handleInput = (e) => {
    //     const { name, value } = e.target
    //     setSignup(prev => ({ ...prev, [name]: value }))
    // }
    const handleInput = (e) => {
        if (e.target.name === 'signupEmail') {
            const isValid = validateSignup(e.target.value);
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.email} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            formSignup({ ...setSignup, [e.target.name]: e.target.value });
            console.log('Signup approved!', formSignup);
        }
    };
    return (
        <div>
            <h1>Sign up !</h1>
            <div>
                <label for="signupName">Name:</label>
                <input name='signupName' type='text' value={signupName.name} onChange={handleInput}></input>
            </div>
            <div>
                <label for="signupEmail">Email:</label>
                <input name='signupEmail' type='text' value={signupEmail.email} onChange={handleInput}></input>
            </div>
            <div>
                <label for="signupPassword">Password:</label>
                <input name='signupPassword' type='text' value={signupPassword.password} onChange={handleInput}></input>
            </div>
            <div>
                <button onClick={Signup}>
                    Signup
                </button>
                <button onClick={()=>setcurrentPage('Barns')} type="Barns">
                    Back
                </button>
            </div>
        </div>
    )
}
export default Signup;