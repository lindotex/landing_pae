import React from 'react'

const Article = ({preTitle,articleTitle,articleText}) => {
  return (
    <div>
        <button type="button" className='cursor-pointer text-left flex-row lg:flex-col'>
            <p className='font-light pt-4 pl-4 text-sm'>{preTitle}</p>
            <h1 className='mt-2 pl-4 font-bold text-xl'>{articleTitle}</h1>
            <p className='pl-4 pb-4 text-justify pr-6'>{articleText}</p>
        </button>
    </div>
  )
}

export default Article