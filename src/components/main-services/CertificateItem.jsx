import React from "react";
import './mainServicesStyle.css'
import { useNavigate } from "react-router-dom";

const CertificateItem = (props) => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate(`/services/${props.service.name}`);
    };
    return (
        <div className="post">
            <div className="post__content">
            <button onClick={handleClick} className="certificateItem" >{props.service.name}</button>
            </div>
        </div>
    );
};

export default CertificateItem;