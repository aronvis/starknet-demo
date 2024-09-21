'use client'

import { useEffect, useState } from 'react'
import { InjectedConnector } from 'starknetkit/injected'
import { WebWalletConnector } from 'starknetkit/webwallet'
import { useStarknetkitConnectModal } from 'starknetkit'
import { useConnect, useDisconnect, useAccount } from '@starknet-react/core'
import Button from '@mui/material/Button'
import { shortenString } from '@/services/string'

export function AuthButton() {
    // Hooks and global state
    const { connect } = useConnect()
    const { disconnect } = useDisconnect()
    const { account, address } = useAccount()

    const { starknetkitConnectModal } = useStarknetkitConnectModal({
        connectors: [
            new InjectedConnector({
                options: { id: 'argentX', name: 'Argent X' },
            }),
            new InjectedConnector({
                options: { id: 'braavos', name: 'Braavos' },
            }),
            new WebWalletConnector({ url: 'https://web.argent.xyz' }),
        ],
        dappName: 'Token Transfer',
        modalTheme: 'dark',
    })

    // Local state
    const [title, setTitle] = useState<string>('Connect')

    useEffect(() => {
        updateTitle()
    }, [account])

    function updateTitle() {
        const adressString = shortenString(address ?? '')
        const buttonTitle = address ? adressString : 'Connect'
        setTitle(buttonTitle)
    }

    async function onClick() {
        // Disconnect wallet
        if (account) {
            disconnect()
            return
        }

        // Connect
        const { connector } = await starknetkitConnectModal()
        if (connector) {
            connect({ connector })
        }
    }

    return (
        <Button variant="contained" onClick={onClick}>
            {title}
        </Button>
    )
}
