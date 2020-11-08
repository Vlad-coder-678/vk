import React from "react";
import pr from "./ProfileInfo.module.css";

function ProfileInfo(props) {
  return (
    <div className={pr.Profile__info}>
      <div className={pr.Title__box}>
        <div className={pr.Title__status}>online</div>
        <h1 className={pr.Title}>Владимир Мезенцев</h1>
        <div className={pr.Title__profileStatus}>изменить статус</div>
      </div>
      <div className={pr.ProfileInfo__short}>
        <div className={pr.ProfileInfo__row}>
          <div className={pr.Info__label}>
            <p>День рождения:</p>
          </div>
          <div className={pr.Info__text}>
            <p>24 ноября</p>
          </div>
        </div>
        <div className={pr.ProfileInfo__row}>
          <div className={pr.Info__label}>
            <p>Город:</p>
          </div>
          <div className={pr.Info__text}>
            <p>Москва</p>
          </div>
        </div>
        <div className={pr.ProfileInfo__row}>
          <div className={pr.Info__label}>
            <p>Образование:</p>
          </div>
          <div className={pr.Info__text}>
            <p>МГУ</p>
          </div>
        </div>
        <div className={pr.ProfileInfo__row}>
          <div className={pr.Info__label}>
            <p>Сайт:</p>
          </div>
          <div className={pr.Info__text}>
            <p>yandex.ru</p>
          </div>
        </div>
      </div>
      <div className={pr.Counts__box}>
        <div className={pr.Counts__item}>
          <p>100</p>
          <span>друзей</span>
        </div>
        <div className={pr.Counts__item}>
          <p>10</p>
          <span>подписчиков</span>
        </div>
        <div className={pr.Counts__item}>
          <p>15000</p>
          <span>фотографий</span>
        </div>
        <div className={pr.Counts__item}>
          <p>15</p>
          <span>отметок</span>
        </div>
        <div className={pr.Counts__item}>
          <p>150</p>
          <span>видеозаписей</span>
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;
