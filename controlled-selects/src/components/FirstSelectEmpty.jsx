import { cities, offices } from '../data/select-data';
import { useState } from 'react';

const FirstSelect = () => {
  const [filteredOffices, setFilteredOffices] = useState(offices);

  const handleChange = (e) => {
    const selectedCity = e.target.value;
    setFilteredOffices(offices.filter((o) => o.city === selectedCity));
    document.querySelector('div > label:nth-child(3) > select').value = '';
  };

  return (
    <div>
      <label>
        <p>Select city</p>
        <select name='city' onChange={handleChange} defaultValue={''}>
          <option value='' disabled>
            Select a city...
          </option>
          {cities.map((city) => (
            <option key={city.value} value={city.value}>
              {city.text}
            </option>
          ))}
        </select>
      </label>
      <br />
      <label>
        <p>Select office</p>
        <select name='office' defaultValue={''}>
          <option value='' disabled>
            Select an office...
          </option>
          {filteredOffices.map((office) => (
            <option key={office.value} value={office.value}>
              {office.text}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default FirstSelect;
