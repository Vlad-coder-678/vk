import React from "react";
import Post from "./Post/Post.jsx";
import pcss from "./Posts.module.css";
import { Field, reduxForm } from "redux-form";
import userPhoto from "../../../assets/images/user.png";

const Posts = (props) => {
  let postsElements = props.state.profilePage.posts.map((p) => (
    <Post {...props} key={p.id} message={p.message} likesCount={p.likesCount} />
  ));

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  };

  return (
    <div className={pcss.posts}>
      <AddNewPostReduxForm {...props} onSubmit={onAddPost} />
      {postsElements}
    </div>
  );
};

let AddNewPostForm = (props) => {
  return (
    <form className={pcss.box_new_post} onSubmit={props.handleSubmit}>
      <div className={pcss.box_avatar}>
        <img
          className={pcss.new_post_avatar}
          src={
            props.profile.photos.small != null
              ? props.profile.photos.small
              : userPhoto
          }
          alt={"avatar"}
        />
      </div>
      <div className={pcss.box_message}>
        <Field
          component={"textarea"}
          name={"newPostText"}
          className={pcss.new_post_message}
          placeholder={"Что у вас нового?"}
          // validate={[required, maxLength15, minLength2]}
        />
      </div>
      {/* <div className={pcss.box_button}>
        <button className={pcss.new_post_button_add_post}></button>
      </div> */}
    </form>
  );
};

let AddNewPostReduxForm = reduxForm({ form: "ProfileAddNewPostForm" })(
  AddNewPostForm
);

export default Posts;
