import {TaskType} from "./TodolistTasks";
import {Dispatch} from "redux";
import {appAPI} from "../../app/app-api";


const initialState: TasksInitialStateType = []


export const todolistTasksReducer = (state = initialState, action: ActionsType): TasksInitialStateType => {
    switch (action.type) {
        case "SET_TASKS": {
            return [...action.tasks]
        }
        case "DELETE_TASK": {
        return state.filter(task => task.id !== action.taskId)
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

//actions
export const setTasks = (tasks: TaskType[]) => ({ type: "SET_TASKS", tasks } as const)
export const deleteTask = (taskId: number) => ({ type: "DELETE_TASK", taskId } as const)


//thunks
export const setTasksTC = () => (dispatch: Dispatch) => {
    appAPI.getTasks()
        .then(res => {
            if (res.status === 200) {
                dispatch(setTasks(res.data))
            }
        })
}

/*export let deleteTaskTC = (taskId: number) => {
    return (dispatch: Dispatch) => {
        appAPI.deleteTask(taskId)
            .then(res => {
                if (res.status === 200) {
                    dispatch(deleteTask(taskId))
                }
            })
    }
}*/
