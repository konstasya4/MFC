import '../styles/componentsStyles/ButtonComponentStyle.css'
const MainButton = ({className, name, onClick }) => {
  return <button className={`btn ${className}`} onClick={onClick}>{name}</button>;
};
export default MainButton;
