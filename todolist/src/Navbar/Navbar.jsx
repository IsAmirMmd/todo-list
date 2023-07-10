import Select from "react-select";

const options = [
  { value: "All", label: "All" },
  { value: "done", label: "Completed" },
  { value: "not", label: "unCompleted" },
];

const Navbar = (props) => {
  return (
    <div className="navbar">
      <div className="counterBadge">
        <span className="badgeNumber">{props.number}</span>
        <p className="navbarText"> are uncompleted</p>
      </div>
      <div>
        <Select
          options={options}
          defaultValue={props.selectedOption}
          onChange={props.onChange}
        />
      </div>
    </div>
  );
};

export default Navbar;
