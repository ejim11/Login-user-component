import React from "react";

import styles from "./InfoItem.module.scss";

const InfoItem = (props) => {
  // RETURN
  return (
    <div className={styles.item}>
      <p>
        {props.name} ({props.age} years)
      </p>
    </div>
  );
};

export default InfoItem;
