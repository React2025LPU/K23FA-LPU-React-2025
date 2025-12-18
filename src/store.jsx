import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './ReduxExample/ReduxSlicer'


export const store = configureStore({
    reducer:{
        countRed : counterReducer
    }
})