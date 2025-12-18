import { configureStore } from "@reduxjs/toolkit";
import getReducer from './ReduxTodoExample/TodoSlicer'

export const store1 = configureStore({
    reducer:{
        todoReducer : getReducer
    }
})