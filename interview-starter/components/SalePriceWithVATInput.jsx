const SalePriceWithVatInput = ({ label, state, setState }) => {
  const handleChangeInput = (event) => {
    const salePriceWithVat = event.target.value;
    const salePriceWithoutVat = (salePriceWithVat / (1 + state.VatRate / 100)).toFixed(2);
    setState({ ...state, salePriceWithoutVat, salePriceWithVat });
  };

  return (
    <div className="flex flex-col justify-start gap-1">
      <label htmlFor="sale-price-with-VAT">{label}</label>
      <input
        className="border border-2 rounded-md border-[#1D3557] px-2 py-1"
        type="number"
        id="sale-price-with-VAT"
        name="sale-price-with-VAT"
        value={state?.salePriceWithVat}
        onChange={handleChangeInput}
      />
    </div>
  );
};

export default SalePriceWithVatInput;
