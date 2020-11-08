import React from "react";
import mcss from "./MessageItem.module.css";
import { Route } from "react-router-dom";

function MessageItem(props) {
  return (
    <Route path={"/dialogs/" + props.id} className={mcss.message__item}>
      <div className={mcss.message}>{props.message}</div>
    </Route>
  );
}

export default MessageItem;
