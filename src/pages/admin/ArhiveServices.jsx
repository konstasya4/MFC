import React, { useState, useEffect } from "react";
import NavbarLeft from "../../components/Navbar/leftNavbar/NavbarLeft";
import '../../styles/ExecutionStatusStyle.css';
import StudentList from '../../API/StudentList';
import StatusList from "../../components/service-status/StatusList";
import InputComponent from "../../components/InputComponent";
import ArhiveServiceList from "../../components/arhive-component/ArhiveServiceList";
import '../../styles/StudentListStyle.css';
import ServiceService from "../../services/ServiceService";

const ArhiveServices=()=>{
  const [listArhiveServices, setListArhiveServices] = useState([]);
  // const [filter, setFilter] = useState(""); // Состояние для отслеживания текущего выбранного статуса

  useEffect(() => {
    const fetchStatusData = async () => {
      try {
        const response = await ServiceService.fetchServiceList();
        setListArhiveServices(response.data); // Set status array directly
      } catch (error) {
        console.error("Error fetching service:", error);
      }
    };
    fetchStatusData();
  }, []);

console.log(listArhiveServices)
  return (
    <div>
      <div className="head-container">
        <div className="head-personal-data">Список услуг</div>
      </div>

      <div className="ordered-cervices-container">
        <NavbarLeft /><div className="services-status-container">
        <ArhiveServiceList listArhiveServices={listArhiveServices} />
        </div>

      </div>
    </div>
  );
}
export default ArhiveServices;