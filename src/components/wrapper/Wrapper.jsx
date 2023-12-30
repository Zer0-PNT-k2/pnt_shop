const Wrapper = ({children, ...rests}) => {
  return (
    <div
    className="mx-auto max-w-screen-xl"
    {...rests}
    >
      {children}
    </div>
  )
}

export default Wrapper
