import React, { useState } from 'react'

const Counter = () => {
        const[ text,setText]= useState('')


  return (
    <div className='counter-container'>
        <div className='number-holder'>

        <div className='counter-box'>
        <h2 className='counte'> letters</h2>
        <p > {text.length}</p>
      
        </div>

         
        <div className='counter-box'>
        <h2 className='counte'> Words</h2>
        <p > {text.length>0?text.split(' ').length:null}</p>
       
        </div>

        <div className='counter-box'>
        <h2 className='counte'> Paragraph</h2>
        <p > {text.length>0?text.split(/\r\n|\r|\n/).length:null}</p>
       
        </div>
        
        </div>

        <div className='text-box'>
            <textarea className='text-area' placeholder=' enter your text' 
                value={text} onChange={(e)=>{
                    setText(e.target.value)
                }}
            />

        </div>

        <div className='button-box'>
         <button onClick={()=>{setText(text.toUpperCase())}} >click to uppercase</button>
         <button onClick={()=>{setText(text.toLowerCase())}}>click to lowercase</button>

        </div>

        <div className='preview'>
            <h4>preview</h4>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default Counter