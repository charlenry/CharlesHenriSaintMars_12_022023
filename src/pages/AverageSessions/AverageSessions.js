import "./AverageSessions.scss";
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

const AverageSessions = (props) => {
  const { id } = useParams();

  console.log("Valeur de id: ", id);

  const averageSessions = useFetchService(id, "averageSessions");

  const activityModel = new AverageSessionsModel(
    averageSessions.userAverageSessions
  );

  console.log("Valeur de data fron Average Sessions: ", activityModel.sessions);

  return (
    <div className="average-sessions">
      <div>Durée moyenne des sessions</div>
      <ResponsiveContainer width={'100%'} height={240}>
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

export default AverageSessions;
