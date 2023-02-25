import "./MenuIcons.scss";
import { ReactComponent as ZenIcon }from "../../assets/icons/zen-icon.svg";
import { ReactComponent as SwimmingIcon }from "../../assets/icons/swimming-icon.svg";
import { ReactComponent as CyclingIcon }from "../../assets/icons/cycling-icon.svg";
import { ReactComponent as WeightliftingIcon }from "../../assets/icons/weightlifting-icon.svg";

const MenuIcons = (props) => {
  return (
  <aside className="menu-icons">
    <div className="icons-container">
      <ZenIcon />
      <SwimmingIcon />
      <CyclingIcon />
      <WeightliftingIcon />
    </div>
    <p>Copyright SportSee 2020</p>
  </aside>
  );
};

export default MenuIcons;
