import { swap } from "@dbeining/react-atom";
import { authAtom, initialAuthState } from "./atom";

const signOut = swap(authAtom, state => ({ ...initialAuthState }));

export { signOut };
