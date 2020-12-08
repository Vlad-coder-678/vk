import React from "react";
import pr from "./ProfileAvatar.module.css";
import userPhoto from "../../../assets/images/user.png";

const ProfileAvatar = (props) => {
  return (
    <div className={pr.ProfileAvatar}>
      <div className={pr.Avatar__wrapper}>
        <div className={pr.Avatar__content}>
          <div className={pr.Profile__avatar}>
            <img
              src={
                props.profile.photos.large != null
                  ? props.profile.photos.large
                  : userPhoto
              }
              alt={"small_avatar"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileAvatar;
