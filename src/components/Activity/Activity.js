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
} from "recharts";

const Activity = ({ activityModel }) => {
  return (
    <div className="wrapper-activity">
      <div className="activity">
        <p>Activité quotidienne</p>
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
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="kilogram" fill="#282D30" barSize={7} radius={[20, 20, 0, 0]} />
          <Bar dataKey="calories" fill="#E60000" barSize={7} radius={[20, 20, 0, 0]}/>
          <Legend />
        </BarChart>
      </div>
    </div>
  );
};


const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    // console.log('Valeur de active: ', active);
    // console.log('Valeur de payload: ', payload);
    // console.log('Valeur de label: ', label);
    return (
      <div className="custom-tooltip">
        <p className="label">{`${payload[0].value}kg`}</p>
        <p className="label">{`${payload[1].value}kcal`}</p>
      </div>
    );
  }

  return null;
};

export default Activity;
