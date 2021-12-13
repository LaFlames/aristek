import React, {useState} from 'react';
import {Task} from "./Task/Task";


export const TodolistTasks = () => {

    type TaskType = {
        userId: number
        id: number
        title: string
        completed: boolean
    }

    const [tasks, setTasks] = useState<TaskType[]>([{
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": true
    },
        {
            "userId": 1,
            "id": 2,
            "title": "quis ut nam facilis et officia qui",
            "completed": false
        },
        {
            "userId": 1,
            "id": 3,
            "title": "fugiat veniam minus",
            "completed": true
        }])

    return (
        <section className={'todolist'}>
            <input
                className={'todolist_input'}
                placeholder="+ Add a task, press Enter to save"/>
            <button className={'todolist_btn'}>Add</button>
            <div className={'todolist_totalTasks'}>
                Total: 82
            </div>
            <div className={'todolist_tasks'}>
                <h2 className={'todolist_title'}>Todolist ({3})</h2>
                {tasks.map(task => <Task
                    key={task.id}
                    title={task.title}
                    completed={task.completed}
                    style={task.completed ? 'completedTask' : 'task'}
                />)}
            </div>
        </section>
    );
};