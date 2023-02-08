import React from "react";
import styles from "./TabelLogo.module.scss";

const TabelLogo = ({ logo, company }) => {
  return (
    <div className={styles["tabel__logo"]}>
      <img src={logo} alt={company} />
    </div>
  );
};

export default TabelLogo;
