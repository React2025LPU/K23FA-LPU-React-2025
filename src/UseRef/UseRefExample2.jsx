


import React, {useState, useRef, useEffect} from 'react'

const UseRefExample2 = () => {

    const [val, setval] = useState('');
    const preRef = useRef('');

    useEffect(() => {
        preRef.current = val;
        console.log(preRef.current)
    }, [val]);
  return (
    <div>
      <input type = "text" ref = {preRef} value= {val} onChange={(e) => setval(e.target.value)}/>
      <h2>Current Value : {val}</h2>
      <h2>Previous Value : {preRef.current}</h2>
    </div>
  )
}
export default UseRefExample2
