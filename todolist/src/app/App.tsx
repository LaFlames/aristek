import React from 'react';
import './App.scss';
import {Header} from "../components/Header/Header";
import { Navbar } from '../components/Navbar/Navbar';
import {TodolistTasks} from "../components/TodolistTasks/TodolistTasks";
import {CompletedTasks} from "../components/TodolistTasks/CompletedTasks/CompletedTasks";

function App() {
    return (
        <div className="App">
            <Header/>
            <Navbar/>
            <TodolistTasks/>
            <CompletedTasks/>
        </div>
    );
}

export default App;
