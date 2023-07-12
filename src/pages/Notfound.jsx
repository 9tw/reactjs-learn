import React from 'react';
import '../App.css';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

function Notfound() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <nav>TESTING</nav>
      </header> */}
      <Navbar />
      <h1>Page Not Found!!</h1>
      <Footer />
    </div>
  );
}

export default Notfound;