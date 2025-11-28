

import React , {useState} from 'react'

const UseToggle = () => {

     const [toggle, settoggle] = useState("OFF");

    const changeToggle = () =>{
        settoggle((toggle) => toggle == "OFF" ? "ON" : "OFF")
    }
  return [toggle,changeToggle]
}

export default UseToggle
