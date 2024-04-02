import React from 'react'
import logoVodafone from '../assets/vodafone-logo@2x.png'
import videoFrame from '../assets/videoframe_7925.png'
import Image from 'next/image'
import pt from '../../../lang/pt.json'

const solving = pt.Solutions.solving

const Solving = () => {
  return (
    <>
        <section className='w-full lg:flex pt-12'>
            <div className='flex lg:w-1/2 w-full justify-center items-center'>
                <Image
                    alt='video frame'
                    src={videoFrame}
                    height={700}
                />
            </div>
            <div className='flex  flex-col lg:w-1/2 w-full justify-center px-24 py-12'>
                <p className='pb-6'>{solving.preTitle.toUpperCase()}</p>
                <h1 className='text-3xl font-bold'>{solving.title}</h1>
                <ul className='pt-6 pl-12 list-disc'>
                    <li className=' py-2'>{solving.list[0]}</li>
                    <li className=' py-2'>{solving.list[1]}</li>
                    <li className=' py-2'>{solving.list[2]}</li>
                </ul>
                <quote className='font-light pt-6' italic>{solving.quote}</quote>
                <Image
                    alt='vodafone logo'
                    src={logoVodafone}
                    height={40}
                    className='pt-4'
                />
                <p className='pt-4'><spam className='font-bold'>{solving.ceo}</spam>{solving.signature}</p>


            </div>

        </section>
    </>
  )
}

export default Solving