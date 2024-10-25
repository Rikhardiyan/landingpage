const Button = (props) => {
    // eslint-disable-next-line react/prop-types
    const {children = "...", clasname = "bg-black" }= props;
    return (
  <button className={`h-10 px-6 font-semibold rounded-md ${clasname} text-white`} type="submit">
      {children}
    </button>
    );
  }

  export default Button;