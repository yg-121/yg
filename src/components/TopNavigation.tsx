import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./TopNavigation.module.css";

export type TopNavigationType = {
  className?: string;

  /** Style props */
  logoHeight?: CSSProperties["height"];
  logoTop?: CSSProperties["top"];
  logoPosition?: CSSProperties["position"];
};

const TopNavigation: FunctionComponent<TopNavigationType> = ({
  className = "",
  logoHeight,
  logoTop,
  logoPosition,
}) => {
  const topNavigationStyle: CSSProperties = useMemo(() => {
    return {
      height: logoHeight,
      top: logoTop,
      position: logoPosition,
    };
  }, [logoHeight, logoTop, logoPosition]);

  return (
    <div
      className={[styles.topNavigation, className].join(" ")}
      style={topNavigationStyle}
    >
      <div className={styles.logo}>
        <img
          className={styles.yvmuc8s5riurkdegjdvtvu8cagkx1Icon}
          alt=""
          src="/yvmuc8s5riurkdegjdvtvu8cagkx-1@2x.png"
        />
      </div>
      <div className={styles.navigationContainer}>
        <div className={styles.innerNavigationContainer}>
          <div className={styles.nameContainer}>
            <a className={styles.adminName}>(Admin name)</a>
          </div>
          <img
            className={styles.iconWithAPerson}
            alt=""
            src="/icon-with-a-person@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default TopNavigation;
