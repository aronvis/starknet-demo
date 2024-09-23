// Converts a big int number into a regular number
export function toNumber(value: bigint, decimals: number): Number {
    const balance = String('0').repeat(decimals) + value.toString()
    const rightCleaned = balance.slice(-decimals).replace(/(\d)0+$/gm, '$1')
    const leftCleaned = BigInt(
        balance.slice(0, balance.length - decimals)
    ).toString()
    const balanceString = leftCleaned + '.' + rightCleaned
    return Number(balanceString)
}
