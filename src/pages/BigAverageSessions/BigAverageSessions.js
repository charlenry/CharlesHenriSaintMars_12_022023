import "./BigAverageSessions.scss";
import React from "react";
import { useParams } from "react-router-dom";
import AverageSessionsModel from "../../dataModels/AverageSessionsModel";
import useFetchService from "../../service/useFetchService";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const BigAverageSessions = (props) => {
  const { id } = useParams();

  console.log("Valeur de id: ", id);

  const averageSessions = useFetchService(id, "averageSessions");

  const activityModel = new AverageSessionsModel(
    averageSessions.userAverageSessions
  );

  console.log("Valeur de data fron Average Sessions: ", activityModel.sessions);

  return (
    <div className="AverageSessions">
      <p>Durée moyenne des sessions</p>
      <ResponsiveContainer width="100%" aspect={3} >
        <LineChart          
          data={activityModel.sessions}
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

export default BigAverageSessions;
