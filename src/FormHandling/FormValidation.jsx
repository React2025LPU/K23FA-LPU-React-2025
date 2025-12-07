

import React, {useState} from 'react'

const FormValidation = () => {

    const [myData, setmyData] = useState({
            fname:"",
            lname : "",
        
        })
    
        const [errors, seterrors] = useState({
            fnameError: "",
            lnameError : ""
        })
    
        const changeData = (e) =>{
            const {name,value} = e.target;
            setmyData((myData) => ({...myData,
                [name] : value
            }))

          if(name==="fname"){
            seterrors((pre) =>({
                ...pre,
                fnameError:value?"":"First Name field is Mandatory to fill"
            }))
          }  

           if(name==="lname"){
            seterrors((pre) =>({
                ...pre,
                lnameError:value?"":"Last Name field is Mandatory to fill"
            }))
          } 

        }

        const submitForm = (e) =>{
            e.preventDefault();

            let fnameError = "";
            let lnameError = "";

            if(!myData.fname){
                fnameError = "First Name field is Mandatory to fill";
            }

            if(!myData.lname){
                lnameError = "Last Name Field is mandatory to fill";
            }

            seterrors({
                fnameError,
                lnameError
            })

            if(!fnameError && !lnameError)
            {
                alert(`${myData.fname} ${myData.lname}`)
            }   
    }
  return (
    <div>

        <form onSubmit={submitForm}>
            First Name:<input type='text' value={myData.fname} 
            onChange={changeData} name="fname"/> <br/>
            <span className='text-red-600'>{errors.fnameError}</span><br/>
            Last Name :<input type='text' value={myData.lname} 
            onChange={changeData} name='lname'/> <br/>
            <span className='text-red-600'>{errors.lnameError}</span><br/>

          
            <button type='submit'>Submit Form</button>

            <h2>First name : {myData.fname}</h2>
            <h2>Last name : {myData.lname}</h2>
            
        </form>
      
    </div>
  )
}

export default FormValidation
