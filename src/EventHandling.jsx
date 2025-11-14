

import React from 'react'

const EventHandling = () => {

    // const handleEvent = () => alert("OK")
    function handleEvent(){
        return alert("OkDone");
    }
  return (
    <div>
      <h1>This is EventHandling Function component</h1>
      <button onClick={handleEvent}>Click Here</button>
    </div>
  )
}

export default EventHandling
