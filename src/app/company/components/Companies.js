'use client'
import React from 'react'
import img from '../assets/Hero-Illo-enterprise-page.pt-BR@2x.png'
import Image from 'next/image'
import getLang from '@/controllers/language'

const data = getLang()

const companiesFeatures = data.Company.companiesFeatures


const Companies = () => {
  return (
    <>
        <div className='m-4 rounded-xl'>
            <section className='bg-white rounded-lg pt-4 flex lg:flex-row flex-col justify-center w-full'>
                <div className='flex-col pl-4 md:w-full'>
                    <p className='mt-2 p-6'>{companiesFeatures.preTitle.toUpperCase()}</p>
                    <h1 className='p-6 font-bold text-5xl'>{companiesFeatures.title}</h1>
                    <p className='p-6 pt-0'>{companiesFeatures.text}</p>
                    <button className='ml-6 mt-4 px-8 py-4 rounded-xl border text-white bg-slack-purple hover:bg-slack-gold hover:text-black'>{companiesFeatures.salesBtn.toUpperCase()}</button>
                    <button className='ml-6 mt-4 px-8 py-4 rounded-xl border text-slack-purple bg-white hover:bg-slack-gold hover:text-black'>{companiesFeatures.demoBtn.toUpperCase()}</button>
                </div>
                <div className='md:mt-0 mt-6 flex-col flex justify-center items-center lg:w-full'>
                    <Image
                        alt={'perks image'}
                        src={img}
                        width={500}
                        height={500}
                    />
                </div>
            </section>
        </div>
    </>
  )
}

export default Companies