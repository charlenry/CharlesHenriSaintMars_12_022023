import "./Message.scss";
import PropTypes from "prop-types";


/**
 * A function component that takes an object as a parameter.
 * Render a message for the user in the dashboard.
 * 
 * @constant
 * @name Message
 * @kind function
 * @type {{ ({ infosModel }: { infosModel: object; }): JSX.Element; 
 * propTypes: { infosModel: PropTypes.Validator<object>; }; }}
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

Message.propTypes = {
  infosModel: PropTypes.object.isRequired,
};

export default Message;
