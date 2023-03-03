import "./TodayScore.scss";
import { PieChart, Pie, ResponsiveContainer } from "recharts";

const TodayScore = ({ infosModel }) => {
  return (
    <div className="score">
      <p>Score</p>
      <div className="label-score">
        <div className="line1">
          {Math.round(infosModel.todayScore.todayScore)}%
        </div>
        <div className="line2">
          de votre <br />
          objectif
        </div>
      </div>
      <ResponsiveContainer Width="100%" height="100%">
        <PieChart maxWidth={250} maxHeight={263}>
          <Pie
            dataKey="todayScore"
            startAngle={90}
            endAngle={Math.round(
              (infosModel.todayScore.todayScore * 360) / 100 + 90
            )}
            data={[infosModel.todayScore]}
            cx={"50%"}
            cy={"50%"}
            innerRadius={80}
            outerRadius={90}
            cornerRadius="50%"
            fill="#ff0000"
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TodayScore;
