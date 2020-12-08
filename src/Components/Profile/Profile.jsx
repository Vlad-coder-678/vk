import React from "react";
import pr from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo.jsx";
import ProfileAvatar from "./ProfileAvatar/ProfileAvatar.jsx";
import PostsContainer from "./Posts/PostsContainer";
import Preloader from "../Preloader/Preloader.jsx";

const Profile = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div className={pr.Profile}>
      <div className={pr.Profile__content}>
        <div className={pr.Profile__left__content}>
          <ProfileAvatar profile={props.profile} />
        </div>
        <div className={pr.Profile__right__content}>
          <ProfileInfo
            profile={props.profile}
            status={props.status}
            updateStatus={props.updateStatus}
          />
          <PostsContainer profile={props.profile} />
        </div>
      </div> 
    </div>
  );
};

export default Profile;
