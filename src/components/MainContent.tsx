import { FunctionComponent } from "react";
import Navigation1 from "./Navigation1";
import styles from "./MainContent.module.css";

export type MainContentType = {
  className?: string;
};

const MainContent: FunctionComponent<MainContentType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.mainContent, className].join(" ")}>
      <div className={styles.headerTitle}>
        <h1 className={styles.tasks}>Tasks</h1>
        <div className={styles.contentBody}>
          <div className={styles.taskForm}>
            <div className={styles.contentHeader}>
              <img
                className={styles.youngWomanWritingInANotep}
                loading="lazy"
                alt=""
                src="/young-woman-writing-in-a-notepad@2x.png"
              />
            </div>
            <form className={styles.formFields}>
              <div className={styles.contentBody1}>
                <Navigation1 propAlignSelf="unset" propFlex="1" />
              </div>
              <button className={styles.addTaskButton}>
                <div className={styles.addTaskButtonChild} />
                <div className={styles.addTask}>Add task</div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
