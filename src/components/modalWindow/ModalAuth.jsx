import React, { useRef} from "react";
import "./ModalAuthStyle.css"; 
import WarningIcon from "./images/WarningIcon.png";
import { useNavigate } from "react-router-dom";
import ButtonComponent from "../button-component/ButtonComponent";

const ModalAuth = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const modalRef = useRef(null); 

  const handleLogin = () => {
    navigate("/login");
  };
  return (
    <div>
      {isOpen && (
        <div className="modal-overlay" ref={modalRef}>
          <div className="modal">
            <div className="modal-content">
              <img src={WarningIcon} alt="Warning Icon" />
              <p className="modal-text">Для получения услуги необходимо войти в учетную запись</p>
              <ButtonComponent className="modal-open-btn" onClick={handleLogin} name="Войти" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalAuth;
