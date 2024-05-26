import "./CreateAServiceStyle.css";
import { useState, useEffect } from "react";
import NavbarLeft from "../../../components/Navbar/leftNavbar/NavbarLeft";
import Dropdown from "./Dropdown";
import ButtonComponent from "../../../components/button-component/ButtonComponent";
import DocumentService from "../../../services/DocumentService";
import { useParams } from "react-router-dom";
import ServiceService from "../../../services/ServiceService";

const ChangeAService = () => {
  const { name } = useParams();
  const {service, setService}=useState('')
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
  useEffect(() => {
    const fetchService = async () => {
        try {
          const response = (await ServiceService.fetchServiceItem(name)).data.service;
          setServiceName(response.name);
          setServiceDescription(response.description);
          setSelectedOption(response.type)
          console.log(response)

        } catch (error) {
            console.error('Error fetching service:', error);
        }
    };
    fetchService();
}, [name]);

  console.log("Selected option:", selectedOption);

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


  const handleSave = async () => {
    const newErrors = {
      serviceName: serviceName === "",
      serviceDescription: serviceDescription === "",
    };

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((error) => error);
console.log( typeof(selectedOption))
    if (!hasErrors) {
      await DocumentService.putService(name, serviceDescription, selectedOption, serviceName);
      dataReset();}
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
            {/* <div className="dropdown-container">
              <Dropdown
                className="dropdown-create-service"
                options={options}
                onSelect={handleSelect}
                selectedOption={selectedOption}
              />
            </div> */}
            {/* <div className="upload-container">
              {selectedOption &&
                (selectedOption.key === 0 ||
                  selectedOption.key === 1 ||
                  selectedOption.key === 2) && (
                  <input
                    id="file-upload"
                    className="file-input"
                    type="file"
                    onChange={handleFileChange}
                  />
                )} */}
            {/* </div> */}
            <div>
              <ButtonComponent
                className="btn-account"
                name="Изменить"
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
export default ChangeAService;
