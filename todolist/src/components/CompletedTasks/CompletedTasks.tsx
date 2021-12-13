import React, {useState} from 'react';
import { Task } from '../Task/Task';
import {TaskType} from "../TodolistTasks/TodolistTasks";


type CompletedTasksPropsType = {
    tasks: TaskType[]
}

export const CompletedTasks: React.FC<CompletedTasksPropsType> = React.memo(({tasks}) => {

    return (
        <section className={'completedTasks'}>
            <h2 className={'completedTasks_title'}>Completed ({3})</h2>
            {tasks.map(task => <Task
                key={task.id}
                title={task.title}
                completed={task.completed}
                style={'completedTask'}
                id={task.id}
            />)}
        </section>
    );
})