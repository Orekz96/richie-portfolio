import React from "react";
import logo from "../assets/RichardLogo2.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-40" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/richard-orekoya/" target="_blank">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Orekz96" target="_blank">
          <FaGithub />
        </a>
        <a href="https://x.com/orekoya_richard" target="_blank">
          <FaTwitter />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
