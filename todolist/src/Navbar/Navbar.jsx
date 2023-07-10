const Navbar = (props) => {
  return (
    <div className="navbar">
      <span className="badgeNumber">{props.number}</span>
      <p className="navbarText"> are uncompleted</p>
    </div>
  );
};

export default Navbar;
