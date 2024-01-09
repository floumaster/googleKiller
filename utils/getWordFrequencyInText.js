import { getNormalizedTokens } from "./getNormalizedTokens.js"

export const getWordFrequencyInText = (word, text) => {
    const normalizedTokensInText = getNormalizedTokens([text])
    return normalizedTokensInText.filter(token => token === word).length
}