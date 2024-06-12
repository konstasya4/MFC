import "./CreateAServiceStyle.css";
import { useState } from "react";
import NavbarLeft from "../../../components/Navbar/leftNavbar/NavbarLeft";
import Dropdown from "./Dropdown";
import ButtonComponent from "../../../components/button-component/ButtonComponent";
import DocumentService from "../../../services/DocumentService";

const CreateAService = () => {
  const [selectedOption, setSelectedOption] = useState(null);
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

  const handleSelect = (option_item) => {
    setSelectedOption(
      option_item
        ? options.find((optionT) => optionT.option === option_item)
        : null
    );
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const changingEditing = () => {
    setEditing(!editing);
  };

  const dataReset = () => {
    setServiceName("");
    setServiceDescription("");
    setSelectedOption(null);
    setFile(null);
  };

  const addService = async () => {
    const renamedFile = file
      ? new File([file], `${serviceName}.doc`, { type: file.type })
      : null;
    const formData = new FormData();

    if (renamedFile) {
      formData.append("File", renamedFile);
    }
    formData.append("Name", serviceName);
    formData.append("Description", serviceDescription);
    formData.append("Type", selectedOption.key);

    try {
      if (selectedOption.key === 3) {
        const response = await DocumentService.fetchService(formData);
        console.warn("Service created:", response);
      } else {
        const response = await DocumentService.fetchServiceWithFile(formData);
        console.warn("Service created:", response);
      }
    } catch (error) {
      console.error("Error adding service:", error);
    }
  };

  const handleSave = async () => {
    const newErrors = {
      serviceName: serviceName === "",
      serviceDescription: serviceDescription === "",
      selectedOption: selectedOption === null,
      file: selectedOption && [0, 1, 2].includes(selectedOption.key) && !file,
    };

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((error) => error);
    if (!hasErrors) {
      await addService();
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
            className={`first-input input ${errors.serviceName ? "shake" : ""}`}
            placeholder="Введите название"
            value={serviceName}
            onChange={(e) => setServiceName(e.target.value)}
          />
          <textarea
            className={`second-input input ${
              errors.serviceDescription ? "shake" : ""
            }`}
            placeholder="Введите описание услуги"
            value={serviceDescription}
            onChange={(e) => setServiceDescription(e.target.value)}
          />
          <div className="btn-component-dropdown">
            <div className="dropdown-container">
              <Dropdown
                className={`dropdown-create-service ${
                  errors.selectedOption ? "shake" : ""
                }`}
                options={options}
                onSelect={handleSelect}
                selectedOption={selectedOption}
              />
            </div>
            <div className="upload-container">
              {selectedOption && [0, 1, 2].includes(selectedOption.key) && (
                <input
                  id="file-upload"
                  className={`file-input ${errors.file ? "shake" : ""}`}
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
