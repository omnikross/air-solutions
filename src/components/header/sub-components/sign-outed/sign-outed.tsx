import React, { useState } from "react";
import styles from "../../header.module.scss";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { Icon } from "semantic-ui-react";

interface ISignOutedProps {}

const SignOuted: React.FC<ISignOutedProps> = props => {
  const [wantToRegister, setWantToRegister] = useState(true);

  return (
    <>
      <div className={classNames(styles.icon)}>
        <Link to="/">
          <img src="./assets/logo.png" alt="" />
        </Link>
      </div>
      <div className={classNames(styles["left-menu-items"])}>
        <Icon name="signup" />
        {wantToRegister ? <p>Авторизация</p> : <p>Регистрация</p>}
      </div>
      <div
        style={{
          flexGrow: 1,
        }}
      />
      <div className={classNames(styles["right-menu-items"])}>
        <Icon name="history" />
        {wantToRegister ? (
          <Link to="/sign-up" onClick={() => setWantToRegister(false)}>
            Регистрация
          </Link>
        ) : (
          <Link to="/sign-in" onClick={() => setWantToRegister(true)}>
            Авторизация
          </Link>
        )}
      </div>
    </>
  );
};

export { SignOuted };
