import React from "react";
import dcss from "./DialogItem.module.css";
import { NavLink } from "react-router-dom";

function DialogItem(props) {
  return (
    <NavLink to={"/dialogs/" + props.id} className={dcss.dialog__item}>
      <div className={dcss.dialog__title}>{props.name}</div>
    </NavLink>
  );
}
export default DialogItem;
