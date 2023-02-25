import './BigTodayScore.scss';
import { useParams } from "react-router-dom";
import useFetchService from "../../service/useFetchService";
import UserInfosModel from "../../dataModels/UserInfosModel";
import { PieChart, Pie } from "recharts";

const BigTodayScore = (props) => {
  const { id } = useParams();
  const mainInfo = useFetchService(id, "mainInfo");
  const infosModel = new UserInfosModel(mainInfo.userData);

  return (
    <div className="Score">
      <p>Score</p>
      <div className="LabelScore">
        <div className="Line1">{infosModel.todayScore.todayScore}%</div>
        <div className="Line2">de votre <br/>objectif</div>
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
}

export default BigTodayScore;