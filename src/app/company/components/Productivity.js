import React from 'react'
import videoframe from '../assets/videoframe_866.png'
import Image from 'next/image'
import foxLogo from '../assets/fox@2x.png'

const productivityComponent = {
    "preTitle":"produtividade em escala",
    "title":"Atenda às necessidades da sua organização com ferramentas poderosas para produtividade",
    "list":[
        "Automatize tarefas rotineiras e dedique mais tempo às atividades mais importantes",
        "Veja o que acontece em toda a organização com facilidade pelo Atlas do Slack, nossa ferramenta integrada de diretório de equipes.",
        "Visualize a produtividade da equipe e mensure a adesão à pilha de tecnologia com análise avançada"
    ],
    "subTitle":"Saiba mais sobre o Slack em grande escala",
    "quote":"“O Slack tem sido o martelo que nos ajuda a quebrar as paredes de silos. Ele é o sistema operacional de colaboração em 194 países e 171 escritórios, nos unindo como nada antes conseguiu.”",
    "ceo":"Jeff Dow, ",
    "signature":"Vice-presidente executivo, operações de mídia e transmissão"
}

const Productivity = () => {
  return (
    <>
        <section className='flex flex-col lg:flex-row bg-slack-bege-tone py-12'>
            <div className='lg:w-1/2 w-full pl-24 pr-8'>
                <h3 className='font-light'>{productivityComponent.preTitle.toUpperCase()}</h3>
                <h1 className='font-bold text-3xl pt-6'>{productivityComponent.title}</h1>
                <ul className='list-disc pt-4 pl-6'>
                    <li>{productivityComponent.list[0]}</li>
                    <li>{productivityComponent.list[1]}</li>
                    <li>{productivityComponent.list[2]}</li>
                </ul>
                <a className='cursor-pointer'><p className='font-light text-blue-500 pt-6 '>{productivityComponent.subTitle}</p></a>
                <p className='justify-content font-light italic pt-4'>{productivityComponent.quote}</p>
                <Image
                    className='pt-2'
                    alt='fox logo'
                    src={foxLogo}
                    height={40}
                />
                <p className='font-light italic'><span className='font-bold'>{productivityComponent.ceo}</span>{productivityComponent.signature}</p>
            </div>
            <div className='lg:w-1/2 w-full p-4 flex justify-center items-center'>
                <Image
                    alt='video frame'
                    src={videoframe}
                    height={400}
                />
            </div>
        </section>
    </>
  )
}

export default Productivity