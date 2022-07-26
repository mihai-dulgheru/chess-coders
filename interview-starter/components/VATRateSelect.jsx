import React, { useState } from 'react'

const VATRateSelect = ({ label, defaultValue, handleChange }) => {
  const [VATRate, setVATRate] = useState(defaultValue)

  const handleChangeSelect = (event) => {
    setVATRate(event.target.value)
    handleChange(event)
  }

  return (
    <div className='flex justify-content-flex-start'>
      <label className='w-50' htmlFor='VAT-rate'>
        {label}
      </label>
      <select
        className='w-50 border-radius-5px border'
        id='VAT-rate'
        name='VAT-rate'
        defaultValue={VATRate}
        onChange={handleChangeSelect}
      >
        <option value='5'>5%</option>
        <option value='9'>9%</option>
        <option value='19'>19%</option>
      </select>
    </div>
  )
}

export default VATRateSelect
