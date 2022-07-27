const VatRateSelect = ({ label, state, setState }) => {
  const handleChangeSelect = (event) => {
    const VatRate = event.target.value;
    const salePriceWithVat = (state.salePriceWithoutVat * (1 + VatRate / 100)).toFixed(2);
    setState({ ...state, VatRate, salePriceWithVat });
  };

  return (
    <div className="flex flex-col justify-start gap-1">
      <label htmlFor="VAT-rate">{label}</label>
      <select
        className="border border-2 rounded-md border-[#1D3557] px-2 py-1"
        id="VAT-rate"
        name="VAT-rate"
        defaultValue={state.VatRate}
        onChange={handleChangeSelect}
      >
        <option value="5">5%</option>
        <option value="9">9%</option>
        <option value="19">19%</option>
      </select>
    </div>
  );
};

export default VatRateSelect;
