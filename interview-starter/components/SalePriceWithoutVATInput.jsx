import React, { useState } from 'react'

const SalePriceWithoutVATInput = ({ label, value, handleChange }) => {
  const [, setSalePriceWithoutVAT] = useState(value)

  const handleChangeInput = (event) => {
    setSalePriceWithoutVAT(event.target.value)
    handleChange(event)
  }

  return (
    <div className='flex justify-content-flex-start'>
      <label className='w-50' htmlFor='sale-price-without-VAT'>
        {label}
      </label>
      <input
        className='w-50 border-radius-5px border'
        type='number'
        id='sale-price-without-VAT'
        name='sale-price-without-VAT'
        value={value}
        onChange={handleChangeInput}
      />
    </div>
  )
}

export default SalePriceWithoutVATInput
