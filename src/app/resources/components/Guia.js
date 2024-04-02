import Image from 'next/image'
import React from 'react'
import guia from '../assets/guia.jpeg'
import LeftArrow from '@/app/assets/leftArrow'
import Article from './Article'

const guideComponent = {
    "preTitle":"Guia",
    "title":"Mover seu proximo projeto para um canal",
    "imageSource":guia,
    "text":"Reuna as pessoas certas nos canais para compartilhar ideias, tomar decisoes e avancar com um objetivo e um local em comum.",
    "textSubtitle":"Leia mais",
    "articles":{
        "0":{
            "preTitle":"Guia",
            "title":"Comece a usar o Slack Connect",
            "text":"Agilize a comunicacao e trabalhe de forma mais segura com parceiros externos, fornecedores e pessoas de fora da empresa."
        },
        "1":{
            "preTitle":"Guia",
            "title":"6 Modelos do criador de fluxo de trabalho para engenheiros de software",
            "text":"Economize tempo em funcoes repetitivas e concentre-se no que realmente importa com estes modelos de fluxo de trabalho que podem ser baixados para o slack."
        }
    }
}

const Guia = () => {
  return (
    <>
        <section className='flex flex-col lg:flex-row justify-between lg:mr-0 mx-6 mt-6'>
            
            {/* First div */}   
            <div className='flex flex-row lg:flex-col w-full lg:w-1/3 bg-slack-bege rounded-t-lg item-center justify-center'>
                <Image
                    alt='guia picture'
                    src={guideComponent['imageSource']}
                    height={600}
                />
            </div> 

            {/* Second div */}
            
            <div className='w-full lg:w-1/3 bg-slack-bege rounded-b-lg justify-center'>
                <button type="button" className='cursor-pointer text-left flex-row lg:flex-col'>
                    <p className='font-light pt-4 pl-4'>{guideComponent.preTitle}</p>
                    <h1 className='mt-4 pl-4 font-medium text-4xl'>{guideComponent.title}</h1>
                    <p className='mt-2 pl-4 pb-4 lg:mt-4 text-justify pr-6'>{guideComponent.text}</p>
                    <div className='lg:inline-flex flex'>
                        <a className='font-light mt-6 mb-4 ml-4'>{guideComponent.textSubtitle}<LeftArrow/></a>
                    </div>
                </button>
            </div>
        
            {/* Third div */}
            <div className='flex w-full lg:flex-col flex-row lg:w-1/3'>
                {/* TODO: */}
                {/* fazer esse componente reutilizavel */}
                {/* First Article */}

                <Article
                    preTitle={guideComponent.preTitle}
                    articleTitle={guideComponent.articles[0].title}
                    articleText={guideComponent.articles[0].text}
                />
                {/* Second Article */}
                <Article
                    preTitle={guideComponent.preTitle}
                    articleTitle={guideComponent.articles[1].title}
                    articleText={guideComponent.articles[1].text}
                />
            </div>
        </section>   
    </>
  )
}

export default Guia