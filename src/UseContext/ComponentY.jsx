

import React, { useContext } from 'react'
import { snameContext, marksContext } from './ProviderComponent'

const ComponentY = () => {

    const sname = useContext(snameContext);
    const marks = useContext(marksContext);
  return (
    <div>

        <h2> This is Component Y</h2>
        <h2> The name of student is : {sname} and marks are : {marks}</h2>
      
    </div>
  )
}

export default ComponentY
