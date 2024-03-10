import React from 'react'
import pt from '../lang/pt.json'
import "/node_modules/flag-icons/css/flag-icons.min.css";

const Header = ({navigationBar}) => {
  return (
    <div>
        <header class="bg-slack-purple sticky top-0 text-white body-font justify-between flex">
            <div className='flex-col justify-center mx-4 my-2'>
                <a href='/' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 hover:mouse ">
                <img alt='slack-image' src={'https://a.slack-edge.com/3d92b39/marketing/img/nav/slack-salesforce-logo-nav-white.png'}/>
                </a>
            </div>
            <div className='flex-col mx-4 my-2'>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <a href='/functionalities' className="px-4 py-2 mr-5 hover:text-purple-400">{navigationBar.functionalities.charAt(0).toUpperCase() + navigationBar.functionalities.slice(1)}</a>
                    <a href='/solutions' className="px-4 py-2 mr-5 hover:text-purple-400">{navigationBar.solutions.charAt(0).toUpperCase() + navigationBar.solutions.slice(1)}</a>
                    <a href='/company' className="px-4 py-2 mr-5 hover:text-purple-400">{navigationBar.company.charAt(0).toUpperCase() + navigationBar.company.slice(1)}</a>
                    <a href='/resources' className="px-4 py-2 mr-5 hover:text-purple-400">{navigationBar.resources.charAt(0).toUpperCase() + navigationBar.resources.slice(1)}</a>
                    <a href='/prices' className="px-4 py-2 mr-5 hover:text-purple-400">{navigationBar.prices.charAt(0).toUpperCase() + navigationBar.prices.slice(1)}</a>
                </nav>
            </div>
            <div className='flex flex-wrap items-center text-base justify-center mx-4 my-2 md:ml-auto'>
                <button className='mr-4' onClick={()=> changeLang('en')}><span class="fi fi-gb"></span></button>
                <button className='mr-4' onClick={()=> changeLang('pt')}><span class="fi fi-br"></span></button>
                <a href='/signin' className="px-4 py-2 mr-4 hover:text-purple-400 hover:text-slack-gold">{pt.navigationBar.signIn.charAt(0).toUpperCase() + pt.navigationBar.signIn.slice(1)}</a>
                <button href='../sales' className='px-4 py-2 mr-4 bg-slack-purple text-white border-2 border-color-white rounded-md px-8 py-2 hover:bg-slack-gold hover:border-slack-gold hover:text-slack-purple'>{pt.navigationBar.sales.charAt(0).toUpperCase() + pt.navigationBar.sales.slice(1)}</button>
                <button href='/trial' className='px-4 py-2 border-2 bg-white text-purple-900 rounded-md px-8 py-2 hover:bg-slack-gold hover:border-slack-gold hover:text-slack-purple'>{pt.navigationBar.freeRegister.charAt(0).toUpperCase() + pt.navigationBar.freeRegister.slice(1)}</button>
            </div>
        </header>
    </div>
  )
}

export default Header