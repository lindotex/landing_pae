'use client'
import React from 'react'
import Image from 'next/image'
import latamBrand from '../assets/latam-airlines@2x.png'
import bancolombiaBrand from '../assets/bancolombia@2x.png'
import santanderBrand from '../assets/banco-santander-rio@2x.png'
import mercadoLivreBrand from '../assets/mercado-libre@2x.png'
import rappiBrand from '../assets/rappi@2x.png'
import naranjaBrand from '../assets/naranja@2x.png'
import falabelaBrand from '../assets/falabella@2x.png'
import getLang from '@/controllers/language'

const data = getLang()

const brands = data.features.brands

const Brands = () => {
  return (
    <>
        <section className='border-2 w-full'>
            <h1 className='text-3xl pt-12 pb-6 align-center justify-center text-center'>{brands}</h1>
                <div className='flex pb-12 space-x-8 justify-center align-center items-center text-center'>
                    <button className='btn cursor-pointer'>
                        <Image
                            alt='latam brand'
                            url={latamBrand}
                            height={100}
                        />
                    </button>
                    <button className='btn cursor-pointer'>
                        <Image
                            alt='bancolombia brand'
                            url={bancolombiaBrand}
                            height={100}
                        />
                    </button>
                    <button className='btn cursor-pointer'>
                        <Image
                            alt='santander rio'
                            url={santanderBrand}
                            height={100}
                        />
                    </button>
                    <button className='btn cursor-pointer'>
                        <Image
                            alt='mercado livre'
                            url={mercadoLivreBrand}
                            height={100}
                        />
                    </button>
                    <button className='btn cursor-pointer'>
                        <Image
                            alt='rappi'
                            url={rappiBrand}
                            height={100}
                        />
                    </button>
                    <button className='btn cursor-pointer'>
                        <Image
                            alt='naranja'
                            url={naranjaBrand}
                            height={100}
                        />
                    </button>
                    <button className='btn cursor-pointer'>
                        <Image
                            alt='falabela'
                            url={falabelaBrand}
                            height={100}
                        />
                    </button>
                </div>
        </section>
    </>
  )
}

export default Brands