


import axios from 'axios';
import React, {useState, useEffect} from 'react'

const Contact = () => {

  const [users, setusers] = useState([]);

  const qparam = new URLSearchParams(window.location.search);
  const id = qparam.get('id');



  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
  .then(res=>setusers(res.data))
  .catch(err=>console.log(err))
  }, []);
  
  return (
    <div>
      <p>This is Contact Page</p>
      <p>Name : {users.name}</p>
      <p>Username : {users.username}</p>
      <p>email : {users.email}</p>
      <p>Phone : {users.phone}</p>
    </div>
  )
}

export default Contact
