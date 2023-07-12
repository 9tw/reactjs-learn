import React, {useState, useEffect} from 'react';
import '../App.css';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

function About() {
    const [getAge, setAge] = useState(0)
    const [getCategory, setCategory] = useState("Balita")

    useEffect(() => {
        if (getAge > 5 && getAge < 13) {
            setCategory("Anak-anak")
        } else if (getAge > 12 && getAge < 18) {
            setCategory("Remaja")
        } else if (getAge > 17) {
            setCategory("Dewasa")
        } else {
            setCategory("Balita")
        }
    }, [getAge])

    return (
        <div className="App">
        {/* <header className="App-header">
            <nav>TESTING</nav>
        </header> */}
        <Navbar />
        <h1>This is About Page.</h1>
        <h1>Umur saya : {getAge} Tahun</h1>
        <h3>{getCategory}</h3>
        <button onClick={() => setAge((prev) => prev + 1)}>Tambah</button>
        <button onClick={() => setAge((prev) => prev - 1)}>Kurang</button>
        <Footer />
        </div>
    );
}

export default About;