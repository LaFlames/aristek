import React, {useState} from 'react';
import { Task } from '../Task/Task';



export const CompletedTasks = () => {

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
            "completed": true
        },
        {
            "userId": 1,
            "id": 3,
            "title": "fugiat veniam minus",
            "completed": true
        },
        {
            "userId": 1,
            "id": 3,
            "title": "fugiat veniam minus",
            "completed": true
        }
    ])

    const completedTasks = tasks.filter(task => task.completed)



    return (
        <section className={'completedTasks'}>
            <h2 className={'completedTasks_title'}>Completed ({3})</h2>
            {completedTasks.map(task => <Task
                key={task.id}
                title={task.title}
                completed={task.completed}
                style={'completedTask'}
            />)}
        </section>
    );
};