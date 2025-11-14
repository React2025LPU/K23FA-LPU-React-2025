

import React, {useState} from 'react'
import ComponentX from './ComponentX';

export const snameContext = React.createContext();
export const marksContext = React.createContext();

const ProviderComponent = () => {

    const [sname, setsname] = useState("Harsh");
    const [marks, setmarks] = useState(80);
  return (
    <div>
        <h2>This is the first provider component</h2>
        <snameContext.Provider value={sname}>
            <marksContext.Provider value={marks}>
                <ComponentX/>
            </marksContext.Provider>
        </snameContext.Provider>
      
    </div>
  )
}

export default ProviderComponent
