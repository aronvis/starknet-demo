'use client'

import { useAccount, useReadContract } from '@starknet-react/core'
import { toNumber, ContractAddress, ContractDecimals } from '@/services'

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
