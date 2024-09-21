import * as React from "react";
import { AuthButton } from "@/components/button/AuthButton";
import styles from "./navbar.module.css";

export function Navbar() {
  return (
    <div id={styles.navbar}>
      <div>Token Transfer</div>
      <AuthButton></AuthButton>
    </div>
  );
}
