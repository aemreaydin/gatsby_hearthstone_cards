import { HSActions } from "@redux/actions";
import { HSState } from "@typings/hearthstone";

const initialState: HSState = {
  mana: 0,
};

export default function HSReducer(state = initialState, action: HSActions): HSState {
  switch (action.type) {
    case "UPDATE_MANA": {
      return { ...state, mana: action.payload };
    }
    default:
      return { ...state };
  }
}
