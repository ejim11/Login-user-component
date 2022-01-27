import React from "react";

import styles from "./Overlay.module.scss";

const Overlay = (props) => {
  // RETURN
  return (
    <div
      className={`${styles.display} ${props.className}`}
      onClick={props.function}
    >
      {props.children}
    </div>
  );
};

export default Overlay;
