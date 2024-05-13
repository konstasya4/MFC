import React, { useState, useEffect } from "react";
import NavbarLeft from "../../components/Navbar/leftNavbar/NavbarLeft";
import '../../styles/ExecutionStatusStyle.css';
import '../../styles/ServiceStatusListStyle.css'
import GettingAService from '../../services/GettingAService';
import StatusList from "../../components/service-status/StatusList";
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
          setStatus(response.data); // Set status array directly
          console.log(response)
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
        setFilter(filter === filterStatus ? "" : filterStatus);
      };

  // Фильтрация статусов на основе выбранного статуса
  const filteredStatus = status.filter(stat =>
    !filter || stat.status === filter
  );

  return (
    <div>
      <div className="head-container">
        <div className="head-personal-data">Заказанные услуги</div>
        <div className="filter-button">
        {/* <button className={`status-btn ${filter===statusService.key(3)? "rejected-btn-active":"status-btn-pass"}`} onClick={() => handleFilter(statusService.key(3))}>Создано</button>
          <button className={`status-btn ${filter===statusService.key(2)? "done-btn-active":"status-btn-pass"}`} onClick={() => handleFilter("Готово к выдаче")}>Готовы</button>
          <button className={`status-btn ${filter===statusService.key(1)? "in-progress-btn-active":"status-btn-pass"}`} onClick={() => handleFilter("В работе")}>В работе</button>
          <button className={`status-btn ${filter===statusService.key(3)? "rejected-btn-active":"status-btn-pass"}`} onClick={() => handleFilter("Отклонено")}>Отклонены</button> */}
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
      </div>

      <div className="ordered-cervices-container">
        <NavbarLeft /><div className="services-status-container">
          <InputComponent className="status-input" placeholder="Справка по месту работы"/>
        <ServiceStatusList status={filteredStatus} />
        </div>

      </div>
    </div>
  );
}

export default NotDoneService;



//   const [selectedOption, setSelectedOption] = useState(null);

//   const options = ['Option 1', 'Option 2', 'Option 3'];

//   const handleSelect = (option) => {
//     setSelectedOption(option);
//     // Do something with the selected option
//   };

//   return (
//     <div>
//       <h1>Dropdown Example</h1>
//       <Dropdown options={options} onSelect={handleSelect} />
//       <p>Selected option: {selectedOption}</p>
//     </div>
//   );
// };