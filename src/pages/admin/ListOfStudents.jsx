// import React from "react";
// import { useState, useEffect } from "react";
// import StudentList from "../../API/StudentList";
// import NavbarLeft from "../../components/Navbar/leftNavbar/NavbarLeft";
  import React, { useState, useEffect } from "react";
import NavbarLeft from "../../components/Navbar/leftNavbar/NavbarLeft";
import '../../styles/ExecutionStatusStyle.css';
import StudentList from '../../API/StudentList';
import StatusList from "../../components/service-status/StatusList";
import InputComponent from "../../components/InputComponent";
import StudentsList from "../../components/students-components/StudentsList";
import '../../styles/StudentListStyle.css';

const ListOfStudents=()=>{
  const [listStudent, setListStudent] = useState([]);
  // const [filter, setFilter] = useState(""); // Состояние для отслеживания текущего выбранного статуса

  useEffect(() => {
    const fetchStatusData = async () => {
      try {
        const response = await StudentList.getAll();
        if (Array.isArray(response) && response.length > 0) {
          setListStudent(response); // Set status array directly
        }
      } catch (error) {
        console.error("Error fetching service:", error);
      }
    };
    fetchStatusData();
  }, []);

console.log(listStudent)
  return (
    <div>
      <div className="head-container">
        <div className="head-personal-data">Список студентов</div>
      </div>

      <div className="ordered-cervices-container">
        <NavbarLeft /><div className="services-status-container">
          <InputComponent className="status-input" placeholder="Иванов Иван Иванович"/>
        <StudentsList listStudent={listStudent} />
        </div>

      </div>
    </div>
  );
}

export default ListOfStudents;

  //   const [loading, setLoading] = useState(false);
  //   const [error, setError] = useState(null);
  
  //   useEffect(() => {
  //     const handleDownload = async () => {
  //       setLoading(true);
  //       try {
  //         const pdfBlob = await StudentList.getPDF();
  //         const url = window.URL.createObjectURL(pdfBlob);
  //         const link = document.createElement('a');
  //         link.href = url;
  //         link.setAttribute('download', 'file.pdf'); // задайте имя файла для загрузки
  //         document.body.appendChild(link);
  //         link.click();
  //         setLoading(false);
  //       } catch (error) {
  //         console.error('Ошибка при загрузке PDF файла:', error);
  //         setError('Ошибка при загрузке PDF файла');
  //         setLoading(false);
  //       }
  //     };
  
  //     handleDownload();
  //   }, []); // Пустой массив зависимостей гарантирует, что эффект будет выполнен только один раз
  
  //   return (
  //     <div>
  //       <NavbarLeft/>
  //       {loading ? 'Загрузка...' : error || 'PDF файл загружен'}
  //     </div>
  //   );
//   };
// export default ListOfStudents
