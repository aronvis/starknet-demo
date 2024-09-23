'use client'

import { useState } from 'react'
import { useGetWalletBalance, useTransfer } from '@/hooks'
import { Button, TextField } from '@mui/material'
import styles from './transfer.module.css'

export function TransferScreen() {
    // Hooks and global state
    const { data: walletBalance } = useGetWalletBalance()

    // Local state
    const [toAddress, setToAdress] = useState<string>('')
    const [amount, setAmount] = useState<string>('')
    const { data, status, sendAsync } = useTransfer(toAddress, Number(amount))

    // UI state
    return (
        <div id={styles.container}>
            <h2>Transfer</h2>
            <TextField
                label="Recipient Address"
                className={styles.textField}
                value={toAddress}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setToAdress(event.target.value)
                }}
            ></TextField>
            <TextField
                label="Amount"
                className={styles.textField}
                value={amount}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setAmount(event.target.value)
                }}
            ></TextField>
            <Button
                variant="contained"
                id={styles.button}
                size="large"
                onClick={() => sendAsync()}
            >
                Tranfer
            </Button>
            <div id={styles.info}>
                <h2>Transfer Info</h2>
                <div className={styles.infoText}>Balance: {walletBalance}</div>
                <div className={styles.infoText}>Status {status}</div>
                <div className={styles.infoText}>
                    Hash: {data?.transaction_hash}
                </div>
            </div>
        </div>
    )
}
