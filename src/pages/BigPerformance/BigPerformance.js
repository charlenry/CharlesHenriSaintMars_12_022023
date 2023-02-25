import "./BigPerformance.scss";
import React from "react";
import { useParams } from "react-router-dom";
import PerformanceModel from "../../dataModels/PerformanceModel";
import useFetchService from "../../service/useFetchService";
import {
  ResponsiveContainer,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

const BigPerformance = (props) => {
  const { id } = useParams();

  console.log("Valeur de id: ", id);

  const performance = useFetchService(id, "performance");

  const performanceModel = new PerformanceModel(performance.userPerformance);

  console.log(
    "Valeur de data fron Average Sessions: ",
    performanceModel.performanceData
  );

  return (
    <div className="Performance">
      <ResponsiveContainer width="100%" aspect={3} >
        <RadarChart
          cx={"50%"}
          cy={"50%"}
          data={performanceModel.performanceData}
        >
          <PolarGrid />
          <PolarAngleAxis dataKey="kind" />
          <PolarRadiusAxis />
          <Radar
            name="Performance"
            dataKey="value"
            stroke="#FF0101"
            fill="#FF0101"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BigPerformance;
