function Header(props) {
    return (
        <div className="App">
          <h1>{props.title}</h1>
          <h2>{props.subtitle}</h2>
        </div>
      );
    }

export default Header;