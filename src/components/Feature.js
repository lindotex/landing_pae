'use client'
import { Document } from 'postcss'
import React from 'react'
import pt from '../lang/pt.json'
import en from '../lang/en.json'

const language = window.localStorage.getItem('language')
const data = language === en ? en : pt

const Feature = () => {
    return (
        <div>
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto flex flex-wrap">
                    <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
                        <h1 className='text-5xl text-white'>{data.features.title}<span className='text-slack-gold'>{data.features.spanTitle}</span></h1>
                        <p className='text-white text-xl mt-4'>Conecte-se com as pessoas certas, encontre o que você precisa e automatize o restante. É assim que funciona o trabalho no Slack, sua plataforma de produtividade.</p>
                        <div className='w-full flex flex-row justify-between items-center mt-4'>
                            <button className='bg-white text-slack-purple flex-col w-full mx-2 items-center py-4 border-2 rounded-md hover:bg-slack-gold hover:text-slack-purple hover:border hover:border-slack-gold'>INSCREVER-SE COM O E-MAIL</button>
                            <button className='flex-col bg-blue-600 text-white border-2 w-full border-blue-600 items-center py-4 rounded-md hover:bg-slack-gold hover:border-slack-gold hover:text-slack-purple'>ENTRAR COM O GOOGLE</button>
                        </div>
                        <p className='text-white text-xl mt-4'>O Slack pode ser usado gratuitamente pelo tempo que você quiser.</p>
                    </div>
                    <div className='lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden'>
                        <video loop autoplay mooted playsInline type='video/mp4'>
                            <source src='https://a.slack-edge.com/ec3a92a/marketing/img/homepage/true-prospects/animations/mp4/ia4-hero-product-ui.pt-BR.mp4' type='video/mp4'></source>
                        </video>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Feature