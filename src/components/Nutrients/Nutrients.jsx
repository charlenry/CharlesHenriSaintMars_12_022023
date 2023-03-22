import "./Nutrients.scss";
import { ReactComponent as CaloriesIcon } from "../../assets/icons/calories-icon.svg";
import { ReactComponent as ProteinsIcon } from "../../assets/icons/proteins-icon.svg";
import { ReactComponent as CarbsIcon } from "../../assets/icons/carbs-icon.svg";
import { ReactComponent as FatsIcon } from "../../assets/icons/fats-icon.svg";
import PropTypes from "prop-types";


/**
 * A function component that takes an object as a parameter.
 * Render the right vertical bar containing the nutrients values.
 * 
 * @component
 * @name Nutrients
 * @kind function
 * @param { Object} infosModel - Data model for main user info
 * @returns { JSX.Element}
 */
const Nutrients = ({ infosModel }) => {
  return (
    <div className="wrapper-nutrients">
      <div className="calories">
        <CaloriesIcon />
        <div className="text-container">
          {infosModel.isLloading ? (
            <p style={{ color: "#FF0000" }}>Loading...</p>
          ) : (
            <p className="value">{infosModel.calorieCount}kCal</p>
          )}
          <p className="title">Calories</p>
        </div>
      </div>
      <div className="proteins">
        <ProteinsIcon />
        <div className="text-container">
          {infosModel.isLloading ? (
            <p style={{ color: "#FF0000" }}>Loading...</p>
          ) : (
            <p className="value">{infosModel.proteinCount}g</p>
          )}
          <p className="title">Protéines</p>
        </div>
      </div>
      <div className="carbs">
        <CarbsIcon />
        <div className="text-container">
          {infosModel.isLloading ? (
            <p style={{ color: "#FF0000" }}>Loading...</p>
          ) : (
            <p className="value">{infosModel.carbohydrateCount}g</p>
          )}
          <p className="title">Glucides</p>
        </div>
      </div>
      <div className="fats">
        <FatsIcon />
        <div className="text-container">
          {infosModel.isLloading ? (
            <p style={{ color: "#FF0000" }}>Loading...</p>
          ) : (
            <p className="value">{infosModel.lipidCount}g</p>
          )}
          <p className="title">Lipides</p>
        </div>
      </div>
    </div>
  );
};


// PropTypes
Nutrients.propTypes = {
  infosModel: PropTypes.object.isRequired,
};

export default Nutrients;
