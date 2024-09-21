'use client'

import { useEffect, useState } from 'react'
import {
    useConnect,
    useDisconnect,
    useAccount,
    useNetwork,
    InjectedConnector,
} from '@starknet-react/core'
import Button from '@mui/material/Button'
import { shortenString } from '@/services/string'
import { useStarknetkitConnectModal } from 'starknetkit'

export function AuthButton() {
    // Hooks and global state
    const { connect } = useConnect()

    const { starknetkitConnectModal } = useStarknetkitConnectModal({
        dappName: 'Token Exchange',
        modalTheme: 'system',
    })

    const { disconnect } = useDisconnect()
    const { account, address } = useAccount()
    const { chain } = useNetwork()

    // Local state
    const [title, setTitle] = useState<string>('')

    useEffect(() => {
        updateTitle()
    }, [account])

    function updateTitle() {
        const adressString = shortenString(address ?? '')
        const buttonTitle = address ? adressString : 'Disconnect'
        setTitle(buttonTitle)
    }

    async function connectWallet() {
        const { connector } = await starknetkitConnectModal()
        if (connector) {
            connect({ connector })
        }
    }

    if (!account) {
        return (
            <Button variant="contained" onClick={() => connectWallet()}>
                {title}
            </Button>
        )
    }

    return (
        <Button variant="contained" onClick={() => disconnect()}>
            {title}
        </Button>
    )
}
