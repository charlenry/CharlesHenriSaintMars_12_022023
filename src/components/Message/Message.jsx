import "./Message.scss";
import PropTypes from "prop-types";


/**
 * A function component that takes an object as a parameter.
 * Render a message for the user in the dashboard.
 * 
 * @component
 * @name Message
 * @kind function
 * @param { Object } infosModel - Data model for main user info
 * @returns {JSX.Element}
 */
const Message = ({ infosModel }) => {
  return (
    <section className="message">
      <h1>Bonjour <span className="firstName">{infosModel.firstName}</span></h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      {infosModel.isMockedData ? (
        <div className="dataSource">Data comes from mocked data</div>
      ) : (
        <div className="dataSource">Data comes from the API server</div>
      )}
    </section>
  );
};


// PropTypes
Message.propTypes = {
  infosModel: PropTypes.object.isRequired,
};

export default Message;
