import React from 'react';
import ArhiveServiceItem from "./ArhiveServiceItem";

const ArhiveServiceList = ({listArhiveServices}) => {
    // if (!listArhiveServices || !listArhiveServices.length) {
    //     return (
    //         <h1 style={{textAlign: 'center'}}>
    //             Посты не найдены!
    //         </h1>
    //     )
    // }

    return (
        <div className='arhive-list-container'>
            {listArhiveServices.map((arhiveService) =>
                <ArhiveServiceItem arhiveService={arhiveService} key={arhiveService.id}/>
            )}
        </div>
    );
};

export default ArhiveServiceList;