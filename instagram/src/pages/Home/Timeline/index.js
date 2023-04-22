import React, { useEffect, useState } from "react";
import styles from "./Timeline.module.scss";
import classNames from "classnames/bind";
import Sugesstions from "./Sugesstions";
import Post from "./Post";

const cx = classNames.bind(styles);
function Timeline() {
  const [dataUser, setDataUser] = useState([]);

  useEffect(() => {
    fetch("https://instagram-data.onrender.com/users")
      .then((response) => response.json())
      .then((data) => setDataUser(data))
      .catch((error) => console.log("Error when calling API dataUser", error));
  }, []);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("timeline__left")}>
        <div className={cx("timeline__posts")}>
          {dataUser.map((user) => (
            <Post key={user.id} data={user} />
          ))}
        </div>
      </div>
      <div className={cx("timeline__right")}>
        <Sugesstions />
      </div>
    </div>
  );
}

export default Timeline;
