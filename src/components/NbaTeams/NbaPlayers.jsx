import React, { useEffect, useState } from 'react'
import './NbaPlayers.css'
import NavBar from '../NavBar/NavBar'


async function fetchData(setData) {
  const url = 'https://free-nba.p.rapidapi.com/players?page=0&per_page=25';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5b11a5dbb9msh07c136d779a72f9p1339f3jsna69aa1881599',
		'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
  setData(result.data)
	// console.log(data);
} catch (error) {
	console.error(error);
}
};



export default function NbaTeams() {
  const [data,setData] = useState([])
  useEffect(()=> {
    fetchData(setData)
  }, [])
  console.log(data)
  const position = (el)=> {
    if(el.position === "") {
      return "this player has no exact position"
    }
    else{
      return el.position
    }
  }
  return (
    // <div className='NbaTeams'> 
    //     NbaTeams
    // </div>
    <div className="teams-players">
        <div className="div">
            <div className='rectangle'>
              <NavBar></NavBar>  
              <div className='players'> 
                <ol>       
                  {data.map((el)=> {
                    return <li>{el.first_name} {el.last_name}, position: {position(el)} , team: {el.team.abbreviation}</li>
                  })}
                </ol>
              </div>   
            </div>

        </div>

   </div>
  )
}
