import { useQuery } from '@apollo/client';
import { QUERY_POSTS } from '../utils/queries';
import { capitalizeFirstLetter } from '../utils/helpers';
import Post from "../components/Post";
import animals from "../components/animals"

function Barns({ setcurrentPage }) {
    const { data } = useQuery(QUERY_POSTS);
    const posts = data?.posts || [];
    console.log(posts);
    return (
        <body className="container">

            {/* column one */}
            <div className="barn">
                <section>
                    <h1 className='myBarn'>My Barn</h1>
                </section>
                <Post type="barns" />
            </div>

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
                    <animals></animals>
                </div>
            </nav>

        </body>
    )
};

export default Barns;