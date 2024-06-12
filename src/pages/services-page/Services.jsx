import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavbarLeft from "../../components/Navbar/leftNavbar/NavbarLeft";
import './ServiceStyle.css'
import MainButton from "../../components/button-component/ButtonComponent";
import Download from "./Download.png"
import ServiceService from "../../services/ServiceService"
import ModalAuth from '../../components/modalWindow/ModalAuth';
import { useSelector } from "react-redux";
import ModalOrderingService from '../../components/modalWindow/ModalOrderingService'
import GettingAService from "../../services/GettingAService";

const Services = () => {
    const { name } = useParams();
    const { isAuth } = useSelector(state => state.auth);
    const { isRole } = useSelector(state => state.auth);
    const [service, setService] = useState(null); 
    const [loading, setLoading] = useState(true); 
    const [modalOpen, setModalOpen] = useState(false); 
    const [downloadURL, setDownloadURL] = useState(null);

    useEffect(() => {
        const fetchService = async () => {
            try {
                const response = await ServiceService.fetchServiceItem(name);
                setService(response.data.service);
                setLoading(false); 
            } catch (error) {
                console.error('Error fetching service:', error);
                setLoading(false); 
            }
        };
        fetchService();
    }, [name]);

    const handleDownload = async () => {
        try {
            const response = await GettingAService.fetchDownloadTheApplication(service.name);
            const objectURL = response.data.url;
            setDownloadURL(objectURL);
        } catch (error) {
            console.error('Error downloading file:', error);
        }
    };
    const handleDownloadSampleFile = async () => {
        try {
            const response = await GettingAService.fetchDownloadSampleFile(service.name);
            const objectURL = response.data.link;
            setDownloadURL(objectURL);
        } catch (error) {
            console.error('Error downloading file:', error);
        }
    };

    const handleGetService = async () => {
        if (isAuth && isRole !== "admin") {
            try {
                await GettingAService.fetchAddedService(service.name);
                handleDownload();
                setModalOpen(true);
                console.log("Modal opened", modalOpen)
            } catch (error) {
                console.error('Error getting service:', error);
            }
        } else {
            setModalOpen(true);
        }
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!service) {
        return <div>Error loading service details</div>;
    }

    return (
        <div className="service-page">
            <NavbarLeft />
            <div className="service-text">
                <div className="title-service">{service.name}</div>
                <div className="about-service">Об услуге</div>
                <div className="description-service">{service.description}</div>
            </div>
            <div className="serv-down">
                <div className="btn-serv">
                    <MainButton className="btn-style" name="Получить услугу" onClick={handleGetService} />
                </div>
                {(service.type === 1 || service.type === 2) &&
                    <div>
                        <button className="download-text" onClick={handleDownloadSampleFile}>
                            <a href={downloadURL}>Скачать образец заявления</a>
                            <img src={Download} alt="Download" />
                        </button>
                    </div>
                }
            </div>
            {!isAuth ? (
                <ModalAuth isOpen={modalOpen} onClose={handleCloseModal} />
            ) : (
                <ModalOrderingService isOpen={modalOpen} onClose={handleCloseModal} service={service} downloadURL={downloadURL} />
            )}
        </div>
    );
};

export default Services;
