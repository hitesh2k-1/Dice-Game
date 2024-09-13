import React from 'react'

const RollDice = ({currentDice, rollDice}) => {


  return (
    <div>
      <div className=''>
        <img className='h-[30vh] my-10 flex justify-center m-auto transition-all rotate-180 rounded-3xl ' src={`/dice-images/dice-${currentDice}.png`} alt="Dice 1" />
       
      </div>
      <button onClick={rollDice} className='px-4 py-2 flex my-5 m-auto hover:font-bold border bg-black text-white rounded-2xl' >Roll Dice</button>
    </div>

  )
}

export default RollDice
