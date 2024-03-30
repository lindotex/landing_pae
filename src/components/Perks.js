import Image from 'next/image'
import React from 'react'
import img from '../app/assets/perk_img.png'

const perks = {
    "title": "Otimize seu trabalho com a IA do Slack",
    "text":"Entre em contato com um representante de vendas do Slack ou entre na lista de espera para ver como a IA do Slack pode capacitar todos da sua organização.",
    "list":{
        "a":"Obtenha respostas rápidas para suas perguntas com a pesquisa com tecnologia de IA",
        "b":"Resuma as conversas com um só clique",
        "c":"Não se preocupe: seus dados permanecem seguros com a IA do Slack"
    },
    "button":"Acessar",
    "subtitle":"Agora disponível como complemento para planos empresariais em inglês. ",
    "subtitleSpan":"Entraremos em contato quando outros planos e idiomas estiverem disponíveis."
}

const Perks = () => {
  return (
    <>
    <div className='p-4'>
        <section className='bg-purple-200 rounded-lg pt-4 flex lg:flex-row flex-col justify-center w-full'>
            <div className='flex-col pl-4 md:w-full'>
                <h1 className='p-6 font-bold text-3xl'>{perks.title}</h1>
                <p className='mt-2 p-6'>{perks.text}</p>
                <ul className='font-thin pl-6 text-start list-disc'>
                    <li className='ml-6'>{perks.list.a}</li>
                    <li className='ml-6'>{perks.list.b}</li>
                    <li className='ml-6'>{perks.list.c}</li>
                </ul>
                <button className='ml-6 mt-4 px-4 py-2 rounded-xl border text-white bg-slack-purple hover:bg-slack-gold hover:text-black'>{perks.button}</button>
                <p className='mt-4 ml-6 font-bold'>{perks.subtitle}<span className='font-thin'>{perks.subtitleSpan}</span></p>
            </div>
            <div className='flex-col justify-center items-center lg:w-full'>
                <Image
                    alt={'perks image'}
                    src={img}
                    width={600}
                    height={600}
                />
            </div>
        </section>
    </div>
    </>
  )
}

export default Perks