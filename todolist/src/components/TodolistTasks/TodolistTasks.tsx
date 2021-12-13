import React, {ChangeEvent, KeyboardEvent, useCallback, useMemo, useState} from 'react';
import {Task} from "../Task/Task";
import {useDispatch} from "react-redux";
import {createTaskTC} from "./todolistTasks-reducer";
import {AddItemForm} from "../AddItemForm/AddItemForm";

export type TaskType = {
    userId: number
    id: number
    title: string
    completed: boolean
}

type TodolistTasksPropsType = {
    currentTasks: TaskType[]
    allTasks: TaskType[]
}

export const TodolistTasks: React.FC<TodolistTasksPropsType> = React.memo(({currentTasks, allTasks}) => {
    const dispatch = useDispatch()

    const createTask = useCallback((title: string) => {
        dispatch(createTaskTC(title))
    }, [dispatch])

    return (
        <section className={'todolist'}>
            <AddItemForm
                addItem={createTask}
                taskTitle=''
                name='Add'
            />

            <div className={'todolist_totalTasks'}>
                Total: {allTasks.length}
            </div>

            <div className={'todolist_tasks'}>
                <h2 className={'todolist_title'}>Todolist ({currentTasks.length})</h2>
                {currentTasks.map(task => <Task
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