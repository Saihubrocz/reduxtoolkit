// This file is used to send values to store,for sending we have useDispatch jo be reducer(addTodo) hy us reducer ko 
// import karna us useDispatch ke sath bhejna

import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {addTodo} from '../features/todo/todoSlice' 
// import { store } from '../app/store'

// useSelector is a hook allow to access state stored in a redux store
// useDispatch is a hook to enables dispatching actions to store
// useState accepts an initial state and returns two values:
// The current state.
// A function that updates the state.
 export default function AddTodo() {

    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')    //This step is used to clean input fields after adding 
    }

  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <h1>Add todo</h1>
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Add Todo
      </button>
    </form>
  )
}
