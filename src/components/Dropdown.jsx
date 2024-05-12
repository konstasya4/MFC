import React from 'react';
import '../styles/CreateAServiceStyle.css';

const Dropdown = ({ options, onSelect, selectedOption }) => {
    return (
        <select 
            className='select-create-service' 
            onChange={(e) => onSelect(e.target.value)}
            value={selectedOption ? selectedOption.option : ""}
        >
            <option value="" disabled>Тип услуги</option>
            {options.map((option) => (
                <option key={option.key} value={option.option}>
                    {option.option}
                </option>
            ))}
        </select>
    );
};

export default Dropdown;