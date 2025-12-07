

import React, {useRef} from 'react'

const UncontrolledComponent = () => {

    const Ref1 = useRef(null);
    const Ref2 = useRef(null);

    const handleSubmit = (e) =>{
        e.preventDefault();
        alert(`Welcome ${Ref1.current.value} ${Ref2.current.value}`);
        console.log(Ref1.current);
        console.log(Ref2.current);

    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
        First Name :<input type="text" ref={Ref1}/><br/>
        Last Name : <input type = "text" ref={Ref2} /><br/>
        <button type='submit'>Submit Form</button>
      </form>
    </div>
  )
}

export default UncontrolledComponent
