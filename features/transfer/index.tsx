import { Button, TextField } from "@mui/material";
import styles from "./transfer.module.css";

export function TransferScreen() {
  return (
    <div id={styles.container}>
      <h2>Transfer</h2>
      <TextField
        label="Recipient Address"
        className={styles.textField}
      ></TextField>
      <TextField label="Amount" className={styles.textField}></TextField>
      <Button variant="contained" id={styles.button} size="large">
        Tranfer
      </Button>
    </div>
  );
}
