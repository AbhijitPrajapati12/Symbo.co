const Button = ({ children, className = undefined, url }) => {
  const openInNewTab = (url) => {
    console.log(url);
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <button className={`btn ${className}`} onClick={() => openInNewTab(url)}>
      {children}
    </button>
  );
};

export default Button;
