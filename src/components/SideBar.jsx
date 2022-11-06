import React from "react";
import { Link, NavLink } from "react-router-dom";
import { RiMenu4Fill } from "react-icons/ri";
import { FiShoppingBag } from "react-icons/fi";
import { BiSupport } from "react-icons/bi";

import { SiShopware, SiCodesandbox, Sishopware } from "react-icons/si";
import { MdDashboard } from "react-icons/md";
import { MdOutlineCancelPresentation } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { useStateContext } from "../context/contextProvider";
import logo from "./dash.png";
import { click } from "@syncfusion/ej2-react-grids";

const SideBtns = ({ to, title, key, icon, btnClick }) => {
  let {
    handleSideBtnClick,
    SideBarBtn,
    SideBarColour,
    currentColor,
  } = useStateContext();

  return (
    <NavLink
      onClick={() => handleSideBtnClick(title)}
      // style={{ border: ` ${SideBarBtn==title? `1px solid ${currentColor}` : "" }`}}
      to={to}
      key={key}
      className={`flex p-3 px-6 text-[${
        SideBarColour.colour
      }] hover:px-7  hover:border
         ${
           SideBarBtn == title
             ? ` border p-1  hover:px-8 m-2  
         border-[${SideBarColour.colour}]`
             : ""
         }
          justify-start items-center`}
    >
      <span className="md:text-2xl text-xl px-2">{icon}</span>
      <span className="capitalize p-1 text-sm">{title}</span>
    </NavLink>
  );
};

const SideBar = () => {
  let { handleSideMenu, SideMenu, SideBarColour } = useStateContext();

  // const isActive = true
  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-gray-700  text-md m-2";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";

  return (
    <>
      <div
        style={{ backgroundColor: SideBarColour.BGcolor }}
        className={`w-72 fixed ${!SideMenu ? "-left-80" : "left-0"}
      dark:bg-secondary-dark-bg z-50 bg-[${
        SideBarColour.BGcolor
      }] shadow-xl border-[${SideBarColour.BGcolor}]`}
      >
        <div
          className=" h-screen md:overflow-hidden 
      // overflow-auto md:hover:overflow-auto pb-10"
        >
          <div className="flex mb-2 p-0 flex-row justify-between items-center">
            <div id="Logo">
              <img className="w-32 p-3 px-4 py-4" src={logo} alt="logo image" />
            </div>

            <div id="menuBtn" className=" rounded-full">
              <button
                type="button"
                onClick={handleSideMenu}
                className={` 
       relative text-xl hover:shadow-xl text-[${SideBarColour.colour}]
       rounded-full p-3 hover:text-white hover:bg-gray-800 `}
              >
                <RiMenu4Fill />
              </button>
            </div>
          </div>

          <div className="MenuBtns">
            <SideBtns
              to={`/ripper/dashboard`}
              key="Dashboard"
              title="Dashboard"
              icon={<MdDashboard />}
              //   btnClick={()=>handleSideBtnClick}
            />
            <SideBtns
              to={`/ripper/support`}
              key="Support"
              title="Support"
              icon={<BiSupport />}
            />
            <SideBtns
              to={`/ripper/orders`}
              key="Orders"
              title="Orders"
              icon={<FiShoppingBag />}
            />
            <SideBtns
              to={`/ripper/products`}
              key="Products"
              title="Products"
              icon={<SiCodesandbox />}
            />
          </div>
        </div>
      </div>
      )
    </>
  );
};

export default SideBar;
