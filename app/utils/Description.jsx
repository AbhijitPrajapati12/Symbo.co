const Description = ({ children, className = undefined }) => {
  return <p className={`des ${className}`}>{children}</p>;
};

export default Description;
