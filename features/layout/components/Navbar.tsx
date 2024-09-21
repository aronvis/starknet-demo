import * as React from "react";
import Button from "@mui/material/Button";
import styles from "./Navbar.module.css";

export function Navbar() {
  return (
    <div id={styles.navbar}>
      <div>Dapp Token Transfer</div>
      <Button variant="contained">Sign In</Button>
    </div>
  );
}
