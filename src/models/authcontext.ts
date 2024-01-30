import { User } from "firebase/auth";

export interface IAuth {
  user: User | null;
  loading: boolean;
  signup: (creds: LoginFormValues) => void;
  login: (creds: LoginFormValues) => void;
  logout: () => void;
}
export interface LoginFormValues  {
  email: string;
  password: string;
}