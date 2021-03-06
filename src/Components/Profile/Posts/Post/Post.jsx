import React from "react";
import pcss from "./Post.module.css";
import userPhoto from "../../../../assets/images/user.png";

const Post = (props) => {
  return (
    <div className={pcss.box_post}>
      <div className={pcss.header}>
        <div className={pcss.box_avatar}>
          <img
            src={
              props.profile.photos.small != null
                ? props.profile.photos.small
                : userPhoto
            }
            className={pcss.post_avatar}
          />
        </div>
        <div className={pcss.box_nameAndTime}>
          <div className={pcss.box_name}>
            <p className={pcss.post_name}>{props.profile.fullName}</p>
            <div className={pcss.box_date}>
              <data className={pcss.post_date}>6 янв в 23:00</data>
            </div>
          </div>
        </div>
        <div className={pcss.box_actions}></div>
      </div>
      <div className={pcss.box_message}>
        <p className={pcss.post_message}>{props.message}</p>
      </div>
      <div className={pcss.footer}>
        <div className={pcss.footer_left}>
          <div className={pcss.box_likes_count}>
            <img
              src="data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Ctitle%3Elike_outline_24%3C%2Ftitle%3E%3Cpath%20d%3D%22M0%2C0H24V24H0Z%22%20fill%3D%22none%22%2F%3E%3Cpath%20d%3D%22M17%2C2.9A6.43%2C6.43%2C0%2C0%2C1%2C23.4%2C9.33c0%2C3.57-1.43%2C5.36-7.45%2C10l-2.78%2C2.16a1.9%2C1.9%2C0%2C0%2C1-2.33%2C0L8.05%2C19.37C2%2C14.69.6%2C12.9.6%2C9.33A6.43%2C6.43%2C0%2C0%2C1%2C7%2C2.9a6.46%2C6.46%2C0%2C0%2C1%2C5%2C2.54A6.46%2C6.46%2C0%2C0%2C1%2C17%2C2.9ZM7%2C4.7A4.63%2C4.63%2C0%2C0%2C0%2C2.4%2C9.33c0%2C2.82%2C1.15%2C4.26%2C6.76%2C8.63l2.78%2C2.16a.1.1%2C0%2C0%2C0%2C.12%2C0L14.84%2C18c5.61-4.36%2C6.76-5.8%2C6.76-8.63A4.63%2C4.63%2C0%2C0%2C0%2C17%2C4.7c-1.56%2C0-3%2C.88-4.23%2C2.73L12%2C8.5l-.74-1.07C10%2C5.58%2C8.58%2C4.7%2C7%2C4.7Z%22%20fill%3D%22%23828a99%22%2F%3E%3C%2Fsvg%3E"
              alt="likeCount"
              className={pcss.post_likes_count}
            />
            <span>{props.likesCount}</span>
          </div>
          <div className={pcss.box_comments}>
            <img
              src="data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22m0%200h24v24h-24z%22%20fill%3D%22none%22%2F%3E%3Cpath%20d%3D%22m7.84%2022.53a2%202%200%200%201%20-.74-1.53v-2.1h-1.6a3.26%203.26%200%200%201%20-3.4-3.4v-9a3.26%203.26%200%200%201%203.4-3.4h13a3.26%203.26%200%200%201%203.4%203.4v9a3.26%203.26%200%200%201%20-3.4%203.4h-4.66l-3.72%203.26a1.69%201.69%200%200%201%20-2.28.37zm4.93-5.09a1.4%201.4%200%200%201%20.92-.35h4.81a1.47%201.47%200%200%200%201.6-1.6v-9a1.47%201.47%200%200%200%20-1.6-1.6h-13a1.47%201.47%200%200%200%20-1.6%201.61v9a1.47%201.47%200%200%200%201.6%201.6h2.5c.7.2.7.2.9.9v2.83z%22%20fill%3D%22%23828a99%22%2F%3E%3C%2Fsvg%3E"
              alt="comments"
              className={pcss.post_comments}
            />
          </div>
          <div className={pcss.box_share}>
            <img
              src="data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22m0%200h24v24h-24z%22%20fill%3D%22none%22%2F%3E%3Cpath%20d%3D%22m12.1%207.87v-3.47a1.32%201.32%200%200%201%202.17-1l8.94%207.6a1.32%201.32%200%200%201%20.15%201.86l-.15.15-8.94%207.6a1.32%201.32%200%200%201%20-2.17-1v-3.45c-4.68.11-8%201.09-9.89%202.87a1.15%201.15%200%200%201%20-1.9-1.11c1.53-6.36%205.51-9.76%2011.79-10.05zm1.8-2.42v4.2h-.9c-5.3%200-8.72%202.25-10.39%206.86%202.45-1.45%205.92-2.16%2010.39-2.16h.9v4.2l7.71-6.55z%22%20fill%3D%22%23828a99%22%2F%3E%3C%2Fsvg%3E"
              alt="share"
              className={pcss.post_share}
            />
          </div>
        </div>
        <div className={pcss.footer_right}>
          <div className={pcss.box_views}>
            <img
              src="data:image/svg+xml;charset=utf-8,%3Csvg%20height%3D%2210%22%20viewBox%3D%221%202%2014%2010%22%20width%3D%2214%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20style%3D%22fill%3A%23828a99%3B%22%3E%3Cpath%20d%3D%22m8%2012c-4.2%200-7-4-7-5s2.8-5%207-5%207%204%207%205-2.8%205-7%205zm0-1.5c1.9%200%203.5-1.6%203.5-3.5s-1.6-3.5-3.5-3.5-3.5%201.6-3.5%203.5%201.6%203.5%203.5%203.5zm0-1.9c-.9%200-1.6-.7-1.6-1.6s.7-1.6%201.6-1.6%201.6.7%201.6%201.6-.7%201.6-1.6%201.6z%22%2F%3E%3C%2Fsvg%3E"
              alt="views"
              className={pcss.post_views}
            />
            <span>10</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
