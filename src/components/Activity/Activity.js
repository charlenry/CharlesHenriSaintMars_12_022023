import "./Activity.scss";
import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  Brush,
  ReferenceLine,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const Activity = ({ activityModel }) => {
  return (
    <div className="wrapper-activity">
      <div className="activity">
        <p>Activité quotidienne</p>
        <BarChart
          width={702}
          height={145}
          data={activityModel.sessions}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid horizontal="true" vertical="" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="kilogram" fill="#282D30" barSize={7} />
          <Bar dataKey="calories" fill="#E60000" barSize={7} />
          <Legend />
        </BarChart>
      </div>
    </div>
  );
};

export default Activity;
