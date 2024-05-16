import React, { useState, useEffect } from "react";
import NavbarLeft from "../../components/Navbar/leftNavbar/NavbarLeft";
import '../../styles/ExecutionStatusStyle.css';
import '../../styles/ServiceStatusListStyle.css'
import GettingAService from '../../services/GettingAService';
import InputComponent from "../../components/InputComponent";
import ServiceStatusList from "../../components/service-status-admin/ServiceStatusList";


const NotDoneService = () => {
  const [status, setStatus] = useState([]);
  const [filter, setFilter] = useState(""); // Состояние для отслеживания текущего выбранного статуса
  
  const statusService = [
    { key: 0, option: "Создано" },
    { key: 1, option: "В работе" },
    { key: 2, option: "Готово" },
    { key: 3, option: "Отклонено" },
    { key: 4, option: "Получено" },
  ];

  useEffect(() => {
    const fetchStatusData = async () => {
      try {
        const response = await GettingAService.fetchListServicesAdmin();
        setStatus(response.data); // Устанавливаем массив статусов напрямую
        console.log(response);
      } catch (error) {
        console.error("Ошибка при получении данных о статусе:", error);
      }
    };
    fetchStatusData();
  }, []);

  // Обработчик для фильтрации статусов по выбранному статусу
  const handleFilter = (filterStatus) => {
    setFilter(filter === filterStatus ? "" : filterStatus);
  };

  // Фильтрация статусов на основе выбранного статуса
  const filteredStatus = status.filter(stat =>
    (!filter && filter!==0) || stat.state === filter // Здесь используется stat.state для сравнения с фильтром
  );
 


  return (
    <div>
      <div className="head-container">
        <div className="head-personal-data">Заказанные услуги</div>
        <div className="filter-button">
          {statusService.map((statusItem, index) => (
            <button
              key={index}
              className={`status-btn ${filter === statusItem.key ? `btn-active-${index}` : "status-btn-pass"}`}
              onClick={() => handleFilter(statusItem.key)}
            >
              {statusItem.option}
            </button>
          ))}
        </div>
      </div>

      <div className="ordered-cervices-container">
        <NavbarLeft />
        <div className="services-status-container">
          <InputComponent className="status-input" placeholder="Справка по месту работы"/>
          <ServiceStatusList status={filteredStatus} />
        </div>
      </div>
      
    </div>
  );
}

export default NotDoneService;
