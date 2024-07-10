import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import TopNavigation from "../components/TopNavigation";
import FrameComponent1 from "../components/FrameComponent1";
import styles from "./Setting.module.css";

const Setting: FunctionComponent = () => {
  const navigate = useNavigate();

  const onControlPanelLinkClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onPeopleButtonContainerClick = useCallback(() => {
    navigate("/users");
  }, [navigate]);

  const onTodoListItemClick = useCallback(() => {
    navigate("/tasks");
  }, [navigate]);

  const onLogoutLabelContainerClick = useCallback(() => {
    navigate("/log-in");
  }, [navigate]);

  return (
    <div className={styles.setting}>
      <TopNavigation logoHeight="60px" logoTop="0" logoPosition="sticky" />
      <div className={styles.content}>
        <div className={styles.sideMenu}>
          <FrameComponent1
            controlPanel="/control-panel@2x.png"
            dashboard="Dashboard"
            propAlignSelf="unset"
            onFrameContainerClick={onControlPanelLinkClick}
          />
          <div className={styles.peopleItem}>
            <FrameComponent1
              controlPanel="/people@2x.png"
              dashboard="Users"
              propAlignSelf="unset"
              onFrameContainerClick={onPeopleButtonContainerClick}
            />
            <div className={styles.todoListItem} onClick={onTodoListItemClick}>
              <img
                className={styles.todoListIcon}
                loading="lazy"
                alt=""
                src="/todo-list@2x.png"
              />
              <div className={styles.todoListLabel}>
                <div className={styles.tasks}>Tasks</div>
              </div>
            </div>
            <div className={styles.settingsItem}>
              <div className={styles.settingsLink}>
                <div className={styles.settingsIcon} />
                <div className={styles.settingsLabel}>
                  <div className={styles.settingsButton}>
                    <img
                      className={styles.settingsIcon1}
                      loading="lazy"
                      alt=""
                      src="/settings@2x.png"
                    />
                    <div className={styles.settingsName}>
                      <a className={styles.setting1}>Setting</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.logoutItem}>
            <div className={styles.logoutLink}>
              <img
                className={styles.logoutRoundedIcon}
                loading="lazy"
                alt=""
                src="/logout-rounded@2x.png"
              />
              <div
                className={styles.logoutLabel}
                onClick={onLogoutLabelContainerClick}
              >
                <div className={styles.logOut}>Log out</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.settingsPanel}>
          <div className={styles.settingsContent}>
            <h1 className={styles.settings}>Settings</h1>
            <div className={styles.userForm}>
              <div className={styles.nameInput}>
                <div className={styles.changeUserName}>Change user name</div>
                <div className={styles.firstNameInput}>
                  <div className={styles.firstName} />
                  <div className={styles.updateButton}>
                    <button className={styles.updateAction}>
                      <div className={styles.updateActionChild} />
                      <a className={styles.update}>Update</a>
                    </button>
                  </div>
                </div>
              </div>
              <div className={styles.nameInput1}>
                <div className={styles.changePassword}>Change password</div>
                <div className={styles.firstNameParent}>
                  <div className={styles.firstName1} />
                  <div className={styles.frameWrapper}>
                    <button className={styles.rectangleParent}>
                      <div className={styles.frameChild} />
                      <a className={styles.update1}>Update</a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
