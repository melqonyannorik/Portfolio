import React, { useState } from "react";
import { Link } from "react-router";
import { FaAlignJustify } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
const Nav = () => {
  const [menu, setMenu] = useState(false);
  const [close, setClose] = useState(false);

  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        N.M
      </Link>
      {close ? (
        <IoMdClose id="close" onClick={() => setClose(!close)} />
      ) : (
        <FaAlignJustify id="menu" onClick={() => setClose(!close)} />
      )}

      <nav className={close ? "nav active" : "nav"}>
        <Link to="about">About</Link>
        <Link to="skills">Skills</Link>
        <Link to="contact">Contact</Link>
      </nav>
    </div>
  );
};

export default Nav;
