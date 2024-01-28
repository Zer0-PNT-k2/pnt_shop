
const Button = ({children, ...rests}) => {  
  return (
      <button 
        {...rests}
      >
        {children}
      </button>
  );
};

export default Button;
