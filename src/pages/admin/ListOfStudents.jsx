import React from "react";
import { useState, useEffect } from "react";
import StudentList from "../../API/StudentList";
const ListOfStudents=()=>{
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const handleDownload = async () => {
        setLoading(true);
        try {
          const pdfBlob = await StudentList.getPDF();
          const url = window.URL.createObjectURL(pdfBlob);
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', 'file.pdf'); // задайте имя файла для загрузки
          document.body.appendChild(link);
          link.click();
          setLoading(false);
        } catch (error) {
          console.error('Ошибка при загрузке PDF файла:', error);
          setError('Ошибка при загрузке PDF файла');
          setLoading(false);
        }
      };
  
      handleDownload();
    }, []); // Пустой массив зависимостей гарантирует, что эффект будет выполнен только один раз
  
    return (
      <div>
        {loading ? 'Загрузка...' : error || 'PDF файл загружен'}
      </div>
    );
  };
export default ListOfStudents
