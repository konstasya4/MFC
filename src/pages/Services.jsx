import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavbarLeft from "../components/Navbar/leftNavbar/NavbarLeft";
import '../styles/ServiceStyle.css'
import MainButton from "../components/ButtonComponent";
import Download from "../images/Download.png"
import ServiceService from "../services/ServiceService"
import ModalAuth from '../components/modalWindow/ModalAuth';
import { useSelector } from "react-redux";
import ModalOrderingService from '../components/modalWindow/ModalOrderingService'
import GettingAService from "../services/GettingAService";

const Services = () => {
    const { name } = useParams();
    const { isAuth } = useSelector(state => state.auth);
    const { isRole } = useSelector(state => state.auth);
    const [service, setService] = useState(); 
    const [loading, setLoading] = useState(true); 
    const [modalOpen, setModalOpen] = useState(false); 
    const [downloadURL, setDownloadURL] = useState(null);
    useEffect(() => {
        const fetchService = async () => {
            try {
                const response = await ServiceService.fetchServiceItem(name);
                setService(response.data.service);
                setLoading(false); 
                console.log(response)
            } catch (error) {
                console.error('Error fetching service:', error);
            }
        };
        fetchService();
    }, [name]);

    const handleDownload = async () => {
      try {
        const response = await GettingAService.fetchDownloadTheApplication(service.type, service.name);
        const objectURL = response.request.responseURL;
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
              setTimeout(() => {
                setModalOpen(true);
            }, 4000
          );
          console.log("Я почему-то не открываюсь", modalOpen)
              // handleDownloadClick();
          } catch (error) {
              console.error('Error getting service:', error);
          }
      } 
      setModalOpen(true);
  };
  

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    if (loading) {
        return <div>Loading...</div>;
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
                   <button className="download-text" >
                        <div>Скачать образец заявления</div>
                        <img src={Download} alt="Download" />
                    </button>
                    {/* // <button onClick={handleDownload}>Download File</button> */}
                </div>
                }
                
            </div>
            {!isAuth ? (<ModalAuth isOpen={modalOpen} onClose={handleCloseModal} />) :
                (<ModalOrderingService isOpen={modalOpen} onClose={handleCloseModal} service={service} downloadURL={downloadURL}/>)
            }
        </div>
    );
};

export default Services;
