import React, {useState} from 'react';
import './App.css';
import Intro from './components/intro';
import Navbar from './components/navbar';
import Footer from './components/footer';

function App() {
  const[getNavbarValue, setNavbarValue] = useState("");

  const clicked = () => {
    return alert("Button clicked!!")
  }

  const changeNavbar = () => {
    setNavbarValue("Contact");
  }

  return (
    <div className="App">
      {/* <header className="App-header">
        <nav>TESTING</nav>
      </header> */}
      <Navbar newValue={getNavbarValue} />
      <h1>HELLO, WORLD!!</h1>
      <Intro 
        name="Gerry" 
        clicked={clicked} 
      />
      <button onClick={() => changeNavbar()}>Change Navbar</button>
      <Footer />
    </div>
  );
}

export default App;
