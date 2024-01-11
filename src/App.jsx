import React from 'react'
import './App.css'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <>
      <div className='flex'>
      <Sidebar/>
      <div>
      <h1 className='text-center text-4xl font-bold text-primary'>Hello World</h1>
      </div>
      </div>
    </>
  )
}

export default App
