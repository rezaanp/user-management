import { LOGIN, LOGOUT } from "./constanst";

export const login = (payload) => ({
  type: LOGIN,
  payload,
});

export const logout = () => ({
  type: LOGOUT,
});
