import React from 'react'

const Button = ({ label }) => {
  return (
    <div className='flex align-items-center justify-content-center'>
      <button
        className='border-none w-20 h-10 border-radius-5px p-2 text-align-center font-size-large bc-button color-white hover-button cursor-pointer'
        type='submit'
      >
        {label}
      </button>
    </div>
  )
}

export default Button
