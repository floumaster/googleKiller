import { getNormalizedTokens } from "./getNormalizedTokens.js"

export const getUniqueTokens = (filesContents) => {
    const normalizedTokens = getNormalizedTokens(filesContents)
    return [...new Set(normalizedTokens)]
}