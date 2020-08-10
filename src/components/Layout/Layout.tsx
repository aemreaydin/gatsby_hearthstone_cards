import React, { PropsWithChildren } from "react";
import Navbar from "@components/Navbar/Navbar";
import * as styles from "./Layout.module.scss";

type Props = {
  className?: string;
};
export default function Layout({
  className,
  children,
}: PropsWithChildren<Props>): JSX.Element {
  return (
    <div className={`${styles.container} ${className}`}>
      <Navbar />
      <div className={styles.children}>{children}</div>
    </div>
  );
}
