import React, { useRef} from "react";
import "./ModalAuthStyle.css"; 
import SentServiceIcon from "./images/SentServiceIcon.png";
import { useNavigate } from "react-router-dom";
import ButtonComponent from "../button-component/ButtonComponent";

const ModalOrderingService = ({ isOpen, service, downloadURL }) => {
  const navigate = useNavigate();
  const modalRef = useRef(null); 

  const handlePersonalAccount = () => {
    navigate("/status");
  };
  const handleMainPage = () => {
    navigate("/mainUser");
  };

  return (
    <div>
      {isOpen && (
        <div className="modal-overlay" ref={modalRef}>
          <div className="modal">
            <div className="modal-sent-service-content">
              <img src={SentServiceIcon} alt="Warning Icon" />
              <div className="modal-sent-service">
                <p className="modal-text">
                  Заявка принята, следите за ее статусом в личном кабинете
                </p>
                {(service.type === 1 || service.type === 2) &&
                    <button className="download-text-modal" >
                        <a href={downloadURL}>Скачать заполненный файл</a>
                    </button>
                }
                <ButtonComponent
                  className="modal-open-btn"
                  onClick={handlePersonalAccount}
                  name="В личный кабинет"
                />
                <div className="modal-sent-service-text-back" onClick={handleMainPage}> На главную страницу</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalOrderingService;
