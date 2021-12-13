import React, {useState} from 'react';
import {Task} from "../Task/Task";

export type TaskType = {
    userId: number
    id: number
    title: string
    completed: boolean
}

type TodolistTasksPropsType = {
    tasks: TaskType[]
}

export const TodolistTasks: React.FC<TodolistTasksPropsType> = React.memo(({tasks}) => {

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
                    id={task.id}
                />)}
            </div>
        </section>
    );
})