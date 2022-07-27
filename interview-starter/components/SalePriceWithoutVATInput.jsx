const SalePriceWithoutVatInput = ({ label, state, setState }) => {
  const handleChangeInput = (event) => {
    const salePriceWithoutVat = event.target.value;
    const salePriceWithVat = (salePriceWithoutVat * (1 + state.VatRate / 100)).toFixed(2);
    setState({ ...state, salePriceWithoutVat, salePriceWithVat });
  };

  return (
    <div className="flex flex-col justify-start gap-1">
      <label htmlFor="sale-price-without-VAT">{label}</label>
      <input
        className="border border-2 rounded-md border-[#1D3557] px-2 py-1"
        type="number"
        id="sale-price-without-VAT"
        name="sale-price-without-VAT"
        value={state?.salePriceWithoutVat}
        onChange={handleChangeInput}
      />
    </div>
  );
};

export default SalePriceWithoutVatInput;
