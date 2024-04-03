'use client'
import Image from 'next/image'
import React from 'react'
import img from '../../assets/perk_img.png'
import getLang from '@/controllers/language'

const data = getLang()

const perks = data.prices.perks

const Perks = () => {
  return (
    <>
    <div className='p-4'>
        <section className='bg-purple-200 rounded-lg pt-4 flex lg:flex-row flex-col justify-center w-full'>
            <div className='flex-col pl-4 md:w-full'>
                <h1 className='p-6 font-bold text-3xl'>{perks.title}</h1>
                <p className='mt-2 p-6'>{perks.text}</p>
                <ul className='font-thin pl-6 text-start list-disc'>
                    <li className='ml-6'>{perks.list[0]}</li>
                    <li className='ml-6'>{perks.list[1]}</li>
                    <li className='ml-6'>{perks.list[2]}</li>
                </ul>
                <button className='ml-6 mt-4 px-4 py-2 rounded-xl border text-white bg-slack-purple hover:bg-slack-gold hover:text-black'>{perks.button}</button>
                <p className='mt-4 ml-6 font-bold'>{perks.subtitle}<span className='font-thin'>{perks.subtitleSpan}</span></p>
            </div>
            <div className='md:mt-0 mt-6 flex-col flex justify-center items-center lg:w-full'>
                <Image
                    alt={'perks image'}
                    src={img}
                    width={600}
                    height={600}
                />
            </div>
        </section>
    </div>
    </>
  )
}

export default Perks