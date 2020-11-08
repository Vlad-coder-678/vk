import profileReducer from "./profile-reducer.js";
import dialogsReducer from "./messenger-reducer.js";
import sidebarReducer from "./sidebar-reducer.js";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are you?", likesCount: 12 },
        { id: 2, message: "It's my first post", likesCount: 23 },
        { id: 3, message: "Hello, Sveta", likesCount: 21 },
        { id: 4, message: "Hello, Sasha", likesCount: 34 },
        { id: 5, message: "Hello, Kirill", likesCount: 10 },
      ],
      newPostText: "it-kamasutra.com",
    },
    messengerPage: {
      dialogs: [
        { id: 1, name: "Dima" },
        { id: 2, name: "Oleg" },
        { id: 3, name: "Sveta" },
        { id: 4, name: "Sasha" },
        { id: 5, name: "Kirill" },
      ],
      messages: [
        { id: 1, message: "Hello, Dima" },
        { id: 2, message: "Hello, Oleg" },
        { id: 3, message: "Hello, Sveta" },
        { id: 4, message: "Hello, Sasha" },
        // { id: 5, message: "Hello, Kirill" },
      ],
      newMessageBody: "",
    },
    sidebar: [],
  },

  _callSubscriber() {
    console.log("rerenderEntireTree is run");
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    // action = {'TEXT'}
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messengerPage = dialogsReducer(
      this._state.messengerPage,
      action
    );
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._callSubscriber(this._state);
  },
};

// window.store = store;
export default store;
