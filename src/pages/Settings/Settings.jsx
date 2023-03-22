import "./Settings.scss";
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { NavLink } from "react-router-dom";
import useBrowserWidth from "../../service/useBrowserWidth";
import Navbar from "../../components/Navbar/Navbar";
import IconsBar from "../../components/IconsBar/IconsBar";
// import PropTypes from "prop-types";


/**
 * A function component that returns a JSX element.
 * Render the settings page.
 * 
 * @component
 * @name Settings
 * @kind function
 * @param { any } props - No props
 * @returns { JSX.Element }
 */
const Settings = (props) => {
  const { id } = useParams();
  const uid = Number(id);

  const browserWidth = useBrowserWidth();
  const coeffDirecteur = 47.5 / 1024;
  const [navbarWidth, setNavbarWidth] = useState();

  useEffect(() => {
    if (browserWidth < 1440) {
      setNavbarWidth(browserWidth - 5);
    } else {
      setNavbarWidth(1440);
    }
    const html = document.querySelector("html");
    let actualFontPercent = coeffDirecteur * browserWidth;
    if (browserWidth < 1440) {
      html.style.fontSize = `${actualFontPercent}%`;
    } else if (browserWidth >= 1440) {
      html.style.fontSize = "62.5%";
    }
  }, [browserWidth, coeffDirecteur]);

  return (
    <>
      <div className="container">
        <Navbar id={uid} navbarWidth={navbarWidth} />
        <IconsBar />
        <main className="main">
          <div className="settings-content">
            <p>Page de réglage</p>
          </div>
        </main>
      </div>
    </>
  );
};

export default Settings;