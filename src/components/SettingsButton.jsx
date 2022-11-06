import React from "react";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import "../App.css";
import "../index.css";
import { FiSettings } from "react-icons/fi";
import { CgDarkMode } from "react-icons/cg";
import { BiHomeCircle } from "react-icons/bi";
import { useStateContext } from "../context/contextProvider";
import { useNavigate } from "react-router-dom";

const Buttons = ({ id, color, btnClick, bgColor, btnName, btnIcon }) => {
  return (
    <TooltipComponent
      className=""
      position="TopLeft"
      content={btnName}
      target={`#${id}`}
    >
      <button
        id={id}
        className="text-2xl p-2
       hover:drop-shadow-xl 
       hover:bg-light-grey
       text-white "
        onClick={btnClick}
        style={{ color: color, backgroundColor: bgColor }}
      >
        {btnIcon}
      </button>
    </TooltipComponent>
  );
};

const SettingsButton = () => {
  const {
    themeSettings,
    setThemeSettings,
    currentColor,
    setcurrentColor,
  } = useStateContext();
  const navigate = useNavigate();
  const handleHomeBtn = () => {
    navigate("/ripper");
  };
  const handleSkinBtn = () => {
    alert("oops! Button still under developement");
  };
  return (
    <div className="fixed right-4 p-1 border center bg-white  bottom-36 z-50">
      <div className="flex flex-col w-full  border-white    justify-center ">
        <Buttons
          id="Home"
          btnName="Home"
          btnClick={() => handleHomeBtn()}
          bgColor="rgba(255,99,165,.1)"
          color="#ff63a5"
          btnIcon={<BiHomeCircle />}
        />
        <Buttons
          id="ModeToggle"
          btnName="Skin"
          bgColor="rgba(85,155,251,.1)"
          btnClick={() => handleSkinBtn()}
          color="#559bfb"
          btnIcon={<CgDarkMode />}
        />

        <Buttons
          id="ThemeSettings"
          btnName="Settings"
          color="#816bff"
          bgColor="rgba(129,107,255,.1)"
          btnClick={() =>
            setThemeSettings((prev) => {
              return !prev;
            })
          }
          btnIcon={<FiSettings />}
        />
      </div>
    </div>
  );
};
export default SettingsButton;
