import React, { useState } from 'react';
import TeacherList from '../../API/TeacherList';
const ListOfTeachers=()=>{
    // Путь к вашему классу для работы с PDF
      const [file, setFile] = useState(null);
      const [uploading, setUploading] = useState(false);
      const [error, setError] = useState(null);
      const [success, setSuccess] = useState(false);
    
      const handleFileChange = (event) => {
        setFile(event.target.files[0]);
      };
    
      const handleUpload = async () => {
        if (!file) {
          setError("Пожалуйста, выберите файл для загрузки.");
          return;
        }
    
        setUploading(true);
    
        try {
          await TeacherList.uploadPDF(file);
          setSuccess(true);
          setFile(null);
          setUploading(false);
        } catch (error) {
          console.error('Ошибка при загрузке файла:', error);
          setError('Ошибка при загрузке файла');
          setUploading(false);
        }
      };
    
      return (
        <div>
          <input type="file" accept=".pdf" onChange={handleFileChange} />
          <button onClick={handleUpload} disabled={uploading}>
            {uploading ? 'Загрузка...' : 'Загрузить документ'}
          </button>
          {error && <div>{error}</div>}
          {success && <div>Документ успешно загружен!</div>}
        </div>
      );
    };
    

export default ListOfTeachers

