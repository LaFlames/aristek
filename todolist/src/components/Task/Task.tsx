import React, {ChangeEvent, useCallback, useState} from 'react';
import deleteIcon from './assets/delete.svg';
import editIcon from './assets/edit.svg';
import {useDispatch} from "react-redux";
import {deleteTaskTC, updateTaskTC} from "../TodolistTasks/todolistTasks-reducer";
import {AddItemForm} from "../AddItemForm/AddItemForm";

type TaskPropsType = {
    title: string
    completed: boolean
    style: string
    id: number
};

export const Task: React.FC<TaskPropsType> = React.memo(({title, completed, style, id}) => {

    const dispatch = useDispatch()

    const [editMode, setEditMode] = useState(false)

    const deleteTaskHandler = useCallback(() => {
        dispatch(deleteTaskTC(id))
    }, [dispatch])
    const changeTaskStatusHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        let newIsDone = e.currentTarget.checked
        dispatch(updateTaskTC(id, {completed: newIsDone}))
    }, [dispatch])
    const changeTaskTitle = useCallback((title: string) => {
        dispatch(updateTaskTC(id, {title}))
        setEditMode(false)
    }, [dispatch])

    return editMode
        ? <AddItemForm
            taskTitle={title}
            addItem={changeTaskTitle}
            name='Save'
            autoFocus={true}
        />
        : <div className={style}>
            <div>
                <input
                    checked={completed}
                    onChange={changeTaskStatusHandler}
                    type="checkbox"/>
                <span className={completed ? 'task_completedTaskTitle' : 'task_currentTaskTitle'}>{title}</span>
            </div>

            <div className={completed ? '' : 'task_buttons'}>
                {!completed && <img
                    onClick={() => setEditMode(true)}
                    src={editIcon}
                    alt="edit task"
                    style={{cursor: 'pointer'}}
                />}
                <img
                    onClick={deleteTaskHandler}
                    src={deleteIcon}
                    alt="delete task"
                    style={{cursor: 'pointer'}}
                />
            </div>
        </div>
})




