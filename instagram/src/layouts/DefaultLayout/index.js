import classNames from "classnames/bind";

import styles from "./DefaultLayout.scss";
import Sidebar from "../components/Sidebar";

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("sidebar")}>
        <Sidebar />
      </div>
      <div className={cx("content")}>{children}</div>
    </div>
  );
}

export default DefaultLayout;
