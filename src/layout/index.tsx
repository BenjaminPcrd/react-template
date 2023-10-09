import { Outlet } from "react-router-dom";
import { Sidebar } from "./sidebar";
import styles from "./main.module.css";

export const Layout = () => {
  return (
    <div className={styles["content"]}>
      <Sidebar />
      <Outlet />
    </div>
  );
};
