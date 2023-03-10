import "./Navbar.scss";
import { NavLink } from "react-router-dom";
import { ReactComponent as Logo }from "../../assets/icons/logo.svg";
import PropTypes from "prop-types";

const Navbar = ({ id, navbarWidth }) => {
  return (
    <nav className="navbar" style={{ width: `${navbarWidth}px` }}>
      <Logo className="logo" />
      <NavLink to={`/user/${id}`}>Accueil</NavLink>
      <NavLink to="">Profil</NavLink>
      <NavLink to="">Réglage</NavLink>
      <NavLink to="">Communauté</NavLink>
    </nav>
  );
};

Navbar.propTypes = {
  id: PropTypes.number,
  navbarWidth: PropTypes.number,
};

export default Navbar;
