import { UserInfo } from "@typings/user";

export const USER_LOGIN = "USER_LOGIN";
export const USER_LOGOUT = "USER_LOGOUT";
export const USER_REGISTER = "USER_REGISTER";

export type UserLoginAction = {
  type: typeof USER_LOGIN;
  payload: UserInfo;
};
export type UserLogoutAction = {
  type: typeof USER_LOGOUT;
};
