

import React , {useState} from 'react'

const WithoutUseContext = () => {

    const [subject, setsubject] = useState("React");
  return (
    <div>
        <h2>This is the first component and 
            passing subject as property to 2nd component A</h2>
        <ComponentA subject = {subject}/> 
      
    </div>
  )
}

const ComponentA = ({subject}) =>{
    return(
        <div>
            <h2>This is component A and receiving the property from first component</h2>
            <ComponentB subject = {subject} />

        </div>
    )
}

const ComponentB = ({subject}) =>{
    return(
        <div>
            <h2>This is Component B and receiving the property from Component A</h2>
            <h2>Hello, I am studying the subject : {subject}</h2>

        </div>
    )
}
export default WithoutUseContext
