import { useState } from 'react'
import Header from './components/Header'
import Cards from './components/Cards'
import TodoContainer from './components/TodoContainer'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import Landing from './components/Landing'

function App() {
  const[userpass,setuserpass]=useState([
    {
        user:"Pravina",
        pass: "123@"
    }
])
  return (
    <>
      <div className='p-16 bg-black'>
      <div className="bg-[#fff] p-4 rounded-md">
         <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login userpass={userpass} setuserpass={setuserpass} />} />
        <Route path='/signup' element={<Signup userpass={userpass} setuserpass={setuserpass} />} />
        <Route path='/home' element={<Landing />} />
      </Routes>
      </BrowserRouter>
        
      </div>
      </div>
     
    </>
  )
}

export default App
