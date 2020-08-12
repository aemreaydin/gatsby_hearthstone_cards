import React, { ReactElement } from "react";
import ManaButton from "../ManaButton/ManaButton";
import { Mana } from "@typings/hearthstone";
import { useDispatch, useSelector } from "react-redux";
import { HSDispatch } from "@redux/actions";
import { AppState } from "@redux/reducers";
import styles from "./ManaControl.module.scss";

const manaValues: Mana[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
export default function ManaControl(): ReactElement {
  const userMana = useSelector<AppState>((state) => state.HSReducer.mana);
  const dispatch = useDispatch<HSDispatch>();
  const onChangeMana = (mana: Mana) => {
    dispatch({ type: "UPDATE_MANA", payload: mana });
  };
  return (
    <div className={styles.container}>
      {manaValues.map((mana) => (
        <ManaButton key={mana} active={userMana === mana} onClick={() => onChangeMana(mana)}>
          {mana}
        </ManaButton>
      ))}
    </div>
  );
}
