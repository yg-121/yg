import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import TopNavigation from "../components/TopNavigation";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import styles from "./Users.module.css";

const Users: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onFrameContainerClick1 = useCallback(() => {
    navigate("/tasks");
  }, [navigate]);

  const onFrameContainerClick2 = useCallback(() => {
    navigate("/setting");
  }, [navigate]);

  const onFrameContainerClick3 = useCallback(() => {
    navigate("/log-in");
  }, [navigate]);

  return (
    <div className={styles.users}>
      <div className={styles.usersChild} />
      <div className={styles.usersItem} />
      <TopNavigation logoHeight="60px" logoTop="0" logoPosition="sticky" />
      <section className={styles.content}>
        <div className={styles.sideMenu}>
          <div className={styles.menuOptions}>
            <FrameComponent1
              controlPanel="/control-panel@2x.png"
              dashboard="Dashboard"
              onFrameContainerClick={onFrameContainerClick}
            />
            <FrameComponent people="/people@2x.png" users="Users" />
            <FrameComponent1
              controlPanel="/todo-list@2x.png"
              dashboard="Tasks"
              propAlignSelf="stretch"
              onFrameContainerClick={onFrameContainerClick1}
            />
            <FrameComponent1
              controlPanel="/settings@2x.png"
              dashboard="Setting"
              propAlignSelf="unset"
              onFrameContainerClick={onFrameContainerClick2}
            />
          </div>
          <div className={styles.logoutWrapper}>
            <div className={styles.logout}>
              <img
                className={styles.logoutRoundedIcon}
                loading="lazy"
                alt=""
                src="/logout-rounded@2x.png"
              />
              <div
                className={styles.logOutWrapper}
                onClick={onFrameContainerClick3}
              >
                <div className={styles.logOut}>Log out</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.pageTitle}>
          <h1 className={styles.users1}>Users</h1>
        </div>
        <div className={styles.contentPanel}>
          <div className={styles.form}>
            <div className={styles.userTable}>
              <div className={styles.userTableChild} />
              <div className={styles.nameInputsParent}>
                <div className={styles.nameInputs}>
                  <div className={styles.name}>Name</div>
                </div>
                <div className={styles.contactFields}>
                  <div className={styles.firstName}>
                    <input
                      className={styles.firstName1}
                      placeholder="First"
                      type="text"
                    />
                  </div>
                  <div className={styles.lastName}>
                    <input
                      className={styles.last}
                      placeholder="Last"
                      type="text"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.emailLabelParent}>
                <div className={styles.emailLabel}>
                  <div className={styles.email}>Email</div>
                </div>
                <div className={styles.email1}>
                  <input
                    className={styles.usergmailcom}
                    placeholder="user@.gmail.com"
                    type="text"
                  />
                </div>
              </div>
              <div className={styles.nameFields}>
                <div className={styles.frameParent}>
                  <div className={styles.departmentWrapper}>
                    <div className={styles.department}>Department</div>
                  </div>
                  <input className={styles.department1} type="text" />
                </div>
                <div className={styles.frameGroup}>
                  <div className={styles.phoneWrapper}>
                    <div className={styles.phone}>Phone</div>
                  </div>
                  <div className={styles.phone1}>
                    <input
                      className={styles.phoneValue}
                      placeholder="### ### ####"
                      type="text"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.userContact}>
                <div className={styles.usernameField}>
                  <div className={styles.username}>Username</div>
                  <input className={styles.passwordInput} type="text" />
                </div>
                <div className={styles.passwordField}>
                  <div className={styles.password}>Password</div>
                  <div className={styles.passwordWrapper}>
                    <input
                      className={styles.password1}
                      placeholder="************"
                      type="text"
                    />
                  </div>
                </div>
              </div>
            </div>
            <button className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <div className={styles.addUser}>Add user</div>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Users;
