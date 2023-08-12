import React from 'react'
import '../Styles/Payment.style.css'

const Progressitem = ({step,text}) => {
  return (
    <>
        <span className='progressitem'>
            <span className=''>
                <img src={step===1?"Icon1.svg":"Icon2.svg"} alt='icon'></img>
            </span>
            <p className='text'>{text}</p>
        </span>
    </>
  )
}

export default Progressitem;
