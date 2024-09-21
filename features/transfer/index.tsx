import { Button, TextField } from "@mui/material";
import styles from "./layout.module.css";

export function TransferScreen() {
  return (
    <div>
      <div>Token Balence</div>
      <TextField></TextField>
      <TextField></TextField>
      <Button variant="contained">Tranfer</Button>
    </div>
  );
}
