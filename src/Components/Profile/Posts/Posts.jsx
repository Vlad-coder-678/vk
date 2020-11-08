import React from "react";
import Post from "./Post/Post.jsx";
import pcss from "./Posts.module.css";

function Posts(props) {
  let state = props.state.profilePage;

  let postsElements = state.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));

  let newPostElement = React.createRef(); // создаём ссылку на объект

  let onAddPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={pcss.Posts}>
      <div className={pcss.Post__new}>
        <input
          ref={newPostElement}
          onChange={onPostChange}
          value={state.newPostText}
          placeholder="Что у вас нового?"
        />
        {/* обoзначаем необходимый объект ссылкой */}
        <button onClick={onAddPost} type="submit"></button>
      </div>
      {postsElements}
    </div>
  );
}

export default Posts;
