import "./IconsBar.scss";
import { ReactComponent as ZenIcon }from "../../assets/icons/zen-icon.svg";
import { ReactComponent as SwimmingIcon }from "../../assets/icons/swimming-icon.svg";
import { ReactComponent as CyclingIcon }from "../../assets/icons/cycling-icon.svg";
import { ReactComponent as WeightliftingIcon }from "../../assets/icons/weightlifting-icon.svg";
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";


/**
 * A function component that returns a JSX element.
 * Render a left aside icons bar.
 * 
 * @function
 * @name IconsBar
 * @kind function
 * @param {any} props
 * @returns {JSX.Element}
 */
const IconsBar = (props) => {
  return (
  <aside className="icons-bar">
    <div className="icons-container">
      <Link to="#"><ZenIcon /></Link>
      <Link to="#"><SwimmingIcon /></Link>
      <Link to="#"><CyclingIcon /></Link>
      <Link to="#"> <WeightliftingIcon /></Link>
    </div>
    <p>Copyright SportSee 2023</p>
  </aside>
  );
};

export default IconsBar;
