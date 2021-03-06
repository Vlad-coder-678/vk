import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import HeaderContainer from "./Components/Header/HeaderContainer";
import { Route } from "react-router-dom";
import News from "./Components/News/News.jsx";
import Photo from "./Components/Photo/Photo.jsx";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import UsersContainer from "./Components/Friends/UsersContainer";
import Login from "./Components/Login/Login.jsx";

const App = () => {
  return (
    <div className="App">
      <HeaderContainer />
      <div className="App__container">
        <div className="App__wrapper">
          <Navbar className="App__navbar" />
          <section className="App__content">
            <div className="Content__wrapper">
              <Route
                path="/profile/:userId?"
                render={() => <ProfileContainer />}
              />
              <Route path="/news" component={News} />
              <Route path="/dialogs" render={() => <DialogsContainer />} />
              <Route path="/photo" component={Photo} />
              <Route path="/friends" render={() => <UsersContainer />} />
              <Route path="/login" render={() => <Login />} />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default App;
