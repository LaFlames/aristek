import React, {useCallback} from 'react';
import deleteIcon from './assets/delete.svg';
import editIcon from './assets/edit.svg';
import {useDispatch} from "react-redux";
import {deleteTask} from "../TodolistTasks/todolistTasks-reducer";

type TaskPropsType = {
    title: string
    completed: boolean
    style: string
    id: number
};

export const Task: React.FC<TaskPropsType> = React.memo(({title, completed, style, id}) => {

    const dispatch = useDispatch()

    const deleteTaskHandler = useCallback(() => {
        dispatch(deleteTask(id))
    }, [dispatch])

    return (
        <div className={style}>
            <div>
                <input
                    className={'task_input'}
                    type="checkbox"/>
                <span className={completed ? 'task_completedTaskTitle' : 'task_currentTaskTitle'}>{title}</span>
            </div>
            <div className={completed ? '' : 'task_buttons'}>
                {!completed && <img
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
    );
})