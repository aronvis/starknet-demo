"use client";

import { useState } from "react";
import Button from "@mui/material/Button";

export function AuthButton() {
  // Hooks and global state
  const [title, setTitle] = useState<string>("");

  return <Button variant="contained"></Button>;
}
