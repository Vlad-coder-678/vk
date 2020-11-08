import React from "react";
import DialogItem from "./DialogItem/DialogItem.jsx";
import MessageItem from "./MessageItem/MessageItem.jsx";
import dcss from "./Dialogs.module.css";

function Dialogs(props) {
  let dialogsElements = props.messengerPage.dialogs.map((d) => (
    <DialogItem id={d.id} key={d.id} name={d.name} />
  ));
  let messagesElements = props.messengerPage.messages.map((m) => (
    <MessageItem id={m.id} key={m.id} message={m.message} />
  ));
  let newMessageBody = props.messengerPage.newMessageBody;

  let onSendMessageClick = () => {
    props.sendMessage();
  };
  let onNewMessageChange = (event) => {
    let body = event.target.value;
    props.updateNewMessageBody(body);
  };
  return (
    <section className={dcss.dialogs}>
      <div className={dcss.dialogs__wrapper}>
        <div className={dcss.dialogs__items}>{dialogsElements}</div>
        <div className={dcss.messages}>
          <div>{messagesElements}</div>
          <div>
            <div>
              <textarea
                onChange={onNewMessageChange}
                value={newMessageBody}
                placeholder="Enter your text.."
              ></textarea>
            </div>
            <div>
              <button onClick={onSendMessageClick}>Send</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Dialogs;
