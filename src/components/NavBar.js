import React from "react";
import { RiMenu4Fill } from "react-icons/ri";
import { BsSearch } from "react-icons/bs";
import { RiWechatLine } from "react-icons/ri";
import { FiBell } from "react-icons/fi";
import { RiShieldUserFill } from "react-icons/ri";
import logo from "./dash.png";
import { useStateContext } from "../context/contextProvider";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { NavLink } from "react-router-dom";

const NavLeft = ({ title, btnClick, SideMenu, menuActive, icon }) => {
  let { headColor } = useStateContext();

  return (
    <div className="flex flex-row justify-center items-center	">
      {SideMenu ? (
        <></>
      ) : (
        <>
          {" "}
          <div id="menuBtn" className=" rounded-full">
            <button
              type="button"
              onClick={btnClick}
              className={` 
     relative text-xl hover:shadow-xl text-[${headColor.colour}]
     rounded-full p-3 hover:text-white hover:bg-gray-800 `}
            >
              {icon}
            </button>
          </div>
          <NavLink to={`/ripper`} id="Logo">
            <img className="w-32 p-3 px-4 py-4" src={logo} alt="logo image" />
          </NavLink>
        </>
      )}

      {menuActive && (
        <div id="searchBar" className="shadow-md p-1">
          <div className="flex justify-center items-center ">
            <div className="input-group relative flex  flex-wrap items-stretch w-full mb-0">
              <input
                type="search"
                placeholder="search"
                style={{ background: headColor.BGcolor }}
                className={`form-control relative 
        flex-auto min-w-0 block w-32 px-2 py-1
        text-[${headColor.colour}] font-normal  
        bg-none 
        bg-clip-padding border border-solid 
        border-gray-[${headColor.colour}] rounded transition 
        ease-in-out m-0 focus:text-[${headColor.colour}]
        
        focus:bg-white-900 focus:border-[${headColor.colour}] focus:outline-none 
         `}
              />
              <button
                style={{
                  background: "none",
                  border: "none",
                  color: headColor.colour,
                }}
                className={`btn inline-block px-6 py-2.5 
        bg-blue-600 text-[${headColor.colour}] font-medium
        hover:color-white 
        text-xs leading-tight uppercase rounded-full 
         hover:bg-blue-700 hover:shadow-xl focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center" type="button" id="button-addon2`}
              >
                <BsSearch />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const NavRight = ({ icon, color, BGcolour }) => {
  let { NavBarLeft, headColor, currentColor, handleClick } = useStateContext();

  return (
    <div className="flex flex-row justify-center items-center relative">
      {/*  BUTTON */}
      <div className="chatBtn px-2">
        <button
          type="button"
          onClick={() => {
            handleClick("chat");
          }}
          className={`md:text-3xl text-2xl  rounded-full hover:text-white hover:bg-gray-600 sm:p-2 text-[${headColor.colour}] p-3`}
        >
          <RiWechatLine className={`text-[${headColor.colour}]`} />
        </button>
        <div
          className={`border-b border-[${
            headColor.BGcolour
          }] z-40 shadow-md p-0 bg-[${headColor.BGcolour}] rounded-md ${
            NavBarLeft.chat ? "w" : "scale-y-0"
          } w-72 p-2 mt-2 absolute right-1`}
        >
          <div className="messages">
            <div
              style={{ fontSize: "12px", color: headColor.colour }}
              className={`flex text-sm justify-between items-center p-3 `}
            >
              <p>Recent Chats</p>
              <p>Settings</p>
            </div>
          </div>
        </div>
      </div>

      {/* CHAT BEELL */}
      <div className="notification px-2">
        <button
          type="button"
          onClick={() => {
            handleClick("notification");
          }}
          className={`md:text-3xl text-2xl  rounded-full hover:text-white hover:bg-gray-600 sm:p-2 text-[${currentColor}] p-3`}
        >
          <FiBell className={`text-[${headColor.colour}]`} />
        </button>
        <div
          className={`border-b border-[${
            headColor.BGcolour
          }] z-40 shadow-md p-0 bg-[${headColor.BGcolour}] rounded-md ${
            NavBarLeft.notification ? "" : "scale-y-0"
          } w-72 p-2 mt-2 absolute right-1`}
        >
          <div className="messages">
            <div
              style={{ fontSize: "12px", color: headColor.colour }}
              className={`flex text-sm justify-between items-center p-3 `}
            >
              <p>Recent Notifications </p>
              <p>All</p>
            </div>
          </div>
        </div>
      </div>

      {/* Profile */}
      <div className="notification px-2">
        <button
          type="button"
          onClick={() => {
            handleClick("profile");
          }}
          className={`md:text-3xl text-2xl rounded-full hover:text-white hover:bg-gray-600 sm sm:p-2 text-[${headColor.colour}] p-3`}
        >
          <RiShieldUserFill className={`text-[${headColor.colour}]`} />
        </button>
        <div
          className={`border-b border-[${
            headColor.BGcolour
          }] z-40 shadow-md p-0 bg-[${headColor.BGcolour}] rounded-md ${
            NavBarLeft.profile ? "" : "scale-x-0"
          } w-72 p-2 mt-2 absolute right-1`}
        >
          <div className="messages">
            <div
              style={{ fontSize: "12px", color: "black" }}
              className={`flex text-sm justify-between items-center p-3 `}
            >
              <p>Profile </p>
              <p>Edit</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const NavBar = () => {
  let {
    themeSettings,
    elementRef,
    headColor,
    setHeadColor,
    activeMenu,
    handleSideMenu,
    SideMenu,
    setThemeSettings,
    currentColor,
    BgcurrentColor,
    setBgcurrentColor,
  } = useStateContext();

  return (
    <div
      ref={elementRef}
      id="Navbar"
      className="flex z-40 absolute right-0 w-screen bg-white-800 justify-between px-2 md:mx-0  shadow-md"
      style={{
        backgroundColor: headColor.BGcolor,
        width: SideMenu ? "calc(100% - 288px)" : "100%",
      }}
    >
      <NavLeft
        icon={<RiMenu4Fill />}
        btnClick={() => handleSideMenu()}
        title=""
        SideMenu={SideMenu}
        menuActive={activeMenu}
      />
      <NavRight />
    </div>
  );
};

export default NavBar;
