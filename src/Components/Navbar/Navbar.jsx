import React from "react";
import n from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <section className={n.Navbar}>
      <nav className={n.Navbar__nav}>
        <NavLink to="/profile" className={n.Navbar__a}>
          <span>Моя станица</span>
        </NavLink>
        <NavLink to="/news" className={n.Navbar__a}>
          <span>Новости</span>
        </NavLink>
        <NavLink to="/dialogs" className={n.Navbar__a}>
          <span>Мессенджер</span>
        </NavLink>
        <NavLink to="/friends" className={n.Navbar__a}>
          <span>Друзья</span>
        </NavLink>
        {/* <a href="#" className={n.Navbar__a}>
          <span>Сообщества</span>
        </a>
        <a href="#" className={n.Navbar__a}>
          <span>Фотографии</span>
        </a>
        <a href="#" className={n.Navbar__a}>
          <span>Музыка</span>
        </a>
        <a href="#" className={n.Navbar__a}>
          <span>Видео</span>
        </a>
        <a href="#" className={n.Navbar__a}>
          <span>Клипы</span>
        </a>
        <a href="#" className={n.Navbar__a}>
          <span>Игры</span>
        </a> */}
      </nav>
    </section>
  );
}

export default Navbar;
