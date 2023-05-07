import React from "react";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

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

const Navbar = () => {
  return (
    <div className="navbar fixed left-8 top-0 pb-8 flex flex-col">
      <div className="navbar__scroll flex flex-col items-start">
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
        <div className="navbar__box mt-8">
          <select className="navbar__select outline-0 cursor-pointer">
            <option className="navbar__option">Show more</option>
          </select>
        </div>
        <div className="navbar__box-two mt-8">
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
          <a href="#" className="navbar__settings-link flex items-center gap-3">
            <FiSettings className="w-5 h-5" />
            Setting
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
