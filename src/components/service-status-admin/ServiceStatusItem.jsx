import React, { useState, useMemo } from "react";
import "../../styles/ServiceStatusListStyle.css";
import DropdownServiceStatus from "./DropdownServiceStatus";
import GettingAService from "../../services/GettingAService";

const ServiceStatusItem = (props) => {
  const [downloadURL, setDownloadURL] = useState(null);
  const statusServices = useMemo(
    () => [
      { key: 0, status: "Создано" },
      { key: 1, status: "В работе" },
      { key: 2, status: "Готово" },
      { key: 3, status: "Отклонено" },
      { key: 4, status: "Получено" },
    ],
    []
  );

  const [selectedStatusKey, setSelectedStatusKey] = useState(
    props.status.state
  );

  const handleStatusChange = (selectedStatusKey) => {
    setSelectedStatusKey(parseInt(selectedStatusKey));
  };
  console.log(props);
  const changeStatus = async () => {
    if (selectedStatusKey !== null && selectedStatusKey !== undefined) {
      try {
        const responseState = await GettingAService.fetchNewStatus(
          selectedStatusKey,
          props.status.id
        );
        console.warn(responseState);
        // здесь вы можете добавить какую-то обработку успешного запроса
      } catch (error) {
        console.error("Ошибка при изменении статуса:", error);
        // здесь вы можете добавить обработку ошибок
      }
    }
  };
  const downloadTheDocument = async () => {
    try {
      console.warn("jj")
      const response = await GettingAService.fetchDownloadTheApplication(
        props.status.type,
        props.status.serviceName
      );
      // const blob = new Blob([response.request.responseURL], { type: 'multipart/form-data' }); // Указываем тип контента
      const objectURL = response.request.responseURL;
      console.log("objectURL", objectURL);
      setDownloadURL(objectURL);
      setTimeout(() => {
        const filename = `${props.status.name}.doc`;
        const a = document.createElement("a");
        a.setAttribute("href", downloadURL);
        a.setAttribute("download", filename);
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      }, 4000);
      // console.log("Я почему-то не открываюсь", modalOpen)
      // handleDownloadClick();
    } catch (error) {
      console.error("Error getting service:", error);
    }

    // Handle the case when user is not authorized or is an admin
  };
  // setModalOpen(true);

  return (
    <div className="service-status-container">
      <div className="status-item">
        <div className="status-item-title">{props.status.serviceName}</div>
        <div>
          <div className="status-item-date">
            {props.status.name.second}, {props.status.name.first},{" "}
            {props.status.name.middle}
          </div>
          <div className="status-item-date">
            Дата заказа: {props.status.dateTime}
          </div>
        </div>
      </div>

      <div className="change-status">
        <button className="print-it-out-button" onClick={downloadTheDocument}>
          Распечатать
        </button>
        <div className="change-status-btn">
          <DropdownServiceStatus
            className={`dropdown-servise-status status-indicator-${selectedStatusKey}`}
            statusServices={statusServices}
            onSelect={handleStatusChange}
            selectedOption={
              selectedStatusKey !== null ? selectedStatusKey.toString() : ""
            }
          />
          <button onClick={changeStatus}>сохранить</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceStatusItem;
