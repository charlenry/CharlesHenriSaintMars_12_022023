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
  ResponsiveContainer,
} from "recharts";

const Activity = ({ activityModel }) => {
  return (
    <div className="wrapper-activity">
      <div className="activity">
        <p>Activité quotidienne</p>
        <ResponsiveContainer width="100%" height={180}>
          <BarChart
            width={835}
            height={190}
            data={activityModel.sessions}
            margin={{ left: 45 }}
            barGap={7}
          >
            <CartesianGrid
              horizontal="true" 
              vertical={false}
              strokeDasharray="4"
            />
            <XAxis
              dataKey="day"
              tickLine={false}
              tickCount={7}
              axisLine={true}
              type="number"
              domain={["dataMin", "dataMax"]} 
              margin={{ left: 50 }}
              tickMargin={16}
              padding={{ left: 25, right: 25 }}
            />
            <YAxis
              yAxisId="kilogram"
              orientation="right"
              type="number"
              allowDecimals={false}
              domain={["dataMin-2", "dataMax+2"]}
              tickCount={7}
              axisLine={false}
              tickLine={false}
              tickMargin={30}
            />
            <YAxis
              yAxisId="calories"
              type="number"
              allowDecimals={false}
              orientation="left"
              tickMargin={40}
              hide={true}
            />
            <Tooltip
              content={<CustomTooltip />}
              wrapperStyle={{ outline: "none" }}
            />
            <Bar
              yAxisId="kilogram"
              name="Poids (kg)"
              dataKey="kilogram"
              fill="#282D30"
              barSize={7}
              radius={[20, 20, 0, 0]}
            />
            <Bar
              yAxisId="calories"
              name="Calories brûlées (kCal)"
              dataKey="calories"
              fill="#E60000"
              barSize={7}
              radius={[20, 20, 0, 0]}
            />
            <Legend
              wrapperStyle={{ top: -83, left: 260, fontSize: 14 }}
              iconType="circle"
              iconSize={8}
            />
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
      <div className="activity-tooltip">
        <p className="activity-tooltip__value">{`${payload[0].value}kg`}</p>
        <p className="activity-tooltip__value">{`${payload[1].value}kcal`}</p>
      </div>
    );
  }

  return null;
};


export default Activity;
