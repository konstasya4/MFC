import "./CreateAServiceStyle.css";
import { useState, useEffect } from "react";
import NavbarLeft from "../../../components/Navbar/leftNavbar/NavbarLeft";
import ButtonComponent from "../../../components/button-component/ButtonComponent";
import DocumentService from "../../../services/DocumentService";
import { useParams } from "react-router-dom";
import ServiceService from "../../../services/ServiceService";

const ChangeAService = () => {
  const { name } = useParams();
  const [selectedOption, setSelectedOption] = useState(null);
  const [editing, setEditing] = useState(true);
  const [setFile] = useState(null);
  const [serviceName, setServiceName] = useState("");
  const [serviceDescription, setServiceDescription] = useState("");
  const [setErrors] = useState({
    serviceName: false,
    serviceDescription: false,
    selectedOption: false,
    file: false,
  });

  useEffect(() => {
    const fetchService = async () => {
      try {
        const response = (await ServiceService.fetchServiceItem(name)).data
          .service;
        setServiceName(response.name);
        setServiceDescription(response.description);
        setSelectedOption(response.type);
      } catch (error) {
        console.error("Error fetching service:", error);
      }
    };
    fetchService();
  }, [name]);

  const changingEditing = () => {
    setEditing(!editing);
  };
  const dataReset = () => {
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
    if (!hasErrors) {
      await DocumentService.putService(
        serviceName,
        name,
        serviceDescription,
        selectedOption
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
