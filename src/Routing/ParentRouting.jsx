

import React from 'react'
import { BrowserRouter, Link, Route, Routes, useNavigate} from 'react-router-dom'
import Home from './Home'
import DataFile from './DataFile'
import About from './About'
import Contact from './Contact'


const ParentRouting = () => {

  
  const aboutData = {
    companyName : "TCS",
    locationComp : "Banglore",
    work: "Full stack Development"
  }

  const NavigateButtons = () =>{
    const navigate = useNavigate();
    return(
      <div>
        <button onClick={()=>navigate(-1)}>Previous</button>
         <button onClick={()=>navigate(1)}>Next</button>
      </div>
    )
  }
  return (
    <div>

        <BrowserRouter>
        <div><Link to="/">Home</Link></div>
        <div><Link to="/datafile?name=Harsh&regno=1234567">Data</Link></div>
        <div><Link to="/aboutt" state={aboutData}>About</Link></div>
        <div><Link to="/contact?id=4">Contact</Link></div>
        {<NavigateButtons />}

        <Routes>
            <Route path= "/"  element={<Home/>}/>
            <Route path= "/datafile" element={<DataFile/>}/>
            <Route path= "/aboutt" element={<About/>}/>
            <Route path= "/contact" element={<Contact/>}/>
            
        </Routes>


        </BrowserRouter>

      
    </div>
  )
}

export default ParentRouting
