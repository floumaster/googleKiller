import { getQueryWords } from "./utils/getQueryWords.js";
import { getUniqueTokens } from "./utils/getUniqueTokens.js";
import { readFileContent } from "./utils/readFileContent.js";
import { argsList } from "./utils/readComandLine.js";
import { PATH_TO_FILENAMES_FILE, PATH_TO_INDEX_FILE } from "./const/const.js";

const queryWords = getQueryWords()
const normalizedQueryWord = getUniqueTokens(queryWords)[0]
const definedFileNamesOptionIndex = argsList.findIndex(arg => arg === '-n')
const definedFileNamesOption = (
    definedFileNamesOptionIndex !== argsList.length - 1 
    && definedFileNamesOptionIndex !== -1
    && argsList[definedFileNamesOptionIndex + 1]
) ? argsList[definedFileNamesOptionIndex + 1] : PATH_TO_FILENAMES_FILE
const filenames = readFileContent(definedFileNamesOption).split(' ')

const definedIndexFileOptionIndex = argsList.findIndex(arg => arg === '-i')
const definedIndexFileOption = (
    definedIndexFileOptionIndex !== argsList.length - 1 
    && definedIndexFileOptionIndex !== -1
    && argsList[definedIndexFileOptionIndex + 1]
) ? argsList[definedIndexFileOptionIndex + 1] : PATH_TO_INDEX_FILE
const indexContent = JSON.parse(readFileContent(definedIndexFileOption))

const queryWordFrequency = filenames.map((filename, id) => {
    return {
        filename,
        frequency: indexContent[normalizedQueryWord]?.freq[id] || 0
    }
})

const sortedQueryWordFrequency = queryWordFrequency.sort((a, b) => b.frequency - a.frequency)
sortedQueryWordFrequency.forEach(({ frequency, filename }) => console.log(`${frequency} ${filename}`))