
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



function Barns({ setcurrentPage }) {
    const { data } = useQuery(QUERY_POSTS);
    const posts = data?.posts || [];
    console.log(posts);

    return (
        <div className="container">
        {/* column one */}
        <body className="barn">
            <section>
                <h1>My Barn</h1>
            </section>
            <Post type="barns" />
        {/* column two */}
            <nav className="stallNav">
                <h2>Go to Stalls:</h2>
                <ul style={{ display: 'flex', listStyle: 'none' }}>
                    {/* <li onClick={() => setcurrentStall("Stalls")}>Stall 1</li> */}
                </ul>
                <div>
                    <button onClick={() => setcurrentPage('addAnimal')} type="addAnimal">
                        Add Animal
                    </button>
                </div>
            </nav>
        </body>
    </div>
    )
};

export default Barns;