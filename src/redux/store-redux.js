import { createStore, combineReducers } from "redux";
import profileReducer from "./profile-reducer";
import messengerReducer from "./messenger-reducer";
import sidebarReducer from "./sidebar-reducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  messengerPage: messengerReducer,
  sidebar: sidebarReducer,
});
let store = createStore(reducers);

window.store = store;
export default store;
