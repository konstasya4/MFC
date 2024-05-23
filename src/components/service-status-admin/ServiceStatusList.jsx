import React from "react";
import ServiceStatusItem from "./ServiceStatusItem";
import "./ServiceStatusListStyle.css";

const ServiceStatusList = ({ status }) => {
  if (!status || !status.length) {
    return (
      <h1 style={{ textAlign: "center" }}>Пока еще нет заказанных услуг</h1>
    );
  }
  return (
    <div className="status-service-list">
      {status.map((stat) => (
        <ServiceStatusItem status={stat} key={stat.id} />
      ))}
    </div>
  );
};

export default ServiceStatusList;
