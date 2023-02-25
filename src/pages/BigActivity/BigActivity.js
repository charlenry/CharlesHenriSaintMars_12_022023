import "./BigActivity.scss";
import React from "react";
import { useParams } from "react-router-dom";
import ActivityModel from "../../dataModels/ActivityModel";
import useFetchService from "../../service/useFetchService";

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

const BigActivity = (props) => {
  const { id } = useParams();

  console.log("Valeur de id: ", id);

  const activity = useFetchService(id, "activity");

  const activityModel = new ActivityModel(activity.userActivity);

  console.log("Valeur de data fron Activity: ", activity.userActivity);

  return (
    <div className="Activity">
      <p>Durée moyenne des sessions</p>
      <ResponsiveContainer width="100%" aspect={3}>
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
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BigActivity;
