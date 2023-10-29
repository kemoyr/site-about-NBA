import React, { useState } from 'react'
import './RegPage.css'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNavigate } from 'react-router-dom'



export default function RegPage() {

  const navigate = useNavigate()
  // const clickHundler = (e)=> {
  //   e.preventDefault()
  //   const user = {
  //     name: e.target[0].value,
  //     passWord: e.target[1].value
  //   }
  //   document.cookie=`user=${user.name}; max-age=${60}`
  //   setCurrectUser(user)
  //   navigate('/')
  // }


  const [user,setUser]=useLocalStorage('USER', '')
  const [inputValue, setInputValue] = useState('')


  return (
    <div>
    {!user && (
      <div className='mainReg'>
      <div className='reg'>
        <div className='titleReg'>
          SIGN-UP
        </div>
        <div>
          <input type="text" className='nameReg' placeholder='Your name' value={inputValue} onChange={(e)=> {setInputValue(e.target.value)}}/>
          <input type="text" className='nameReg' placeholder='Password' />
          <div>
            <button className='buttonReg' onClick={()=>{setUser(inputValue); navigate('/')}} >Sign Up</button>
          </div>
        </div>
      </div>
    </div>
    
    ) }
    {user && (
      navigate('/mainPage')
    )}
    </div>
    
  )}
  

