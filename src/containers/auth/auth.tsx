import React from "react";
import { SignIn } from "../../components";
import { SignUp } from "../../components";

interface IAuthProps {}

const Auth: React.FC<IAuthProps> = props => {
  return (
    <div>
      <SignIn />
    </div>
  );
};

export { Auth };
