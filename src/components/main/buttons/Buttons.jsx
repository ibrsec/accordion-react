

import React from 'react'
import './Buttons.scss';

const Buttons = ({onClick}) => {
  return (
    <div className='align-items-center gap-3 justify-content-center d-flex mb-5'>
        <button className='btn btn-dark text-white py-2 px-4' id='prev' onClick={onClick}>Prev</button>
        <button className='btn btn-dark text-white py-2 px-4' id='next' onClick={onClick}>Next</button>

    </div>
  )
}

export default Buttons