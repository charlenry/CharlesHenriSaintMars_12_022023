import "./AverageSessions.scss";
import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const AverageSessions = ({averageSessionsModel}) => {
  return (
    <div className="average">
      <p>Durée moyenne des sessions</p>
      <ResponsiveContainer width='100%' height='100%'>
        <LineChart          
          data={averageSessionsModel.sessions}
          // height={250}
          width={260}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <XAxis
            dataKey="day"
            tick={{stroke: "white"}}
          />
          <YAxis dataKey="sessionLength" />
          <Tooltip />
          <Line type="monotone" dataKey="sessionLength" stroke="#fff" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AverageSessions;



