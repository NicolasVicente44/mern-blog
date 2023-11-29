import React, { useState } from "react";
import { images } from "../constants";
import { AiOutlineClose, AiOutlineMenuUnfold, IoClose } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { logout } from "../store/actions/user";
import { Link, useNavigate } from "react-router-dom";

const navItemsInfo = [
  { name: "Home", type: "link", href: "/" },
  { name: "Articles", type: "link", href: "/articles" },
  {
    name: "Pages",
    type: "dropdown",
    items: [
      { title: "About us", href: "/about" },
      { title: "Contact us", href: "/contact" },
    ],
  },
  { name: "Pricing", type: "link", href: "/pricing" },
  { name: "FAQ", type: "link", href: "faq" },
];

const NavItem = ({ item }) => {
  const [dropdown, setDropdown] = useState(false);

  const toggleDropdownHandler = () => {
    setDropdown((curState) => {
      return !curState;
    });
  };

  return (
    <li className="relative group">
      {item.type === "link" ? (
        <>
          <Link to={item.href} className="px-4 py-2">
            {item.name}
          </Link>
          <span className="cursor-pointer text-black absolute transition-all duration-500 font-bold right-0 top-0 group-hover:right-[90%] opacity-0 group-hover:opacity-100">
            /
          </span>
        </>
      ) : (
        <div className="flex flex-col items-center">
          <button
            className="px-4 py-2 flex gap-x-1 items-center"
            onClick={toggleDropdownHandler}
          >
            <span>{item.name}</span>
            <MdKeyboardArrowDown />
          </button>

          <div
            className={`${
              dropdown ? "block" : "hidden"
            } transition-all duration-500 pt-4 lg:absolute lg:bottom-0 lg:right-0 lg:transform lg:translate-y-full lg:group-hover:block w-max`}
          >
            {/* Content for non-link item */}
            <ul className="bg-black lg:bg-transparent text-center flex flex-col shadow-lg rounded-lg overflow-hidden">
              {item.items.map((page, index) => (
                <Link
                  key={index}
                  to={page.href}
                  className="hover:bg-dark-hard lg:bg-black lg:text-white hover:text-white px-4 py-2 text-white lg:hover:bg-dark-hard z-10 lg:hover:text-white"
                >
                  {page.title}
                </Link>
              ))}
            </ul>
          </div>
        </div>
      )}
    </li>
  );
};

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [navIsVisible, setNavIsVisible] = useState(false);
  const userState = useSelector((state) => state.user);
  const [profileDropdown, setProfileDropdown] = useState(false);

  const navVisibilityHandler = () => {
    setNavIsVisible((curState) => {
      return !curState;
    });
  };

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <section className="sticky top-0 left-0 right-0 z-50 bg-white">
      <header className="container mx-auto px-5 flex justify-between py-4 items-center">
        <div>
          <a href="/">
            <img className="w-25 h-9" src={images.Logo} alt="logo" />
          </a>
        </div>
        <div className="lg:hidden z-50">
          {navIsVisible ? (
            <AiOutlineClose
              className="w-6 h-6"
              onClick={navVisibilityHandler}
            />
          ) : (
            <AiOutlineMenuUnfold
              className="w-6 h-6"
              onClick={navVisibilityHandler}
            />
          )}
        </div>
        <div
          className={`${
            navIsVisible ? "right-0" : "-right-full"
          } transition-all duration-300 mt-[56px] lg:mt-0 bg-black lg:bg-transparent flex z-[49]  flex-col w-full lg:w-auto lg:flex-row justify-center lg:justify-end fixed top-0 bottom-0  lg:static  gap-x-9 items-center`}
        >
          <ul className=" text-white items-center gap-y-5 lg:text-black flex flex-col lg:flex-row gap-x-2 font-semibold">
            {navItemsInfo.map((item) => (
              <NavItem key={item.name} item={item} />
            ))}
          </ul>

          {userState.userInfo ? (
            <div className=" text-white items-center gap-y-5 lg:text-black flex flex-col lg:flex-row gap-x-2 font-semibold">
              <div className="relative group">
                <div className="flex flex-col items-center">
                  <button
                    className=" flex gap-x-1 items-center mt-5 lg:mt-0 border-2 border-[black] px-6 py-2 rounded-full text-[black] font-semibold hover:bg-[black] hover:text-white transition-all duration-300"
                    onClick={() => setProfileDropdown(!profileDropdown)}
                  >
                    <span>Account</span>
                    <MdKeyboardArrowDown />
                  </button>

                  <div
                    className={`${
                      profileDropdown ? "block" : "hidden"
                    } transition-all duration-500 pt-4 lg:absolute lg:bottom-0 lg:right-0 lg:transform lg:translate-y-full lg:group-hover:block w-max`}
                  >
                    {/* Content for non-link item */}
                    <ul className="bg-black lg:bg-transparent text-center flex flex-col shadow-lg rounded-lg overflow-hidden">
                      {userState.userInfo?.admin && (
                        <button
                          onClick={() => navigate("/admin")}
                          type="button"
                          className="hover:bg-dark-hard lg:bg-black lg:text-white hover:text-white px-4 py-2 text-white lg:hover:bg-dark-hard z-10 lg:hover:text-white"
                        >
                          Admin Dashboard
                        </button>
                      )}
                      <button
                        onClick={() => navigate("/profile")}
                        type="button"
                        className="hover:bg-dark-hard lg:bg-black lg:text-white hover:text-white px-4 py-2 text-white lg:hover:bg-dark-hard z-10 lg:hover:text-white"
                      >
                        Profile Page
                      </button>
                      <button
                        onClick={logoutHandler}
                        type="button"
                        className="hover:bg-dark-hard lg:bg-black lg:text-white hover:text-white px-4 py-2 text-white lg:hover:bg-dark-hard z-10 lg:hover:text-white"
                      >
                        Logout
                      </button>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <button
              className="mt-5 lg:mt-0 border-2 border-[black] px-6 py-2 rounded-full text-[black] font-semibold hover:bg-[black] hover:text-white transition-all duration-300"
              onClick={() => navigate("/login")}
            >
              Sign in
            </button>
          )}
        </div>
      </header>
    </section>
  );
};

export default Header;
