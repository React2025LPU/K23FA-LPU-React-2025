

import React, { useState } from 'react'

const UseStateExample = () => {

    const [count, setCount] = useState(0);
    const incre = () =>{
        setCount((preCount) => {return  (preCount+1)}
        );
    }
    const decre = () =>{setCount(preCount => preCount-1)}

  return (
    <div>
        <h2>Count : {count}</h2>
        <button onClick={()=>incre(5)}>Increment</button>
        <button onClick={()=>decre(5)}>Decrement</button>
      
    </div>
  )
}

export default UseStateExample


// import React , {useState} from 'react'

// const UseStateExample = () => {

//     const [led, setLed] = useState({
//         brand : "Samsung",
//         color : "black",
//         price : "30k"
//     });

//     const changeProperty = () =>{
//         setLed((preState) => {return{...preState,color:"Silver"}});
//     }
//   return (
//     <div>
//         <h2>The led is of brand {led.brand} and color is {led.color}. The price is {led.price}</h2>
//         <button onClick={changeProperty}>Change Color</button>
//     </div>
//   )
// }

// export default UseStateExample


// import React, { useState } from 'react'

// const UseStateExample = () => {
//     const [subject, setSubject] = useState(["Java","React", "Node"]);


//     const addSubject = () =>{
//         setSubject((prev) => {return ([...prev, "DSA"])})
//     }
//   return (
//     <div>
//         <h2>Subjects are : {subject.join(',')}</h2>
//         <button onClick={addSubject}>Add Subject</button>
      
//     </div>
//   )
// }

// export default UseStateExample


