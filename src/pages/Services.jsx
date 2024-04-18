import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StatementList from "../API/StatementList";
import NavbarLeft from "../components/Navbar/leftNavbar/NavbarLeft";
import '../styles/ServiceStyle.css'
import MainButton from "../components/ButtonComponent";
import Download from "../images/Download.png"

const Services = () => {
    const { id } = useParams();
    const [service, setService] = useState({}); // Устанавливаем начальное значение в пустой объект
    const [loading, setLoading] = useState(true); // Состояние для отслеживания загрузки данных

    useEffect(() => {
        const fetchService = async () => {
            try {
                const response = await StatementList.getById(id);
                setService(response);
                setLoading(false); // Устанавливаем состояние загрузки в false после получения данных
            } catch (error) {
                console.error('Error fetching service:', error);
            }
        };
        fetchService();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="service-page">
            <NavbarLeft/>
            <div className="service-text">
            <div className="title-service">{service.title}</div>
            <div className="about-service">Об услуге</div>
            <div className="description-service">{service.body}</div>
            </div>
            <div className="serv-down"><div className='btn-serv'><MainButton className="btn-style" name="Получить услугу"/></div>
            <div className="download-text">
            <div>Скачать ПДФ</div>
            <img src={Download} alt=""></img>
            </div>
            </div>
            
        </div>
    );
};

export default Services;
