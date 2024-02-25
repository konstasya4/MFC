// import React from "react";
const StateItem=(props)=>{
return(
<div>
    <div>
        <strong>{props.post.id} {props.post.title}</strong>
        <div>{props.post.body}</div>
    </div>
    <div>
        <button>Удалить</button>
    </div>
</div>
);
}
export default StateItem