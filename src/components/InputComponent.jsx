import React, { useState } from "react";
import '../styles/componentsStyles/InputComponentStyle.css'
import Show from "../images/Show.png";
import Hide from "../images/Hide.png";
import Search from "../images/Search.png"
const InputComponent =({ className, placeholder, type, onChange, required, ...restProps  })=>{
    const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (type === "password" ?
    <div className="input-password">
      <input
        className={className}
        type={showPassword ? "text" : type}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
        {...restProps}
      />
      {type === "password" ? (
        showPassword?
        <button className="show-btn" onClick={togglePasswordVisibility}>
          <img src={Hide} />
        </button>:
        <button className="show-btn" onClick={togglePasswordVisibility}>
          <img src={Show} />
        </button>)
        : null
      }
    </div>:
    <div className={`search-input ${className}`}>
    <input
      type={showPassword ? "text" : type}
      placeholder={placeholder}
      onChange={onChange}
      required={required}
      {...restProps}
    />
    <button className="search-btn" onClick={togglePasswordVisibility}>
          <img src={Search} />
        </button></div>
  );
};

export default InputComponent;





