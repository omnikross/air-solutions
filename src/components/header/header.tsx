import React from "react";
import classNames from "classnames";
import styles from "./header.module.scss";
import { Link } from "react-router-dom";
import { Icon } from "semantic-ui-react";
import { useAtom } from "@dbeining/react-atom";
import { authAtom } from "../../store";
import { SignInned } from "./sub-components/sign-inned";
import { SignOuted } from "./sub-components";

interface IHeaderProps {}

const Header: React.FC<IHeaderProps> = props => {
  const { token } = useAtom(authAtom);

  if (token) {
    return (
      <div className={classNames(styles.wrapper)}>
        <SignInned />
      </div>
    );
  }

  return (
    <div className={classNames(styles.wrapper)}>
      <SignOuted />
    </div>
  );
};

export { Header };
