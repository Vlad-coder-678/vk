import { usersAPI } from "../api/api.js";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

let initialState = {
  users: [],
  pageSize: 30,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  isFollowingProgress: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          } else {
            return u;
          }
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          } else {
            return u;
          }
        }),
      };
    case SET_USERS:
      return { ...state, users: action.users };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };
    case SET_TOTAL_USERS_COUNT:
      return { ...state, totalUsersCount: action.totalUsersCount };
    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };
    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        isFollowingProgress: action.isFetching
          ? [...state.isFollowingProgress, action.userId]
          : state.isFollowingProgress.filter((id) => id !== action.userId),
      };
    default:
      return state;
  }
};

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });
export const setCurrentPageAC = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const setTotalUsersCountAC = (totalUsersCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  totalUsersCount,
});
export const toggleIsFetchingAC = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});
export const toggleFollowingProgressAC = (isFollowingProgress, userId) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFollowingProgress,
  userId,
});

export const getUsersTC = (currentPage, pageSize) => (dispatch) => {
  dispatch(toggleIsFetchingAC(true));
  usersAPI.getUsers(currentPage, pageSize).then((data) => {
    dispatch(toggleIsFetchingAC(false));
    dispatch(setUsersAC(data.items));
    dispatch(setTotalUsersCountAC(data.totalCount));
  });
};

export const followTC = (userId) => (dispatch) => {
  dispatch(toggleFollowingProgressAC(true, userId));
  usersAPI.follow(userId).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(followAC(userId));
    }
    dispatch(toggleFollowingProgressAC(false, userId));
  });
};

export const unfollowTC = (userId) => (dispatch) => {
  dispatch(toggleFollowingProgressAC(true, userId));
  usersAPI.unfollow(userId).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(unfollowAC(userId));
    }
    dispatch(toggleFollowingProgressAC(false, userId));
  });
};

export default usersReducer;
