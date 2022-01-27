import React, { useState } from "react";

import styles from "./InfoForm.module.scss";
import Button from "../UI/Button";

const InfoForm = (props) => {
  // STATES
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  // FUNCTIONS
  const getUsernameHandler = (e) => {
    setUsername(e.target.value);
  };

  const getAgeHandler = (e) => {
    setAge(e.target.value);
  };

  const data = {
    // key: Math.random().toString(),
    username: username,
    age: Number(age),
    // id: Math.random().toString(),
  };

  const submitFormHandler = (e) => {
    e.preventDefault();

    props.userData(data);

    if (username && age > 0) {
      setUsername("");
      setAge("");
    }
  };

  // RETURN
  return (
    <div>
      <form className={styles.form} onSubmit={submitFormHandler}>
        <div
          className={`${styles["form__input"]} ${styles["form__input-username"]}`}
        >
          <input
            type="text"
            onChange={getUsernameHandler}
            placeholder="Username"
            // id="username"
            // required
            value={username}
          />
          <label>Username</label>
        </div>
        <div
          className={`${styles["form__input"]} ${styles["form__input-age"]}`}
        >
          <input
            type="number"
            onChange={getAgeHandler}
            placeholder="Age"
            // required
            // id="age"
            value={age}
          />
          <label>Age(Years)</label>
        </div>
        <Button type="submit" className={` ${styles["u-margin-top-small"]}`}>
          Add User
        </Button>
      </form>
    </div>
  );
};

export default InfoForm;
