import React from "react";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

import { AiFillYoutube } from "react-icons/ai";
import { ImYoutube2 } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";
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

import "../Navbar/Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar fixed left-8 top-8 flex flex-col items-start">
      <div className="navbar__box flex items-center gap-8">
        <button className="navbar__menu-btn w-8 h-8 m-0 p-0 bg-transparent cursor-pointer">
          <GiHamburgerMenu className="navbar__menu-icon w-8 h-8 ml-auto" />
        </button>
        <Link className="navbar__logo flex items-center" to={"/"}>
          {<AiFillYoutube className="navbar__logo-icon w-9 h-8 ml-auto" />}
          {<ImYoutube2 className="navbar__logo-icon2 w-20 h-7 text-black" />}
        </Link>
      </div>
      <nav className="navbar__nav">
        <ul className="navbar__list m-0 p-0 mt-16 flex flex-col items-start gap-7 list-none">
          <li className="navbar__item">
            <NavLink className="navbar__nav-link" to={"/"}>
              <BiHome className="navbar__link-home w-5 h-5" />
              Home
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink className="navbar__nav-link" to={"/trending"}>
              <AiOutlineFire className="navbar__link-trending w-5 h-5" />
              Trending
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink className="navbar__nav-link" to={"/subscriptions"}>
              <MdOutlineSubscriptions className="navbar__link-subscriptions w-5 h-5" />
              Subscriptions
            </NavLink>
          </li>
        </ul>
        <ul className="navbar__list-two m-0 p-0 mt-16 flex flex-col items-start gap-7 list-none">
          <li className="navbar__item-two">
            <NavLink to={"/library"} className="navbar__nav-link">
              <AiOutlineFolder className="navbar__link-library w-5 h-5" />
              Library
            </NavLink>
          </li>
          <li className="navbar__item-two">
            <NavLink to={"/history"} className="navbar__nav-link">
              <RiFilePaper2Line className="navbar__link-history w-5 h-5 rotate-180" />
              History
            </NavLink>
          </li>
          <li className="navbar__item-two">
            <NavLink to={"/watchlater"} className="navbar__nav-link">
              <TfiAlarmClock className="navbar__link-watch w-5 h-5" />
              Watch later
            </NavLink>
          </li>
          <li className="navbar__item-two">
            <NavLink to={"/favourites"} className="navbar__nav-link">
              <AiOutlineStar className="navbar__link-star w-5 h-5" />
              Favourites
            </NavLink>
          </li>
          <li className="navbar__item-two">
            <NavLink to={"/liked"} className="navbar__nav-link">
              <AiOutlineHeart className="navbar__link-like w-5 h-5" />
              Liked videos
            </NavLink>
          </li>
          <li className="navbar__item-two">
            <NavLink to={"/music"} className="navbar__nav-link">
              <BsMusicNoteBeamed className="navbar__link-music w-5 h-5" />
              Music
            </NavLink>
          </li>
          <li className="navbar__item-two">
            <NavLink to={"/games"} className="navbar__nav-link">
              <BiJoystick className="navbar__link-games w-5 h-5" />
              Games
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
