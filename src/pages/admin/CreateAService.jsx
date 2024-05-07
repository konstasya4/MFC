import '../../styles/CreateAServiceStyle.css';
import { useState } from "react";
import NavbarLeft from "../../components/Navbar/leftNavbar/NavbarLeft";
import Dropdown from '../../components/Dropdown';
import ButtonComponent from '../../components/ButtonComponent';

const CreateAService = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [editing, setEditing] = useState(true);

    const options = [
        { key: 0, option: "Справка" },
        { key: 1, option: "Заявление для студентов" },
        { key: 2, option: "Заявление для работников" },
        { key: 3, option: "Перевод и восстановление" }
    ];

    const handleSelect = (option) => {
        setSelectedOption(option);
        // Do something with the selected option
    };

    const changingEditing = () => {
        setEditing(!editing);
    };

    return (
        <div>
            <div className="head-container">
                <div className="head-personal-data">Создание услуги</div>
            </div>
            <div className="container-created-service">
                <NavbarLeft />
                <div className="service-created-list">
                    <input className="first-input" placeholder="Введите название" />
                    <textarea className="second-input" placeholder="Введите описание услуги" />
                    <div className='btn-component-dropdown'><Dropdown className="dropdown-create-service" options={options} onSelect={handleSelect} />
                        {selectedOption && <p>Тип услуги: {selectedOption}</p>}
                        <div>
                            <ButtonComponent className="btn-account" name="Сохранить" />
                            <ButtonComponent className="btn-account cancel-btn" onClick={changingEditing} name="Отмена" />
                        </div></div>
                </div>
            </div>
        </div>
    );
};

export default CreateAService;
