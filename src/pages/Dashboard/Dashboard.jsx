import "./Dashboard.scss";
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import useBrowserWidth from "../../service/useBrowserWidth";
import useFetchService from "../../service/useFetchService";
import UserInfosModel from "../../dataModels/UserInfosModel";
import ActivityModel from "../../dataModels/ActivityModel";
import AverageSessionsModel from "../../dataModels/AverageSessionsModel";
import PerformanceModel from "../../dataModels/PerformanceModel";
import Navbar from "../../components/Navbar/Navbar";
import IconsBar from "../../components/IconsBar/IconsBar";
import Message from "../../components/Message/Message";
import Nutrients from "../../components/Nutrients/Nutrients";
import TodayScore from "../../components/TodayScore/TodayScore";
import Activity from "../../components/Activity/Activity";
import AverageSessions from "../../components/AverageSessions/AverageSessions";
import Performance from "../../components/Performance/Performance";
// import PropTypes from "prop-types";


/**
 * A function component that returns a JSX element.
 * Render the profile dashboard.
 * It's a statefull component.
 * 
 * @function
 * @name Dashboard
 * @kind function
 * @param {any} props
 * @returns {JSX.Element}
 */
const Dashboard = (props) => {
  const { id } = useParams();
  const uid = Number(id);

  /* useFetchService retrieves as an object all the data of the user from his ID */
  const data = useFetchService(uid);
  
 /* The data returned by useFetchService are formatted via data models for the components */
  const infosModel = new UserInfosModel(data.userData);
  const activityModel = new ActivityModel(data.userActivity);
  const averageSessionsModel = new AverageSessionsModel(data.userAverageSessions);
  const performanceModel = new PerformanceModel(data.userPerformance);

  /*Variables & states */
  const browserWidth = useBrowserWidth();
  const coeffDirecteur = 47.5 / 1024;
  const [navbarWidth, setNavbarWidth] = useState();
  const [outerRadiusPerformance, setOuterRadiusPerformance] = useState();
  const [outerRadiusScore, setOuterRadiusScore] = useState();
  const [innerRadiusScore, setInnerRadiusScore] = useState();
  const [activityLegendTop, setActivityLegendTop] = useState();
  const [activityFontSize, setActivityFontSize] = useState();
  const [activityLegendLeft, setActivityLegendLeft] = useState();


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

    if (browserWidth < 1300) {
      setOuterRadiusPerformance("40%");
    } else if (browserWidth >= 1300) {
      setOuterRadiusPerformance("60%");
    }

    if (browserWidth < 1280) {
      setInnerRadiusScore(60);
      setOuterRadiusScore(70);
    } else if (browserWidth >= 1280) {
      setInnerRadiusScore(80);
      setOuterRadiusScore(90);
    }

    if (browserWidth < 1280) {
      setInnerRadiusScore(60);
      setOuterRadiusScore(70);
      setActivityLegendTop(-70);
    } else if (browserWidth >= 1280) {
      setInnerRadiusScore(80);
      setOuterRadiusScore(90);
      setActivityLegendTop(-83);
      setActivityLegendLeft(290);
    }

    if (browserWidth < 1180) {
      setActivityFontSize(11);
      setActivityLegendTop(-60);
      setActivityLegendLeft(245);
    } else if (browserWidth >= 1180 && browserWidth < 1280) {
      setActivityLegendTop(-70);
      setActivityLegendLeft(260);
      setActivityFontSize(14);
    }

    if (browserWidth > 1440) {
      setActivityLegendLeft(320);
      setActivityFontSize(14);
    }

    const dataSource = document.querySelector(".dataSource");
    dataSource.style.color = "#FFF";

  }, [browserWidth, coeffDirecteur, infosModel.isMockedData]);

  return (
    <>
      <div className="container">
        <Navbar id={infosModel.id} navbarWidth={navbarWidth} />
        <IconsBar />
        <main className="main">
          {infosModel.hasError ||
          activityModel.hasError ||
          averageSessionsModel.hasError ||
          performanceModel.hasError ? (
            <p
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "#FF0000",
                fontSize: 26
              }}
            >
              An error has occurred: check the console, <br /><br />
              <Link className="error-link" to="/">or go to the home page and choose a user.</Link>
            </p>
          ) : (
            <>
              <Message infosModel={infosModel} />

              <section className="panorama">
                <Activity
                  activityModel={activityModel}
                  activityLegendTop={activityLegendTop}
                  activityLegendLeft={activityLegendLeft}
                  activityFontSize={activityFontSize}
                />

                <div className="wrapper-other-charts">
                  <AverageSessions
                    averageSessionsModel={averageSessionsModel}
                  />
                  <Performance
                    performanceModel={performanceModel}
                    outerRadiusPerformance={outerRadiusPerformance}
                  />
                  <TodayScore
                    infosModel={infosModel}
                    innerRadiusScore={innerRadiusScore}
                    outerRadiusScore={outerRadiusScore}
                  />
                </div>

                <Nutrients infosModel={infosModel} />
              </section>
            </>
          )}
        </main>
      </div>
    </>
  );
};

export default Dashboard;
