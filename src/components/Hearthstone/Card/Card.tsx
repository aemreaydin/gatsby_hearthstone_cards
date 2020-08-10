import React, { ReactElement } from "react";
import { HSCard } from "@typings/hearthstone";
import styles from "./Card.module.scss";
type Props = {
  card: HSCard;
};
export default function Card({ card }: Props): ReactElement {
  return (
    <div className={styles.container}>
      <img
        className={styles.card}
        src={card.image?.en_US}
        alt={card.name?.en_US}
      />
      <p>{card.name?.en_US}</p>
    </div>
  );
}
