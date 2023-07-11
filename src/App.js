import './App.css';
import Intro from './components/intro';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <nav>TESTING</nav>
      </header> */}
      <section>
        <h1>HELLO, WORLD!!</h1>
        <Intro name="Gerry" />
        <Intro name="Tegar" />
        <Intro name="Shofa" />
      </section>
    </div>
  );
}

export default App;
