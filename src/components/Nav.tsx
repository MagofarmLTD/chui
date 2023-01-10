import React from "react";
import { FaBars, FaTimes } from "react-icons/fa/index";

const Nav = () => {
  const [showNav, setShowNav] = React.useState(false);

  return (
    <div className="text-white  pr-5 z-[100]">
      <div
        className="absolute z-[9999] right-5 cursor-pointer md:hidden"
        onClick={() => {
          setShowNav(!showNav);
        }}
      >
        {!showNav ? (
          <FaBars size={25} fill="#fff" />
        ) : (
          <FaTimes size={30} fill="#fff" />
        )}
      </div>

      {showNav && (
        <section
          className={
            !showNav
              ? "hidden"
              : "absolute top-0 left-0  flex h-[400px] w-full flex-col items-center justify-center bg-green text-lg font-medium text-white bg-blue z-[50] "
          }
        >
          <ul className="space-y-5" onClick={() => setShowNav(!showNav)}>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              {" "}
              <a href="#aboutUs">About Us</a>
            </li>
            <li>
              <a href="/blogs">Blogs</a>
            </li>
            <li>
              <a href="#mawasiliano">Contact Us</a>
            </li>
          </ul>
        </section>
      )}

      {/* For wide Screens */}
      <ul className="md:flex gap-5 hidden text-lg">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          {" "}
          <a href="#aboutUs">About Us</a>
        </li>
        <li>
          <a href="/blogs">Blogs</a>
        </li>
        <li>
          <a href="#mawasiliano">Contact Us</a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
