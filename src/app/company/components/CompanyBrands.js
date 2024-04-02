import React from 'react'
import Image from 'next/image'
import intuit from '../assets/intuit.png'
import manomano from '../assets/manomano-logo.png'
import vodafone from '../assets/vodafone-logo.png'
import hellofresh from '../assets/hellofresh-logo.png'
import bbc from '../assets/bbc.png'
import ocado from '../assets/ocado-logo.png'

const CompanyBrands = () => {
  return (
    <>
        <div>
            <section className='flex justify-center items-center py-4 '>
                <button className='btn hover:border-2 hover:rounded-xl px-10 py-4 justify-self-auto' name='intuit'>
                    <Image
                        alt='intuit'
                        src={intuit}
                        height={30}
                    />
                </button>
                <button className='btn hover:border-2 hover:rounded-xl px-10 py-4 ' name='manomano'>
                    <Image
                        alt='manomano'
                        src={manomano}
                        height={30}
                    e/>
                </button>
                <button className='btn hover:border-2 hover:rounded-xl px-10 py-4 ' name='vodafone'>
                    <Image
                        alt='vodafone'
                        src={vodafone}
                        height={30}
                    e/>
                </button>
                <button className='btn hover:border-2 hover:rounded-xl px-10 py-4 ' name='hellofresh'>
                    <Image
                        alt='hellofresh'
                        src={hellofresh}
                        height={30}
                    e/>
                </button>
                <button className='btn hover:border-2 hover:rounded-xl px-10 py-4 ' name='bbc'>
                    <Image
                        alt='bbc'
                        src={bbc}
                        height={30}
                    e/>
                </button>
                <button className='btn hover:border-2 hover:rounded-xl px-10 py-4 ' name='ocado'>
                    <Image
                        alt='ocado'
                        src={ocado}
                        height={30}
                    e/>
                </button>
                <hr/>
            </section>
        </div>
    </>
  )
}

export default CompanyBrands