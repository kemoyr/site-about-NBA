import { Route, Routes } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import NbaPlayers from "./components/NbaTeams/NbaPlayers";

import './App.css'
import RegPage from "./components/RegPage/RegPage";
// import SupportChat from "./components/SupportChat/SupportChat";
import Chat from "./components/SupportChat/Chat";





function App() {

  // console.log(document.cookie.split("=")[1])

  // const [currectUser, setCurrectUser] = useState({name: document.cookie.split("=")[1]})
  // console.log(currectUser)


    return (
    <div className="mainApp"> 
      

      <Routes>
        <Route
          path="/mainPage"
          element={<MainPage  
          />}
        />
        <Route
          path="/NbaPlayers"
          element={<NbaPlayers />}
        />

        <Route
          path="/"
          element={<RegPage />}

        />
        <Route
          path="/chat"
          element={<Chat />}
        />
      </Routes>

    </div>
  );
}

export default App;
