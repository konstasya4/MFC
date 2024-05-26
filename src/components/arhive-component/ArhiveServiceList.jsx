import React from 'react';
import ArhiveServiceItem from "./ArhiveServiceItem";

const ArhiveServiceList = ({listArhiveServices, refreshList}) => {
    if (!listArhiveServices || !listArhiveServices.length) {
        return (
            <h1 style={{textAlign: 'center'}}>
                Нет созданных услуг
            </h1>
        )
    }

    return (
        <div className='arhive-list-container'>
            {listArhiveServices.map((arhiveService) =>
                <ArhiveServiceItem arhiveService={arhiveService} key={arhiveService.id}  refreshList={refreshList}/>
            )}
        </div>
    );
};

export default ArhiveServiceList;