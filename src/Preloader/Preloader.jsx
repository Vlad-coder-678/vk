import React from "react";
import gif from "../../assets/images/loader.gif";
import pcss from "./Preloader.module.css";

const Preloader = (props) => {
  return (
    <div className={pcss.wrapper}>
      <img src={gif} alt={"loader"} className={pcss.gif} />
    </div>
  );
};

export default Preloader;
