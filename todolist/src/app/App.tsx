import React from 'react';
import './App.scss';
import {Header} from "../components/Header/Header";
import { Navbar } from '../components/Navbar/Navbar';

function App() {
    return (
        <div className="App">
            <Header/>
            <div style={{display: "flex"}}>
                <Navbar/>

            </div>
        </div>
    );
}

export default App;
