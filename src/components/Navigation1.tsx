import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Navigation1.module.css";

export type Navigation1Type = {
  className?: string;

  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propFlex?: CSSProperties["flex"];
};

const Navigation1: FunctionComponent<Navigation1Type> = ({
  className = "",
  propAlignSelf,
  propFlex,
}) => {
  const navigationStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      flex: propFlex,
    };
  }, [propAlignSelf, propFlex]);

  return (
    <div
      className={[styles.navigation, className].join(" ")}
      style={navigationStyle}
    >
      <div className={styles.navigationChild} />
      <div className={styles.nameFields}>
        <div className={styles.firstNameField}>
          <div className={styles.companyName}>
            <a className={styles.company}>Company</a>
          </div>
          <input className={styles.firstName} type="text" />
        </div>
        <div className={styles.lastNameField}>
          <div className={styles.targetName}>Target Name</div>
          <input className={styles.lastName} type="text" />
        </div>
      </div>
      <div className={styles.emailField}>
        <div className={styles.emailLabel}>
          <div className={styles.email}>Target</div>
        </div>
        <input className={styles.email1} type="text" />
      </div>
      <div className={styles.departmentField}>
        <div className={styles.departmentInput}>
          <div className={styles.assignedExpertField}>
            <div className={styles.assignedExpertLabel}>
              <div className={styles.assignedExpert}>Assigned Expert</div>
            </div>
            <input className={styles.department} type="text" />
          </div>
          <div className={styles.completionDateField}>
            <div className={styles.requiredCompletionDate}>
              Required Completion Date
            </div>
            <div className={styles.completionDateInput}>
              <input
                className={styles.dateInput}
                placeholder="MM/DD/YY"
                type="text"
              />
              <img
                className={styles.calendarIcon}
                alt=""
                src="/calendar@2x.png"
              />
            </div>
          </div>
        </div>
        <div className={styles.assignedRemark}>
          <div className={styles.assignedRemarkFields}>
            <div className={styles.assignedDate}>Assigned Date</div>
            <div className={styles.result}>
              <div className={styles.resultChild} />
              <input
                className={styles.assignedDateInput}
                placeholder="MM/DD/YY"
                type="text"
              />
              <img
                className={styles.calendarIcon1}
                alt=""
                src="/calendar@2x.png"
              />
            </div>
          </div>
          <div className={styles.assignedRemarkFields1}>
            <div className={styles.remark}>Remark</div>
            <input className={styles.assignedRemarkFieldsChild} type="text" />
          </div>
        </div>
      </div>
      <div className={styles.descriptionField}>
        <div className={styles.descriptionLabel}>
          <div className={styles.description}>Description</div>
        </div>
        <input className={styles.department1} type="text" />
      </div>
    </div>
  );
};

export default Navigation1;
