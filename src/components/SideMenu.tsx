import {
  FunctionComponent,
  useMemo,
  type CSSProperties,
  useCallback,
} from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SideMenu.module.css";

export type SideMenuType = {
  className?: string;

  /** Style props */
  usersLabelGap?: CSSProperties["gap"];
  usersLabelMinWidth?: CSSProperties["minWidth"];
};

const SideMenu: FunctionComponent<SideMenuType> = ({
  className = "",
  usersLabelGap,
  usersLabelMinWidth,
}) => {
  const sideMenuStyle: CSSProperties = useMemo(() => {
    return {
      gap: usersLabelGap,
      minWidth: usersLabelMinWidth,
    };
  }, [usersLabelGap, usersLabelMinWidth]);

  const navigate = useNavigate();

  const onPeopleItemContainerClick = useCallback(() => {
    navigate("/users");
  }, [navigate]);

  const onTasksItemContainerClick = useCallback(() => {
    navigate("/tasks");
  }, [navigate]);

  const onFrameContainerClick = useCallback(() => {
    navigate("/setting");
  }, [navigate]);

  const onLogoutLabelContainerClick = useCallback(() => {
    navigate("/log-in");
  }, [navigate]);

  return (
    <div
      className={[styles.sideMenu, className].join(" ")}
      style={sideMenuStyle}
    >
      <div className={styles.sideMenuInner}>
        <div className={styles.controlPanelBackgroundParent}>
          <div className={styles.controlPanelBackground} />
          <div className={styles.controlPanelItem}>
            <div className={styles.dashboardItem}>
              <img
                className={styles.controlPanelIcon}
                loading="lazy"
                alt=""
                src="/control-panel@2x.png"
              />
              <div className={styles.dashboardLabel}>
                <a className={styles.dashboard}>Dashboard</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.peopleItemWrapper}>
        <div className={styles.peopleItem} onClick={onPeopleItemContainerClick}>
          <img
            className={styles.peopleIcon}
            loading="lazy"
            alt=""
            src="/people@2x.png"
          />
          <div className={styles.usersLabel}>
            <a className={styles.users}>Users</a>
          </div>
        </div>
      </div>
      <div className={styles.todoListItemParent}>
        <div className={styles.todoListItem}>
          <div className={styles.tasksItem} onClick={onTasksItemContainerClick}>
            <img
              className={styles.todoListIcon}
              loading="lazy"
              alt=""
              src="/todo-list@2x.png"
            />
            <div className={styles.tasksLabel}>
              <div className={styles.tasks}>Tasks</div>
            </div>
          </div>
        </div>
        <div className={styles.settingsParent} onClick={onFrameContainerClick}>
          <img
            className={styles.settingsIcon}
            loading="lazy"
            alt=""
            src="/settings@2x.png"
          />
          <div className={styles.settingLabel}>
            <div className={styles.setting}>Setting</div>
          </div>
        </div>
      </div>
      <div className={styles.logoutItemWrapper}>
        <div className={styles.logoutItem}>
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
  );
};

export default SideMenu;
