import { FunctionComponent } from "react";
import TopNavigation from "../components/TopNavigation";
import SideMenu1 from "../components/SideMenu1";
import MainContent from "../components/MainContent";
import styles from "./Tasks.module.css";

const Tasks: FunctionComponent = () => {
  return (
    <div className={styles.tasks}>
      <TopNavigation logoHeight="60px" logoTop="0" logoPosition="sticky" />
      <section className={styles.content}>
        <SideMenu1 />
        <MainContent />
      </section>
    </div>
  );
};

export default Tasks;
