import { readFileContent } from "./readFileContent.js";
import { getFilesContents } from "./getFilesContents.js";
import { PATH_TO_FILENAMES_FILE } from "../const/const.js";

export const getDefaulFileNames = () => {
    const fileNamesString = readFileContent(PATH_TO_FILENAMES_FILE)
    return getFilesContents(fileNamesString.split(' '))
}