import "./TodayScore.scss";
import { PieChart, Pie } from "recharts";

const TodayScore = ({ infosModel }) => {
  return (
    <div className="score">
      <p>Score</p>
      <div className="label-score">
        <div className="line1">{infosModel.todayScore.todayScore}%</div>
        <div className="line2">de votre <br/>objectif</div>
      </div>
      <PieChart width={400} height={400}>
        <Pie
          dataKey="todayScore"
          startAngle={80}
          endAngle={infosModel.todayScore.todayScore + 200}
          data={[infosModel.todayScore]}
          cx={120}
          cy={90}
          innerRadius={80}
          outerRadius={90}
          fill="#ff0000"
        />
      </PieChart>
    </div>
  );
};

export default TodayScore;
