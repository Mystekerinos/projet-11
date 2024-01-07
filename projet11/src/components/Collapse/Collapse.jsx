import "./Collapse.css";
import { useState } from "react";
import IconChevron from "../Icons/Chevron";

function Collapse(props) {
  const [open, setOPen] = useState(false);
  const toggle = () => {
    setOPen(!open);
  };

  return (
    <li>
      <div className="list-item" onClick={toggle}>
        <p>{props.title}</p>
        <div className={open ? "reverse icon-wrapper" : "icon-wrapper"}>
          <IconChevron />
        </div>
      </div>
    </li>
  );
}

export default Collapse;
