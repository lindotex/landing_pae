import React from 'react'
import Image from 'next/image'
import latamBrand from '../assets/latam-airlines@2x.png'
import bancolombiaBrand from '../assets/bancolombia@2x.png'
import santanderBrand from '../assets/banco-santander-rio@2x.png'
import mercadoLivreBrand from '../assets/mercado-libre@2x.png'
import rappiBrand from '../assets/rappi@2x.png'
import naranjaBrand from '../assets/naranja@2x.png'
import falabelaBrand from '../assets/falabella@2x.png'

const brands = {
    "title":"Aprovado por empresa ao redor do mundo"
}

const Brands = () => {
  return (
    <>
        <section className='border-2'>
            <h1>{brands.title}</h1>
            <div>
                <ul>
                    <li className=''>
                        <Image
                            alt='latam brand'
                            url={latamBrand}
                            width={100}
                        />
                    </li>
                    <li className=''>
                        <Image
                            alt='bancolombia brand'
                            url={bancolombiaBrand}
                            width={100}
                        />
                    </li>
                    <li className=''>
                        <Image
                            alt='santander rio'
                            url={santanderBrand}
                            width={100}
                        />
                    </li>
                    <li className=''>
                        <Image
                            alt='mercado livre'
                            url={mercadoLivreBrand}
                            width={100}
                        />
                    </li>
                    <li className=''>
                        <Image
                            alt='rappi'
                            url={rappiBrand}
                            width={100}
                        />
                    </li>
                    <li className=''>
                        <Image
                            alt='naranja'
                            url={naranjaBrand}
                            width={100}
                        />
                    </li>
                    <li className=''>
                        <Image
                            alt='falabela'
                            url={falabelaBrand}
                            width={100}
                        />
                    </li>
                </ul>
            </div>
        </section>
    </>
  )
}

export default Brands