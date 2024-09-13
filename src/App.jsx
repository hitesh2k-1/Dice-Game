import { useState } from 'react'
import StartGame from './componensts/startGame'
import Navbar from './componensts/Navbar'
import GamePlay from './componensts/GamePlay'
import Footer from './componensts/Footer'


function App() {
  const [isGameStarted, setisGameStarted] = useState(false)
  const [showRules, setshowRules] = useState(false)

  const toggleGamePlay = () => {
    setisGameStarted((props) => !props)
  }

  const showStartGame = () => {
    setisGameStarted(false); // Ensure game is reset
  };

  return (
    <>
    <Navbar setshowRules={setshowRules} isGameStarted={isGameStarted} showStartGame={showStartGame} /> 
    {
    isGameStarted ? <GamePlay showRules={showRules} setshowRules={setshowRules} /> : <StartGame showRules={showRules} setshowRules={setshowRules} toggle = {toggleGamePlay} /> 
    }
    <Footer/>
    </>
  )
}

export default App
