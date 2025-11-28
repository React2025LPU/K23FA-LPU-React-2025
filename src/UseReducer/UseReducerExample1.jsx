

import React, { useReducer } from 'react'

const UseReducerExample1 = () => {

    const initialCountstate = 0;

    const reducerCount = (state,action) =>{

        switch(action){
            case 'increment':
                return state+1;
            case 'decrement':
                return state-1;
            case 'reset':
                return initialCountstate;
            default:
                return state;
        }
    }
    const [count , dispatchCountState] = useReducer(reducerCount, initialCountstate)
  return (
    <div>
        <h2>Count is : {count}</h2>
        <button onClick={() => dispatchCountState('increment')}>Increment</button>
        <button onClick={() =>dispatchCountState('decrement')}>Decrement</button>
        <button onClick={() =>dispatchCountState('reset')}>Reset</button>
    </div>
  )
}

export default UseReducerExample1
