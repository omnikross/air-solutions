import React, { useState } from "react";
import classNames from "classnames";
import styles from "./sign-up.module.scss";
import { Input, Icon } from "semantic-ui-react";
import { toggleHidePassword } from "../../helpers/auth.helper";

interface ISignUpProps {}

const SignUp: React.FC<ISignUpProps> = props => {

  const [isHidePassword, setIsHidePassword] = useState(true);
  
  return (
    <div className={classNames(styles.wrapper)}>
      <div>
        <h1 className={classNames(styles.title)}>Регистрация</h1>
      </div>
      <div className={classNames(styles.input)}>
        <Input type="text" placeholder="Имя" />
      </div>
      <div className={classNames(styles.input)}>
        <Input type="text" placeholder="Фамилия" />
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
        <p>Минимальная длина пароля - 8 символов</p>
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
      </div>
      div.
    </div>
  );
};

export { SignUp };
