import React from "react";
import styles from "./TabelProps.module.scss";

const TabelProps = ({ languages, role, level, handleSelectedProps }) => {
  return (
    <div className={styles["tabel__props"]}>
      {[...languages, role, level].map((props, idx) => (
        <button key={idx} onClick={() => handleSelectedProps(props)}>
          {props}
        </button>
      ))}
    </div>
  );
};

export default TabelProps;
