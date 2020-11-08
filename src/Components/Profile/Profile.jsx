import React from "react";
import pr from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo.jsx";
import ProfileAvatar from "./ProfileAvatar/ProfileAvatar.jsx";
import PostsContainer from "./Posts/PostsContainer";

function Profile() {
  return (
    <div className={pr.Profile}>
      <div className={pr.Profile__content}>
        <div className={pr.Profile__left__content}>
          <ProfileAvatar />
        </div>
        <div className={pr.Profile__right__content}>
          <ProfileInfo />
          <PostsContainer />
        </div>
      </div>
    </div>
  );
}

export default Profile;
