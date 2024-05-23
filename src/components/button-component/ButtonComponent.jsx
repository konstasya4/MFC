import './ButtonComponentStyle.css'
const ButtonComponent = ({className, name, onClick }) => {
  return <button className={`btn ${className}`} onClick={onClick}>{name}</button>;
};
export default ButtonComponent;
