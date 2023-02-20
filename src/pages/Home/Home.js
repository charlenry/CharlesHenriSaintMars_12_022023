import React from "react";
// import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetchService from "../../service/useFetchService";
import UserInfosModel from "../../dataModels/UserInfosModel";
// import ActivityModel from "../../dataModels/ActivityModel";

const Home = (props) => {
  const { id } = useParams();

  /* Service retoune sous forme d'objet toutes les données de l'utilisateur à partir de son ID */

  const infos = useFetchService(id, "mainInfo")
  const infosModel = new UserInfosModel(infos.userData)

  console.log('Valeur de userData: ', infosModel.lastName);

  return (
    <>
      <div>Home</div>
      <p>Nom: {infosModel.lastName}</p>
      <p>Prénom: {infosModel.firstName}</p>
      <p>Age : {infosModel.age}</p>
      <p>Score du jour: {infosModel.todayScore.todayScore}%</p>
      <p>Mes calories: {infosModel.calorieCount}kCal</p>
      <p>Mes protéïne: {infosModel.proteinCount}g</p>
      <p>Mes glucides: {infosModel.carbohydrateCount}g</p>
      <p>Mes lipides: {infosModel.lipidCount}g</p>
    </>
  );
};

export default Home;
