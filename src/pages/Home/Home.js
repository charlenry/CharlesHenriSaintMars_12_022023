import './Home.scss';
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useBrowserWidth from "../../service/useBrowserWidth";
import useFetchService from "../../service/useFetchService";
import UserInfosModel from "../../dataModels/UserInfosModel";
import ActivityModel from "../../dataModels/ActivityModel";
import Navbar from "../../components/Navbar/Navbar";
import MenuIcons from "../../components/MenuIcons/MenuIcons";


const Home = (props) => {
  const { id } = useParams();

  /* Service retoune sous forme d'objet toutes les données de l'utilisateur à partir de son ID */

  const infos = useFetchService(id, "mainInfo");
  const infosModel = new UserInfosModel(infos.userData);
  // console.log("Valeur de userData: ", infosModel.lastName);

  const browserWidth = useBrowserWidth();
  const [navbarWidth, setNavbarWidth] = useState();

  useEffect(() => {
    if (browserWidth < 1457) {
      setNavbarWidth(browserWidth - 20);
    } else {
      setNavbarWidth(1440);
    }
  }, [browserWidth])


  return (
    <>
      <div className="center">
        <div className="container">
          <Navbar id={infosModel.id} navbarWidth= {navbarWidth} />
          <MenuIcons />
          <main className="main">
            <section className="message">
              <h1>Bonjour {infosModel.firstName}</h1>
              <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            </section>

            <section className="panorama">
              <div className="wrapper-activity">
                <div className="Activity">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Labore est architecto atque optio quos rerum delectus
                  consequatur temporibus amet saepe. Tempore delectus possimus
                  iure nam ab fugit inventore atque dicta.
                </div>
              </div>

              <div className="wrapper-other-charts">
                <div className="Average">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Tenetur architecto earum commodi dolor, debitis quod iusto
                  omnis optio, nobis, magni praesentium reiciendis eius aperiam
                  a aliquid corrupti natus vero perspiciatis!
                </div>
                <div className="Performance">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Neque, accusantium, aperiam rem at ipsam fuga illo sint fugit
                  quaerat alias id modi quas delectus tenetur commodi nobis
                  eaque totam! Ipsa!
                </div>
                <div className="Score">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab
                  est earum dolore doloremque dolores, facilis totam dicta modi
                  sit impedit animi aut aperiam quam perspiciatis, quas
                  consectetur. Ad, nostrum voluptatum.
                </div>
              </div>

              <div className="wrapper-nutrients">
                <div className="Calories">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi ex quae ipsa inventore voluptates aliquid, nostrum
                  eius quidem tempora facilis quia neque aspernatur tempore
                  dolore sequi culpa saepe architecto sit.
                </div>
                <div className="Proteins">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Expedita quo quidem facere praesentium, eius, soluta obcaecati
                  pariatur ducimus quam quibusdam, quas nesciunt! Nisi, est
                  suscipit adipisci in eos officiis repudiandae!
                </div>
                <div className="Carbs">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                  error est eius doloribus. Autem vel dolorum ab, soluta
                  accusantium alias ullam veritatis, cupiditate perferendis modi
                  corrupti harum quam sint eos.
                </div>
                <div className="Fats">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                  libero sed, error exercitationem, ex accusantium recusandae
                  velit debitis vel delectus, laudantium temporibus consequatur
                  quam repellendus enim accusamus unde quis eveniet!
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
};

export default Home;
