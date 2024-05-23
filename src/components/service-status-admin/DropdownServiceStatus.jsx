import React from 'react';
import './ServiceStatusListStyle.css';

const DropdownServiceStatus = ({ statusServices, onSelect, selectedOption, className }) => {
    return (
        <select 
            className={className}
            onChange={(e) => onSelect(e.target.value)}
            value={selectedOption}
        >
            {statusServices.map((statusService) => (
                <option key={statusService.key} value={statusService.key}>
                    {statusService.status}
                </option>
            ))}
        </select>
    );
};

export default DropdownServiceStatus;