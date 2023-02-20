import React from "react";
import { useParams } from "react-router-dom";
import ActivityModel from "../../dataModels/ActivityModel";
import useFetchService from "../../service/useFetchService";

import {
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

const Activity = (props) => {

  const { id } = useParams();

  console.log('Valeur de id: ', id);

  const activity = useFetchService(id, "activity")

  const activityModel = new ActivityModel(activity.userActivity)
  
  console.log("Valeur de data fron Activity: ", activity.userActivity);

  return (
    <>
      <BarChart
        width={500}
        height={300}
        data={activityModel.sessions}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Legend verticalAlign="top" wrapperStyle={{ lineHeight: "40px" }} />
        <ReferenceLine y={0} stroke="#000" />
        <Brush dataKey="day" height={30} stroke="#8884d8" />
        <Bar dataKey="kilogram" fill="#8884d8" />
        <Bar dataKey="calories" fill="#82ca9d" />
      </BarChart>
    </>
  );
};

export default Activity;
