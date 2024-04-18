import React from "react";
import { useNavigate } from "react-router-dom";


const StateItem=(props)=>{
    const router = useNavigate()
console.log(props)
    return (
        <div className="post">
            <div className="post__content">
                <button onClick={() => router.push(`/services/${props.post.id}`)}>{props.post.title}</button>
            </div>
        </div>
    );
};
export default StateItem;

