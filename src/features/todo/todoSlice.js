import {createSlice, nanoid } from '@reduxjs/toolkit';

// nonoid generates unique ids


const initialState = {
    todos: [{id: 1, text: "Learning Redux"}]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), 
                text: action.payload,
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        },
    }
})



export const {addTodo, removeTodo} = todoSlice.actions
// addTodo, removeTodo are reducers those are functions those should be exported indivitually.
// if here number of reducers are there then all should export because we don't know in 
// which component those reducers are used (ex: here inside components folder we have 
// AddTodo file which uses addTodo reducer )
export default todoSlice.reducer
// list of all reducers to get aware of store
