import { combineReducers } from "redux";
import userReducer from "./userReducer";
import HSReducer from "./hsReducer";

const rootReducer = combineReducers({ userReducer, HSReducer });
export default rootReducer;
export type AppState = ReturnType<typeof rootReducer>;
