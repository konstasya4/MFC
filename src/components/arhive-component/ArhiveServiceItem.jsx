import React, { useState, useEffect } from "react";
import '../../styles/mainServicesStyle.css'
import '../../styles/ArhiveServicesStyle.css'
import { useNavigate } from "react-router-dom";
import ButtonComponent from "../ButtonComponent";
import ServiceService from "../../services/ServiceService";

const ArhiveServiceItem = (props) => {
    const navigate = useNavigate();
    const options = [
        { key: 0, option: "Справка" },
        { key: 1, option: "Заявление для студентов" },
        { key: 2, option: "Заявление для работников" },
        { key: 3, option: "Перевод и восстановление" },
    ];

    const [onPublic, setOnPublic] = useState(props.arhiveService.onPublic);

    const handleClick = () => {
        navigate(`/createService/${props.arhiveService.name}`);
    };

    const typeOption = options.find(option => option.key === props.arhiveService.type)?.option;

    const handleCheckboxChange = () => {
        const newValue = !onPublic;
        setOnPublic(newValue);
        ServiceService.fetchOnPublic(props.arhiveService.name, newValue)
            .then(response => {
                if (response.data.succeeded) {
                    setOnPublic(response.data.current_state);
                    console.log("snajdbas")
                    
                }
                else console.warn(response.data.error_message)
            })
            .catch(error => {
                console.error("Error updating service state:", error);
            });
            
    };

    useEffect(() => {
        setOnPublic(props.arhiveService.onPublic);
    }, [props.arhiveService.onPublic]);

    return (
        <div className="service-arhive-container" >
            <div className="service-arhive-item">
                <div className="service-arhive-item-name">{props.arhiveService.name}</div>
                <div className="service-arhive-item-type">{typeOption}</div>
            </div>
            <div className="editing-arhive-service-container">
                <ButtonComponent className="editing-arhive-service-btn" onClick={handleClick} name="Редактировать"></ButtonComponent>
                <label className="editing-arhive-service-chekbox">
                    <input type="checkbox" checked={onPublic} onChange={handleCheckboxChange} />
                    Опубликовать
                </label>
            </div>
        </div>
    );
};

export default ArhiveServiceItem;
