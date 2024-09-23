'use client'

import { useState, useEffect, useMemo } from 'react'
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
import { TransferStatus } from '@/types'

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

export function useTransfer(toAddress: string, amount: number) {
    // Hooks and global state
    const { address } = useAccount()
    const { contract } = useContract({
        abi: ContractABI as any,
        address: ContractAddress,
    })

    const calls = useMemo(() => {
        if (!contract || !address || !toAddress || !amount) return []

        const convertedAmount: Uint256 = cairo.uint256(
            amount * 10 ** ContractDecimals
        )
        return contract.populateTransaction['transfer']!(
            toAddress,
            convertedAmount
        )
    }, [contract, address, toAddress, amount])

    const { data, isPending, isIdle, isSuccess, sendAsync } =
        useSendTransaction(calls)

    // Local state
    const [status, setStatus] = useState<TransferStatus>(TransferStatus.IDLE)

    useEffect(() => {
        updateStatus()
    }, [isIdle, isPending, isSuccess])

    function updateStatus() {
        const status = isSuccess
            ? TransferStatus.SUCCESS
            : isPending
            ? TransferStatus.PENDING
            : TransferStatus.IDLE

        setStatus(status)
    }

    return { data, status, sendAsync }
}
