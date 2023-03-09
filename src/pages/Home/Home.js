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

  // console.log("Valeur de userData: ", infosModel.lastName);

  const browserWidth = useBrowserWidth();
  const [navbarWidth, setNavbarWidth] = useState();
  const coeffDirecteur = (62.5 - 47.5) / (1440 - 1024);

  useEffect(() => {
    // if (browserWidth < 1457) {
    //   setNavbarWidth(browserWidth - 20);
    // } else {
    //   setNavbarWidth(1440);
    // }

    const html = document.querySelector("html");
    let actualFontPercent = coeffDirecteur * browserWidth;

    if (browserWidth < 1440) {
      html.style.fontSize = `${actualFontPercent}%`;
    } else if (browserWidth >= 1440) {
      html.style.fontSize = "62.5%";
    }

  }, [browserWidth]);


  return (
    <>
      <div className="center">
        <div className="container">
          <Navbar id={infosModel.id} navbarWidth={navbarWidth} />
          <IconsBar />
          <main className="main">
            <Message infosModel={infosModel} />

            <section className="panorama">
              <Activity activityModel={activityModel} />

              <div className="wrapper-other-charts">
                <AverageSessions averageSessionsModel={averageSessionsModel} />
                <Performance performanceModel={performanceModel} />
                <TodayScore infosModel={infosModel} />
              </div>

              <Nutrients infosModel={infosModel} />
            </section>
          </main>
        </div>
      </div>
    </>
  );
};

export default Home;
