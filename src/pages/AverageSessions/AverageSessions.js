import React from "react";
import { useParams } from "react-router-dom";
import AverageSessionsModel from "../../dataModels/AverageSessionsModel";
import useFetchService from "../../service/useFetchService";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const AverageSessions = (props) => {
  const { id } = useParams();

  console.log("Valeur de id: ", id);

  const averageSessions = useFetchService(id, "averageSessions");

  const activityModel = new AverageSessionsModel(averageSessions.userAverageSessions);

  console.log("Valeur de data fron Average Sessions: ", activityModel.sessions);

  return (
    <>
      <LineChart
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
        <YAxis dataKey="sessionLength" />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="sessionLength"
          stroke="#8884d8"
          
        />
        {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
      </LineChart>
    </>
  );
};

export default AverageSessions;
