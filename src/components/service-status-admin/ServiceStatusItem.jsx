import React, { useState, useMemo } from "react";
import "../../styles/ServiceStatusListStyle.css";
import DropdownServiceStatus from "./DropdownServiceStatus";
import GettingAService from "../../services/GettingAService";

const ServiceStatusItem = (props) => {
  const statusServices = useMemo(() => [
    { key: 0, status: "Создано" },
    { key: 1, status: "В работе" },
    { key: 2, status: "Готово" },
    { key: 3, status: "Отклонено" },
    { key: 4, status: "Получено" },
  ], []);
console.log(props)
  const [selectedStatus, setSelectedStatus] = useState(props.status.state);

  const handleStatusChange = (selectedStatusKey) => {
    const status = statusServices.find((item) => item.key === parseInt(selectedStatusKey));
    setSelectedStatus(status);
    console.log(selectedStatus)
  };

  const changeStatus = () => {
    if (selectedStatus) {
      const responseState = GettingAService.fetchNewStatus(selectedStatus.key, props.status.id);
      console.warn(responseState);
    }
  };

  console.log("statusServiceItem2", selectedStatus);

  return (
    <div className="service-status-container">
      <div className="status-item">
        <div className="status-item-title">{props.status.serviceName}</div>
        <div className="status-item-date">Дата заказа: {props.status.date}</div>
      </div>
      <button onClick={changeStatus}>сохранить</button>
      <DropdownServiceStatus
        className={`dropdown-servise-status  status-indicator-${selectedStatus && selectedStatus.key}`}
        statusServices={statusServices}
        onSelect={handleStatusChange}
        selectedOption={selectedStatus && selectedStatus.key}
      />
    </div>
  );
};

export default ServiceStatusItem;
