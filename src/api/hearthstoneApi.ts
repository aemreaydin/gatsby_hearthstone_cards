import { getToken } from "./bnetAuth";
import { HSCards } from "@typings/hearthstone";

export default class HSAPI {
  static async fetchCards(mana: number | undefined): Promise<HSCards> {
    const token = await getToken();
    const res = await fetch(
      `https://${process.env.BNET_REGION}.api.blizzard.com/hearthstone/cards?set=standard&manaCost=${mana}&pageSize=200`,
      {
        headers: [["Authorization", token]],
      }
    );
    return await res.json();
  }
}
