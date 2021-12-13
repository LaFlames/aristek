import {TaskType} from "./TodolistTasks";
import {Dispatch} from "redux";
import {appAPI, UpdateTaskRequestDataType} from "../../app/app-api";
import {AppRootStateType} from "../../app/store";


const initialState: TasksInitialStateType = []


export const todolistTasksReducer = (state = initialState, action: ActionsType): TasksInitialStateType => {
    switch (action.type) {
        case "SET_TASKS": {
            return [...action.tasks]
        }
        case "DELETE_TASK": {
            return state.filter(task => task.id !== action.taskId)
        }
        case "CREATE_TASK": {
            return [action.task ,...state]
        }
        case "UPDATE-TASK": {
            return state.map(task => task.id === action.taskId ? {...task, ...action.taskProperties} : task)
        }
        default:
            return state
    }
}


//types
export type TasksInitialStateType = TaskType[]
type ActionsType =
    ReturnType<typeof setTasks>
    | ReturnType<typeof deleteTask>
    | ReturnType<typeof createTask>
    | ReturnType<typeof updateTask>

//actions
export const setTasks = (tasks: TaskType[]) => ({ type: "SET_TASKS", tasks } as const)
export const deleteTask = (taskId: number) => ({ type: "DELETE_TASK", taskId } as const)
export const createTask = (task: TaskType) => ({ type: "CREATE_TASK", task } as const)
export const updateTask = (taskId: number, taskProperties: UpdateTaskRequestDataType) => {
    return { type: "UPDATE-TASK", taskId, taskProperties } as const
}


//thunks
export const fetchTasksTC = () => (dispatch: Dispatch) => {
    appAPI.getTasks()
        .then(res => {
            if (res.status === 200) {
                dispatch(setTasks(res.data))
            }
        })
}

export const createTaskTC = (title: string) => (dispatch: Dispatch) => {
    const taskRequestData = {
        userId: 1,
        title,
        completed: false
    }
    appAPI.createTask(taskRequestData)
        .then(res => {
            dispatch(createTask(res.data))
        })
}

export let deleteTaskTC = (taskId: number) => {
    return (dispatch: Dispatch) => {
        appAPI.deleteTask(taskId)
            .then(res => {
                if (res.status === 200) {
                    dispatch(deleteTask(taskId))
                }
            })
    }
}

export let updateTaskTC = (taskId: number, properties: UpdateTaskRequestDataType) => {
    return (dispatch: Dispatch, getState: () => AppRootStateType) => {
        const tasks = getState().tasks;
        const updatedTask = tasks.find(task => task.id === taskId)

        if (!updatedTask) {
            throw new Error("Task not found")
            return
        }

        const apiProperties: UpdateTaskRequestDataType = {
            title: updatedTask.title,
            completed: updatedTask.completed,
            ...properties
        }

        appAPI.updateTask(taskId, apiProperties)
            .then(res => {
                dispatch(updateTask(taskId, properties))
            })
            .catch((error) => {
                alert(error)
            })
    }
}
