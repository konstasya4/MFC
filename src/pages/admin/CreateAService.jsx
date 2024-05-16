import "../../styles/CreateAServiceStyle.css";
import { useState } from "react";
import axios from "axios"; // импорт библиотеки Axios
import NavbarLeft from "../../components/Navbar/leftNavbar/NavbarLeft";
import Dropdown from "../../components/Dropdown";
import ButtonComponent from "../../components/ButtonComponent";
import DocxUploader from "../../components/DocxUploader";
import DocumentService from "../../services/DocumentService";

const CreateAService = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  // const [selectedOption, setSelectedOption] = useState(null);
  const [editing, setEditing] = useState(true);
  const [file, setFile] = useState(null);
  const [serviceName, setServiceName] = useState("");
  const [serviceDescription, setServiceDescription] = useState("");
  const [error, setError] = useState(false);
  const options = [
    { key: 0, option: "Справка" },
    { key: 1, option: "Заявление для студентов" },
    { key: 2, option: "Заявление для работников" },
    { key: 3, option: "Перевод и восстановление" },
  ];
  const renamedFile = file
    ? new File([file], `${serviceName}.doc`, { type: file.type })
    : null;

    const handleSelect = (option_item) => {
      
        setSelectedOption(option_item ? options.find((optionT) => optionT.option === option_item): null);
    
    };
    
    // Inside handleSave or any other function where you need to use selectedOption
    console.log("Selected option:", selectedOption);
    

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const changingEditing = () => {
    setEditing(!editing);
  };
  const dataReset = () => {
    console.log("Resetting data...");
    setServiceName("");
    setServiceDescription("");
    setSelectedOption(null); // Reset selectedOption to null here
    setFile(null);
  };
  
  
  const addFile = () => {
    const formData = new FormData();
    formData.append("file", renamedFile);
    const responceFile=DocumentService.fetchFile(formData, selectedOption.key);
    console.warn("file",responceFile)
  };

  const handleSave = async () => {
    console.log("Selected option:", selectedOption);
    // Add a null check for selectedOption
    if (selectedOption.key===0 || selectedOption.key ===1  || selectedOption.key === 2) {
      console.log("Option 1 or 2 selected");
      if (renamedFile && serviceName && serviceDescription) {
        console.log("All required fields are filled");
        addFile();
        await DocumentService.fetchService(
          serviceName,
          serviceDescription,
          selectedOption.key
        );
        console.log("Service saved successfully");
        setTimeout(() => {
          dataReset();
        }, 1000); // 1000 миллисекунд = 1 секунда
      } else {
        console.log("Error: Missing required fields");
        setError(true);
      }
    } else if (selectedOption ) {
      console.log("Option 3 or 4 selected");
      if (serviceName && serviceDescription) {
        console.log("All required fields are filled");
        await DocumentService.fetchService(
          serviceName,
          serviceDescription,
          selectedOption.key
        );
        console.log("Service saved successfully");
        dataReset();
      } else {
        console.log("Error: Missing required fields");
        setError(true);
      }
    }
  };
  
  

  return (
    <div>
      <div className="head-container">
        <div className="head-personal-data">Создание услуги</div>
      </div>
      <div className="container-created-service">
        <NavbarLeft />
        <div className="service-created-list">
          <input
            className="first-input input"
            placeholder="Введите название"
            value={serviceName}
            onChange={(e) => setServiceName(e.target.value)}
          />
          <textarea
            className="second-input input"
            placeholder="Введите описание услуги"
            value={serviceDescription}
            onChange={(e) => setServiceDescription(e.target.value)}
          />
          <div className="btn-component-dropdown">
            <div className="dropdown-container">
              <Dropdown
                className="dropdown-create-service"
                options={options}
                onSelect={handleSelect}
                selectedOption={selectedOption}
              />
            </div>
              <div className="upload-container">
              {selectedOption && (selectedOption.key === 0 ||selectedOption.key === 1 || selectedOption.key === 2) && (
                <input
                  id="file-upload"
                  className="file-input"
                  type="file"
                  onChange={handleFileChange}
                />
              )}
            </div>


            <div>
              <ButtonComponent
                className="btn-account"
                name="Сохранить"
                onClick={handleSave}
              />
              <ButtonComponent
                className="btn-account cancel-btn"
                onClick={changingEditing}
                name="Отмена"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAService;
