import React from 'react'

const Rules = ({setshowRules}) => {
  return (
    <div className= 'p-4 rounded-3xl bg-red-300 max-w-[80vw] flex flex-col justify-center' >
      <div className='flex justify-between' >
      <h1 className=' pb-2 text-2xl font-bold mr-2 ' > # How to play the dice game</h1>
      <div  className='cursor-pointer'>
        <svg onClick={()=>setshowRules(false)}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="#000000" fill="none">
    <path d="M19.0005 4.99988L5.00049 18.9999M5.00049 4.99988L19.0005 18.9999" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
</svg>
</div>
      </div>
      <p>Step 1 : Select a number.</p>
      <p>Step 2 : Click on Roll Dice button.</p>
      <p>Score : If the selected number is equal to Dice number then you will get the same points otherwise 1 point will be detucted from the total score. </p>
    </div>
  )
}

export default Rules
