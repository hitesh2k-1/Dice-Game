import React from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import RollDice from './RollDice'
import { useState } from 'react'
import Rules from './Rules'

const GamePlay = ({showRules,setshowRules}) => {
  const [score, setscore] = useState(0)
  const [selectedNumber, setselectedNumber] = useState()
  const [currentDice, setcurrentDice] = useState(0)
  const [error, seterror] = useState()

  const generateRandomNumber=()=>{
    return Math.ceil(Math.random()*6)
   }
   
   const rollDice=()=>{

    if(!selectedNumber) {
      seterror("Your haven't selected any number")
      return
    }
    const randomNumber = generateRandomNumber()
   setcurrentDice (randomNumber) 

if(selectedNumber==randomNumber){
  setscore((perv)=>perv+randomNumber)
}
else{
  setscore((prev=>prev-1))
}
setselectedNumber (undefined)

   }


   const resetScore=()=>{
    setscore(0)
  }

  return (
    <div className='min-h-[75vh]' >
    <div className='flex justify-between m-5 ' >
      <TotalScore score={score} />
      <NumberSelector 
      error={error}
      seterror={seterror}
      selectedNumber ={selectedNumber}
      setselectedNumber ={setselectedNumber} />
    </div>
    <RollDice currentDice = {currentDice}
    rollDice={rollDice}/>
    <div className='flex justify-center gap-4' >
      <button onClick={resetScore} className='py-1 px-4 bg-black text-white text-lg border rounded-2xl' >Reset</button>
      <button onClick={()=>setshowRules((prev)=>!prev)} className='py-1 px-4 bg-black text-white text-lg border rounded-2xl'>{showRules ? "Hide" : "Show"} Rules</button>
    </div>
    <div className='m-auto flex justify-center my-7' >
    { showRules && <Rules setshowRules={setshowRules}/>}
    </div>
</div>  )
}

export default GamePlay
