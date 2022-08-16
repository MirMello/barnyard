import Header from "./header";
import React, { useState } from 'react';
import { validateEvents } from '../utils/helpers';

function Events({setcurrentPage}) {
    const [postEvents, setEventState] = useState({ message: '' });
    const [errorMessage, setErrorMessage] = useState('');
    const { Events } = postEvents;
    const handleChange = (e) => {
        if (e.target.name === 'Events') {
            const isValid = validateEvents(e.target.value);
            if (!isValid) {
                setErrorMessage('Your Event is invalid.');
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
            setEventState({ ...postEvents, [e.target.name]: e.target.value });
            console.log('Event is added!', postEvents);
        }
    };


    return (
        <div>
            <Header title="Add your Event" />
            <body>
                <section>
                    <h3>Add Event:</h3>
                    <form id="event-form" method="post">
                        <div>
                            <label for="event">Event:</label>
                            <input type="text" name="event" defaultValue={Events} onBlur={handleChange} />
                        </div>
                        <div>
                            <button onClick={SubmitEvent}>
                                Submit
                            </button>
                            <button onClick={()=>setcurrentPage('Stalls')} type="Stalls">
                                Back
                            </button>
                        </div>
                    </form>
                </section>
            </body>
        </div>
    )
}

export default Events;