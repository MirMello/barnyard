import Header from "./header";
import React, { useState } from 'react';
import {validatePost} from '../utils/helpers';

function Post({type}) {
    const [postState, setPostState] = useState({ message: '' });
    const [errorMessage, setErrorMessage] = useState('');
    const { message } = postState;
    const newPost = (e) => {
        if (e.target.name === 'Post') {
            const isValid = validatePost(e.target.value);
            if (!isValid) {
                setErrorMessage('Your post is empty.');
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
            setPostState({ ...postState, [e.target.name]: e.target.value });
            console.log('New Post', postState);
        }
    };


    return (
        <div>
            <Header title={`${type=== 'barns'?"Post in your Barnyard":"Post in your Stall"}`} />
            <div>
                <h3>Create a Post:</h3>
                <div>
                    <label for="message">Message:</label>
                    <textarea name="message" rows="5" defaultValue={message} onBlur={newPost} />
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button type="submit">
                    Submit
                </button>
            </div>
            <section>
                <h3>Post Feed:</h3>
                <div>
                    <textarea name="message" rows="5" defaultValue={message} onBlur={newPost} />
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
            </section>
        </div>
    )
}

export default Post;