import React from "react";
import { useParams } from "react-router-dom";
import PerformanceModel from "../../dataModels/PerformanceModel";
import useFetchService from "../../service/useFetchService";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

const Performance = (props) => {
  const { id } = useParams();

  console.log("Valeur de id: ", id);

  const performance = useFetchService(id, "performance");

  const performanceModel = new PerformanceModel(performance.userPerformance);

  console.log(
    "Valeur de data fron Average Sessions: ",
    performanceModel.performanceData
  );

  return (
    <>
      <RadarChart
        cx={300}
        cy={300}
        outerRadius={150}
        width={550}
        height={500}
        data={performanceModel.performanceData}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="kind" />
        <PolarRadiusAxis />
        <Radar
          name="RadarChart"
          dataKey="value"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
      </RadarChart>
    </>
  );
};

export default Performance;
