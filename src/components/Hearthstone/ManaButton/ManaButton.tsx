import React, { ReactElement } from "react";
import styles from "./ManaButton.module.scss";
import { Mana } from "@typings/hearthstone";

type Props = {
  mana: Mana;
  onClick: (e: React.MouseEvent) => void;
};
export default function ManaButton({ mana, onClick }: Props): ReactElement {
  return (
    <button onClick={onClick} className={styles.button}>
      {mana}
    </button>
  );
}
