'use client'
import React, {useState} from 'react'

const Resources = () => {
  const[count,setCount] = useState(0)

  function increase(){
    setCount(count + 1)
  }

  function decrease(){
    setCount(count - 1)
  }


  return (
    <>
    <div>Resources</div>

    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={()=> increase()}>+</button>
    <span className='font-bold py-2 px-4 rounded'>{count}</span>
    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={()=> decrease()}>-</button>
    </>
  )
}

export default Resources