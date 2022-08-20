export default function Navbar(){
    return(
        <nav>
        <ul style={{ display: 'flex', listStyle: 'none' }}>
          <li id='title'>Barnyard</li>
          <a href='/login'><button type="button">Login</button></a>
          <a href='/signup'><button type="button">Sign Up</button></a>
          <a href='/barns'><button type="button">Barns</button></a>
        </ul>
      </nav>
    )
};