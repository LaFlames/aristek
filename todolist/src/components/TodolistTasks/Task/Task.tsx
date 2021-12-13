import React from 'react';
import deleteIcon from './assets/delete.svg';
import editIcon from './assets/edit.svg';

type TaskPropsType = {
    title: string
    completed: boolean
    style: string
};

export const Task: React.FC<TaskPropsType> = ({title, completed, style}) => {
    return (
        <div className={style}>
            <div>
                <input
                    className={'task_input'}
                    type="checkbox"/>
                <span>{title}</span>
            </div>
            <div className={completed ? '' : 'task_twoBtns'}>
                {!completed && <img
                    src={editIcon}
                    alt="edit task"
                    style={{cursor: 'pointer'}}
                />}
                <img
                    src={deleteIcon}
                    alt="delete task"
                    style={{cursor: 'pointer'}}
                />
            </div>
        </div>
    );
};