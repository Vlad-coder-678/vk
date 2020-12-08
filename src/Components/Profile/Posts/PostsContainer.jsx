import Posts from "./Posts.jsx";
import { connect } from "react-redux";
import { addPostAC } from "../../../redux/profile-reducer.js";

const mapStateToProps = (state) => {
  return {
    state: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (newPostText) => {
      dispatch(addPostAC(newPostText));
    },
  };
};

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;
