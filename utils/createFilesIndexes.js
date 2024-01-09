import { getWordFrequencyInText } from "./getWordFrequencyInText.js"

export const createFilesIndexes = (uniqueTokens, filesContents) => {
    const filesIndexes = {}
    let previousNode = null
    uniqueTokens.forEach((token, id) => {
        if(id === 0)
            filesIndexes.head = token
        else
            filesIndexes[previousNode].next = token
        const wordFrequencies = filesContents
        .map(file => getWordFrequencyInText(token, file.fileContent))
        filesIndexes[token] = {
            word: token,
            freq: wordFrequencies
        }
        previousNode = token
    })
    return filesIndexes
}