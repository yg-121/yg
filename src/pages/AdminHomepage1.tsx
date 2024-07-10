import { FunctionComponent } from "react";
import TopNavigation from "../components/TopNavigation";
import SideMenu from "../components/SideMenu";
import Navigation1 from "../components/Navigation1";
import styles from "./AdminHomepage1.module.css";

const AdminHomepage1: FunctionComponent = () => {
  return (
    <div className={styles.adminHomepage}>
      <TopNavigation logoHeight="60px" logoTop="0" logoPosition="sticky" />
      <section className={styles.sidebar}>
        <SideMenu usersLabelGap="15px" usersLabelMinWidth="unset" />
        <div className={styles.taskDetailsContentWrapper}>
          <div className={styles.taskDetailsContent}>
            <h1 className={styles.taskDetails}>Task details</h1>
            <div className={styles.taskDetailsForm}>
              <div className={styles.taskFields}>
                <Navigation1 />
                <div className={styles.candidatePair}>
                  <div className={styles.candidatePairChild} />
                  <div className={styles.updateTask}>Update task</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminHomepage1;
