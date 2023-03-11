import "./Activity.scss";
import React from "react";
import PropTypes from "prop-types";
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

const Activity = ({ activityModel, activityFontSize, activityLegendTop, activityLegendLeft }) => {
  return activityModel.isLoading ? (
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
    <div className="wrapper-activity">
      <div className="activity">
        <p>Activité quotidienne</p>
        <ResponsiveContainer width="100%" aspect={4}>
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
              tickMargin={5}
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
              wrapperStyle={{
                top: activityLegendTop,
                left: activityLegendLeft,
                fontSize: activityFontSize,
              }}
              iconType="circle"
              iconSize={8}
              formatter={renderColorfulLegendText}
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

const renderColorfulLegendText = (value, entry) => {
  // const { color } = entry;
  // console.log(value);
  // console.log(entry);

  return <span style={{ color: "#000" }}>{value}</span>;
};

Activity.propTypes = {
  activityModel: PropTypes.object.isRequired,
  activityFontSize: PropTypes.number,
  activityLegendTop: PropTypes.number,
  activityLegendLeft: PropTypes.number,
};

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
};

export default Activity;
