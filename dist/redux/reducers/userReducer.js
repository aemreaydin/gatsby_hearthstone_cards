import { USER_LOGIN } from "redux/actions/userActions";
const initialState = {
    uid: "",
    email: null,
    emailVerified: false,
    displayName: null,
};
export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case USER_LOGIN: {
            const { uid, email, emailVerified, displayName } = action.payload;
            return { ...state, uid, email, emailVerified, displayName };
        }
        default:
            return state;
    }
}
