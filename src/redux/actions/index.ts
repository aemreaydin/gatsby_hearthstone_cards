import { Dispatch } from "redux";
import { UserLoginAction, UserLogoutAction } from "./userActions";
import { UpdateManaAction } from "./hsActions";

export type HSActions = UpdateManaAction;
export type HSDispatch = Dispatch<HSActions>;
export type UserActions = UserLoginAction | UserLogoutAction;
export type UserDispatch = Dispatch<UserActions>;

export type AppDispatch = HSDispatch & UserDispatch;
