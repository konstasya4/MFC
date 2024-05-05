import React, { useState } from 'react';
import Dropdown from '../../components/Dropdown';

const NotDoneService = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = ['Option 1', 'Option 2', 'Option 3'];

  const handleSelect = (option) => {
    setSelectedOption(option);
    // Do something with the selected option
  };

  return (
    <div>
      <h1>Dropdown Example</h1>
      <Dropdown options={options} onSelect={handleSelect} />
      <p>Selected option: {selectedOption}</p>
    </div>
  );
};

export default NotDoneService;
