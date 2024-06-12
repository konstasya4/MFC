import "./ModalAuthStyle.css";
import SentServiceIcon from "./images/SentServiceIcon.png";

const ModalDownload = ({ isOpen, onClose, documentDownload, downloadURL }) => {
  const handleBack = () => {
    onClose();
  };

  return (
    <div>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-sent-service-content">
              <img src={SentServiceIcon} alt="Warning Icon" />
              <div className="modal-sent-service">
                <p className="modal-text">
                  Хотите скачать файл? {documentDownload.serviceName}
                </p>
                <button className="download-text-modal">
                  <a href={downloadURL}>Скачать заполненный файл</a>
                </button>
                <div
                  className="modal-sent-service-text-back"
                  onClick={handleBack}
                >
                  {" "}
                  Назад
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalDownload;
