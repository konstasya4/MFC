import "./CreateAServiceStyle.css";
import { useState } from "react";
import NavbarLeft from "../../../components/Navbar/leftNavbar/NavbarLeft";
import Dropdown from "./Dropdown";
import ButtonComponent from "../../../components/button-component/ButtonComponent";
import DocumentService from "../../../services/DocumentService";

const CreateAService = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  // const [selectedOption, setSelectedOption] = useState(null);
  const [editing, setEditing] = useState(true);
  const [file, setFile] = useState(null);
  const [serviceName, setServiceName] = useState("");
  const [serviceDescription, setServiceDescription] = useState("");
  const [errors, setErrors] = useState({
    serviceName: false,
    serviceDescription: false,
    selectedOption: false,
    file: false,
  });
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
    setSelectedOption(null);
    setFile(null);
  };
  
  
  const addFile = () => {
    const formData = new FormData();
    formData.append("file", renamedFile);
    const responceFile=DocumentService.fetchFile(formData, selectedOption.key);
    console.warn("file",responceFile)
  };

  const handleSave = async () => {
    const newErrors = {
      serviceName: serviceName === "",
      serviceDescription: serviceDescription === "",
      selectedOption: selectedOption === null,
      file: (selectedOption && (selectedOption.key === 0 || selectedOption.key === 1 || selectedOption.key === 2)) && !file,
    };

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((error) => error);
    if (!hasErrors) {
      if (selectedOption && (selectedOption.key === 0 || selectedOption.key === 1 || selectedOption.key === 2)) {
        addFile();
      }
      await DocumentService.fetchService(
        serviceName,
        serviceDescription,
        selectedOption.key
      );
      dataReset();
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
            className={`first-input input ${errors.serviceName ? 'shake' : ''}`}
            placeholder="Введите название"
            value={serviceName}
            onChange={(e) => setServiceName(e.target.value)}
          />
          <textarea
            className={`second-input input ${errors.serviceDescription ? 'shake' : ''}`}
            placeholder="Введите описание услуги"
            value={serviceDescription}
            onChange={(e) => setServiceDescription(e.target.value)}
          />
          <div className="btn-component-dropdown">
            <div className="dropdown-container">
              <Dropdown
                className={`dropdown-create-service ${errors.selectedOption ? 'shake' : ''}`}
                options={options}
                onSelect={handleSelect}
                selectedOption={selectedOption}
              />
            </div>
            <div className="upload-container">
              {selectedOption && (selectedOption.key === 0 || selectedOption.key === 1 || selectedOption.key === 2) && (
                <input
                  id="file-upload"
                  className={`file-input ${errors.file ? 'shake' : ''}`}
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
