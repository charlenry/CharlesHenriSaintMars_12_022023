import "./AverageSessions.scss";
import React from "react";
import PropTypes from "prop-types";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const AverageSessions = ({ averageSessionsModel }) => {
  return averageSessionsModel.isLoading ? (
    <p
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        color: "#FF0000",
      }}
    >
      Loading...
    </p>
  ) : (
    <div className="average">
      <p>
        Durée moyenne des <br /> sessions
      </p>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={averageSessionsModel.sessions}
          // height={250}
          width={260}
          margin={{
            top: 50,
            right: 15,
            left: -45,
            bottom: 5,
          }}
          onMouseMove={(e) => {
            // console.log(e);

            if (e.isTooltipActive === true) {
              let averageDiv = document.querySelector(".average");
              let averageDivWidth = averageDiv.clientWidth;
              let coordinateXPercent = Math.round(
                (e.activeCoordinate.x / averageDivWidth) * 100
              );
              averageDiv.style.backgroundImage = `linear-gradient(
                to right, 
                #ff0000 ${coordinateXPercent}%, 
                #d60000 ${coordinateXPercent}%
              )`;
            }
          }}
        >
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tick={{ stroke: "#FFB0B0", strokeWidth: 1 }}
          />
          <YAxis
            dataKey="sessionLength"
            axisLine={false}
            tickLine={false}
            tick={false}
          />
          <Tooltip
            content={<CustomTooltip />}
            wrapperStyle={{ outline: "none" }}
          />
          <Line
            type="monotone"
            dataKey="sessionLength"
            dot={false}
            activeDot={{
              stroke: "rgba(255, 255, 255, 0.3)",
              strokeWidth: 10,
              r: 5,
            }}
            stroke="#FFF"
            strokeWidth={1.2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    // console.log("Valeur de active: ", active);
    // console.log("Valeur de payload: ", payload);
    return (
      <div className="average-tooltip">
        <p className="average-tooltip__value">{`${payload[0].value} min`}</p>
      </div>
    );
  }

  return null;
};

AverageSessions.propTypes = {
  averageSessionsModel: PropTypes.object.isRequired,
};

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
};

export default AverageSessions;
