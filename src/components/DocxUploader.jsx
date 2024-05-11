import React, { useState } from 'react';
import "../styles/componentsStyles/DocxUploadeStyle.css"

const DocxUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      // Perform upload logic here, for example using FileReader API
      const reader = new FileReader();
      reader.onload = (event) => {
        const content = event.target.result;
        // 'content' now contains the contents of the uploaded file
        console.log(content);
        // You can now process the content further, for example, send it to a server
      };
      reader.readAsText(selectedFile);
    }
  };

  return (
    <div>
      {/* <label className="file-input-label" for="file-upload">Загрузить файл</label> */}
  <input id="file-upload" className="file-input" type="file"/>
    </div>
  );
};

export default DocxUploader;
