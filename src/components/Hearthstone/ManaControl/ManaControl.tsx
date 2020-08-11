import React, { ReactElement } from "react";
import ManaButton from "../ManaButton/ManaButton";
import { Mana } from "@typings/hearthstone";
import { useDispatch } from "react-redux";
import { HSDispatch } from "@redux/actions";
import styles from "./ManaControl.module.scss";

const manaValues: Mana[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
export default function ManaControl(): ReactElement {
  const dispatch = useDispatch<HSDispatch>();
  const onChangeMana = (mana: Mana) => {
    dispatch({ type: "UPDATE_MANA", payload: mana });
  };
  return (
    <div className={styles.container}>
      {manaValues.map((mana) => (
        <ManaButton key={mana} mana={mana} onClick={() => onChangeMana(mana)} />
      ))}
    </div>
  );
}
