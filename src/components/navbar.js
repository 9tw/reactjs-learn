function Navbar(props) {
    return (
    <div style={{
        backgroundColor:"grey"
    }}>
        <ul>
            <li>
                <a href="/">Home</a>
            </li>
            {/* <li>
                <a href="">Contact</a>
            </li> */}
            <li>
                <a href="/about">{!props.newValue ? "About" : props.newValue}</a>
            </li>
        </ul>
      </div>
    );
  }
  
  export default Navbar;