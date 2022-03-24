import "./styles.css";

const NavBar = () => {
  return (
    <div className="container">
      <div className="header__navigation">
        <a href="/">Women</a>
        <a href="/">Men</a>
        <a href="/">Kids</a>
      </div>
      <div className="actions">
        <a href="/">$</a>
        <a href="/">cart</a>
      </div>
    </div>
  );
};

export default NavBar;
