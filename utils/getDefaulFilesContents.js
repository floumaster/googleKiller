import { readFileContent } from "./readFileContent.js";
import { getFilesContents } from "./getFilesContents.js";
import { PATH_TO_FILENAMES_FILE } from "../const/const.js";

export const getDefaulFilesContents = (filePath = PATH_TO_FILENAMES_FILE) => {
    const fileNamesString = readFileContent(filePath)
    return getFilesContents(fileNamesString.split(' '))
}