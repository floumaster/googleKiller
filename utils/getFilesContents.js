import { readFileContent } from "./readFileContent.js"
import { PATH_TO_ASSETS } from "../const/const.js"

export const getFilesContents = (fileNames, path = PATH_TO_ASSETS) => {
    const filesContents = []
    fileNames.forEach(filename => {
        const fileContent = readFileContent(`${path}/${filename}`)
        filesContents.push({
            filename,
            fileContent,
        })
    })
    return filesContents
}