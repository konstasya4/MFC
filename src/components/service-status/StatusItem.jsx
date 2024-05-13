import React, { useState, useEffect, useMemo } from "react";
import "../../styles/componentsStyles/OrderedServices.css";

const StatusItem = (props) => {
  const statusServices = useMemo(() => [
    { key: 0, status: "Создано" },
    { key: 1, status: "В работе" },
    { key: 2, status: "Готово" },
    { key: 3, status: "Отклонено" },
    { key: 4, status: "Получено" },
  ], []);
  const [statusServiceItem, setStatusServiceItem] = useState(null);

  useEffect(() => {
    const statusItem = statusServices.find(
      (item) => item.key === props.status.state
    );
    setStatusServiceItem(statusItem);
  }, [props.status.state, statusServices]);

  return (
    <div className="status-container">
      <div className="status-item">
        <div className="status-item-title">{props.status.serviceName}</div>
        <div className="status-item-date">Дата заказа: {props.status.date}</div>
      </div>
      {statusServiceItem && (
        <p
          className={`status-indicator status-indicator-${statusServiceItem.key}`}
        >
          {statusServiceItem.status}
        </p>
      )}
    </div>
  );
};

export default StatusItem;
