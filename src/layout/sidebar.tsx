import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import styles from "./main.module.css";

export const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className={styles["sidebar"]}>
      <Menu
        defaultSelectedKeys={["/page1"]}
        items={[
          { label: "Page 1", key: "/page1" },
          { label: "Page 2", key: "/page2" },
        ]}
        onClick={({ key }) => navigate(key)}
      />
    </div>
  );
};
