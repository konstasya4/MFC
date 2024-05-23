import React, { useRef} from "react";
import "./ModalAuthStyle.css"; 
import SentServiceIcon from "./images/SentServiceIcon.png";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ModalDownload = ({ isOpen, onClose, documentDownload, downloadURL }) => {
  const { isAuth } = useSelector(state => state.auth);
    const { isRole } = useSelector(state => state.auth);
  const navigate = useNavigate();
  const modalRef = useRef(null); 

  const handleBack = () => {
    onClose()
  };
  
  const handleDownloadClick = () => {
    const a = document.createElement('a');
    a.setAttribute('href', downloadURL);
    a.setAttribute('download', documentDownload.name);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    onClose()
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
                  Хотите распечатать {documentDownload.serviceName}
                </p>
                    <button className="download-text-modal" onClick={handleDownloadClick}>
                        <div>Скачать заполненный файл</div>
                    </button>
                <div className="modal-sent-service-text-back" onClick={handleBack}> Назад</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalDownload;
