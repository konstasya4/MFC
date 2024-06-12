import React from "react";
import "./StudentItemStyle.css";
import PersonalDataActive from "./images/PersonalDataActive.png";
import { useNavigate } from "react-router-dom";

const StudentItem = (props) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/students/${props.listStudent.serviceNumber}`);
  };
  return (
    <div className="status-container" onClick={handleClick}>
      <div class="avatar-list">
        <img src={PersonalDataActive} alt="Your Name" />
      </div>
      <div className="status-item">
        <div className="status-item-title">
          {props.listStudent.name.second} {props.listStudent.name.first}{" "}
          {props.listStudent.name.midle}
        </div>
        <div className="status-item-date">
          {props.listStudent.group} {props.listStudent.directionOfStudy}
        </div>
      </div>
    </div>
  );
};
export default StudentItem;
