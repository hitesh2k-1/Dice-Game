import React from 'react'
import Rules from './Rules'

const startGame = ({toggle,setshowRules,showRules}) => {
  return (
    <div>
    <div className='container min-h-[77.8vh] m-auto justify-center flex items-center' >
        <div className='flex items-center gap-8 sm:gap-20' >
        <div>
        <img width="600px" src="dice.png" alt="" />
    </div>
    <div className='flex flex-col gap-10 items-center' >
        <div >
        <h1 className='  font-bold text-5xl sm:text-7xl' >Dice Game</h1>
    </div>
    <div>
        <button onClick={toggle} className=' text-white bg-black px-6 sm:px-16 rounded-lg py-2' >Play Now</button>
        </div>
    </div>
    </div>
    </div> 
    <div className='flex justify-center' >
    { showRules && <Rules setshowRules={setshowRules}/>}
    </div>
    </div>
    
  )
}

export default startGame
