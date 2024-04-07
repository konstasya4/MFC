import React from "react";
// import {useHistory} from 'react-router-dom';
const StateItem=(props)=>{
    
    // const router = useHistory()

    return (
        <div className="post">
            <div className="post__content">
                <strong>{props.post.id}. {props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
            </div>
            <div>
                <button onClick={() => props.remove(props.post)}>
                    Удалить
                </button>
            </div>
        </div>
    );
// };

// return(
// <div>
//     <div>
//         <strong>{props.post.id} {props.post.title}</strong>
//         <div>{props.post.body}</div>
//     </div>
//     <div>
//         <button>Удалить</button>
//     </div>
// </div>
// );
};
export default StateItem;

