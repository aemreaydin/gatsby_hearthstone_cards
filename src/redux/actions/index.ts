import { Dispatch } from "redux";
import { UserLoginAction, UserLogoutAction } from "./userActions";

export type UserActions = UserLoginAction | UserLogoutAction;
export type AppDispatch = Dispatch<UserActions>;
