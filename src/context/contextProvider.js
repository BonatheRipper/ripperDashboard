import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

const StateContext = createContext();
const initialSate = {
  chat: false,
  notification: false,
  profile: false,
};
const DefaultColours = {
  name: "White-theme",
  colour: "#1d1d1a",
  BGcolor: "white",
};
export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState("boy");
  const [SideMenu, setSideMenu] = useState(true);
  const [themeSettings, setThemeSettings] = useState(false);
  const [SideBarBtn, setSideBarBtn] = useState("Dashboard");
  const [currentColor, setcurrentColor] = useState("#1d1d1a");
  const [BgcurrentColor, setBgcurrentColor] = useState("White");
  const [screenSize, setScreenSize] = useState(undefined);
  const [NavBarLeft, setNavBarLeft] = useState(initialSate);
  const [headColor, setHeadColor] = useState(DefaultColours);
  const [SideBarColour, SetsideBarColour] = useState(DefaultColours);
  const [navheight, Setnavheight] = useState(null);
  const elementRef = useRef(null);

  const handleSideMenu = () => {
    Setnavheight(elementRef.current.clientHeight);
    setSideMenu(!SideMenu);
  };
  useEffect(() => {
    Setnavheight(elementRef.current.clientHeight);
  }, []);
  const HeaderColorPicker = (Name, Color, Background) => {
    const obj = { name: Name, colour: Color, BGcolor: Background };
    window.localStorage.setItem("HeadColor", JSON.stringify(obj));
    setHeadColor(JSON.parse(window.localStorage.getItem("HeadColor")));
  };

  const SideBarColorPicker = (Name, Color, Background) => {
    const obj = { name: Name, colour: Color, BGcolor: Background };
    window.localStorage.setItem("SideColor", JSON.stringify(obj));
    SetsideBarColour(JSON.parse(window.localStorage.getItem("SideColor")));
  };

  function Hcolors() {
    let HeadColor = window.localStorage.getItem("HeadColor");

    if (!HeadColor) {
      window.localStorage.setItem("HeadColor", JSON.stringify(DefaultColours));

      return DefaultColours;
    }
    return setHeadColor(JSON.parse(window.localStorage.getItem("HeadColor")));
  }
  function Scolors() {
    let sidebarCol = window.localStorage.getItem("SideColor");

    if (!sidebarCol) {
      window.localStorage.setItem("SideColor", JSON.stringify(DefaultColours));

      return DefaultColours;
    }
    return SetsideBarColour(
      JSON.parse(window.localStorage.getItem("SideColor"))
    );
  }
  useEffect(() => {
    Scolors();
    Hcolors();
  }, []);

  const handleClick = (content) => {
    setNavBarLeft((prev) => {
      for (let item in prev) {
        if (content === item) {
          //If the clicked item is === to any of the menu buttons, set it to true else false
          //If the button clicked is already, set it to false
          prev[item] = prev[item] ? false : true;
        } else {
          prev[item] = false;
        }
      }

      return { ...prev, prev };
    });
  };
  const handleSideBtnClick = (key) => {
    setSideBarBtn(key);
    setSideMenu(false);
  };

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.addEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
      setSideMenu(false);
    } else {
      setActiveMenu(true);
      setSideMenu(true);
    }
  }, [screenSize]);

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        handleSideMenu,
        HeaderColorPicker,
        elementRef,
        SideBarColorPicker,
        SideBarColour,
        SideBarBtn,
        handleSideBtnClick,
        SideMenu,
        setSideMenu,
        themeSettings,
        navheight,
        headColor,
        setHeadColor,
        screenSize,
        setScreenSize,
        setThemeSettings,
        currentColor,
        setcurrentColor,
        handleClick,
        BgcurrentColor,
        setBgcurrentColor,
        NavBarLeft,
        setNavBarLeft,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
