import { useState } from 'react';
import { validateEmail } from '../utils/helpers';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';


function Login({ setcurrentPage }) {
    const [formLogin, setLogin] = useState({ loginEmail: '', loginPassword: '' })
    const [errorMessage, setErrorMessage] = useState('');
    const { loginEmail, loginPassword } = formLogin;
    const [Login] = useMutation(LOGIN_USER);

    // const handleInput = (e) => {
    //     const { name, value } = e.target
    //     setLogin(prev => ({ ...prev, [name]: value }))
    // }

    const handleInput = (e) => {
        if (e.target.name === 'loginEmail') {
            const isValid = validateEmail(e.target.value);
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
            formLogin({ ...setLogin, [e.target.name]: e.target.value });
            console.log('Login approved!', formLogin);
        }
        // try {
        //     const { data } = await login({
        //       variables: { ...formState },
        //     });
      
        //     Auth.login(data.login.token);
        //   } catch (e) {
        //     console.error(e);
        //   }
    };


    return (
        <div>
            <h1>Login</h1>
            <div>
                <label for="loginEmail">Email:</label>
                <input name='loginEmail' type='text' value={loginEmail.email} onChange={handleInput}></input>
            </div>
            <div>
                <label for="loginPassword">Password:</label>
                <input name='loginPassword' type='text' value={loginPassword.password} onChange={handleInput}></input>
            </div>
            <div>
                <button onClick={Login}>
                    Login
                </button>
                <button onClick={() => setcurrentPage('Barns')} type="Barns">
                    Back
                </button>
            </div>
        </div>
    )
}

export default Login;