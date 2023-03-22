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


/**
 * A function component that takes in two parameters and returns a JSX element.
 * Render a radar chart in the dashboard.
 * 
 * @component
 * @name Performance
 * @kind function
 * @param { Object} performanceModel - Data model for data of performance
 * @param {string} outerRadiusPerformance - Outer radius for the radar chart
 * @returns { JSX.Element }
 * 
 */
const Performance = ({ performanceModel, outerRadiusPerformance }) => {
  return performanceModel.isLoading ? (
    <p
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        color: '#FF0000'
      }}
    >
      Loading...
    </p>
  ) : (
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
