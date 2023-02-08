import React from "react";
import styles from "./Tabel.module.scss";
import data from "../../assets/data.json";
import TabelProps from "../TabelProps";
import TabelDesc from "../TabelDesc";
import TabelLogo from "../TabelLogo";

const Tabel = ({ handleSelectedProps, selectedProps }) => {
  const arrFiltred = data.filter(
    ({ languages, role, level }) =>
      languages.some((item) => selectedProps.includes(item)) &&
      selectedProps.includes(level) &&
      selectedProps.includes(role)
  );

  return (
    <section className={styles["section__table"]}>
      <div className="container">
        <div className={styles["container__inner"]}>
          {arrFiltred.map((data) => (
            <div key={data.id} className={styles["tabel"]}>
              <TabelLogo {...data} />

              <TabelDesc data={data} />

              <TabelProps handleSelectedProps={handleSelectedProps} {...data} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tabel;
