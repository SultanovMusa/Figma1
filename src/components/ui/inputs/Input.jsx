
import './Input.css';

const Input = ({color, placeholder, type}) => {
  return (
    <input className={color} type={type} placeholder={placeholder}/>
  )
}

export default Input