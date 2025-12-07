

import React, { useState } from 'react'

const ControlledComponent1 = () => {

    // const [fname, setfname] = useState('');
    // const [lname,setlname] = useState('');
    // const [review,setreview] = useState('');

    const [myData, setmyData] = useState({
        fname:"",
        lname : "",
        review : "",
        subject:"react"
    })

    const changeData = (e) =>{
        const {name,value} = e.target;
        setmyData((myData) => ({...myData,
            [name] : value
        }))
    }

    // const changefname = (e) =>{
    //     setfname(e.target.value)
    // }

    // const changelname = (e) =>{
    //     setlname(e.target.value)
    // }

    // const changereview = (e) =>{
    //     setreview(e.target.value)
    // }

    const submitForm = (e) =>{
        alert(`${myData.fname} ${myData.lname} value selected ${myData.subject}`)
        e.preventDefault();
    }
  return (
    <div>

        <form onSubmit={submitForm}>
            First Name:<input type='text' value={myData.fname} 
            onChange={changeData} name="fname"/> <br/>

            Last Name :<input type='text' value={myData.lname} 
            onChange={changeData} name='lname'/> <br/>

            Review : <textarea value={myData.review} 
            onChange={changeData} name='review'></textarea> <br/>
            <select value={myData.subject} name="value" onChange={changeData}>
                <option value="react">react</option>
                <option value="node">node</option>
                <option value="sql">sql</option>
            </select>
            <button type='submit'>Submit Form</button>

            <h2>First name : {myData.fname}</h2>
            <h2>Last name : {myData.lname}</h2>
            <h2>Review : {myData.review}</h2>
            <h2>Review : {myData.subject}</h2>
        </form>
      
    </div>
  )
}

export default ControlledComponent1
