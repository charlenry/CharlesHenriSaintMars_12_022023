import "./Activity.scss";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const Activity = ({ activityModel }) => {
  return (
    <div className="wrapper-activity">
      <div className="activity">
        <p>Activité quotidienne</p>
        <ResponsiveContainer width="100%" height={180} >
          <BarChart
            width={835}
            height={190}
            data={activityModel.sessions}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid horizontal="true" vertical="" />
            <XAxis dataKey="day" tickLine={false} />
            <YAxis orientation="right" tickCount={3} axisLine={false} />
            <Tooltip content={<CustomTooltip />} wrapperStyle={{ outline: "none" }}  />
            <Bar
              name="Poids (kg)"
              dataKey="kilogram"
              fill="#282D30"
              barSize={7}
              radius={[20, 20, 0, 0]}
            />
            <Bar
              name="Calories brûlées (kCal)"
              dataKey="calories"
              fill="#E60000"
              barSize={7}
              radius={[20, 20, 0, 0]}
            />
            <Legend wrapperStyle={{top: -83, left: 260, fontSize: 14}} iconType="circle" iconSize={8} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    // console.log('Valeur de active: ', active);
    // console.log('Valeur de payload: ', payload);
    return (
      <div className="custom-tooltip">
        <p className="tooltip-value">{`${payload[0].value}kg`}</p>
        <p className="tooltip-value">{`${payload[1].value}kcal`}</p>
      </div>
    );
  }

  return null;
};

export default Activity;
