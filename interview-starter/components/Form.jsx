import React, { useState } from 'react'
import Button from './Button'
import SalePriceWithoutVATInput from './SalePriceWithoutVATInput'
import SalePriceWithVATInput from './SalePriceWithVATInput'
import VATRateSelect from './VATRateSelect'

export const Form = () => {
  const [salePriceWithoutVAT, setSalePriceWithoutVAT] = useState('')
  const [VATRate, setVATRate] = useState('19')
  const [salePriceWithVAT, setSalePriceWithVAT] = useState('')

  const handleChangeSalePriceWithoutVAT = (event) => {
    setSalePriceWithoutVAT(event.target.value)
    setSalePriceWithVAT(
      event.target.value ? (event.target.value * (1 + parseInt(VATRate) / 100)).toFixed(2) : ''
    )
  }

  const handleChangeVATRate = (event) => {
    setVATRate(event.target.value)
    setSalePriceWithVAT(
      salePriceWithoutVAT
        ? (salePriceWithoutVAT * (1 + parseInt(event.target.value) / 100)).toFixed(2)
        : ''
    )
  }

  const handleChangeSalePriceWithVAT = (event) => {
    setSalePriceWithVAT(event.target.value)
    setSalePriceWithoutVAT(
      (parseFloat(event.target.value) / (1 + parseInt(VATRate) / 100)).toFixed(2)
    )
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const body = JSON.stringify({ salePriceWithoutVAT, VATRate, salePriceWithVAT })
    if (salePriceWithoutVAT) {
      await fetch('/endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body
      })
      alert(body)
    }
  }

  return (
    <div className='flex align-items-center justify-content-center height-100vh'>
      <div className='border border-radius-5px p-4 bc-main'>
        <form onSubmit={handleSubmit} className='flex flex-direction-column row-gap-4'>
          <SalePriceWithoutVATInput
            label='Sale price without VAT'
            value={salePriceWithoutVAT}
            handleChange={handleChangeSalePriceWithoutVAT}
          />
          <VATRateSelect
            label='VAT rate'
            defaultValue={VATRate}
            handleChange={handleChangeVATRate}
          />
          <SalePriceWithVATInput
            label='Sale price with VAT'
            value={salePriceWithVAT}
            handleChange={handleChangeSalePriceWithVAT}
          />
          <Button label='Submit' />
        </form>
      </div>
    </div>
  )
}

export default Form
