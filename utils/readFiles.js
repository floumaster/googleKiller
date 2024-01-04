import { getFileNamesInFolder } from "./getFileNamesInFolder.js";
import { argsList } from "./readComandLine.js";
import { getFilesContents } from "./getFilesContents.js";
import { getDefaulFileNames } from "./getDefaultFileNames.js";

const isComandLineWithFolderName = argsList.length === 1 && argsList[0].includes('./')
const isCommandLineWithFileNames = argsList.length > 0 && !argsList[0].includes('./') && argsList.every(arg => arg.includes('.'))

export const readFiles = () => {
    if (isComandLineWithFolderName) {
        const folderToRead = argsList[0]
        const fileNamesToRead = getFileNamesInFolder(folderToRead)
        const filesContents = getFilesContents(fileNamesToRead, folderToRead)
        console.log(filesContents)
    } else if (isCommandLineWithFileNames) {
        const filesContents = getFilesContents(argsList)
        console.log(filesContents)
    } else {
        const filesContents = getDefaulFileNames()
        console.log(filesContents)
    }
}