
import { NavLink, useNavigate } from 'react-router-dom'
import logo from './../../public/Component1.png'
import './NavBar.css'
import Chat from './../../public/Component 2.png'
import PopularPlayers from './../../public/Component 3.png'
import { useLocalStorage } from '../../hooks/useLocalStorage'

export default function NavBar() {
  const [user,setUser]= useLocalStorage('USER')
  const navigate = useNavigate()
  console.log(user)
  const logOut = ()=> {
    setUser('')
    navigate('/')
  }
  return (
    <div className='NavBar'>
        <div>
          <NavLink to={'/mainPage'}><img src={logo} alt="sdsd" /></NavLink>
        </div>
        <div className='pages'>
            <NavLink to={'/NbaPlayers'} className={'NbaTeams'}><img src={PopularPlayers} alt="sdsd" /></NavLink>
            <NavLink to={'/chat'} > <img src={Chat} alt="" /></NavLink>
            {!user&&(<NavLink to={'/'}>Sign up</NavLink>)}
            {user&&(<NavLink  onClick={logOut} >Log out</NavLink> )}
            
        </div>
    </div>
  )
}
