import "./BigPerformance.scss";
import React from "react";
import { useParams } from "react-router-dom";
import PerformanceModel from "../../dataModels/PerformanceModel";
import useFetchService from "../../service/useFetchService";
import PropTypes from "prop-types";
import {
  ResponsiveContainer,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
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
      <ResponsiveContainer width="100%" aspect={3}>
        <RadarChart outerRadius="58%" data={performanceModel.performanceData}>
          <PolarGrid gridType="polygon" radialLines={false} />
          <PolarAngleAxis
            dataKey="kind"
            tickLine={false}
            tick={{
              fill: "#fff",
              fontSize: 30,
              fontWeight: 500,
            }}
          />
          <Radar
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

Performance.propTypes = {
  performanceModel: PropTypes.object.isRequired
}

export default BigPerformance;
