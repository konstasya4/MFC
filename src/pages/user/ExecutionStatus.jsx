import React, { useState, useEffect } from "react";
import NavbarLeft from "../../components/Navbar/leftNavbar/NavbarLeft";
import '../../styles/ExecutionStatusStyle.css';
import StatusData from '../../API/StatusData';
import StatusList from "../../components/service-status/StatusList";
import InputComponent from "../../components/InputComponent";

const ExecutionStatus = () => {
  const [status, setStatus] = useState([]);
  const [filter, setFilter] = useState(""); // Состояние для отслеживания текущего выбранного статуса

  useEffect(() => {
    const fetchStatusData = async () => {
      try {
        const response = await StatusData.getAll();
        if (Array.isArray(response) && response.length > 0) {
          setStatus(response); // Set status array directly
        }
      } catch (error) {
        console.error("Error fetching service:", error);
      }
    };
    fetchStatusData();
  }, []);

  useEffect(() => {
  }, [status]);

  // Обработчик для фильтрации статусов по выбранному статусу
  const handleFilter = (filterStatus) => {
    setFilter(filterStatus); // Обновляем состояние выбранного статуса
    if (filter===filterStatus){
      setFilter('')
    }
  };

  // Фильтрация статусов на основе выбранного статуса
  const filteredStatus = status.filter(stat =>
    filter ? stat.status === filter: stat.status !== "Получено" ? true:null
  );

  return (
    <div>
      <div className="head-container">
        <div className="head-personal-data">Заказанные услуги</div>
        <div className="filter-button">
          <button className={`status-btn ${filter==='Готово к выдаче'? "done-btn-active":"status-btn-pass"}`} onClick={() => handleFilter("Готово к выдаче")}>Готовы</button>
          <button className={`status-btn ${filter==='В работе'? "in-progress-btn-active":"status-btn-pass"}`} onClick={() => handleFilter("В работе")}>В работе</button>
          <button className={`status-btn ${filter==='Отклонено'? "rejected-btn-active":"status-btn-pass"}`} onClick={() => handleFilter("Отклонено")}>Отклонены</button>
        </div>
      </div>

      <div className="ordered-cervices-container">
        <NavbarLeft /><div className="services-status-container">
          <InputComponent className="status-input" placeholder="Справка по месту работы"/>
        <StatusList status={filteredStatus} />
        </div>

      </div>
    </div>
  );
}

export default ExecutionStatus;
