


import React , {useRef, useEffect}from 'react'


const UseRefExample1 = () => {

    const refPoint = useRef('');

    useEffect(() => {
        refPoint.current.focus();
    }, []);

  return (
    <div>
      <input type = "text" ref={refPoint} className='outline-0 border-2 border-solid border-amber-400 m-4'/>
    </div>
  )
}

export default UseRefExample1
