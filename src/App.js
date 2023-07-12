import './App.css';
import Intro from './components/intro';
import Navbar from './components/navbar';
import Footer from './components/footer';

function App() {
  const clicked = () => {
    return alert("Button clicked!!")
  }

  return (
    <div className="App">
      <header className="App-header">
        {/* <nav>TESTING</nav> */}
        <Navbar />
        <h1>HELLO, WORLD!!</h1>
      </header>
      <Intro 
        name="Gerry" 
        clicked={clicked} 
      />
      <Footer />
    </div>
  );
}

export default App;
