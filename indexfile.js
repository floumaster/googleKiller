import { readFiles } from "./utils/readFiles.js";
import { getUniqueTokens } from "./utils/getUniqueTokens.js";
import { createFilesIndexes } from "./utils/createFilesIndexes.js";
import { serializeFilesIndexes } from "./utils/serializeFilesIndexes.js";
import { saveFilesIndexes } from "./utils/saveFilesIndexes.js";

const filesContents = readFiles()
const uniqueWords = getUniqueTokens(filesContents.map(file => file.fileContent))
const filesIndexes = createFilesIndexes(uniqueWords, filesContents)
const serializedFilesIndexes = serializeFilesIndexes(filesIndexes)
saveFilesIndexes(serializedFilesIndexes)