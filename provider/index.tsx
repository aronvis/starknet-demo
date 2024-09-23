'use client'

import { ReactNode } from 'react'
import {
    InjectedConnector,
    publicProvider,
    StarknetConfig,
} from '@starknet-react/core'
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
