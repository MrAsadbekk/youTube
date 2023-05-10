import React from "react";
import { useState } from "react";
import { auth } from "../../firebase";
import { Link, useNavigate } from "react-router-dom";

import { AiFillYoutube } from "react-icons/ai";
import { ImYoutube2 } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineVideoCamera } from "react-icons/ai";
import { CgMenuGridO } from "react-icons/cg";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RiAccountCircleLine } from "react-icons/ri";

import "../Header/Header.scss";

const Header = () => {
  const [user, setUser] = useState(null);

  const unsubscribe = auth.onAuthStateChanged((user) => {
    if (user) {
      setUser(user);
    } else {
      setUser(null);
    }

    return unsubscribe;
  }, []);

  const [display, setDisplay] = useState(false);

  const handleDisplay = () => {
    setDisplay(!display);
  };

  const handeLogOut = async () => {
    await auth.signOut();
  };

  return (
    <div className="header fixed top-0 left-0 right-8 flex items-center justify-between pt-3 pl-8 pr-11">
      <div className="header__box-one flex items-center gap-3">
        <button className="header__menu-btn w-8 h-8 m-0 p-0 bg-transparent cursor-pointer">
          <GiHamburgerMenu className="header__menu-icon w-6 h-6 mr-auto" />
        </button>
        <Link className="header__logo flex items-center" to={"/"}>
          {<AiFillYoutube className="header__logo-icon w-9 h-8 ml-auto" />}
          {<ImYoutube2 className="heaer__logo-icon2 w-20 h-7 text-black" />}
        </Link>
      </div>
      <form className="header__form flex items-center">
        <input
          type="text"
          className="header__search w-96 pt-3 pb-3 px-6 block border-2 rounded-l-3xl outline-0 bg-white"
          placeholder="Search"
        />
        <button className="header__search-btn border-2 border-l-0 cursor-pointer">
          <AiOutlineSearch className="w-10 h-8" />
        </button>
      </form>
      <div className="header__box ">
        <div className={user ? "flex items-center gap-8" : "hidden"}>
          <button className="w-8 h-8 border-0">
            <AiOutlineVideoCamera className="w-7 h-7" />
          </button>
          <button className="w-8 h-8 border-0">
            <CgMenuGridO className="w-7 h-7" />
          </button>
          <button className="w-8 h-8 border-0">
            <IoMdNotificationsOutline className="w-7 h-7" />
          </button>
          <div className="header__account-box">
            <button
              className="header__account-btn w-8 h-8 rounded-2xl text-center bg-slate-700 text-white"
              onClick={handleDisplay}
            >
              {user?.multiFactor?.user?.email.slice(0, 1).toUpperCase()}
            </button>
            <div className={display ? "header__logout-box" : "hidden"}>
              <p className="text-xs text-white bg-transparent">
                {user?.multiFactor?.user?.email}
              </p>
              <button
                onClick={handeLogOut}
                className="block mx-auto py-1 px-3 mb-2 border-2 border-white text-white"
              >
                Log out
              </button>
            </div>
          </div>
        </div>
        <div className={user ? "hidden" : "block"}>
          <Link
            to={"/login"}
            className="flex items-center gap-2 border-2 py-2 px-4 rounded-3xl text-teal-400 border-teal-400"
          >
            <RiAccountCircleLine className="w-7 h-7" />
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
