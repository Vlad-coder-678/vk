import React from "react";
import pr from "./ProfileAvatar.module.css";

function ProfileAvatar() {
  return (
    <div className={pr.ProfileAvatar}>
      <div className={pr.Avatar__wrapper}>
        <div className={pr.Avatar__content}>
          <div className={pr.Profile__avatar}></div>
        </div>
      </div>
    </div>
  );
}

export default ProfileAvatar;
