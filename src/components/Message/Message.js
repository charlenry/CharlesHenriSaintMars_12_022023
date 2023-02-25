import "./Message.scss";

const Message = ({infosModel}) => {
  return (
    <section className="message">
      <h1>Bonjour <span className="firstName">{infosModel.firstName}</span> </h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </section>
  );
};

export default Message;
