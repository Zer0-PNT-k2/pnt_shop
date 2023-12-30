
const Input = ({type, id, placeholder, ...rests}) => {
  return (
    <input 
        type={type}
        id={id}
        placeholder={placeholder}
        {...rests}
    />
  )
}

export default Input
