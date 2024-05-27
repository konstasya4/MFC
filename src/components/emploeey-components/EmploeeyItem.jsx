import React from "react";
import './EmploeeyComponentStyle.css'
import PersonalDataActive from './PersonalDataActive.png'
import { useNavigate } from "react-router-dom";

const EmploeeyItem = (props) => {
  const navigate = useNavigate()
  const handleClick = () => {
      navigate(`/employee/${props.listEmploeey.post}`);
  };
    return (
      <div className="status-container" onClick={handleClick}>
        <div class="avatar-list">
                  <img src={PersonalDataActive} alt="Your Name" />
                </div>
        <div className="status-item">
          <div className="status-item-title">{props.listEmploeey.name.second} {props.listEmploeey.name.first} {props.listEmploeey.name.middle}</div>
        </div>
        
        
      </div>
    );
};
export default EmploeeyItem;