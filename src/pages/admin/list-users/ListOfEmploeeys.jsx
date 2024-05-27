import React, { useState, useEffect } from "react";
import NavbarLeft from "../../../components/Navbar/leftNavbar/NavbarLeft";
import InputComponent from "../../../components/input-component/InputComponent";
import EmploeeyList from "../../../components/emploeey-components/EmploeeyList";
import './StudentListStyle.css';
import UserService from "../../../services/UserService";

const ListOfEmploeeys=()=>{
  const [listEmploeey, setListEmploeey] = useState({});

  useEffect(() => {
    const fetchStatusData = async () => {
      try {
        const response = await UserService.fetchEmployees();
          setListEmploeey(response.data); 
          console.log(response)
      } catch (error) {
        console.error("Error fetching service:", error);
      }
    };
    fetchStatusData();
  }, []);

console.log(listEmploeey)
  return (
    <div>
      <div className="head-container">
        <div className="head-personal-data">Список работников</div>
      </div>

      <div className="ordered-cervices-container">
        <NavbarLeft /><div className="services-status-container">
          <InputComponent className="status-input" placeholder="Иванов Иван Иванович"/>
        <EmploeeyList listEmploeey={listEmploeey} />
        </div>

      </div>
    </div>
  );
}

export default ListOfEmploeeys;

