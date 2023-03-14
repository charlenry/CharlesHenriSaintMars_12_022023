import "./Home.scss";
import React from "react";
import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import useBrowserWidth from "../../service/useBrowserWidth";
import Navbar from "../../components/Navbar/Navbar";
import IconsBar from "../../components/IconsBar/IconsBar";

// import PropTypes' from "prop-types";

const Home = (props) => {
  // const { id } = useParams();

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
        <Navbar id={-1} navbarWidth={navbarWidth} />
        <IconsBar />
        <main className="main">
          <div className="home-content">
            <Link className="userLink" to={`/user/12`} >Voir le profil de l'utilisateur ayant pour ID=12</Link>
            <Link className="userLink" to={`/user/18`} >Voir le profil de l'utilisateur ayant pour ID=18</Link>
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
