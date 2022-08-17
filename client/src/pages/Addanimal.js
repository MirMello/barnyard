import React, { useState } from 'react';
import Header from "../components/header";
import { validateName } from '../utils/helpers';
//import { ADD_ANIMAL } from '../utils/mutations';


function Addanimal({ setcurrentPage }) {
    const [formState, setFormState] = useState({ name: '', gender: '' });
    const [errorMessage, setErrorMessage] = useState('');
    const { name, gender } = formState;

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
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
            console.log('Animal is added!', formState);
        }
    };

    const submitAnimal = (props) => {
        // use mutation here to add animal to datbase
        // const { username: userParam } = useParams();

        // const [addAnimal] = useMutation(ADD_ANIMAL);
        // const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
        //     variables: { username: userParam },
        // });

        // const user = data?.me || data?.user || {};

        // if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
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
        // **************************************already have it should i change to handleClick? */
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

    return (
        <div>
            <Header title="Add your Animal" />
            <body>
                <section>
                    <h3>Add Animal:</h3>
                    <form id="animal-form" method="post">
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
                            <button onClick={() => setcurrentPage('Barns')} type="Barns">
                                Back
                            </button>
                        </div>
                    </form>
                </section>
            </body>
        </div>
    )
}

export default Addanimal;