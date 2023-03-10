import "./Performance.scss";
import React from "react";
import PropTypes from "prop-types";
import {
  ResponsiveContainer,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

const Performance = ({ performanceModel, outerRadiusPerformance }) => {
  return (
    <div className="performance">
      <ResponsiveContainer Width="100%" height="100%">
        <RadarChart
          cx="48%"
          cy="50%"
          outerRadius={outerRadiusPerformance}
          data={performanceModel.performanceData}
        >
          <PolarGrid />
          <PolarAngleAxis
            dataKey="kind"
            tick={{
              fontSize: 12,
              fontWeight: 500,
              fill: "#fff",
            }}
          />
          <PolarRadiusAxis
            tickCount={6}
            // domain={['dataMin', 'dataMax']}
            axisLine={false}
            tick={false}
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
  performanceModel: PropTypes.object.isRequired,
  outerRadiusPerformance: PropTypes.string,
};

export default Performance;
