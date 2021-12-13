import React, {ChangeEvent, KeyboardEvent, useMemo, useState} from 'react';
import {Task} from "../Task/Task";
import {useDispatch} from "react-redux";
import {createTaskTC} from "./todolistTasks-reducer";

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
    const [title, setTitle] = useState<string>("")
    const [error, setError] = useState<boolean>(false)

    const addItemHandler = () => { //give only TITLE to parent's callback
        if (title.trim() !== "") {
            dispatch(createTaskTC(title))
            setTitle("")
        } else {
            setError(true)
        }
    }
    const onChangeTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
        setError(false)
    }
    const onKeyPressAddItemHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        error && setError(true)
        if (e.charCode === 13) {
            dispatch(createTaskTC(title))
            setTitle("")
        }
    }

    const totalCurrentTasks = useMemo(() => {
        return currentTasks.length
    }, [currentTasks])
    const allTodoTasks = useMemo(() => {
        return allTasks.length
    }, [allTasks])

    return (
        <section className={'todolist'}>
            <input
                value={title}
                onChange={onChangeTitleHandler}
                onKeyPress={onKeyPressAddItemHandler}
                className={error ? 'todolist_input todolist_inputError' : 'todolist_input'}
                placeholder="+ Add a task, press Enter to save"
            />
            <button
                onClick={addItemHandler}
                className={'todolist_btn'}
            >Add</button>
            <div className={'todolist_totalTasks'}>
                Total: {allTodoTasks}
            </div>
            <div className={'todolist_tasks'}>
                <h2 className={'todolist_title'}>Todolist ({totalCurrentTasks})</h2>
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