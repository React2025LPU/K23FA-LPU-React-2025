

import React, { useContext } from 'react'
import { modeContext } from './ModeProvider';


const ModeGetter = () => {

    const {mode,setmode} = useContext(modeContext);

    const changeMode = () =>{
        setmode((mode) => mode=='light' ? 'dark' : 'light')
    }
  return (
    <div>
        <div style={{backgroundColor:mode==='light' ? 'white' : 'black',color:mode==='light' ? 'black' : 'white'}}>
        <h1>Mode is : {mode}</h1>
        </div>
        <button onClick={changeMode}>Change Mode</button>
      
    </div>
  )
}

export default ModeGetter
