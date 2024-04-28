import React, { useEffect } from "react";
import '../../styles/componentsStyles/OrderedServices.css'

const StatusItem = (props) => {
    return (
      <div className="status-container">
        <div className="status-item">
          <div className="status-item-title">{props.status.title}</div>
          <div className="status-item-date">Дата заказа: {props.status.date}</div>
        </div>
        {props.status.status==="Готово к выдаче" ?(
          <p className="status-indicator status-indicator-done">{props.status.status}</p>
        ):
        props.status.status==="В работе" ? <p className="status-indicator status-indicator-in-progress">{props.status.status}</p>:
        props.status.status==="Отклонено" ?
        (<p className="status-indicator status-indicator-rejected">{props.status.status}</p>):
        (<p className="status-indicator status-indicator-received">{props.status.status}</p>)
        }
        
      </div>
    );
};
export default StatusItem;