import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useStateContext } from "./context/contextProvider";
import { Dashboard, Support } from "./pages";

import {
  SettingsButton,
  ThemeSettings,
  NavBar,
  SideBar,
  Home,
} from "./components";
import "./App.css";
import "./index.css";
import { MdDashboard } from "react-icons/md";
import Orders from "./pages/Orders";
import Products from "./pages/Products";

const App = () => {
  const {
    activeMenu,
    setActiveMenu,
    SideMenu,
    themeSettings,
  } = useStateContext();
  return (
    <div className="">
      <BrowserRouter>
        <div className="flex relative  dark:bg-main-dark-bg">
          <SettingsButton />
          <ThemeSettings />
          <NavBar />
          <SideBar />

          <div
            className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full 
                     ${activeMenu ? " p-0 mt-0" : " m-0 p-0 mt-16 flex-2"}`}
          >
            <Routes>
              <Route path="/ripper" element={<Dashboard />}></Route>
              <Route path="/ripper/dashboard" element={<Dashboard />}></Route>
              <Route path="/ripper/support" element={<Support />}></Route>
              <Route path="/ripper/orders" element={<Orders />}></Route>
              <Route path="/ripper/products" element={<Products />}></Route>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
