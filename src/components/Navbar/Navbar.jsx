import React from "react";
import { useState, useContext } from "react";
import { MyContext } from "../Context/Context";
import { NavLink } from "react-router-dom";

import { BiHome } from "react-icons/bi";
import { AiOutlineFire } from "react-icons/ai";
import { MdOutlineSubscriptions } from "react-icons/md";
import { AiOutlineFolder } from "react-icons/ai";
import { RiFilePaper2Line } from "react-icons/ri";
import { TfiAlarmClock } from "react-icons/tfi";
import { AiOutlineStar } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { BsMusicNoteBeamed } from "react-icons/bs";
import { BiJoystick } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";

import "../Navbar/Navbar.scss";

const Navbar = ({ user }) => {
  const { color, handleColor } = useContext(MyContext);

  return (
    <>
      <div
        className={
          !color ? "navbar fixed left-8 top-1 pb-8 flex flex-col" : "hidden"
        }
      >
        <div className="navbar__scroll flex flex-col items-start">
          <nav className="navbar__nav">
            <ul className="navbar__list m-0 p-0 mt-16 flex flex-col items-start gap-7 list-none">
              <li className="navbar__item">
                <NavLink className="navbar__nav-link" to={"/"}>
                  <BiHome className="navbar__link-home navbar__link-icon w-5 h-5" />
                  <span className="navbar__link-span">Home</span>
                </NavLink>
              </li>
              <li className="navbar__item">
                <NavLink className="navbar__nav-link" to={"/trending"}>
                  <AiOutlineFire className="navbar__link-trending navbar__link-icon w-5 h-5" />
                  <span className="navbar__link-span">Trending</span>
                </NavLink>
              </li>
              <li className="navbar__item">
                <NavLink className="navbar__nav-link" to={"/subscriptions"}>
                  <MdOutlineSubscriptions className="navbar__link-subscriptions navbar__link-icon w-5 h-5" />
                  <span className="navbar__link-span">Subscriptions</span>
                </NavLink>
              </li>
            </ul>
            <ul className="navbar__list-two m-0 p-0 mt-16 flex flex-col items-start gap-7 list-none">
              <li className="navbar__item-two">
                <NavLink to={"/library"} className="navbar__nav-link">
                  <AiOutlineFolder className="navbar__link-library navbar__link-icon w-5 h-5" />
                  <span className="navbar__link-span">Library</span>
                </NavLink>
              </li>
              <li className="navbar__item-two">
                <NavLink to={"/history"} className="navbar__nav-link">
                  <RiFilePaper2Line className="navbar__link-history navbar__link-icon w-5 h-5 rotate-180" />
                  <span className="navbar__link-span">History</span>
                </NavLink>
              </li>
              <li className="navbar__item-two">
                <NavLink to={"/watchlater"} className="navbar__nav-link">
                  <TfiAlarmClock className="navbar__link-watch navbar__link-icon w-5 h-5" />
                  <span className="navbar__link-span">Watch later</span>
                </NavLink>
              </li>
              <li className="navbar__item-two">
                <NavLink to={"/favourites"} className="navbar__nav-link">
                  <AiOutlineStar className="navbar__link-star navbar__link-icon w-5 h-5" />
                  <span className="navbar__link-span">Favourites</span>
                </NavLink>
              </li>
              <li className="navbar__item-two">
                <NavLink to={"/liked"} className="navbar__nav-link">
                  <AiOutlineHeart className="navbar__link-like navbar__link-icon w-5 h-5" />
                  <span className="navbar__link-span">Liked videos</span>
                </NavLink>
              </li>
              <li className="navbar__item-two">
                <NavLink to={"/music"} className="navbar__nav-link">
                  <BsMusicNoteBeamed className="navbar__link-music navbar__link-icon w-5 h-5" />
                  <span className="navbar__link-span">Music</span>
                </NavLink>
              </li>
              <li className="navbar__item-two">
                <NavLink to={"/games"} className="navbar__nav-link">
                  <BiJoystick className="navbar__link-games navbar__link-icon w-5 h-5" />
                  <span className="navbar__link-span">Games</span>
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className="navbar__box mt-8">
            <select className="navbar__select outline-0 cursor-pointer">
              <option className="navbar__option">Show more</option>
            </select>
          </div>
          <div className={user ? "navbar__box-two mt-8" : "hidden"}>
            <p className="navbar__box-title m-0 p-0 text-left">Subscriptions</p>
            <ul className="navbar__box-list m-0 p-0 mt-7 list-none flex flex-col gap-7">
              <li className="navbar__box-item">
                <a href="#" className="navbar__box-link">
                  Gussie Singleton
                </a>
              </li>
              <li className="navbar__box-item">
                <a href="#" className="navbar__box-link">
                  Nora Francis
                </a>
              </li>
              <li className="navbar__box-item">
                <a href="#" className="navbar__box-link">
                  Belle Briggs
                </a>
              </li>
              <li className="navbar__box-item">
                <a href="#" className="navbar__box-link">
                  Eunice Cortez
                </a>
              </li>
              <li className="navbar__box-item">
                <a href="#" className="navbar__box-link">
                  Emma Hanson
                </a>
              </li>
              <li className="navbar__box-item">
                <a href="#" className="navbar__box-link">
                  Leah Berry
                </a>
              </li>
            </ul>
          </div>
          <div className="navbar__settings m-0 p-0 mt-24">
            <a
              href="#"
              className="navbar__settings-link flex items-center gap-3"
            >
              <FiSettings className="navbar__link-icon w-5 h-5" />
              <span className="navbar__link-span">Setting</span>
            </a>
          </div>
        </div>
      </div>
      <div
        className={
          !color
            ? " hidden"
            : "navbar fixed w-7 left-8 top-20 pb-8 flex flex-col"
        }
      >
        <ul className="flex flex-col gap-4">
          <li>
            <NavLink to={"/"}>
              {" "}
              <BiHome className="navbar__link-home w-7 h-7" />
            </NavLink>
          </li>
          <li>
            <NavLink to={"/treding"}>
              {" "}
              <AiOutlineFire className="navbar__link-trending w-7 h-7" />
            </NavLink>
          </li>
          <li>
            <NavLink to={"/subscriptions"}>
              <MdOutlineSubscriptions className="navbar__link-subscriptions w-7 h-7" />
            </NavLink>
          </li>
          <li>
            <NavLink to={"/library"}>
              <AiOutlineFolder className="navbar__link-library w-7 h-7" />
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
