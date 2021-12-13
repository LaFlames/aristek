import React, {useMemo} from 'react';
import {Task} from '../Task/Task';
import {TaskType} from "../TodolistTasks/TodolistTasks";


type CompletedTasksPropsType = {
    completedTasks: TaskType[]
}

export const CompletedTasks: React.FC<CompletedTasksPropsType> = React.memo(({completedTasks}) => {

    return (
        <section className={'completedTasks'}>
            <h2 className={'completedTasks_title'}>Completed ({completedTasks.length})</h2>

            {completedTasks.map(task => <Task
                key={task.id}
                title={task.title}
                completed={task.completed}
                style={'completedTask'}
                id={task.id}
            />)}
        </section>
    );
})