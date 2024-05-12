import React from 'react';
import StatusItem from "./StatusItem";

const StatusList = ({ status }) => {
    if (!status || !status.length) {
        return (
            <h1 style={{textAlign: 'center'}}>
                Пока еще нет заказанных услуг
            </h1>
        )
    }
    

    return (
        <div className='status-list'>
            {status.map((stat) => (
                <StatusItem status={stat} key={stat.id} />
            ))}
        </div>
    );
};

export default StatusList;
