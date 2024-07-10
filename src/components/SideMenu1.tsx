import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent1 from "./FrameComponent1";
import FrameComponent from "./FrameComponent";
import styles from "./SideMenu1.module.css";

export type SideMenu1Type = {
  className?: string;
};

const SideMenu1: FunctionComponent<SideMenu1Type> = ({ className = "" }) => {
  const navigate = useNavigate();

  const onMenuPairContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onFrameContainerClick = useCallback(() => {
    navigate("/users");
  }, [navigate]);

  const onSettingContainerClick = useCallback(() => {
    navigate("/setting");
  }, [navigate]);

  const onFrameContainerClick1 = useCallback(() => {
    navigate("/log-in");
  }, [navigate]);

  return (
    <div className={[styles.sideMenu, className].join(" ")}>
      <FrameComponent1
        controlPanel="/control-panel@2x.png"
        dashboard="Dashboard"
        propAlignSelf="unset"
        onFrameContainerClick={onMenuPairContainerClick}
      />
      <FrameComponent1
        controlPanel="/people@2x.png"
        dashboard="Users"
        propAlignSelf="unset"
        onFrameContainerClick={onFrameContainerClick}
      />
      <div className={styles.menuItems}>
        <FrameComponent
          people="/todo-list@2x.png"
          users="Tasks"
          propFlex="unset"
          propHeight="72px"
        />
        <FrameComponent1
          controlPanel="/settings@2x.png"
          dashboard="Setting"
          propAlignSelf="unset"
          onFrameContainerClick={onSettingContainerClick}
        />
      </div>
      <div className={styles.logout}>
        <div className={styles.logoutButton}>
          <img
            className={styles.logoutRoundedIcon}
            loading="lazy"
            alt=""
            src="/logout-rounded@2x.png"
          />
          <div
            className={styles.logOutWrapper}
            onClick={onFrameContainerClick1}
          >
            <div className={styles.logOut}>Log out</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideMenu1;
