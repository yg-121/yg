import { FunctionComponent } from "react";
import TopNavigation from "../components/TopNavigation";
import SideMenu from "../components/SideMenu";
import styles from "./AdminHomepage.module.css";

const AdminHomepage: FunctionComponent = () => {
  return (
    <div className={styles.adminHomepage}>
      <TopNavigation />
      <section className={styles.content}>
        <div className={styles.sideMenuContainer}>
          <div className={styles.sideMenuInnerContainer}>
            <SideMenu />
            <div className={styles.mainContent}>
              <div className={styles.frameParent}>
                <div className={styles.dashboardParent}>
                  <h1 className={styles.dashboard}>Dashboard</h1>
                  <div className={styles.welcomeMessage}>
                    <div className={styles.welcomeBackAdmin}>
                      Welcome back, (Admin name)
                    </div>
                  </div>
                </div>
                <div className={styles.tasksOverview}>
                  <div className={styles.taskStatus}>
                    <div className={styles.taskStatusLabels}>
                      <h2 className={styles.pendingTasks}>Pending Tasks</h2>
                    </div>
                    <div className={styles.taskStatusLabels1}>
                      <h2 className={styles.completedTasks}>Completed Tasks</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.progressBarsWrapper}>
            <div className={styles.progressBars}>
              <div className={styles.progressBarLabels}>
                <h2 className={styles.inProgressTasks}>In Progress Tasks</h2>
              </div>
              <div className={styles.progressBarLabels1}>
                <h2 className={styles.totalAssignedUsers}>
                  Total Assigned users
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.userList}>
          <div className={styles.userHeaders}>
            <img
              className={styles.userHeadersChild}
              alt=""
              src="/rectangle-15.svg"
            />
            <img
              className={styles.userHeadersItem}
              alt=""
              src="/rectangle-19.svg"
            />
            <img
              className={styles.userHeadersInner}
              alt=""
              src="/rectangle-19.svg"
            />
            <div className={styles.userItems}>
              <div className={styles.userItem}>
                <div className={styles.userIDName}>
                  <b className={styles.id}>ID</b>
                  <b className={styles.name}>Name</b>
                </div>
                <div className={styles.taskDetails}>
                  <div className={styles.taskStatusDate}>
                    <b className={styles.status}>Status</b>
                  </div>
                  <b className={styles.createdDate}>Created Date</b>
                  <div className={styles.taskStatusDate1}>
                    <b className={styles.dueDate}>Due Date</b>
                  </div>
                  <b className={styles.action}>Action</b>
                </div>
              </div>
            </div>
            <img
              className={styles.rectangleIcon}
              alt=""
              src="/rectangle-16.svg"
            />
            <div className={styles.actionItemsParent}>
              <div className={styles.actionItems}>
                <div className={styles.actionItemsChild} />
                <div className={styles.lastName}>
                  <div className={styles.taskTitle}>Task title</div>
                </div>
                <div className={styles.lastName1}>
                  <div className={styles.sortDropdown}>
                    <div className={styles.select}>Select</div>
                  </div>
                  <img
                    className={styles.sortDownIcon}
                    alt=""
                    src="/sort-down@2x.png"
                  />
                </div>
              </div>
              <div className={styles.editRemoveActions}>
                <div className={styles.actionButtons}>
                  <div className={styles.editButtons}>
                    <div className={styles.edit}>Edit</div>
                  </div>
                  <div className={styles.remove}>Remove</div>
                </div>
                <div className={styles.actionButtons1}>
                  <div className={styles.editWrapper}>
                    <div className={styles.edit1}>Edit</div>
                  </div>
                  <div className={styles.remove1}>Remove</div>
                </div>
                <div className={styles.actionButtons2}>
                  <div className={styles.editContainer}>
                    <div className={styles.edit2}>Edit</div>
                  </div>
                  <div className={styles.remove2}>Remove</div>
                </div>
                <div className={styles.actionButtons3}>
                  <div className={styles.editFrame}>
                    <div className={styles.edit3}>Edit</div>
                  </div>
                  <div className={styles.remove3}>Remove</div>
                </div>
                <div className={styles.actionButtons4}>
                  <div className={styles.frameDiv}>
                    <div className={styles.edit4}>Edit</div>
                  </div>
                  <div className={styles.remove4}>Remove</div>
                </div>
              </div>
            </div>
            <img
              className={styles.userHeadersChild1}
              alt=""
              src="/rectangle-19.svg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminHomepage;
