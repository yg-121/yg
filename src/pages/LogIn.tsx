import { FunctionComponent } from "react";
import FrameComponent2 from "../components/FrameComponent2";
import styles from "./LogIn.module.css";

const LogIn: FunctionComponent = () => {
  return (
    <div className={styles.logIn}>
      <section className={styles.topNavigationWrapper}>
        <header className={styles.topNavigation}>
          <div className={styles.logo}>
            <img
              className={styles.yvmuc8s5riurkdegjdvtvu8cagkx1Icon}
              alt=""
              src="/yvmuc8s5riurkdegjdvtvu8cagkx-1@2x.png"
            />
          </div>
        </header>
      </section>
      <div className={styles.loginWrapper}>
        <h1 className={styles.login}>Login</h1>
      </div>
      <section className={styles.logInInner}>
        <FrameComponent2 />
      </section>
      <img className={styles.image5Icon} alt="" src="/image-5@2x.png" />
    </div>
  );
};

export default LogIn;
