// import React, { useEffect } from 'react'
import './MainPage.css'
import NavBar from '../NavBar/NavBar'
import { NavLink, } from 'react-router-dom'
import chat from './../../public/Component 4.png'


export default function MainPage() {
  // const navigate = useNavigate()
  // useEffect(()=>{
  //   if(!currectUser.name) {
  //     navigate('/registration')
  //   }
  // })

  return (
    <div className='main'>
        <NavBar />
        <div className='title'>
            <p>
                Your hub for all things NBA teams
            </p>
        </div>
        <div className='chatIcon'>
            <NavLink to={'/chat'}><img src={chat} alt="" /></NavLink>
        </div>
    </div>
  )
}
