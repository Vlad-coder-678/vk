import React from "react";
import pcss from "./Post.module.css";

function Post(props) {
  return (
    <div className={pcss.Post__old}>
      <p>{props.message}</p>
    </div>
  );
}

export default Post;
