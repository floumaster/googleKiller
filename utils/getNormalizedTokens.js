export const getNormalizedTokens = (filesContents) => {
    const normalizedTokens = filesContents
    .join(' ')
    .toLowerCase()
    .replace(/[^a-z 0-9]/g, '')
    .split(' ')
    return normalizedTokens
}