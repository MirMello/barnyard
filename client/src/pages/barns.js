import Header from "../components/header";
import React from 'react';
import Post from "../components/Post";
import { useQuery } from '@apollo/client';
import { QUERY_POSTS } from '../utils/queries';

// function barnPost() {
//     const [postState, setPostState] = useState({ message: '' });
//     const [errorMessage, setErrorMessage] = useState('');
//     const { message } = postState;
//     const newPost = (e) => {
//         if (e.target.name === 'Post') {
//             const isValid = validatePost(e.target.value);
//             if (!isValid) {
//                 setErrorMessage('Your post is empty.');
//             } else {
//                 setErrorMessage('');
//             }
//         } else {
//             if (!e.target.value.length) {
//                 setErrorMessage(`${e.target.name} is required.`);
//             } else {
//                 setErrorMessage('');
//             }
//         }
//         if (!errorMessage) {
//             setPostState({ ...postState, [e.target.name]: e.target.value });
//             console.log('New Post', postState);
//         }
//     };

function Barns() {
    const { loading, data } = useQuery(QUERY_POSTS);
    const posts = data?.posts || [];
    console.log(posts);
    return (
        <div class="barns">
            <section>
                <h1>My barn</h1>
                <div class="button-list">
                    <button type="addAnimal">
                        Add Animal
                    </button>
                    <button type="viewEvents">
                        View Events
                    </button>
                    <button type="viewPictures">
                        View Pictures
                    </button>
                </div>
                <nav>
                    <h2>Go to Stalls:</h2>
                    <ul style={{ display: 'flex', listStyle: 'none' }}>
                        {/* <li onClick={() => setcurrentStall("Stalls")}>Stall 1</li> */}
                    </ul>
                </nav>
            </section>
            <section>
                <Post type="barns" />
                <main>
                    <div className='flex-row justify-space-between'>
                        <div className='col-12 mb-3'>{/* PRINT POST LIST */}</div>
                    </div>
                </main>
            </section>
        </div>
    )
}

export default Barns;