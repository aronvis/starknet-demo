'use client'

import { useMemo } from 'react'
import {
    useAccount,
    useContract,
    useSendTransaction,
    useReadContract,
} from '@starknet-react/core'
import {
    toNumber,
    ContractAddress,
    ContractDecimals,
    ContractABI,
} from '@/services'
import { cairo, Uint256 } from 'starknet'

// Returns the wallet balance in number format
export function useGetWalletBalance() {
    // Hooks and global state
    const { address } = useAccount()
    const { data, isLoading, error } = useReadContract({
        abi: [
            {
                name: 'balance_of',
                type: 'function',
                inputs: [
                    {
                        name: 'account',
                        type: 'core::starknet::contract_address::ContractAddress',
                    },
                ],
                outputs: [
                    {
                        type: 'core::integer::u256',
                    },
                ],
                state_mutability: 'view',
            },
        ],
        functionName: 'balance_of',
        args: [address],
        address: ContractAddress,
        watch: true,
    })
    const balance = toNumber(data ?? 0, ContractDecimals)

    return { data: balance, isLoading, error }
}

export function useTransfer() {
    // Hooks and global state
    const { address } = useAccount()
    const { data, status, sendAsync } = useSendTransaction({})
    const { contract } = useContract({
        abi: ContractABI as any,
        address: ContractAddress,
    })

    async function tranfer(toAddress: string, amount: number) {
        if (!contract || !address || !toAddress || !amount) {
            throw new Error('Invalid transfer params')
        }

        const convertedAmount: Uint256 = cairo.uint256(
            amount * 10 ** ContractDecimals
        )
        await sendAsync([
            contract.populate('transfer', [address, convertedAmount]),
        ])
    }

    return { data, status, tranfer }
}
