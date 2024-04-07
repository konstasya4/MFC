import React from "react";
// import './InputCompanentStyle.css'
import './InputComponentStyle.css' 
const InputComponent =({ placeholder, ...restProps })=>{
return(
    <div>
        <input className="input"
        type="text"
        placeholder={placeholder}
        {...restProps}
        />
    </div>
)
}
export default InputComponent;