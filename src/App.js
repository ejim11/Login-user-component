import React, { useState } from "react";

import InfoForm from "./Components/InfoForm/InfoForm";
import InfoList from "./Components/InfoList/InfoList";
import Overlay from "./Components/Overlay/Overlay";
import styles from "./Components/Overlay/Overlay.module.scss";
import ErrorMessages from "./Components/ErrorMessages/ErrorMessages";

const App = () => {
  // STATES
  const [userInfo, setUserInfo] = useState([
    { username: "Janet", age: 23, id: "g1" },
    { username: "Tobi", age: 16, id: "g2" },
  ]);

  const [isValid, setIsValid] = useState(true);

  const [error, setError] = useState();

  // FUNCTIONS
  const collectUserData = (data) => {
    console.log(data);

    if (data.username.trim().length === 0 || data.age === 0) {
      setIsValid(false);
      setError({
        title: "Invalid input",
        message: `Please enter a valid name and age (non-empty values).`,
      });
    }

    if (data.age < 0) {
      setIsValid(false);

      setError({
        title: "Invalid age",
        message: `Please enter a valid age (> 0).`,
      });
    }

    if (data.username.trim().length > 1 && data.age > 0) {
      setUserInfo((prevInfo) => {
        const user = [...prevInfo];
        console.log(data);
        user.unshift({
          ...data,
          id: Math.random().toString(),
        });
        return user;
      });
    }
  };

  const removeDisplayHandler = () => {
    setIsValid(true);
    setError(null);
  };

  // RETURN
  return (
    <div className={styles.app}>
      <Overlay
        valid={isValid}
        className={`${isValid && styles.invalid} `}
        function={removeDisplayHandler}
      >
        {error && (
          <ErrorMessages
            function={removeDisplayHandler}
            title={error.title}
            message={error.message}
          />
        )}
      </Overlay>
      <section>
        <InfoForm userData={collectUserData} />
      </section>
      <section>
        <InfoList item={userInfo} />
      </section>
    </div>
  );
};

export default App;
