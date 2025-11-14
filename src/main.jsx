import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import {App} from './App.jsx'
import DashboardClassComponent from './DashboardClassComponent.jsx'
import Practice from './Practice.jsx'
import JSXBasics from './JSXBasics.jsx'
import React from 'react';
import LaptopComponent from './LaptopComponent.jsx'
import CarComponent from './CarComponent.jsx'
import InlineCSS from './InlineCSS.jsx'
import ExternalCSS from './ExternalCSS.jsx'
import CSSModule from './CSSModule.jsx'
import TailwindExample from './TailwindExample.jsx'
import EventHandling from './EventHandling.jsx'
import EventHandling1 from './EventHandling1.jsx'
import StateClassComp from './StateClassComp.jsx'
import UseStateExample from './UseStateExample.jsx'
import UseEffectExample from './UseEffectExample.jsx'
import WithoutUseContext from './UseContext/WithoutUseContext.jsx'
import ProviderComponent from './UseContext/ProviderComponent.jsx'
import ModeProvider from './UseContext/ModeProvider.jsx'

function Laptop(){

  return(
    <h2>This is my Laptop Function Component</h2>
  )
}

function Box(){
  return(
    <div>
    <h2>This is Box Function Component</h2>
    <Laptop />
    <Laptop />
    </div>
  )
}

class University extends React.Component{

  render(){
    return(
      <div>
        <h1>This is univeristy class component Demo</h1>
      </div>
    )
  }
}

class Practice1 extends React.Component{
  render(){
    return(
      <>
        <h1>Hey therw !!</h1>
        <University/>
      </>
    )
  }
}

const config = {
    ram : "16gb",
    ssd : "1 tb"
}

const versions = [1,2,3];

createRoot(document.getElementById('root')).render(
  
    
<ModeProvider />

)
