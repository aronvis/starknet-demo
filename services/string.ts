export function shortenString(content: string, chars = 5): string {
    if (!content || !content.length) return ''
    if (content.length < 12) {
        return content
    }
    const firstLetters = content.slice(0, chars)
    const lastLetters = content.slice(-chars)
    return `${firstLetters}...${lastLetters}`
}
