import {configureStore} from '@reduxjs/toolkit';
// configureStore is like useState in react 
import todoReducer from '../features/todo/todoSlice';

//store needs  to have  knowledge of reducer
export const store = configureStore({
    reducer: todoReducer
})






