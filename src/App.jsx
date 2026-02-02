import { useState } from 'react'
import Header from './Components/Header/Header.jsx'
import Card from './Components/ProfileCard/Card.jsx'
import TransactHist from './Components/TransactHist1/TransactHist.jsx'
import './App.css'
import TransactHist2 from './Components/TransactHist2/TransactHist2.jsx'
import InitPop from './Components/InitialPopUp/InitPop.jsx'

function App() {

  return (
    <div className='flex justify-center items-center mt-[30%] '>
      <InitPop />
    </div>
  )
}

export default App
