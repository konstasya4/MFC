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

  const options = [
    { key: 0, option: "Справка" },
    { key: 1, option: "Заявление для студентов" },
    { key: 2, option: "Заявление для работников" },
    { key: 3, option: "Перевод и восстановление" },
  ];
  // const renamedFile = new File([file], `${serviceName}`, { type: file.type });
  const handleSelect = (option_item) => {
    setSelectedOption(
      options.find((optionT) => optionT.option === option_item).key
    );
    console.log(selectedOption);
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const changingEditing = () => {
    setEditing(!editing);
  };

  const handleSave = () => {
    // Создание объекта FormData для передачи файлов и данных
    const formData = new FormData();
    formData.append("file", file); // Добавление файла в FormData
    // formData.append("serviceName", serviceName); // Добавление названия услуги в FormData
    // formData.append('serviceType', selectedOption); // Добавление типа услуги в FormData
    console.log(selectedOption);
    DocumentService.fetchFile(formData, selectedOption)
      .then((response) => {
        // Обработка успешного ответа
        console.log(response);
      })
      .catch((error) => {
        // Обработка ошибок
        console.error("Error:", error);
      });
    // const formDataService = new FormData();
    // formDataService.append("name", serviceName);
    // formDataService.append("description", serviceDescription);
    // formDataService.append("fileName", serviceName);
    // formDataService.append("type", selectedOption);
    

    // DocumentService.fetchService(formDataService)
    //   .then((response) => {
    //     // Обработка успешного ответа
    //   })
    //   .catch((error) => {
    //     // Обработка ошибки
    //   });

    // Отправка POST-запроса с использованием Axios
    // axios.post('your_api_endpoint', formData, {
    //     headers: {
    //         'Content-Type': 'multipart/form-data', // Установка заголовка Content-Type для отправки файла
    //     },
    // })
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
              />
            </div>
            {(selectedOption === 0 || selectedOption === 1)  && (
              <div className="upload-container">
                <input
                  id="file-upload"
                  className="file-input"
                  type="file"
                  onChange={handleFileChange}
                />
              </div>
            )}

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
