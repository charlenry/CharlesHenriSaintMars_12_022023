import "./Navbar.scss";
import { NavLink } from "react-router-dom";
import { ReactComponent as Logo }from "../../assets/icons/logo.svg";
import PropTypes from "prop-types";

const Navbar = ({ id, navbarWidth }) => {
  
  return (
    <nav className="navbar" style={{ width: `${navbarWidth}px` }}>
      <NavLink to="/"><Logo className="logo" /></NavLink>
      <NavLink to="/">Accueil</NavLink>
      <NavLink to={`/user/${id}`}>Profil</NavLink>
      <NavLink to={`/user/${id}/settings`}>Réglage</NavLink>
      <NavLink to={`/user/${id}/community`}>Communauté</NavLink>
    </nav>
  );
};

Navbar.propTypes = {
  id: PropTypes.number,
  navbarWidth: PropTypes.number,
};

export default Navbar;
