import React, { useState } from 'react';
import Button from './Button';
import SalePriceWithoutVatInput from './SalePriceWithoutVatInput';
import SalePriceWithVatInput from './SalePriceWithVatInput';
import VatRateSelect from './VatRateSelect';

export const Form = () => {
  const [state, setState] = useState({
    salePriceWithoutVat: '',
    VatRate: 19,
    salePriceWithVat: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const body = JSON.stringify({
      salePriceWithoutVat: state.salePriceWithoutVat,
      VatRate: state.VatRate,
      salePriceWithVat: state.salePriceWithVat,
    });
    if (state.salePriceWithoutVat) {
      await fetch('/endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body,
      });
      alert(body);
    }
  };

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="bg-[#F1FAEE] opacity-80 grid gap-4 rounded-lg border-2 border-[#1D3557] p-4 w-1/2 shadow-xl">
        <h2 className="text-xl text-center">Form</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <SalePriceWithoutVatInput
            label="Sale price without VAT"
            state={state}
            setState={setState}
          />
          <VatRateSelect label="VAT rate" state={state} setState={setState} />
          <SalePriceWithVatInput label="Sale price with VAT" state={state} setState={setState} />
          <Button label="Submit" />
        </form>
      </div>
    </div>
  );
};

export default Form;
