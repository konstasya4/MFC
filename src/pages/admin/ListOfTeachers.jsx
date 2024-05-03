import React, { useState, useEffect } from "react";
import NavbarLeft from "../../components/Navbar/leftNavbar/NavbarLeft";
import '../../styles/ExecutionStatusStyle.css';
import StudentList from '../../API/StudentList';
import StatusList from "../../components/service-status/StatusList";
import InputComponent from "../../components/InputComponent";
import TeacherList from "../../components/teacher-components/TeacherList";
import '../../styles/StudentListStyle.css';

const ListOfTeachers=()=>{
  const [listTeacher, setListTeacher] = useState([]);
  // const [filter, setFilter] = useState(""); // Состояние для отслеживания текущего выбранного статуса

  useEffect(() => {
    const fetchStatusData = async () => {
      try {
        const response = await StudentList.getAll();
        if (Array.isArray(response) && response.length > 0) {
          setListTeacher(response); // Set status array directly
        }
      } catch (error) {
        console.error("Error fetching service:", error);
      }
    };
    fetchStatusData();
  }, []);

console.log(listTeacher)
  return (
    <div>
      <div className="head-container">
        <div className="head-personal-data">Список работников</div>
      </div>

      <div className="ordered-cervices-container">
        <NavbarLeft /><div className="services-status-container">
          <InputComponent className="status-input" placeholder="Иванов Иван Иванович"/>
        <TeacherList listTeacher={listTeacher} />
        </div>

      </div>
    </div>
  );
}

export default ListOfTeachers;
// import React, { useState } from 'react';
// import TeacherList from '../../API/TeacherList';
// import NavbarLeft from '../../components/Navbar/leftNavbar/NavbarLeft';
// const ListOfTeachers=()=>{
//     // Путь к вашему классу для работы с PDF
//       const [file, setFile] = useState(null);
//       const [uploading, setUploading] = useState(false);
//       const [error, setError] = useState(null);
//       const [success, setSuccess] = useState(false);
    
//       const handleFileChange = (event) => {
//         setFile(event.target.files[0]);
//       };
    
//       const handleUpload = async () => {
//         if (!file) {
//           setError("Пожалуйста, выберите файл для загрузки.");
//           return;
//         }
    
//         setUploading(true);
    
//         try {
//           await TeacherList.uploadPDF(file);
//           setSuccess(true);
//           setFile(null);
//           setUploading(false);
//         } catch (error) {
//           console.error('Ошибка при загрузке файла:', error);
//           setError('Ошибка при загрузке файла');
//           setUploading(false);
//         }
//       };
    
//       return (
//         <div>
//           <NavbarLeft/>
//           <input type="file" accept=".pdf" onChange={handleFileChange} />
//           <button onClick={handleUpload} disabled={uploading}>
//             {uploading ? 'Загрузка...' : 'Загрузить документ'}
//           </button>
//           {error && <div>{error}</div>}
//           {success && <div>Документ успешно загружен!</div>}
//         </div>
//       );
//     };
    

// export default ListOfTeachers

