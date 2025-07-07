const Button = ({ children, className = undefined }) => {
  return <button className={`btn ${className}`}>{children}</button>;
};

export default Button;
