
const Button = ({children, type, ...rests}) => {
  
  return (
      <button 
        type= { type }
        {...rests}
      >
        {children}
      </button>
  );
};

export default Button;
