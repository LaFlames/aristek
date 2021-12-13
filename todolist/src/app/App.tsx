import React, {useEffect} from 'react';
import './App.scss';
import {Header} from "../components/Header/Header";
import { Navbar } from '../components/Navbar/Navbar';
import {TaskType, TodolistTasks} from "../components/TodolistTasks/TodolistTasks";
import {CompletedTasks} from "../components/CompletedTasks/CompletedTasks";
import {useDispatch, useSelector} from "react-redux";
import {setTasksTC} from "../components/TodolistTasks/todolistTasks-reducer";
import {AppRootStateType} from "./store";

function App() {

    const dispatch = useDispatch()
    const todoTasks = useSelector<AppRootStateType, TaskType[]>(state => state.tasks)

    const todoTasksForUserWithId1 = todoTasks.filter(task => task.userId === 1)

    const currentTasks = todoTasksForUserWithId1.filter(task => !task.completed)
    const unCompletedTasks = todoTasksForUserWithId1.filter(task => task.completed)

    useEffect(() => {
        dispatch(setTasksTC())
    }, [])

    return (
        <div className="App">
            <Header/>
            <Navbar/>
            <TodolistTasks tasks={currentTasks}/>
            <CompletedTasks tasks={unCompletedTasks}/>
        </div>
    );
}

export default App;
