import Image from 'next/image'
import React from 'react'
import logo from '../assets/img-video-thumb-eng@2x.jpg'
import pt from '../../../lang/pt.json'

const engneeringComponent = pt.Solutions.engneeringComponent

const Engneering = () => {
  return (
    <section className='flex flex-col lg:flex-row pt-24'>
        {/* Content */}
        <div className='w-auto lg:w-1/2 ml-24 mr-12'>
            <p className=''>{engneeringComponent.preTitle.toUpperCase()}</p>
            <h1 className='pt-2 pr-12 font-bold text-4xl'>{engneeringComponent.title}</h1>
            <p className='pt-6 text-xl'>{engneeringComponent.text}</p>
            <div className='flex flex-col pb-4'>
                <button className='btn border  px-6 py-4 rounded-md font-bold mt-2 hover:bg-slack-gold hover:text-black text-white bg-slack-purple'>{engneeringComponent.salesBtn.toUpperCase()}</button>
                <button className='btn border border-slack-purple hover:border-slack-gold px-6 py-4 rounded-md font-bold mt-2 hover:bg-slack-gold hover:text-black '>{engneeringComponent.freeTestBtn.toUpperCase()}</button>
            </div>
        </div>
        {/* Image */}
        <div className='w-auto lg:w-1/2 mr-24'>
            <Image
                alt='Engneering img'
                src={logo}
                height={900}
            />
        </div>
    </section>
  )
}

export default Engneering