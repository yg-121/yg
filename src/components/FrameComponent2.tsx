import { FunctionComponent } from "react";
import styles from "./FrameComponent2.module.css";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.usernameParent, className].join(" ")}>
      <div className={styles.username}>Username</div>
      <img
        className={styles.frameChild}
        loading="lazy"
        alt=""
        src="/rectangle-8.svg"
      />
      <div className={styles.password}>Password</div>
      <div className={styles.usernamePlaceholderWrapper}>
        <input
          className={styles.usernamePlaceholder}
          placeholder="************"
          type="text"
        />
      </div>
      <button className={styles.logInWrapper}>
        <b className={styles.logIn}>Log in</b>
      </button>
    </div>
  );
};

export default FrameComponent2;
