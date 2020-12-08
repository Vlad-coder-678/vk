import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/images/user.png";
import { NavLink } from "react-router-dom";

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div>
        {pages.map((p) => {
          return (
            <span
              key={p}
              className={
                props.currentPage === p ? styles.selectedPage : styles.page
              }
              onClick={(e) => {
                props.onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
      </div>
      <div className={styles.usersList}>
        {props.users.map((u) => (
          <div key={u.id} className={styles.userDiv}>
            <div className={styles.row}>
              <div>
                <NavLink to={"/profile/" + u.id}>
                  <img
                    src={u.photos.small != null ? u.photos.small : userPhoto}
                    alt={"userPhoto"}
                  />
                </NavLink>
              </div>
              <div>
                {u.followed ? (
                  <button
                    disabled={props.isFollowingProgress.some(
                      (id) => id === u.id
                    )}
                    onClick={() => {
                      props.unfollowTC(u.id);
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    disabled={props.isFollowingProgress.some(
                      (id) => id === u.id
                    )}
                    onClick={() => {
                      props.followTC(u.id);
                    }}
                  >
                    Follow
                  </button>
                )}
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.row}>
                <div>{u.name}</div>
                <div>{u.status}</div>
              </div>
              <div className={styles.row}>
                <div>{"u.location.country"}</div>
                <div>{"u.location.city"}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
