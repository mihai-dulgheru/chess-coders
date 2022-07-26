import React, { useState } from 'react'

const SalePriceWithVATInput = ({ label, value, handleChange }) => {
  const [, setSalePriceWithVAT] = useState(value)

  const handleChangeInput = (event) => {
    setSalePriceWithVAT(event.target.value)
    handleChange(event)
  }

  return (
    <div className='flex justify-content-flex-start'>
      <label className='w-50' htmlFor='sale-price-with-VAT'>
        {label}
      </label>
      <input
        className='w-50 border-radius-5px border'
        type='number'
        id='sale-price-with-VAT'
        name='sale-price-with-VAT'
        value={value}
        onChange={handleChangeInput}
      />
    </div>
  )
}

export default SalePriceWithVATInput
