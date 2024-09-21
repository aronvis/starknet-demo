'use client'

import { ReactNode } from 'react'
import {
    InjectedConnector,
    publicProvider,
    StarknetConfig,
} from '@starknet-react/core'
import { WebWalletConnector } from 'starknetkit/webwallet'
import { sepolia, mainnet } from '@starknet-react/chains'
import { voyager } from '@starknet-react/core'

interface StarknetProviderProps {
    children: ReactNode
}

export function StarknetProvider({ children }: StarknetProviderProps) {
    // Hooks and local state
    const provider = publicProvider()
    const chains = [mainnet, sepolia]
    const connectors = [
        new InjectedConnector({ options: { id: 'argentX', name: 'Argent X' } }),
        new InjectedConnector({ options: { id: 'braavos', name: 'Braavos' } }),
        new WebWalletConnector({ url: 'https://web.argent.xyz' }),
    ]

    return (
        <StarknetConfig
            chains={chains}
            connectors={connectors}
            provider={provider}
            explorer={voyager}
        >
            {children}
        </StarknetConfig>
    )
}
