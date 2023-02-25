import "./Nutrients.scss";
import { ReactComponent as CaloriesIcon } from "../../assets/icons/calories-icon.svg";
import { ReactComponent as ProteinsIcon } from "../../assets/icons/proteins-icon.svg";
import { ReactComponent as CarbsIcon } from "../../assets/icons/carbs-icon.svg";
import { ReactComponent as FatsIcon } from "../../assets/icons/fats-icon.svg";

const Nutrients = ({ infosModel }) => {
  return (
    <div className="wrapper-nutrients">
      <div className="calories">
        <CaloriesIcon />
        <div className="text-container">
          <p className="value">{infosModel.calorieCount}kCal</p>
          <p className="title">Calories</p>
        </div>
      </div>
      <div className="proteins">
        <ProteinsIcon />
        <div className="text-container">
          <p className="value">{infosModel.proteinCount}g</p>
          <p className="title">Protéines</p>
        </div>
      </div>
      <div className="carbs">
        <CarbsIcon />
        <div className="text-container">
          <p className="value">{infosModel.carbohydrateCount}g</p>
          <p className="title">Glucides</p>
        </div>
      </div>
      <div className="fats">
        <FatsIcon />
        <div className="text-container">
          <p className="value">{infosModel.lipidCount}g</p>
          <p className="title">Lipides</p>
        </div>
      </div>
    </div>
  );
};

export default Nutrients;
