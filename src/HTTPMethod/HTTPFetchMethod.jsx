

// import React, { useState, useEffect } from 'react'

// const HTTPFetchMethod = () => {

// const [posts,setposts] = useState([]);
//    useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//     .then(res => res.json())
//     .then(data =>{
//         console.log(data);
//         setposts(data);
//     })
//    }, []);    
//   return (
//     <div>
//         <ul>
//             {
//                 posts.map((item)=>{
//                     return(
//                     <li key={item.id}>
//                         Id: {item.id}<br/>
//                         User id: {item.userId}<br/>
//                         Title : {item.title}
//                     </li>)
//                 })
//             }
//         </ul>
      
//     </div>
//   )
// }

// export default HTTPFetchMethod




import React, { useState, useEffect } from 'react'

const HTTPFetchMethod = () => {

const [users,setusers] = useState([]);
const [resMessage, setresMessage] = useState("");
const [errMessage, seterrMessage] = useState("");
   

    const fetchData = () =>{
    fetch("https://dummyjson.com/users")
    .then(res => res.json())
    .then(data =>{
        console.log(data.users);
        setusers(data.users);
    })
}


const postData = () =>{
    const newData = {
        userId : 300,
        title:"react"
    }

    fetch('https://jsonplaceholder.typicode.com/posts',{
        method:"POST",
        body:JSON.stringify(newData),
        headers: {"Content-Type":"application/json"}
    })
    .then(res=>{
        console.log(res.status)
        if(!res.ok){
            throw new Error(`$res.status`)
        }
        return res.json()})
    .then(data=>{
        console.log("New Data is :",data);
        setresMessage("Post Added Successfully");
        seterrMessage("");
    })
    .catch(()=>{
        setresMessage("");
        seterrMessage("Post Not Added Successfully");
    })
}

    const putData = () =>{

        const updatedData = {
        userId : 300,
        title:"react"
    }

    fetch('https://jsonplaceholder.typicode.com/posts/6',{
        method:"PUT",
        body:JSON.stringify(updatedData),
        headers: {"Content-Type":"application/json"}
    })
    .then(res=>{
        console.log(res.status)
        if(!res.ok){
            throw new Error(`$res.status`)
        }
        return res.json()})
    .then(data=>{
        console.log("New Data is :",data);
        setresMessage("Post Updated Successfully");
        seterrMessage("");
    })
    .catch(()=>{
        setresMessage("");
        seterrMessage("Post Not Updated Successfully");
    })

    }

    const deleteData = () =>{
    fetch('https://jsonplaceholder.typicode.com/posts/6',{
        method:"DELETE",
        headers: {"Content-Type":"application/json"}
    })
    .then(res=>{
        console.log(res.status)
        if(!res.ok){
            throw new Error(`$res.status`)
        }
        return res.json()})
    .then(data=>{
        console.log("New Data is :",data);
        setresMessage("Post Deleted Successfully");
        seterrMessage("");
    })
    .catch(()=>{
        setresMessage("");
        seterrMessage("Post Not Deleted Successfully");
    })
    }
    
  return (
    <div>

        <button type='submit' onClick={fetchData}>Fetch Data</button>
        <button type='submit' onClick={postData}>POST Data</button>
        <button type='submit' onClick={putData}>PUT Data</button>
        <button type='submit' onClick={deleteData}>DELETE Data</button>
        <p className='text-green-600'>{resMessage}</p>
        <p className='text-red-600'>{errMessage}</p>
        <ul>
            {
                users.map((item)=>{
                    return(
                    <li key={item.id}>
                        Id: {item.id}<br/>
                        FirstName: {item.firstName}<br/>
                        LastName : {item.lastName}
                    </li>)
                })
            }
        </ul>
      
    </div>
  )
}

export default HTTPFetchMethod

