'use client'
import { Document } from 'postcss'
import React from 'react'
import pt from '../../lang/pt.json'
import en from '../../lang/en.json'



const Feature = () => {
    const lang = window.localStorage.getItem('language')
    const data = lang === 'pt' ? pt : en;

    return (
        <div>
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-4 mx-auto flex flex-wrap">
                    <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
                        <h1 className='text-5xl text-white'>{data.features.title}<span className='text-slack-gold'>{data.features.spanTitle}</span></h1>
                        <p className='text-white text-xl mt-4'>{data.features.featureText}</p>
                        <div className='w-full flex md:flex-row flex-col justify-between items-center mt-4'>
                            <button className='bg-white text-slack-purple flex-col w-full mx-2 items-center py-4 border-2 rounded-md hover:bg-slack-gold hover:text-slack-purple hover:border hover:border-slack-gold'>{data.features.subscribeBtn.toUpperCase()}</button>
                            <button className='md:mt-0 mt-2 flex-col bg-blue-600 text-white border-2 w-full border-blue-600 items-center py-4 rounded-md hover:bg-slack-gold hover:border-slack-gold hover:text-slack-purple'>{data.features.googleBtn.toUpperCase()}</button>
                        </div>
                        <p className='text-white text-xl mt-4'>{data.features.subText}</p>
                    </div>
                    <div className='lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden'>
                        <video loop autoplay mooted playsInline type='video/mp4'title='main video' poster="https://a.slack-edge.com/ec3a92a/marketing/img/homepage/true-prospects/animations/static/ia4-hero-product-ui.pt-BR.jpg">
                            <source src='../assets/feature_video.mp4' type='video/mp4'></source>
                        </video>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Feature