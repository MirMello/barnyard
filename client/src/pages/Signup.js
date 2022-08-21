import { useState } from "react";
// import { validateSignup } from '../utils/helpers';
import Auth from "../utils/auth";
import { ADD_USER } from "../utils/mutations";
import { useMutation } from "@apollo/client";

export default function Signup() {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
    username: "",
  });
  const [addUser, { error }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (error) {
      console.log(Object.values(error));
    }
    console.log(formState);
    try {
      const { data } = await addUser({
        variables: { ...formState },
      });
      console.log(data);
      Auth.login(data.addUser.token);
    } catch (e) {
      console.log(e);
    }
  };

  return ( 
    <div className="signup">
      <h4>Sign-Up</h4>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="username"
          value={formState.username}
          placeholder="First Name"
          onChange={handleChange}
          className="text_input"/>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formState.email}
          onChange={handleChange}
          className="text_input"/>
        <input
          type="password"
          value={formState.password}
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="text_input"/>
        <input type="submit" value="SIGN UP" className="btn" />
      </form>
      <a className="link" href="/login">
        Login
      </a>
    </div> 
  )
};