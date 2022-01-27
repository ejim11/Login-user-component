import React from "react";
import Button from "../UI/Button";

import styles from "./ErrorMessages.module.scss";

const ErrorMessages = (props) => {
  let content = (
    <div className={styles.error}>
      <h3>{props.title}</h3>
      <p>{props.message} </p>
      <Button onClick={props.function}>Okay</Button>
    </div>
  );

  // RETURN
  return <div>{content}</div>;
};

export default ErrorMessages;
