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
    <div className="navbar">
      <div className="navbar__box">
        <button className="navbar__menu-btn">
          <GiHamburgerMenu className="navbar__menu-icon" />
        </button>
        <Link className="navbar__logo" to={"/"}>
          {<AiFillYoutube className="navbar__logo-icon" />}
          {<ImYoutube2 className="navbar__logo-icon2" />}
        </Link>
      </div>
      <nav className="navbar__nav">
        <ul className="navbar__list">
          <li className="navbar__item">
            <NavLink className="navbar__nav-link" to={"/"}>
              <BiHome className="navbar__link-home" />
              Home
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink className="navbar__nav-link" to={"/trending"}>
              <AiOutlineFire className="navbar__link-trending" />
              Trending
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink className="navbar__nav-link" to={"/subscriptions"}>
              <MdOutlineSubscriptions className="navbar__link-subscriptions" />
              Subscriptions
            </NavLink>
          </li>
        </ul>
        <ul className="navbar__list-two">
          <li className="navbar__item-two">
            <NavLink to={"/library"} className="navbar__nav-link">
              <AiOutlineFolder className="navbar__link-library" />
              Library
            </NavLink>
          </li>
          <li className="navbar__item-two">
            <NavLink to={"/history"} className="navbar__nav-link">
              <RiFilePaper2Line className="navbar__link-history" />
              History
            </NavLink>
          </li>
          <li className="navbar__item-two">
            <NavLink to={"/watchlater"} className="navbar__nav-link">
              <TfiAlarmClock className="navbar__link-watch" />
              Watch later
            </NavLink>
          </li>
          <li className="navbar__item-two">
            <NavLink to={"/favourites"} className="navbar__nav-link">
              <AiOutlineStar className="navbar__link-star" />
              Favourites
            </NavLink>
          </li>
          <li className="navbar__item-two">
            <NavLink to={"/liked"} className="navbar__nav-link">
              <AiOutlineHeart className="navbar__link-like" />
              Liked videos
            </NavLink>
          </li>
          <li className="navbar__item-two">
            <NavLink to={"/music"} className="navbar__nav-link">
              <BsMusicNoteBeamed className="navbar__link-music" />
              Music
            </NavLink>
          </li>
          <li className="navbar__item-two">
            <NavLink to={"/games"} className="navbar__nav-link">
              <BiJoystick className="navbar__link-games" />
              Games
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
