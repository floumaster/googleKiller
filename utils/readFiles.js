import { getFileNamesInFolder } from "./getFileNamesInFolder.js";
import { argsList } from "./readComandLine.js";
import { getFilesContents } from "./getFilesContents.js";
import { getDefaulFilesContents } from "./getDefaulFilesContents.js";
import { PATH_TO_FILENAMES_FILE } from "../const/const.js";

const isComandLineWithFolderName = argsList.length === 1 && argsList[0].includes('./')
const isCommandLineWithFileNames = argsList.length && !argsList[0].includes('./') && argsList.every(arg => arg.includes('.'))
const isCommandLineWithOptions = argsList.length > 1 && argsList.some(arg => arg.includes('./')) && argsList.includes('-n')

export const readFiles = () => {
    if (isComandLineWithFolderName) {
        const folderToRead = argsList[0]
        const fileNamesToRead = getFileNamesInFolder(folderToRead)
        return getFilesContents(fileNamesToRead, folderToRead)
    } else if (isCommandLineWithFileNames)
        return getFilesContents(argsList)
    else if (isCommandLineWithOptions) {
        const definedFileNamesOptionIndex = argsList.findIndex(arg => arg === '-n')
        const definedFileNamesOption = (
            definedFileNamesOptionIndex !== argsList.length - 1 
            && definedFileNamesOptionIndex !== -1
            && argsList[definedFileNamesOptionIndex + 1]
        ) ? argsList[definedFileNamesOptionIndex + 1] : PATH_TO_FILENAMES_FILE
        console.log(definedFileNamesOption)
        return getDefaulFilesContents(definedFileNamesOption) 

    } else
        return getDefaulFilesContents()
}