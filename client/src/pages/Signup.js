import { useState } from "react"
// import { validateSignup } from '../utils/helpers';
import Auth from "../utils/auth"
import {ADD_USER} from "../utils/mutations";
import {useMutation} from "@apollo/client"

function Signup({setcurrentPage}) {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [addUser, { error }] = useMutation(ADD_USER);
  
    const handleFormSubmit = async (event) => {
      event.preventDefault();
  
      if (error) {
        console.log(Object.values(error));
      }
  
      try {
        const mutationResponse = await addUser({
          variables: {
            email: formState.email,
            password: formState.password,
            username: formState.firstName + " " + formState.lastName,
          },
        });
        const token = mutationResponse.data.addUser.token;
        Auth.login(token);
      } catch (e) {
        console.log(error);
      }
    };
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
          ...formState,
          [name]: value,
        });
      };
     
    

    return (
        <div className="signup">
      <h4>Sign-Up</h4>
      <form onSubmit={handleFormSubmit}>
        <div className="text_area">
          <input
            type="firstName"
            id="firstName"
            name="firstName"
            placeholder="First Name"
            onChange={handleChange}
            className="text_input"
          />
        </div>
        <div className="text_area">
          <input
            type="lastName"
            id="lastName"
            name="lastName"
            placeholder="Last Name"
            onChange={handleChange}
            className="text_input"
          />
          </div>
          <div className="text_area">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="text_input"
          />
        </div>
        <div className="text_area">
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="text_input"
          />
        </div>
        <button type="submit" className="btn" >SIGN UP</button>
      </form>
      <button className="link" onClick={()=>setcurrentPage('Login')}>
        Login
      </button>
    </div>


    )
}
export default Signup;