import React from 'react'
import PricesCards from './components/PricesCards'
import Perks from './components/Perks'

const Prices = () => {
  return (
    <>
      <h1 className='bg-slack-purple text-white mx-auto text-center text-6xl pt-6 font-extrabold'>Aumente a sua produtividade em equipe.</h1>
      <PricesCards/>
      <Perks/>
    </>
  )
}

export default Prices