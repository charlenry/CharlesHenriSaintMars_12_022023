import "./TodayScore.scss";
import { PieChart, Pie } from "recharts";

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
      <PieChart width={250} height={263}>
        <Pie
          dataKey="todayScore"
          startAngle={90}
          endAngle={Math.round(((infosModel.todayScore.todayScore * 360) / 100) + 90)}
          data={[infosModel.todayScore]}
          cx={'50%'}
          cy={'50%'}
          innerRadius={80}
          outerRadius={90}
          fill="#ff0000"
        />
      </PieChart>
    </div>
  );
};

export default TodayScore;
