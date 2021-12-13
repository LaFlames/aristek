import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleware, {ThunkAction} from 'redux-thunk';
import {todolistTasksReducer} from "../components/TodolistTasks/todolistTasks-reducer";




const rootReducer = combineReducers({
    tasks: todolistTasksReducer,

})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type AppRootStateType = ReturnType<typeof rootReducer>

//export type ThunkType = ThunkAction<void, AppRootStateType, unknown, AppActionsType>;

// @ts-ignore
window.store = store;