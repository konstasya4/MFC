import React, { useState, useMemo } from "react";
import "./ServiceStatusListStyle.css";
import DropdownServiceStatus from "./DropdownServiceStatus";
import GettingAService from "../../services/GettingAService";
import ModalDownload from "../../components/modalWindow/ModalDownload";

const ServiceStatusItem = (props) => {
  const [downloadURL, setDownloadURL] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [documentDownload, setDocumentDownload] = useState();
  const statusServices = useMemo(() => [
    { key: 0, status: "Создано" },
    { key: 1, status: "В работе" },
    { key: 2, status: "Готово" },
    { key: 3, status: "Отклонено" },
    { key: 4, status: "Получено" },
  ]);

  const [selectedStatusKey, setSelectedStatusKey] = useState(
    props.status.state
  );

  const handleStatusChange = (selectedStatusKey) => {
    setSelectedStatusKey(parseInt(selectedStatusKey));
  };

  const changeStatus = async () => {
      try {
        await GettingAService.fetchNewStatus(
          selectedStatusKey,
          props.status.id
        );
      } catch (error) {
        console.error("Ошибка при изменении статуса:", error);
    }
  };
  const downloadTheDocument = async () => {
    try {
      const response =
        await GettingAService.fetchDownloadTheApplicationForAdmin(
          props.status.id
        );
      setDocumentDownload(props.status);
      const objectURL = response.data.url;
      setDownloadURL(objectURL);
      setModalOpen(true);
    } catch (error) {
      console.error("Error getting service:", error);
    }

  };
  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="service-status-container">
      <div className="status-item">
        <div className="status-item-title">{props.status.service.name}</div>
        <div>
          <div className="status-item-date">
            {props.status.userFullName}
          </div>
          <div className="status-item-date">
            Дата заказа: {props.status.dateTime}
          </div>
        </div>
      </div>

      <div className="change-status">
        {props.status.service.type === 0 && (
          <button className="print-it-out-button" onClick={downloadTheDocument}>
            Распечатать
          </button>
        )}
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
      <ModalDownload
        isOpen={modalOpen}
        onClose={handleCloseModal}
        documentDownload={documentDownload}
        downloadURL={downloadURL}
      />
    </div>
  );
};

export default ServiceStatusItem;
