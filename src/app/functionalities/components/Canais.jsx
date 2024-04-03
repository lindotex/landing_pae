'use client'
import React from 'react'
import canaisLogo from '../assets/hero-channels.pt-BR@2x.jpg'
import Image from 'next/image'
import getLang from '@/controllers/language'

const data = getLang()

const canais = data.Functionalities.canais

const Canais = () => {
  return (
    <>
        <section className='flex flex-col lg:flex-row py-12'>
            <div className='lg:w-1/2 w-full px-24 py-12'>
                <p>{canais.preTitle.toUpperCase()}</p>
                <h1 className='pt-6 font-bold text-4xl'>{canais.title}</h1>
                <p className='pt-6'>{canais.text}</p>
                <div className='pt-6 flex flex-col'>
                    <button className='hover:bg-slack-gold hover:text-black btn bg-slack-purple text-white px-6 py-4 rounded-md my-2'>{canais.tryBtn.toUpperCase()}</button>
                    <button className='hover:bg-slack-gold hover:text-black btn text-slack-purple border px-6 py-4 rounded-md'>{canais.salesBtn.toUpperCase()}</button>
                </div>
            </div>
            <div className='lg:w-1/2 w-full justify-center items-center flex'>
                <Image
                    alt='Canais Logo'
                    src={canaisLogo}
                    height={500}
                />
            </div>
        </section>
    </>
  )
}

export default Canais