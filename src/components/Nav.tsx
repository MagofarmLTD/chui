import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Nav = () => {
  const [showNav, setShowNav] = React.useState(false);
  console.log(showNav);
  return (
    <div className="mr-5">
      {!showNav ? (
        <button
          onClick={(showNav) => setShowNav(!showNav)}
          className="cursor-pointer"
        >
          <FaBars size={30} color="#fff" />
        </button>
      ) : (
        <div>Hey Biatch</div>
      )}
    </div>
  );
};

export default Nav;
