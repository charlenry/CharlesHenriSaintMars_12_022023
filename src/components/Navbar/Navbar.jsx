import "./Navbar.scss";
import { NavLink } from "react-router-dom";
import { ReactComponent as Logo }from "../../assets/icons/logo.svg";
import PropTypes from "prop-types";


/**
 * It's a function component that takes two parameters, id and navbarWidth.
 * Render a navbar on the top of the web application.
 * 
 * @component
 * @name Navbar
 * @kind function
 * @param { number } id - User ID
 * @param { number } navbarWidth - Navbar width
 * @returns { JSX.Element}
 */
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


// PropTypes
Navbar.propTypes = {
  id: PropTypes.number,
  navbarWidth: PropTypes.number,
};

export default Navbar;
