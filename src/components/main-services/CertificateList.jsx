import React from 'react';
import CertificateItem from "./CertificateItem";

const CertificateList = ({services}) => {
    const publicServices = services.filter(service => service.onPublic);
    if (!publicServices || !publicServices.length) {
        return (
            <h3 >
                Услуги не найдены!
            </h3>
        )
    }

    return (
        <div className='certificate-list-container'>
            {publicServices.map((service) =>
                <CertificateItem service={service} key={service.id}/>
            )}
        </div>
    );
};

export default CertificateList;