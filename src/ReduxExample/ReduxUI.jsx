

import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset, addbyValue } from './ReduxSlicer';

const ReduxUI = () => {
    const [valuenew, setvaluenew] = useState(0);
    const counterState = useSelector(state=>state.countRed.count);
    const dispatch = useDispatch();
   return (
    <div>
        <h2>Count:{counterState}</h2>
        <button onClick={()=>dispatch(increment())}>Increment</button>
        <button onClick={()=>dispatch(decrement())}>Decrement</button>
        <button onClick={()=>dispatch(reset())}>Reset</button>
        <input type='number' value={valuenew} onChange={(e) => setvaluenew(e.target.value)} />
        <button onClick={()=>dispatch(addbyValue(valuenew))}>Add by Value</button>
    </div>
  )
}

export default ReduxUI
