import "./TodayScore.scss";
import { PieChart, Pie, ResponsiveContainer } from "recharts";
import PropTypes from "prop-types";

const TodayScore = ({ infosModel, innerRadiusScore, outerRadiusScore }) => {
  return infosModel.isLoading ? (
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
            innerRadius={innerRadiusScore}
            outerRadius={outerRadiusScore}
            cornerRadius="50%"
            fill="#ff0000"
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

TodayScore.propTypes = {
  infosModel: PropTypes.object.isRequired,
  innerRadiusScore: PropTypes.number,
  outerRadiusScore: PropTypes.number,
};

export default TodayScore;
