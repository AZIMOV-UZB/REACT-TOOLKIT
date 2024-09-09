import React, { memo, useState } from "react";
import "./header.css";
import { CiHeart } from "react-icons/ci";
import { RiMenu2Fill } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import BasicModal from "../modal/Modal";
import rasm from "../../assets/Header.svg"


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <div className="container mx-auto px-5 header ">
        <div className=" flex items-center  gap-[69px] justify-between w-full  mt-5 ">
          <Link to={"/"}>
            <img
              className="w-[130px] h-[50px] object-contain "
              src={rasm}
              alt="foto"
            />
          </Link>

          <div
            className={`nav__collect flex  gap-3 ${isMenuOpen ? "show" : ""}`}
          >
            <div className="flex items-center gap-4 navbar navbar__collection">
              <div className="flex items-center gap-1">
                <BasicModal ooo="Add" />
           
              </div>
           
            </div>
          </div>
       
        </div>
      </div>
    </>
  );
};

export default memo(Header);
