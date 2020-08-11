import React, { ReactElement, useState } from "react";
import { useQuery } from "react-query";
import Card from "@components/Hearthstone/Card/Card";
import HSAPI from "@api/hearthstoneApi";
import styles from "./Profile.module.scss";

import { HSCards, Mana } from "@typings/hearthstone";
import ManaControl from "@components/Hearthstone/ManaControl/ManaControl";
import { useSelector } from "react-redux";
import { AppState } from "@redux/reducers";

type Error = {
  error: string;
};
export default function Profile(): ReactElement {
  const mana = useSelector<AppState, Mana>((state) => state.HSReducer.mana);
  const { isLoading, error, data: cards } = useQuery<HSCards, Error, [string, Mana]>(["cards", mana], () =>
    HSAPI.fetchCards(mana)
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{`An error has occured: ${error.error}`}</div>;
  return (
    <div className={styles.container}>
      <ManaControl />
      <div className={styles.cards}>
        {cards?.cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}
