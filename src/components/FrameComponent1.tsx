import {
  FunctionComponent,
  useMemo,
  type CSSProperties,
  useCallback,
} from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent1.module.css";

export type FrameComponent1Type = {
  className?: string;
  controlPanel?: string;
  dashboard?: string;

  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];

  /** Action props */
  onFrameContainerClick?: () => void;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
  controlPanel,
  dashboard,
  propAlignSelf,
  onFrameContainerClick,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const navigate = useNavigate();

  const onFrameContainerClick1 = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div
      className={[styles.menuOptionsInner, className].join(" ")}
      style={frameDivStyle}
    >
      <div
        className={styles.controlPanelParent}
        onClick={onFrameContainerClick}
      >
        <img
          className={styles.controlPanelIcon}
          loading="lazy"
          alt=""
          src={controlPanel}
        />
        <div className={styles.subOptions}>
          <a className={styles.dashboard}>{dashboard}</a>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
