import Header from "./header";
import React, { useState } from 'react';
import { validatePost } from '../utils/helpers';
import { capitalizeFirstLetter } from '../utils/helpers';
import PostList from './PostList/index';
import { useQuery } from '@apollo/client';
import { QUERY_POSTS } from '../utils/queries';

function Post({ type }) {
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


    const { data } = useQuery(QUERY_POSTS);
    const posts = data?.posts || [];
    console.log(posts);

    return (
        <div>
            <div className="postHeader" >
                <Header title={`${type === 'barns' ? "Post in Your Barnyard" : "Post in Your Stall"}`} />
            </div>
            <div className="post">

                <div className="textbox">
                    <label for="message"></label>
                    <textarea name="message" rows="5" defaultValue={message} onBlur={newPost} placeholder=" Create Your Post" />
                </div>
                <button type="submit">
                    Submit
                </button>
                {errorMessage && (
                    <div>
                        <p className="error-text">{capitalizeFirstLetter(errorMessage)}</p>
                    </div>
                )}
            </div>
            {/* <section className="feed">
                <h3>Post Feed:</h3>
                <div className="posts">
                    <textarea name="message" rows="5" defaultValue={message} onBlur={newPost} />
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{capitalizeFirstLetter(errorMessage)}</p>
                    </div>
                )}
            </section>
            <main>
                    <div className='flex-row justify-space-between'>
                        <div className='col-12 mb-3'>{PostList(posts)}</div>
                    </div>
                </main> */}

            <PostList></PostList>
        </div>
    )
}

export default Post;