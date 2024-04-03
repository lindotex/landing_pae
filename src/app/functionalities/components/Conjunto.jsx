import React from 'react'
import publicLogo from '../assets/publicos.png'
import privadoLogo from '../assets/privados.png'
import connectLogo from '../assets/connect.png'
import Image from 'next/image'
import pt from '../../../lang/pt.json'
 
const conjunto = pt.Functionalities.conjunto

const Conjunto = () => {
  return (
    <>
        <section className='py-12'>
            <div className='flex flex-col items-center pb-24'>
                <h1 className='text-4xl pb-6'>{conjunto.title}</h1>
                <p className='px-12'>{conjunto.text}</p>
            </div>
            <div className='flex lg:flex-row flex-col'>
                <div className='px-12'>
                    <Image
                        alt='Public logo'
                        src={publicLogo}
                        height={50}
                    />
                    <h1 className='font-bold py-6'>{conjunto.list[0].title}</h1>
                    <p>{conjunto.list[0].text}</p>
                </div>
                <div className='px-12'>
                    <Image
                        alt='Private logo'
                        src={privadoLogo}
                        height={50}
                    />
                    <h1 className='font-bold py-6'>{conjunto.list[1].title}</h1>
                    <p>{conjunto.list[1].text}</p>
                </div>
                <div className='px-12'>
                    <Image
                        alt='Connect logo'
                        src={connectLogo}
                        height={50}
                    />
                    <h1 className='font-bold py-6'>{conjunto.list[2].title}</h1>
                    <p>{conjunto.list[2].text}</p>
                </div>
            </div>
        </section>
    </>
  )
}

export default Conjunto