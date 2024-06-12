import React, { useState, useEffect } from "react";
import NavbarLeft from "../../../components/Navbar/leftNavbar/NavbarLeft";
import InputComponent from "../../../components/input-component/InputComponent";
import StudentsList from "../../../components/students-components/StudentsList";
import "./StudentListStyle.css";
import UserService from "../../../services/UserService";

const ListOfStudents = () => {
  const [listStudent, setListStudent] = useState([]);
  useEffect(() => {
    const fetchStudentsList = async () => {
      try {
        const response = await UserService.fetchStudents();
        setListStudent(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchStudentsList();
  }, []);

  console.log(listStudent);
  return (
    <div>
      <div className="head-container">
        <div className="head-personal-data">Список студентов</div>
      </div>

      <div className="ordered-cervices-container">
        <NavbarLeft />
        <div className="services-status-container">
          <InputComponent
            className="status-input"
            placeholder="Иванов Иван Иванович"
          />
          <StudentsList listStudent={listStudent} />
        </div>
      </div>
    </div>
  );
};

export default ListOfStudents;
