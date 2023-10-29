
import './SupportChat.css'

export default function SupportChat({chatData}) {

  return (
    <div className='chatBlock'>


      {chatData.map((el,i)=> {
        return(
          <div key={i} className='chats'>
            <div className='chatText'>{i + 1}.{el}</div>
          </div>
        )
      })}
    </div>
  )
}
