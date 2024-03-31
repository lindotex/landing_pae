import Image from 'next/image'
import React from 'react'
import lightbulb from '../assets/lightbulb.jpeg'
import typingMachine from '../assets/typingMachine.jpeg'
import lockbox from '../assets/lockbox.jpeg'

const titleComponent = {
    "resourcesComponentTitle":"Biblioteca de recursos",
    "resourcesComponentSubtitle":"Procure recursos feitos sob medida para a sua equipe, as suas necessidades e todas as formas de aproveitar ao máximo o Slack.",
    "lightBulbCard": {
        "title":"Acesse a Central de Ajuda",
        "paragraph": "Tutoriais, dicas e videos sobre como se conectar, manter a organizacao e fazer tudo o que for preciso no Slack.",
        "image-location": lightbulb
        
    },
    "typeMachineCard": {
        "title":"Leia o blog do slack",
        "paragraph":"Artigos sobre colaboracao, transformacao e muito mais, elaborados por especialistas do setor, lideres do slack e pela equipe do slack.",
        "image-location": typingMachine

    },
    "lockbox": {
        "title":"Descubra o Diretorio de apps",
        "paragraph":"Escolha entre mais de 2.000 integracoes prontas e traga suas ferramentas favoritas direto para o slack.",
        "image-location": lockbox
    }
}


const Title = () => {
  return (
    <>
        {/* Media query : Lg Xl */}
        <section className='flex flex-col bg-slack-purple py-6 px-6'>
            <h1 className='font-bold text-white text-5xl'>{titleComponent.resourcesComponentTitle}</h1>
            <p className='mt-4 text-white'>{titleComponent.resourcesComponentSubtitle}</p>
        </section>
        <div className='ml-6 mt-4 mr-6'>
            <section className='mt-4'>
                <div>
                    <hr/>
                </div>
                <div className='flex flex-col lg:flex-row justify-between my-4'>
                    
                    {/* First Card */}
                    <a type='button' className='cursor-pointer flex-col lg:w-1/3 border-2 rounded-xl p-2 m-2'>
                        <div className='flex flex-row ml-4 my-2'>
                            <Image
                                alt='light bulb'
                                src={titleComponent.lightBulbCard['image-location']}
                                width={80}
                                />
                            <p className='font-bold text-2xl text-left ml-4'>{titleComponent.lightBulbCard.title}</p>
                        </div>
                        <div className='ml-4 font-light'>
                            <p>{titleComponent.lightBulbCard.paragraph}</p>
                        </div>
                    </a>

                    {/* Second Card */}
                    <a type='button' className='cursor-pointer flex-col lg:w-1/3 border-2 rounded-xl p-2 m-2'>
                        <div className='flex flex-row ml-4 my-2'>
                            <Image
                                alt='typing machine'
                                src={titleComponent.typeMachineCard['image-location']}
                                width={80}
                                />
                            <p className='font-bold text-left text-2xl ml-4 m-2'>{titleComponent.typeMachineCard.title}</p>
                        </div>
                        <div className='ml-4 font-light'>
                            <p>{titleComponent.typeMachineCard.paragraph}</p>
                        </div>
                    </a>

                    {/* Third Card */}
                    <a type='button' className='cursor-pointer flex-col lg:w-1/3 border-2 rounded-xl p-2 m-2'>
                        <div className='flex flex-row ml-4 my-2'>
                            <Image
                                alt='lock box'
                                src={titleComponent.lockbox['image-location']}
                                width={80}
                            />
                            <p className='font-bold text-left text-2xl ml-4'>{titleComponent.lockbox.title}</p>
                        </div>
                        <div className='ml-4 font-light'>
                            <p>{titleComponent.lockbox.paragraph}</p>
                        </div>
                    </a>
                </div>
                <div>
                    <hr/>
                </div>
            </section>
        </div>
    </>
  )
}

export default Title