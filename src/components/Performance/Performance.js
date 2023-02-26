import "./Performance.scss";
import React from "react";
import {
  ResponsiveContainer,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

const Performance = ({performanceModel}) => {
  return (
    <div className="performance">
      <ResponsiveContainer minWidth={250}>
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

export default Performance;
