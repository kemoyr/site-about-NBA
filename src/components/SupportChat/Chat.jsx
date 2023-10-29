
import { useLocalStorage } from '../../hooks/useLocalStorage'
import SupportChat from './SupportChat'
import Comment from './Comment'
import { useState } from 'react'
import './Chat.css' 
import NavBar from '../NavBar/NavBar'

export default function Chat() {
    const [chatData, setChatData] = useLocalStorage('CHAT', [])
    const [inputValue,setInputValue]=useState('')
    const [showDialogReg,setShowDialogReg] = useState(false)
    const [user] = useLocalStorage('USER')
    console.log(user)
    console.log(chatData)
    const changeChat = () => {
      if(user) {
        setChatData([...chatData,`${user}: ${inputValue}`])
        setInputValue('')
      }
      else{
        setShowDialogReg(true)
        setInputValue("")
      }
      console.log( chatData )
    }
  return (
    <div className='mainChat'>
        <div className='navBarChat'>
          <NavBar/>
        </div>
        <div className='chatTitle'>Support chat</div>
        <div>
          <SupportChat chatData={chatData}/>
        </div>
        <div>
          <Comment
            inputValue={inputValue}
            setInputValue={setInputValue}
            changeChat={changeChat}
            setChatData={setChatData}
            showDialogReg={showDialogReg}

          />
        </div>
    </div>
  )
}


