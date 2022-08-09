import Header from "../components/header";
import React from 'react';


// function stallPost() {
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

function Stalls() {
    return (
        <div>
            <body>
                <section>
                    <h1>my stall?</h1>
                </section>
                <div>
                    <button type="donation">
                        Give Donation
                    </button>
                    <button type="viewEvents">
                        View Events
                    </button>
                    <button type="viewPictures">
                        View Pictures
                    </button>
                </div>
                <nav>
                    <h2>Stall upcoming events:</h2>
                    <ul style={{ display: 'flex', listStyle: 'none' }}>
                        <li></li>
                    </ul>
                </nav>
            </body>
        </div>
    )
}

export default Stalls;