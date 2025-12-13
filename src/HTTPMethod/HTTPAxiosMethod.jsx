

import axios from 'axios'
import React, {useState} from 'react'

const HTTPAxiosMethod = () => {

    const [users, setusers] = useState([]);
    const [resMessage, setresMessage] = useState("");
    const [errMessage, seterrMessage] = useState("");

    const fetchData = () =>{
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res=>setusers(res.data))
    .catch(err=>console.log(err))
    }

    const fetchSingleData = () =>{
    axios.get('https://jsonplaceholder.typicode.com/users/4')
    .then(res=>setusers([res.data]))
    .catch(err=>console.log(err))
    }

    const postData = () =>{
        const newData = {
            name:"Ankita",
            username:"Ankita11",
            email:"ankita5@gmail.com"
        }
        axios.post('https://jsonplaceholder.typicode.com/users', newData)
        .then(res=>{
            console.log(res.data);
            setresMessage("User added Successfully");
            seterrMessage("");
        })
        .catch(err=>{
            console.log(err),
            seterrMessage("User not added successfully");
            setresMessage("")
        })
    }

    const putData = () =>{

        const updatedData = {
            name:"Ankita",
            username:"Ankita11",
            email:"ankita5@gmail.com"
        }
        axios.put('https://jsonplaceholder.typicode.com/users/3', updatedData)
        .then(res=>{
            console.log(res.data);
            setresMessage("User Updated Successfully");
            seterrMessage("");
        })
        .catch(err=>{
            console.log(err),
            seterrMessage("User not updated successfully");
            setresMessage("")
        })

    }

    const deleteData = () =>{

       
        axios.delete('https://jsonplaceholder.typicode.com/users/3')
        .then(res=>{
            console.log(res.data);
            setresMessage("User Deleted Successfully");
            seterrMessage("");
        })
        .catch(err=>{
            console.log(err),
            seterrMessage("User not deleted successfully");
            setresMessage("")
        })


    }

    
    
  return (
    <div>
        <button onClick={fetchData}>Fetch Data</button>
        <button onClick={fetchSingleData}>Fetch Data : (ID:4)</button>
        <button onClick={postData}>Post Data</button>
        <button onClick={putData}>PUT Data</button>
        <button onClick={deleteData}>Delete Data</button>
        <p>{resMessage}</p>
        <p>{errMessage}</p>

        <ul>
            {
                users.map((item)=>{
                    return(
                    <li key={item.id}>
                        Id: {item.id}<br/>
                        Name: {item.name}<br/>
                        Username : {item.username}<br/>
                        Email: {item.email}
                    </li>)
                })
            }
        </ul>
      
    </div>
  )
}

export default HTTPAxiosMethod
