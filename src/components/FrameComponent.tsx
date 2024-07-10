import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  className?: string;
  people?: string;
  users?: string;

  /** Style props */
  propFlex?: CSSProperties["flex"];
  propHeight?: CSSProperties["height"];
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
  people,
  users,
  propFlex,
  propHeight,
}) => {
  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      height: propHeight,
    };
  }, [propFlex, propHeight]);

  return (
    <div
      className={[styles.peopleIconParent, className].join(" ")}
      style={frameDiv1Style}
    >
      <div className={styles.peopleIcon} />
      <div className={styles.userNameWrapper}>
        <div className={styles.userName}>
          <img
            className={styles.peopleIcon1}
            loading="lazy"
            alt=""
            src={people}
          />
          <div className={styles.usersWrapper}>
            <a className={styles.users}>{users}</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
