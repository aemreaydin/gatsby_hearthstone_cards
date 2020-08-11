import { Mana } from "@typings/hearthstone";

export const UPDATE_MANA = "UPDATE_MANA";

export type UpdateManaAction = {
  type: typeof UPDATE_MANA;
  payload: Mana;
};
