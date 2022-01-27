import React from "react";

import styles from "./Button.module.scss";

const Button = (props) => {
  // RETURN
  return (
    <button
      type={props.type}
      className={`${styles.btn} ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
