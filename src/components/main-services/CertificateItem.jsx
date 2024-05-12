// import React from "react"
// import './mainServicesStyle.css'
// const CertificateItem=(props)=>{
    
//     return (
//         <div className="post">
//             <div className="post__content">
//                     <div className="certificateItem">{props.post.title}</div>
//             </div>
//         </div>
//     );
// };
// export default CertificateItem;
import React, { useEffect } from "react";
import '../../styles/mainServicesStyle.css'
import { useNavigate } from "react-router-dom";

const CertificateItem = (props) => {
    // const certificateRef = useRef(null);
    const navigate = useNavigate()
    const handleClick = () => {
        // Перенаправляем пользователя на маршрут с ID услуги
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