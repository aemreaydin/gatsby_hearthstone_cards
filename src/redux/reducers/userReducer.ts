import { UserInfo } from "@typings/user";
import { UserActions } from "@redux/actions";
import { USER_LOGIN } from "@redux/actions/userActions";
import { setUser } from "@gFirebase/authHelpers";

const initialState: UserInfo = {
  uid: "",
  email: null,
  emailVerified: false,
  displayName: null,
};
export default function rootReducer(
  state = initialState,
  action: UserActions
): UserInfo {
  switch (action.type) {
    case USER_LOGIN: {
      const { uid, email, emailVerified, displayName } = action.payload;
      setUser(action.payload);
      return { ...state, uid, email, emailVerified, displayName };
    }
    default:
      return state;
  }
}
