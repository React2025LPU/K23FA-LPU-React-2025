

import React, { useState, useEffect } from 'react'

const UseEffectExample = () => {
    const [count, setCount] = useState(0);
    const [ color, setColor] = useState("red");

    useEffect(() => {
        console.log("component is mounted" , count)  
        return () =>{
            console.log("Component is unmounted",count)
        }
    }, [count]);

    const increfunction = () =>{
        setCount(pre=> pre+1);
    }

    const changeColor = () =>{
        setColor(() => "White");
    }

  return (
    <div>
        <h2>Count : {count}</h2>
        <h2>Color : {color}</h2>
        <button onClick={increfunction}>Increment</button>
        <button onClick={changeColor}>Change Color</button>
      
    </div>
  )
}

export default UseEffectExample
