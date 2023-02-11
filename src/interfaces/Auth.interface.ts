import { User } from "../store/auth/thunks";

export interface IAuthResponse {
  ok: boolean;
  token: string;
  id_user: number;
  email: string;
  user_type: string;
  roles: number[];
  user: User;
}
