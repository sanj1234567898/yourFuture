import React from "react";
import styles from "./TabelDesc.module.scss";

const TabelDesc = ({ data }) => {
  return (
    <div className={styles["tabel__main-description"]}>
      <div className={styles["main-description__company"]}>
        <p>{data.company}</p>
        {data.new && <p className={styles.new}>{"new!".toUpperCase()}</p>}
        {data.featured && (
          <p className={styles.featured}>{"featured".toUpperCase()}</p>
        )}
      </div>

      <div className={styles["main-description__name-position"]}>
        {data.position}
      </div>

      <div className={styles["main-description__props"]}>
        {[data.postedAt, data.location, data.contract].map((props, idx) => (
          <p key={idx}>{props}</p>
        ))}
      </div>
    </div>
  );
};

export default TabelDesc;
