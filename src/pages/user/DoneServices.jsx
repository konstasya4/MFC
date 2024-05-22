// import React, { useState, useEffect } from "react";
// import NavbarLeft from "../../components/Navbar/leftNavbar/NavbarLeft";
// import '../../styles/ExecutionStatusStyle.css';
// import StatusList from "../../components/service-status/StatusList";
// import InputComponent from "../../components/InputComponent";

// const DoneServices = () => {
//   const [status, setStatus] = useState([]);
//   const [filter, setFilter] = useState(""); // Состояние для отслеживания текущего выбранного статуса

//   useEffect(() => {
//     const fetchStatusData = async () => {
//       try {
//         const response = await StatusData.getAll();
//         if (Array.isArray(response) && response.length > 0) {
//           setStatus(response); // Set status array directly
//         } 
//       } catch (error) {
//         console.error("Error fetching service:", error);
//       }
//     };
//     fetchStatusData();
//   }, []);

//   useEffect(() => {
//     console.log("Status:", status); // Log the status whenever it changes
//   }, [status]);

//   // Фильтрация статусов на основе выбранного статуса
//   const filteredStatus = status.filter(stat => stat.status === "Получено");

//   return (
//     <div>
//       <div className="head-container">
//         <div className="head-personal-data">Готовые услуги</div>
//       </div>

//       <div className="ordered-cervices-container">
//         <NavbarLeft /><div className="services-status-container">
//           <InputComponent className="status-input" placeholder="Справка по месту работы"/>
//         <StatusList status={filteredStatus} />
//         </div>

//       </div>
//     </div>
//   );
// }

// export default DoneServices;
