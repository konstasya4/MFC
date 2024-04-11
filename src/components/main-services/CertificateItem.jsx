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
import React, { useEffect, useRef } from "react";
import './mainServicesStyle.css'

const CertificateItem = (props) => {
    const certificateRef = useRef(null);

    // useEffect(() => {
    //     const certificateItem = certificateRef.current;
    //     const textWidth = certificateItem.scrollWidth;
    //     const containerWidth = certificateItem.clientWidth;
        
    //     if (textWidth > containerWidth) {
    //         const remainingSpace = containerWidth - textWidth;
    //         const dotsCount = Math.abs(remainingSpace) / 6; // Вы можете изменить этот коэффициент в зависимости от размера точек
    //         certificateItem.innerHTML += '.'.repeat(dotsCount);
    //     }
    // }, [props.post.title]);

    return (
        <div className="post">
            <div className="post__content">
                <div className="certificateItem" ref={certificateRef}>{props.post.title}</div>
            </div>
        </div>
    );
};

export default CertificateItem;