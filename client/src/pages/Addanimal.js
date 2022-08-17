import React, { useState } from 'react';
import Header from "../components/header";
import { validateName } from '../utils/helpers';

import { ADD_ANIMAL } from '../utils/mutations';
import Auth from '../utils/auth';
import { useMutation, useQuery } from '@apollo/client'
//import { useParams } from 'react-router-dom';
import { QUERY_ANIMALS , QUERY_POSTS} from '../utils/queries';
import Stalls from './Stalls';




function Addanimal({setcurrentPage}) {
    const [formState, setFormState] = useState({ name: '', gender: ''});
    const [errorMessage, setErrorMessage] = useState('');
    const { name, gender } = formState;
    //const { username: userParam } = useParams();
    const [addAnimal] = useMutation(ADD_ANIMAL);
    const { loading, data } = useQuery( QUERY_ANIMALS );

const handleChange = (e) => {
    if (e.target.name === 'name') {
        const isValid = validateName(e.target.value);
        if (!isValid) {
            setErrorMessage('Your Name is invalid.');
        } else {
            setErrorMessage('');
        }
    } else {
        if (!e.target.value.length) {
            setErrorMessage(`${e.target.name} is required.`);
        } else {
            setErrorMessage('');
        }

    };

    const submitAnimal = (e) => {
        e.preventDefault()
        addAnimal(name, gender)

        // const user = data?.me || data?.user || {};

        // if (Auth.loggedIn()) {
        //     return <Stalls to="/Barns" />;
        // }

        // if (loading) {
        //     return <div>Loading...</div>;
        // }

        // if (!user?.username) {
        //     return (
        //         <h4>
        //             You need to be logged in to see this. Use the navigation links above to
        //             sign up or log in!
        //         </h4>
        //     );
        // }
        // const handleChange = async () => {
        //     try {
        //         await addAnimal({
        //             variables: { id: user._id },
        //         });
        //     } catch (e) {
        //         console.error(e);
        //     }
        // };


    }
    if (!errorMessage) {
        setFormState({ ...formState, [e.target.name]: e.target.value });
        console.log('Animal is added!', formState);
    }
};

const submitAnimal = () => {
    //use mutation here to add animal to datbase
}

    return (
        <div>
            <Header title="Add your Animal" />
     
                <section>
                    <h3>Add Animal:</h3>
                    <form id="animal-form">
                        <div>
                            <label for="name">Name:</label>
                            <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
                        </div>
                        <div>
                            <label for="gender">Gender:</label>
                            <input type="text" name="gender" defaultValue={gender} onBlur={handleChange} />
                        </div>
                        <div>
                            <button onClick={submitAnimal}>
                                Submit
                            </button>
                            <button onClick={()=>setcurrentPage('Barns')} type="Barns">
                                Back
                            </button>
                        </div>
                    </form>
                </section>
          
        </div>
    )
}

export default Addanimal;