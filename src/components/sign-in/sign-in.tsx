import React, { useState } from "react";
import { Input, Icon } from "semantic-ui-react";
import styles from "./sign-in.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { toggleHidePassword } from "../../helpers/auth.helper";

interface ISignInProps {}

const SignIn: React.FC<ISignInProps> = props => {
  const [isHidePassword, setIsHidePassword] = useState(true);

  return (
    <div className={classNames(styles.wrapper)}>
      <div>
        <h1 className={classNames(styles.title)}>Авторизация</h1>
      </div>
      <div className={classNames(styles.input)}>
        <Input type="text" placeholder="Email" />
      </div>
      <div className={classNames(styles.input)}>
        <Input
          icon={
            <Icon
              name={isHidePassword ? "eye" : "eye slash"}
              size="large"
              onClick={() => toggleHidePassword(!isHidePassword, setIsHidePassword)}
              link
            />
          }
          type={isHidePassword ? "password" : "text"}
          placeholder="Password"
        />
        <Link to="#" className={classNames(styles.link)}>
          Забыли пароль?
        </Link>
      </div>
      <div className={classNames(styles["btn-block"])}>
        <button className={classNames(styles.btn)}>Авторизоваться</button>
        <div>
          <Link to="#" className={classNames(styles["link"], styles["register"])}>
            Нет аккаунта? Зарегистрироваться
          </Link>
        </div>
      </div>
    </div>
  );
};

export { SignIn };
