import React from "react";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile.jsx";
import News from "./Components/News/News.jsx";
import Photo from "./Components/Photo/Photo.jsx";
import { Route } from "react-router-dom";
import "./App.css";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App__container">
        <div className="App__wrapper">
          <Navbar className="App__navbar" />
          <section className="App__content">
            <div className="Content__wrapper">
              <Route path="/profile" render={() => <Profile />} />
              <Route path="/news" component={News} />
              <Route path="/dialogs" render={() => <DialogsContainer />} />
              <Route path="/photo" component={Photo} />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
