import React from 'react';
import CertificateItem from "./CertificateItem";

const CertificateList = ({posts}) => {
    const slicedPosts = posts.slice(0, 10);
    if (!posts || !posts.length) {
        return (
            <h1 style={{textAlign: 'center'}}>
                Посты не найдены!
            </h1>
        )
    }

    return (
        <div className='certificate-list-container'>
            {slicedPosts.map((post) =>
                <CertificateItem post={post} key={post.id}/>
            )}
        </div>
    );
};

export default CertificateList;