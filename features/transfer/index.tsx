'use client'

import { useGetWalletBalance } from '@/hooks'
import { Button, TextField } from '@mui/material'
import styles from './transfer.module.css'

export function TransferScreen() {
    // Hooks and global state
    const { data: walletBalance } = useGetWalletBalance()

    // UI state
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
            <div id={styles.info}>
                <h2>Transfer Info</h2>
                <div className={styles.infoText}>Balance: {walletBalance}</div>
                <div className={styles.infoText}>Status {}</div>
                <div className={styles.infoText}>Hash: {}</div>
            </div>
        </div>
    )
}
