import "./Message.scss";
import PropTypes from "prop-types";

const Message = ({infosModel}) => {
  return (
    <section className="message">
      <h1>Bonjour <span className="firstName">{infosModel.firstName}</span> </h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </section>
  );
};

Message.propTypes = {
  infosModel: PropTypes.object.isRequired,
};

export default Message;
