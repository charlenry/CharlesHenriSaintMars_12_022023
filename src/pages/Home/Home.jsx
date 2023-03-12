import "./Home.scss";
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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

const Home = (props) => {
  const { id } = useParams();

  /* Service retoune sous forme d'objet toutes les données de l'utilisateur à partir de son ID */

  const mainInfo = useFetchService(id, "mainInfo");
  const infosModel = new UserInfosModel(mainInfo.userData);

  const activity = useFetchService(id, "activity");
  const activityModel = new ActivityModel(activity.userActivity);

  const averageSessions = useFetchService(id, "averageSessions");
  const averageSessionsModel = new AverageSessionsModel(
    averageSessions.userAverageSessions
  );

  const performance = useFetchService(id, "performance");
  const performanceModel = new PerformanceModel(performance.userPerformance);

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
      setActivityLegendLeft(300);
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
              An error has occurred: check the console.
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

export default Home;
