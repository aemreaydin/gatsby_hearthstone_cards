import React, { useEffect, useState, ReactElement } from "react";
import { getToken } from "@api/bnetAuth";
import { HSCards } from "@typings/hearthstone";
import Card from "@components/Hearthstone/Card/Card";

import styles from "./Profile.module.scss";

export default function Profile(): ReactElement {
  const [cards, setCards] = useState<HSCards>();
  useEffect(() => {
    const doFetch = async () => {
      const accessToken = await getToken();
      const json = await fetch(
        "https://us.api.blizzard.com/hearthstone/cards?set=standard",
        {
          headers: [["Authorization", accessToken]],
        }
      ).then((res) => res.json());
      console.log(json);
      setCards(json);
    };

    doFetch();
  }, []);
  return (
    <div className={styles.container}>
      {cards?.cards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
}
