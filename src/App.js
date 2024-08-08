import React from 'react';
import Header from './Components/Header';
import Courses from './Components/Courses';
import Footer from './Components/Footer';
import './styles.css';

function App() {
    return(
        <main>
            <Header/>
            <Courses/>
            <Footer/>
        </main>
    )
}

export default App;