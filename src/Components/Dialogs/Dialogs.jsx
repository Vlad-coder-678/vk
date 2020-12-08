import React from "react";
import DialogItem from "./DialogItem/DialogItem.jsx";
import MessageItem from "./MessageItem/MessageItem.jsx";
import dcss from "./Dialogs.module.css";
import { Redirect } from "react-router-dom";
import { Field, reduxForm } from "redux-form";

function Dialogs(props) {
  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody);
  };

  let dialogsElements = props.messengerPage.dialogs.map((d) => (
    <DialogItem id={d.id} key={d.id} name={d.name} />
  ));

  let messagesElements = props.messengerPage.messages.map((m) => (
    <MessageItem id={m.id} key={m.id} message={m.message} />
  ));

  if (!props.isAuth) {
    return <Redirect to={"/login"} />;
  }

  return (
    <section className={dcss.dialogs}>
      <div className={dcss.dialogs__wrapper}>
        <div className={dcss.dialogs__items}>{dialogsElements}</div>
        <div className={dcss.messages}>
          <div>{messagesElements}</div>
          <div>
            <AddMessageFormRedux onSubmit={addNewMessage} />
          </div>
        </div>
      </div>
    </section>
  );
}

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={"textarea"}
          name={"newMessageBody"}
          placeholder="Enter your message.."
        />
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  );
};

const AddMessageFormRedux = reduxForm({
  form: "dialogAddMessageForm",
})(AddMessageForm);

export default Dialogs;
