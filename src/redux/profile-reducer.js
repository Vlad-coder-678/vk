import { usersAPI, profileApi } from "../api/api";

const ADD_POST = "ADD_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

let initialState = {
  posts: [
    { id: 1, message: "Hi, how are you?", likesCount: 12 },
    { id: 2, message: "It's my first post", likesCount: 23 },
    { id: 3, message: "Hello, Sveta", likesCount: 21 },
    { id: 4, message: "Hello, Sasha", likesCount: 34 },
    { id: 5, message: "Hello, Kirill", likesCount: 10 },
  ],
  profile: null,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: action.newPostText,
        likesCount: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: "",
      };
    }
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }
    case SET_STATUS: {
      return { ...state, status: action.status };
    }
    default:
      return state;
  }
};

export const addPostAC = (newPostText) => ({
  type: ADD_POST,
  newPostText,
});
export const setUserProfileAC = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});
export const getUserProfileTC = (userId) => (dispatch) => {
  usersAPI.getProfile(userId).then((response) => {
    dispatch(setUserProfileAC(response.data));
  });
};
export const setStatusAC = (status) => ({
  type: SET_STATUS,
  status,
});
export const getStatusTC = (userId) => (dispatch) => {
  profileApi.getStatus(userId).then((response) => {
    dispatch(setStatusAC(response.data));
  });
};
export const updateStatusTC = (status) => (dispatch) => {
  profileApi.updateStatus(status).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(setStatusAC(status));
    }
  });
};

export default profileReducer;
