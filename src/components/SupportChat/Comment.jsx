// import React, { useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'
import send from './../../public/Component 5.png'
import './Comment.css'
export default function Comment(props) {
  // const navigate = useNavigate()
  // useEffect(()=>{
  //   if(props.showDialogReg){
  //     navigate('/registration')
  //   }
  // })
  return (
    <div className='wrapper'>
      <div className='wrapper2'>
        <input type="text" value={props.inputValue} onChange={(e)=> props.setInputValue(e.target.value)} />
        <button onClick={()=>props.setChatData([])}>Delete</button>
        <img src={send} alt="" onClick={props.changeChat}/>
        {/* {props.showDialogReg && (
          <div>

          </div>)
        } */}
      </div>
        
    </div>
  )
}
