import { Atom } from "@dbeining/react-atom";

type Role = "User" | "Admin";

interface IUser {
  name: string;
  balance: number;
  role: Role;
}

interface IAuthState {
  token: string;
  user: IUser;
}

const initialAuthState: IAuthState = {
  token: "",
  user: {
    name: "",
    balance: 0,
    role: "User",
  },
};

const authAtom = Atom.of(initialAuthState);

export { authAtom, initialAuthState };
