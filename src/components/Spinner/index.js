import React from 'react'
import './index.css'

const Spinner = () => {
    return (
        <div className='sk-three-bounce'>
          <div className='sk-bounce-1 sk-child'></div>
          <div className='sk-bounce-2 sk-child'></div>
          <div className='sk-bounce-3 sk-child'></div>
        </div>
    )
}

export default Spinner