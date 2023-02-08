import React from "react";
import styles from "./Search.module.scss";
import { ImCross } from "react-icons/im";

export const Search = ({ selectedProps, isSelectedProps }) => {
  const handleRemoveItem = (value) => {
    isSelectedProps(selectedProps.filter((elem) => elem !== value));
  };

  return (
    <div className={styles["search__section"]}>
      <div className="container">
        <div className={styles["search"]}>
          <div className={styles["search__value"]}>
            {selectedProps.map((value, idx) => (
              <div key={idx} className={styles["search__value-item"]}>
                <p>{value.toUpperCase()}</p>
                <div
                  onClick={() => handleRemoveItem(value)}
                  className={styles["search__svg-elem"]}
                >
                  <ImCross />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
