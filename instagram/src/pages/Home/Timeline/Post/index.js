import React from "react";
import classNames from "classnames/bind";

import styles from "./Post.module.scss";
import {
  HeartIcon,
  MorePostIcon,
  SavePostIcon,
} from "../../../../components/Icon";

const cx = classNames.bind(styles);

function Post({ data }) {
  console.log(data);
  return (
    <div className={cx("wrapper")}>
      <div className={cx("post__header")}>
        <div className={cx("post__headerAuthor")}>
          <img
            className={cx("post__headerAuthorAvatar")}
            src={data.avtar}
            alt="avatar"
          />
          <div className={cx("post__headerAuthorName")}>{data.username}</div>
          <div className={cx("post__headerAuthorTime")}>
            {" "}
            • {data.hours_Posts} minutes ago
          </div>
        </div>
        <div className={cx("post__headerBtn")}>{<MorePostIcon />}</div>
      </div>
      <div className={cx("post__body")}>
        <img
          className={cx("post__image")}
          src={data.post_image}
          alt="postImage"
        />
      </div>
      <div className={cx("post__footer")}>
        <div className={cx("post__footerIcon")}>
          <div className={cx("post__footerIcon__heart")}>
            <HeartIcon />
          </div>
          <div className={cx("post__footerIcon__save")}>
            <SavePostIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
